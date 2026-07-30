import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { writeDataFilesWithRollback } from './notion-data-write.mjs';

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'notion-data-write-test-'));
const paths = ['friends.ts', 'diary.ts', 'projects.ts', 'cache.json'].map((name) =>
  path.join(tempDir, name)
);

try {
  await Promise.all(
    paths.slice(0, 3).map((filePath, index) =>
      fs.writeFile(filePath, `original-${index}\n`, 'utf8')
    )
  );

  await assert.rejects(
    writeDataFilesWithRollback(
      paths.map((filePath, index) => ({
        filePath,
        content: `updated-${index}\n`,
      })),
      {
        beforeWrite: (_write, index) => {
          if (index === 3) {
            throw new Error('simulated cache write failure');
          }
        },
      }
    ),
    /simulated cache write failure/
  );

  for (let index = 0; index < 3; index += 1) {
    assert.equal(
      await fs.readFile(paths[index], 'utf8'),
      `original-${index}\n`
    );
  }
  await assert.rejects(fs.access(paths[3]), { code: 'ENOENT' });

  const results = await writeDataFilesWithRollback(
    paths.map((filePath, index) => ({
      filePath,
      content: `updated-${index}\n`,
    }))
  );
  assert.deepEqual(
    results.map((result) => result.result),
    ['updated', 'updated', 'updated', 'created']
  );

  const [deleteResult] = await writeDataFilesWithRollback([
    { filePath: paths[3], content: null },
  ]);
  assert.equal(deleteResult.result, 'deleted');
  await assert.rejects(fs.access(paths[3]), { code: 'ENOENT' });
} finally {
  await fs.rm(tempDir, { recursive: true, force: true });
}

console.log('notion data write rollback checks passed');
