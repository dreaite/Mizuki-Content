import assert from 'node:assert/strict';

import {
  buildProjectItems,
  parseDiaryDataTs,
  renderDiaryDataTs,
  renderFriendsDataTs,
  renderProjectsDataTs,
} from './notion-ts-data-sync.mjs';

const [project] = buildProjectItems([
  {
    pageId: 'page-1',
    title: '项目',
    description: '中文',
    image: '',
    category: 'web',
    techStack: ['Astro'],
    statusValue: 'completed',
    projectStartDate: '2026-01-01',
  },
]);
assert.equal(project._translationKey, 'project:page-1');

const projectFile = renderProjectsDataTs(
  'export const projectsData: Project[] = [];\n',
  [
    {
      ...project,
      lang: 'zh_CN',
      translations: {
        en: { title: 'Project', description: 'English' },
      },
    },
  ]
);
assert.match(projectFile, /lang: "zh_CN"/);
assert.match(projectFile, /"en": \{/);
assert.match(projectFile, /title: "Project"/);
assert.doesNotMatch(projectFile, /_translationKey/);

const diaryFile = renderDiaryDataTs(
  'const diaryData: DiaryItem[] = [];\n',
  [
    {
      id: 1,
      content: '中文',
      lang: 'zh_CN',
      translations: { ja: { content: '日本語' } },
      date: '2026-01-01T00:00:00.000Z',
    },
  ]
);
assert.match(diaryFile, /"ja": \{/);
assert.match(diaryFile, /content: "日本語"/);
assert.deepEqual(parseDiaryDataTs(diaryFile), [
  {
    id: 1,
    content: '中文',
    lang: 'zh_CN',
    translations: { ja: { content: '日本語' } },
    date: '2026-01-01T00:00:00.000Z',
  },
]);

const specialDiaryFile = renderDiaryDataTs(diaryFile, [
  {
    id: 1,
    content: 'literal ]; cost $1, match $&, and keep , } text',
    lang: 'zh_CN',
    translations: {
      en: { content: 'translated ]; cost $1 and match $&' },
    },
    date: '2026-01-01T00:00:00.000Z',
  },
]);
assert.match(specialDiaryFile, /content: "literal \]; cost \$1, match \$&, and keep , } text"/);
assert.match(specialDiaryFile, /content: "translated \]; cost \$1 and match \$&"/);
assert.equal((specialDiaryFile.match(/const diaryData:/g) || []).length, 1);
assert.equal(
  renderDiaryDataTs(specialDiaryFile, [
    {
      id: 1,
      content: 'literal ]; cost $1, match $&, and keep , } text',
      lang: 'zh_CN',
      translations: {
        en: { content: 'translated ]; cost $1 and match $&' },
      },
      date: '2026-01-01T00:00:00.000Z',
    },
  ]),
  specialDiaryFile
);
assert.equal(
  parseDiaryDataTs(specialDiaryFile)[0].content,
  'literal ]; cost $1, match $&, and keep , } text'
);
assert.throws(
  () => parseDiaryDataTs('const diaryData: DiaryItem[] = [{ content: nope }];'),
  /Failed to parse generated Diary data/
);

const friendFile = renderFriendsDataTs(
  'export const friendsData: FriendItem[] = [];\n',
  [{ id: 1, title: '友链', imgurl: '', desc: '描述', siteurl: 'https://example.com', tags: [] }]
);
assert.doesNotMatch(friendFile, /translations|lang:/);

console.log('notion TS data sync checks passed');
