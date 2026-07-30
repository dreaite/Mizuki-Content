import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

async function readSnapshot(filePath) {
  try {
    return {
      exists: true,
      content: await fs.readFile(filePath, 'utf8'),
    };
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return { exists: false, content: '' };
    }
    throw error;
  }
}

async function writeFileAtomically(filePath, content) {
  const directory = path.dirname(filePath);
  const tempPath = path.join(
    directory,
    `.${path.basename(filePath)}.${process.pid}.${crypto.randomUUID()}.tmp`
  );
  await fs.mkdir(directory, { recursive: true });

  try {
    await fs.writeFile(tempPath, content, 'utf8');
    await fs.rename(tempPath, filePath);
  } finally {
    await fs.rm(tempPath, { force: true }).catch(() => undefined);
  }
}

async function restoreSnapshot(filePath, snapshot) {
  if (snapshot.exists) {
    await writeFileAtomically(filePath, snapshot.content);
    return;
  }
  await fs.rm(filePath, { force: true });
}

export async function writeDataFilesWithRollback(
  writes,
  { beforeWrite } = {}
) {
  const seenPaths = new Set();
  for (const write of writes) {
    if (
      !write?.filePath ||
      (typeof write.content !== 'string' && write.content !== null)
    ) {
      throw new Error(
        'Every data write must contain filePath and string or null content.'
      );
    }
    if (seenPaths.has(write.filePath)) {
      throw new Error(`Duplicate data write path: ${write.filePath}`);
    }
    seenPaths.add(write.filePath);
  }

  const snapshots = await Promise.all(
    writes.map((write) => readSnapshot(write.filePath))
  );
  const results = [];
  const changedIndexes = [];

  try {
    for (let index = 0; index < writes.length; index += 1) {
      const write = writes[index];
      const snapshot = snapshots[index];
      if (
        (snapshot.exists && snapshot.content === write.content) ||
        (!snapshot.exists && write.content === null)
      ) {
        results.push({
          filePath: write.filePath,
          existed: snapshot.exists,
          result: 'unchanged',
        });
        continue;
      }

      if (beforeWrite) {
        await beforeWrite(write, index);
      }
      if (write.content === null) {
        await fs.rm(write.filePath, { force: true });
      } else {
        await writeFileAtomically(write.filePath, write.content);
      }
      changedIndexes.push(index);
      results.push({
        filePath: write.filePath,
        existed: snapshot.exists,
        result:
          write.content === null
            ? 'deleted'
            : snapshot.exists
              ? 'updated'
              : 'created',
      });
    }
  } catch (error) {
    const rollbackErrors = [];
    for (const index of [...changedIndexes].reverse()) {
      try {
        await restoreSnapshot(writes[index].filePath, snapshots[index]);
      } catch (rollbackError) {
        rollbackErrors.push(rollbackError);
      }
    }

    if (rollbackErrors.length > 0) {
      throw new AggregateError(
        [error, ...rollbackErrors],
        `Data write failed and ${rollbackErrors.length} rollback operation(s) also failed.`
      );
    }
    throw error;
  }

  return results;
}
