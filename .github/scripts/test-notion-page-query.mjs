import assert from 'node:assert/strict';

import {
  assertCompleteNotionQueryResponse,
  buildFilterProperties,
  fetchAllPagesWithProjectionFallback,
  validateProjectedPages,
} from './notion-page-query.mjs';

const CONFIG = {
  titleProperty: 'Name',
  typeProperty: 'type',
  createTimeProperty: 'createTime',
  updatedDateProperty: 'date',
  updateTimeProperty: 'updateTime',
  summaryProperty: 'summary',
  slugProperty: 'slug',
  urlProperty: 'url',
  liveDemoProperty: 'liveDemo',
  techStackProperty: 'techStack',
  featuredProperty: 'featured',
  tagsProperty: 'tags',
  categoryProperty: 'category',
  statusProperty: 'status',
};

function projectedPage(id, overrides = {}) {
  return {
    id,
    last_edited_time: '2026-08-15T00:00:00.000Z',
    properties: {
      Name: { id: 'title', type: 'title', title: [] },
      type: { id: 'type', type: 'select', select: null },
      status: { id: 'status', type: 'status', status: null },
      slug: { id: 'slug', type: 'rich_text', rich_text: [] },
      ...overrides,
    },
  };
}

assert.deepEqual(buildFilterProperties(CONFIG), [
  'title',
  'Name',
  'type',
  'createTime',
  'date',
  'updateTime',
  'summary',
  'slug',
  'url',
  'liveDemo',
  'techStack',
  'featured',
  'tags',
  'category',
  'status',
]);
assert.deepEqual(
  buildFilterProperties({
    ...CONFIG,
    titleProperty: ' title ',
    typeProperty: 'shared',
    statusProperty: 'shared',
    slugProperty: '',
  }),
  [
    'title',
    'shared',
    'createTime',
    'date',
    'updateTime',
    'summary',
    'url',
    'liveDemo',
    'techStack',
    'featured',
    'tags',
    'category',
  ],
  'Projection properties must be trimmed and de-duplicated.'
);

assert.doesNotThrow(() => validateProjectedPages([], CONFIG));
const completeQueryResponse = { results: [], has_more: false };
assert.equal(assertCompleteNotionQueryResponse(completeQueryResponse), completeQueryResponse);
assert.throws(
  () =>
    assertCompleteNotionQueryResponse({
      request_status: {
        type: 'incomplete',
        incomplete_reason: 'query_result_limit_reached',
      },
    }),
  /incomplete result set \(query_result_limit_reached\)/
);
assert.doesNotThrow(() => validateProjectedPages([projectedPage('page-valid')], CONFIG));
assert.throws(
  () =>
    validateProjectedPages(
      [
        {
          id: 'page-case-mismatch',
          last_edited_time: '2026-08-15T00:00:00.000Z',
          properties: {
            Name: { id: 'title', type: 'title', title: [] },
            Type: { id: 'type', type: 'select', select: null },
            Status: { id: 'status', type: 'status', status: null },
            Slug: { id: 'slug', type: 'rich_text', rich_text: [] },
          },
        },
      ],
      CONFIG
    ),
  /page-case-mismatch.*type.*status.*slug/,
  'Validation must use the same exact property lookup as the sync consumer.'
);
assert.doesNotThrow(() =>
  validateProjectedPages(
    [
      {
        ...projectedPage('page-title-fallback'),
        properties: {
          ...projectedPage('page-title-fallback').properties,
          Name: { id: 'renamed-title', type: 'rich_text', rich_text: [] },
          OtherTitle: { id: 'title', type: 'title', title: [] },
        },
      },
    ],
    CONFIG
  )
);

assert.throws(
  () =>
    validateProjectedPages(
      [projectedPage('page-no-title', { Name: { type: 'rich_text' } })],
      CONFIG
    ),
  /page-no-title.*title-type/
);
for (const [propertyName, expectedLabel] of [
  ['type', 'type'],
  ['status', 'status'],
  ['slug', 'slug'],
]) {
  const page = projectedPage(`page-no-${propertyName}`);
  delete page.properties[propertyName];
  assert.throws(
    () => validateProjectedPages([page], CONFIG),
    new RegExp(`page-no-${propertyName}.*${expectedLabel}`)
  );
}
assert.throws(
  () => validateProjectedPages([projectedPage('page-null-status', { status: null })], CONFIG),
  /page-null-status.*status/
);

