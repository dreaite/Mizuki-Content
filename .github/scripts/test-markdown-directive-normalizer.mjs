import assert from 'node:assert/strict';

import { normalizeDirectiveAttributeQuotes } from './markdown-directive-normalizer.mjs';

const cases = [
  {
    name: 'normalizes github card double smart quotes',
    input: '::github{repo=”dreaifeHebi/web3WalletLogin”}\n',
    expected: '::github{repo="dreaifeHebi/web3WalletLogin"}\n',
  },
  {
    name: 'normalizes future directive attributes generically',
    input: '::project-card{title=“Wallet Login” owner=‘dreaife’}\n',
    expected: '::project-card{title="Wallet Login" owner=\'dreaife\'}\n',
  },
  {
    name: 'supports container directives',
    input: ':::note{title=”Heads up”}\ncontent\n:::\n',
    expected: ':::note{title="Heads up"}\ncontent\n:::\n',
  },
  {
    name: 'does not touch inline text',
    input: 'Keep this literal ::github{repo=”example/repo”} inside a paragraph.\n',
    expected: 'Keep this literal ::github{repo=”example/repo”} inside a paragraph.\n',
  },
  {
    name: 'does not touch fenced code blocks',
    input: '```md\n::github{repo=”example/repo”}\n```\n::github{repo=”real/repo”}\n',
    expected: '```md\n::github{repo=”example/repo”}\n```\n::github{repo="real/repo"}\n',
  },
];

for (const testCase of cases) {
  assert.equal(normalizeDirectiveAttributeQuotes(testCase.input), testCase.expected, testCase.name);
}

console.log(`Passed ${cases.length} markdown directive normalizer test(s).`);
