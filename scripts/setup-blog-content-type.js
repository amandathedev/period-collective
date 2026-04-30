#!/usr/bin/env node
// Idempotently creates the `blogPost` content type and a smoke-test entry in
// the Contentful master environment.
//
// Reads CONTENTFUL_MANAGEMENT_TOKEN and REACT_APP_CONTENTFUL_SPACE_ID from
// process.env, falling back to the repo-root .env file. No secrets here.

const fs = require('fs');
const path = require('path');
const contentfulManagement = require('contentful-management');

function loadDotenv() {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  for (const raw of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotenv();

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const CMA_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENV_ID = 'master';
const CT_ID = 'blogPost';
const LOCALE = 'en-US';

if (!SPACE_ID) {
  console.error('Missing REACT_APP_CONTENTFUL_SPACE_ID (set in env or .env).');
  process.exit(1);
}
if (!CMA_TOKEN) {
  console.error('Missing CONTENTFUL_MANAGEMENT_TOKEN (set in env or .env).');
  process.exit(1);
}

const FIELDS = [
  { id: 'title', name: 'Title', type: 'Symbol', required: true, localized: false },
  {
    id: 'slug',
    name: 'Slug',
    type: 'Symbol',
    required: true,
    localized: false,
    validations: [
      { regexp: { pattern: '^[a-z0-9](-?[a-z0-9])*$' } },
      { unique: true },
    ],
  },
  { id: 'publishDate', name: 'Publish date', type: 'Date', required: true, localized: false },
  {
    id: 'heroImage',
    name: 'Hero image',
    type: 'Link',
    linkType: 'Asset',
    required: false,
    localized: false,
    validations: [{ linkMimetypeGroup: ['image'] }],
  },
  { id: 'excerpt', name: 'Excerpt', type: 'Text', required: false, localized: false },
  {
    id: 'body',
    name: 'Body',
    type: 'RichText',
    required: true,
    localized: false,
    validations: [
      {
        enabledNodeTypes: [
          'heading-2',
          'heading-3',
          'heading-4',
          'unordered-list',
          'ordered-list',
          'blockquote',
          'hyperlink',
          'embedded-asset-block',
        ],
      },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    type: 'Array',
    required: false,
    localized: false,
    items: { type: 'Symbol', validations: [] },
  },
];

function summarize(ct) {
  return {
    id: ct.sys.id,
    name: ct.name,
    description: ct.description,
    displayField: ct.displayField,
    fields: ct.fields.map((f) => ({
      id: f.id,
      name: f.name,
      type: f.type,
      linkType: f.linkType,
      items: f.items,
      required: f.required,
      validations: f.validations,
    })),
  };
}

async function main() {
  const client = contentfulManagement.createClient({ accessToken: CMA_TOKEN });
  const space = await client.getSpace(SPACE_ID);
  const env = await space.getEnvironment(ENV_ID);

  let existing = null;
  try {
    existing = await env.getContentType(CT_ID);
  } catch (err) {
    if (err.name !== 'NotFound' && err.status !== 404) throw err;
  }

  let ct;
  if (existing) {
    const existingEntries = await env.getEntries({ content_type: CT_ID, limit: 1 });
    if (existingEntries.total > 0) {
      console.log(
        `Content type "${CT_ID}" already exists with ${existingEntries.total} entries — refusing to modify schema. Current schema:`,
      );
      console.log(JSON.stringify(summarize(existing), null, 2));
      return;
    }
    console.log(`Content type "${CT_ID}" exists with 0 entries — reconciling fields to spec...`);
    existing.name = 'Blog Post';
    existing.description = 'A blog post for the public-facing site';
    existing.displayField = 'title';
    existing.fields = FIELDS;
    ct = await existing.update();
    ct = await ct.publish();
    console.log(`Updated and published content type "${CT_ID}".`);
  } else {
    console.log(`Creating content type "${CT_ID}"...`);
    ct = await env.createContentTypeWithId(CT_ID, {
      name: 'Blog Post',
      description: 'A blog post for the public-facing site',
      displayField: 'title',
      fields: FIELDS,
    });
    ct = await ct.publish();
    console.log(`Published content type "${CT_ID}".`);
  }

  const fresh = await env.getContentType(CT_ID);
  const expected = ['title', 'slug', 'publishDate', 'heroImage', 'excerpt', 'body', 'tags'];
  for (const id of expected) {
    if (!fresh.fields.find((f) => f.id === id)) {
      throw new Error(`Verification failed: field "${id}" missing.`);
    }
  }
  console.log('Verified all 7 fields:');
  console.log(JSON.stringify(summarize(fresh), null, 2));

  const existingTest = await env.getEntries({
    content_type: CT_ID,
    'fields.slug': 'hello-from-claude-code',
    limit: 1,
  });
  if (existingTest.total > 0) {
    const e = existingTest.items[0];
    console.log(`Test entry already exists (${e.sys.id}); skipping creation.`);
    console.log('');
    console.log('Open in Contentful web app:');
    console.log(
      `  https://app.contentful.com/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${e.sys.id}`,
    );
    return;
  }

  console.log('Creating test entry...');
  const entry = await env.createEntry(CT_ID, {
    fields: {
      title: { [LOCALE]: 'Hello from Claude Code' },
      slug: { [LOCALE]: 'hello-from-claude-code' },
      publishDate: { [LOCALE]: new Date().toISOString() },
      excerpt: { [LOCALE]: 'A test entry created by setup-blog-content-type.js.' },
      body: {
        [LOCALE]: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Hello from Claude Code — this is a test post.',
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      },
      tags: { [LOCALE]: ['test'] },
    },
  });
  const published = await entry.publish();
  console.log(`Published test entry ${published.sys.id}.`);

  console.log('');
  console.log('Open in Contentful web app:');
  console.log(
    `  https://app.contentful.com/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${published.sys.id}`,
  );
  console.log('');
  console.log('Public delivery URL pattern:');
  console.log(
    `  https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${published.sys.id}?access_token=$REACT_APP_CONTENTFUL_ACCESS_TOKEN`,
  );
}

main().catch((err) => {
  console.error('Setup failed:', err.message);
  if (err.details) console.error(JSON.stringify(err.details, null, 2));
  process.exit(1);
});