const projection = buildFilterProperties(CONFIG);
const validProjectedPages = [projectedPage('projected-valid')];
let fetchCalls = [];
let fallbackCalls = 0;
const directResult = await fetchAllPagesWithProjectionFallback({
  filterProperties: projection,
  fetchPages: async (receivedFilterProperties) => {
    fetchCalls.push(receivedFilterProperties);
    return validProjectedPages;
  },
  validate: (pages) => validateProjectedPages(pages, CONFIG),
  onFallback: () => {
    fallbackCalls += 1;
  },
});
assert.equal(directResult, validProjectedPages);
assert.deepEqual(fetchCalls, [projection]);
assert.equal(fallbackCalls, 0);

const invalidProjectedPages = [projectedPage('projected-missing-status')];
delete invalidProjectedPages[0].properties.status;
const validUnprojectedPages = [projectedPage('unprojected-valid')];
fetchCalls = [];
const fallbackErrors = [];
const fallbackResult = await fetchAllPagesWithProjectionFallback({
  filterProperties: projection,
  fetchPages: async (receivedFilterProperties) => {
    fetchCalls.push(receivedFilterProperties);
    return receivedFilterProperties ? invalidProjectedPages : validUnprojectedPages;
  },
  validate: (pages) => validateProjectedPages(pages, CONFIG),
  onFallback: async (error) => {
    fallbackErrors.push(error);
  },
});
assert.equal(fallbackResult, validUnprojectedPages);
assert.deepEqual(fetchCalls, [projection, undefined]);
assert.equal(fallbackErrors.length, 1);
assert.match(fallbackErrors[0].message, /projected-missing-status/);

fetchCalls = [];
fallbackCalls = 0;
const invalidUnprojectedPages = [projectedPage('unprojected-missing-slug')];
delete invalidUnprojectedPages[0].properties.slug;
await assert.rejects(
  fetchAllPagesWithProjectionFallback({
    filterProperties: projection,
    fetchPages: async (receivedFilterProperties) => {
      fetchCalls.push(receivedFilterProperties);
      return receivedFilterProperties ? invalidProjectedPages : invalidUnprojectedPages;
    },
    validate: (pages) => validateProjectedPages(pages, CONFIG),
    onFallback: () => {
      fallbackCalls += 1;
    },
  }),
  /unprojected-missing-slug/
);
assert.deepEqual(fetchCalls, [projection, undefined]);
assert.equal(fallbackCalls, 1, 'A second validation failure must not trigger another fallback.');

const paginationError = new Error('pagination failed after the first batch');
paginationError.partialPages = [projectedPage('partial-page')];
fetchCalls = [];
fallbackCalls = 0;
await assert.rejects(
  fetchAllPagesWithProjectionFallback({
    filterProperties: projection,
    fetchPages: async (receivedFilterProperties) => {
      fetchCalls.push(receivedFilterProperties);
      throw paginationError;
    },
    validate: (pages) => validateProjectedPages(pages, CONFIG),
    onFallback: () => {
      fallbackCalls += 1;
    },
  }),
  (error) => error === paginationError
);
assert.deepEqual(fetchCalls, [projection]);
assert.equal(fallbackCalls, 0, 'Pagination/network errors must not trigger an unprojected retry.');

const fallbackNetworkError = new Error('unprojected fetch failed');
fetchCalls = [];
fallbackCalls = 0;
await assert.rejects(
  fetchAllPagesWithProjectionFallback({
    filterProperties: projection,
    fetchPages: async (receivedFilterProperties) => {
      fetchCalls.push(receivedFilterProperties);
      if (receivedFilterProperties) return invalidProjectedPages;
      throw fallbackNetworkError;
    },
    validate: (pages) => validateProjectedPages(pages, CONFIG),
    onFallback: () => {
      fallbackCalls += 1;
    },
  }),
  (error) => error === fallbackNetworkError
);
assert.deepEqual(fetchCalls, [projection, undefined]);
assert.equal(fallbackCalls, 1);

console.log('notion projected page query checks passed');
