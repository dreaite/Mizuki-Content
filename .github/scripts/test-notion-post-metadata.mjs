import assert from 'node:assert/strict';

import {
  extractFrontMatterField,
  resolvePostDescription,
} from './notion-post-metadata.mjs';

const existingPost = `---
title: 'Existing post'
description: 'Hand-written SEO description with an author''s wording.'
---

Post body.
`;

assert.equal(
  extractFrontMatterField(existingPost, 'description'),
  "Hand-written SEO description with an author's wording."
);
assert.equal(
  resolvePostDescription({
    generatedDescription: 'Newly generated summary that should not replace the SEO copy.',
    existingMarkdown: existingPost,
  }),
  "Hand-written SEO description with an author's wording."
);
assert.equal(
  resolvePostDescription({
    generatedDescription: 'Newly generated summary that should replace the SEO copy.',
    existingMarkdown: existingPost,
    preserveExisting: false,
  }),
  'Newly generated summary that should replace the SEO copy.'
);
assert.equal(
  resolvePostDescription({
    generatedDescription: '  New post summary\nwith normalized whitespace.  ',
    existingMarkdown: `---\ntitle: 'New post'\n---\n`,
  }),
  'New post summary with normalized whitespace.'
);

console.log('notion post metadata checks passed');
