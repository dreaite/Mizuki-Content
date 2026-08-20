import assert from 'node:assert/strict';
import fs from 'node:fs';

import {
  normalizeNotionMathSyntax,
  normalizeNotionMarkdownDocument,
  normalizeNotionMarkdownForCommonMark,
} from './notion-markdown-normalizer.mjs';

const notionBlocks = [
  '第一段',
  '第二段',
  '第三段第一行<br>第三段第二行',
  '# 标题',
  '- 项目一',
  '- 项目二',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(notionBlocks),
  [
    '第一段',
    '第二段',
    '第三段第一行<br>第三段第二行',
    '# 标题',
    '- 项目一\n- 项目二',
  ].join('\n\n'),
  'Notion blocks must become CommonMark blocks while Shift+Enter remains a br tag.'
);

assert.equal(
  normalizeNotionMathSyntax('坐标为 $`x, y \\in \\mathbb{F}_p`$，普通代码为 `x`。'),
  '坐标为 $x, y \\in \\mathbb{F}_p$，普通代码为 `x`。',
  'Notion code spans inside inline math delimiters must be removed.'
);
assert.equal(
  normalizeNotionMathSyntax("$`I = \\text{``Bitcoin seed''}`$"),
  "$I = \\text{``Bitcoin seed''}$",
  'Backticks inside a TeX expression must not terminate the outer Notion code span.'
);
assert.equal(
  normalizeNotionMathSyntax([
    '$$',
    '\\begin{align}',
    'dG &= first \\\\',
    '   &= second',
    '\\end{align}',
    '$$',
  ].join('\n')),
  [
    '$$',
    '\\begin{aligned}',
    'dG &= first \\\\',
    '   &= second',
    '\\end{aligned}',
    '$$',
  ].join('\n'),
  'KaTeX display math must use aligned rather than align.'
);
assert.equal(
  normalizeNotionMathSyntax([
    '$$',
    'x_3 \\equiv first',
    '\\\\y_3 \\equiv second',
    '$$',
  ].join('\n')),
  [
    '$$',
    '\\begin{aligned}',
    'x_3 \\equiv first \\\\',
    'y_3 \\equiv second',
    '\\end{aligned}',
    '$$',
  ].join('\n'),
  'A leading display-math row break must become an aligned row separator.'
);
assert.equal(
  normalizeNotionMathSyntax([
    '\t\t$$',
    '\t\t\\begin{align}',
    'dG &= first \\\\',
    '   &= second',
    '\\end{align}',
    '\t\t$$',
  ].join('\n')),
  [
    '\t\t$$',
    '\t\t\\begin{aligned}',
    '\t\tdG &= first \\\\',
    '\t\t   &= second',
    '\t\t\\end{aligned}',
    '\t\t$$',
  ].join('\n'),
  'Nested display-math content must inherit the delimiter indentation.'
);
assert.equal(
  normalizeNotionMathSyntax([
    '```md',
    '$`literal`$',
    '\\begin{align}',
    '```',
  ].join('\n')),
  [
    '```md',
    '$`literal`$',
    '\\begin{align}',
    '```',
  ].join('\n'),
  'Math-looking text inside fenced code must stay unchanged.'
);

const fencedCode = [
  '代码如下：',
  '```ts',
  'const first = 1;',
  'const second = 2;',
  '',
  'console.log(first + second);',
  '```',
  '代码结束。',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(fencedCode),
  [
    '代码如下：',
    '',
    '```ts',
    'const first = 1;',
    'const second = 2;',
    '',
    'console.log(first + second);',
    '```',
    '',
    '代码结束。',
  ].join('\n'),
  'Fenced code content must stay byte-for-byte grouped.'
);

const syncedBlock = [
  '<synced_block url="https://notion.example/block">',
  '\t# 项目介绍',
  '\t第一段',
  '\t第二段',
  '\t- 列表项',
  '\t\t```shell',
  'echo hello',
  '\t\t```',
  '\t<empty-block/>',
  '</synced_block>',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(syncedBlock),
  [
    '# 项目介绍',
    '第一段',
    '第二段',
    '- 列表项',
    '\t```shell\n\techo hello\n\t```',
  ].join('\n\n'),
  'Synced block wrappers must be removed and their children dedented.'
);

const detailsBlock = [
  '<details>',
  '<summary>展开</summary>',
  '\t说明文字',
  '\t- 子项目',
  '</details>',
  '后续段落',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(detailsBlock),
  [
    '<details>',
    '<summary>展开</summary>',
    '',
    '说明文字',
    '',
    '- 子项目',
    '',
    '</details>',
    '',
    '后续段落',
  ].join('\n'),
  'Details children must remain inside the HTML container and render as Markdown.'
);

const tableBlock = [
  '表格如下：',
  '<table>',
  '<tr>',
  '<td>A</td>',
  '<td>B</td>',
  '</tr>',
  '</table>',
  '表格结束。',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(tableBlock),
  [
    '表格如下：',
    '',
    '<table>\n<tr>\n<td>A</td>\n<td>B</td>\n</tr>\n</table>',
    '',
    '表格结束。',
  ].join('\n'),
  'Raw HTML tables must remain one contiguous block.'
);

const pipeTable = [
  '表格如下：',
  '| Name | Value |',
  '| --- | --- |',
  '| first | 1 |',
  '| second | 2 |',
  '表格结束。',
].join('\n');

assert.equal(
  normalizeNotionMarkdownForCommonMark(pipeTable),
  [
    '表格如下：',
    '',
    '| Name | Value |\n| --- | --- |\n| first | 1 |\n| second | 2 |',
    '',
    '表格结束。',
  ].join('\n'),
  'GFM pipe tables must remain contiguous.'
);

const document = [
  '---',
  "title: 'Example'",
  '---',
  '第一段',
  '第二段',
  '',
].join('\n');
const normalizedDocument = [
  '---',
  "title: 'Example'",
  '---',
  '',
  '第一段',
  '',
  '第二段',
  '',
].join('\n');

assert.equal(normalizeNotionMarkdownDocument(document), normalizedDocument);
assert.equal(
  normalizeNotionMarkdownDocument(normalizedDocument),
  normalizedDocument,
  'Normalization must be idempotent.'
);

const syncSource = fs.readFileSync(
  new URL('./sync-notion-posts.mjs', import.meta.url),
  'utf8'
);
assert.match(
  syncSource,
  /normalizeDirectiveAttributeQuotes\(\s*normalizeNotionMarkdownForCommonMark\(markdown\)\s*\)/,
  'Official Notion Markdown must be normalized before directive cleanup.'
);
assert.match(
  syncSource,
  /normalizedKind === 'post'[\s\S]*?NOTION_POST_RENDER_REVISION[\s\S]*?: NOTION_SYNC_RENDER_REVISION/,
  'Only Post output should move to the CommonMark renderer revision.'
);

const syncIndex = JSON.parse(
  fs.readFileSync(new URL('../notion-sync-index.json', import.meta.url), 'utf8')
);
for (const entry of Object.values(syncIndex.pages || {})) {
  const expectedPrefix = entry.kind === 'post'
    ? 'notion-sync-index-v2|'
    : 'notion-sync-index-v1|';
  assert.ok(
    String(entry.renderRevision || '').startsWith(expectedPrefix),
    `${entry.kind} index entry must use ${expectedPrefix}`
  );
}

console.log('notion markdown normalizer checks passed');
