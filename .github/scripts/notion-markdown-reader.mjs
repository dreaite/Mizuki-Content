const DEFAULT_CONCURRENCY = 2;
const DEFAULT_MIN_START_INTERVAL_MS = 350;

const defaultSleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

function requireFunction(value, name) {
  if (typeof value !== 'function') {
    throw new TypeError(`${name} must be a function.`);
  }
  return value;
}

function normalizeConcurrency(value) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new RangeError('concurrency must be a positive integer.');
  }
  return parsed;
}

function normalizeInterval(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new RangeError('minStartIntervalMs must be a non-negative finite number.');
  }
  return parsed;
}

function readClock(now) {
  const value = Number(now());
  if (!Number.isFinite(value)) {
    throw new TypeError('now() must return a finite number.');
  }
  return value;
}

class PacedConcurrencyScheduler {
  #active = 0;
  #concurrency;
  #minStartIntervalMs;
  #nextStartAt = Number.NEGATIVE_INFINITY;
  #now;
  #paceTail = Promise.resolve();
  #queue = [];
  #sleep;

  constructor({ concurrency, minStartIntervalMs, sleep, now }) {
    this.#concurrency = normalizeConcurrency(concurrency);
    this.#minStartIntervalMs = normalizeInterval(minStartIntervalMs);
    this.#sleep = requireFunction(sleep, 'sleep');
    this.#now = requireFunction(now, 'now');
  }

  async run(task) {
    requireFunction(task, 'task');
    await this.#acquire();

    try {
      const { result } = await this.#startTask(task);
      return await result;
    } finally {
      this.#release();
    }
  }

  #acquire() {
    if (this.#active < this.#concurrency) {
      this.#active += 1;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      this.#queue.push(resolve);
    });
  }

  #release() {
    const next = this.#queue.shift();
    if (next) {
      // Transfer the released slot directly to the next waiter. The active
      // count therefore remains unchanged until the queue is empty.
      next();
      return;
    }
    this.#active -= 1;
  }

  async #startTask(task) {
    let releasePace;
    const previousStart = this.#paceTail;
    this.#paceTail = new Promise((resolve) => {
      releasePace = resolve;
    });

    await previousStart;
    try {
      const currentTime = readClock(this.#now);
      const waitMs = Math.max(0, this.#nextStartAt - currentTime);
      if (waitMs > 0) {
        await this.#sleep(waitMs);
      }

      const actualStartTime = readClock(this.#now);
      this.#nextStartAt =
        Math.max(this.#nextStartAt, actualStartTime) + this.#minStartIntervalMs;
      // Invoke the task before releasing the pace gate. Returning it inside an
      // object prevents this async method from awaiting the task itself.
      return { result: task() };
    } finally {
      releasePace();
    }
  }
}

export function extractCompleteNotionMarkdown(response, pageId = '') {
  const pageLabel = pageId ? ` for page ${pageId}` : '';
  if (response?.object !== 'page_markdown' || typeof response.markdown !== 'string') {
    throw new Error(`Notion returned an invalid Markdown response${pageLabel}.`);
  }
  if (response.truncated !== false) {
    throw new Error(`Notion returned truncated Markdown${pageLabel}.`);
  }
  if (!Array.isArray(response.unknown_block_ids)) {
    throw new Error(`Notion omitted unknown_block_ids${pageLabel}.`);
  }
  if (response.unknown_block_ids.length > 0 || /<unknown\b/i.test(response.markdown)) {
    throw new Error(`Notion returned unknown blocks in Markdown${pageLabel}.`);
  }
  return response.markdown;
}

export class NotionMarkdownReader {
  #retrieveMarkdown;
  #scheduler;
  #stats = {
    official: 0,
  };

  constructor({
    officialClient,
    concurrency = DEFAULT_CONCURRENCY,
    minStartIntervalMs = DEFAULT_MIN_START_INTERVAL_MS,
    sleep = defaultSleep,
    now = Date.now,
  } = {}) {
    const pages = officialClient?.pages;
    this.#retrieveMarkdown = requireFunction(
      pages?.retrieveMarkdown?.bind(pages),
      'officialClient.pages.retrieveMarkdown'
    );
    this.#scheduler = new PacedConcurrencyScheduler({
      concurrency,
      minStartIntervalMs,
      sleep,
      now,
    });
  }

  get stats() {
    return this.getStats();
  }

  getStats() {
    return { ...this.#stats };
  }

  async readPage(pageId) {
    this.#stats.official += 1;
    const response = await this.#scheduler.run(() =>
      this.#retrieveMarkdown({ page_id: pageId })
    );
    return extractCompleteNotionMarkdown(response, pageId);
  }

  read(pageId) {
    return this.readPage(pageId);
  }

  readMany(pageIds) {
    if (!Array.isArray(pageIds)) {
      throw new TypeError('pageIds must be an array.');
    }
    return Promise.all(pageIds.map((pageId) => this.readPage(pageId)));
  }
}

export function createNotionMarkdownReader(options) {
  return new NotionMarkdownReader(options);
}

export function createBoundedOrderedPrefetch({
  items,
  concurrency = DEFAULT_CONCURRENCY,
  getKey = (item) => item,
  load,
} = {}) {
  const normalizedConcurrency = normalizeConcurrency(concurrency);
  requireFunction(getKey, 'getKey');
  requireFunction(load, 'load');

  const queue = Array.from(items ?? []);
  const keys = queue.map((item) => String(getKey(item)));
  if (new Set(keys).size !== keys.length) {
    throw new Error('Bounded prefetch items must have unique keys.');
  }

  const pending = new Map();
  let nextIndex = 0;

  function fill() {
    while (pending.size < normalizedConcurrency && nextIndex < queue.length) {
      const item = queue[nextIndex];
      const key = keys[nextIndex];
      nextIndex += 1;
      const settled = Promise.resolve()
        .then(() => load(item))
        .then(
          (value) => ({ ok: true, value }),
          (error) => ({ ok: false, error })
        );
      pending.set(key, settled);
    }
  }

  fill();

  return {
    async take(keyValue) {
      fill();
      const key = String(keyValue);
      const settled = pending.get(key);
      if (!settled) {
        throw new Error(`Bounded prefetch order mismatch for key: ${key}`);
      }

      const result = await settled;
      pending.delete(key);
      if (!result.ok) throw result.error;
      return result.value;
    },
  };
}

export function createPacedFetch({
  fetchImpl = globalThis.fetch?.bind(globalThis),
  minStartIntervalMs = DEFAULT_MIN_START_INTERVAL_MS,
  sleep = defaultSleep,
  now = Date.now,
} = {}) {
  requireFunction(fetchImpl, 'fetchImpl');
  const scheduler = new PacedConcurrencyScheduler({
    concurrency: Number.MAX_SAFE_INTEGER,
    minStartIntervalMs,
    sleep,
    now,
  });

  return (...args) => scheduler.run(() => fetchImpl(...args));
}

export const NOTION_MARKDOWN_READER_DEFAULTS = Object.freeze({
  concurrency: DEFAULT_CONCURRENCY,
  minStartIntervalMs: DEFAULT_MIN_START_INTERVAL_MS,
});
