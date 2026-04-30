# Blog setup — Contentful side

The code in `src/pages/blog.js` and `src/pages/blog-post.js` expects a Contentful content type with the exact ID **`blogPost`**. Apply this in the Contentful UI before the blog will render real posts.

## Content type

- **Name:** Blog Post
- **API identifier:** `blogPost`
- **Description:** A blog post for the public-facing site

## Fields

| Field name      | Field ID       | Type                  | Required | Notes |
|-----------------|----------------|-----------------------|----------|-------|
| Title           | `title`        | Short text            | yes      | Display field |
| Slug            | `slug`         | Short text            | yes      | Add the "Match a specific pattern" validation: `^[a-z0-9](-?[a-z0-9])*$`. Add the "Unique" validation. |
| Publish date    | `publishDate`  | Date & time           | yes      | Used for sorting newest-first and for the year filter |
| Hero image      | `heroImage`    | Media (one file)      | no       | Image only. Renders at top of post and in card. |
| Excerpt         | `excerpt`      | Long text             | no       | One- or two-sentence preview. Shown in card. |
| Body            | `body`         | Rich text             | yes      | Allowed nodes: headings 2–4, paragraphs, lists, blockquote, hyperlink, embedded asset (image). |
| Tags            | `tags`         | Short text — list     | no       | Used for the tag filter on `/blog`. Keep them short and lowercase if possible. |

## Roles & permissions for Audrey

In Contentful: **Settings → Users → Invite users**, or if she's already in the space, **Settings → Roles & permissions**.

Suggested role for Audrey: **Editor**, scoped so she can create/edit/publish only `blogPost` entries and upload media. Specifically:

- Content: Edit any entry of type `blogPost` (create, update, publish, archive, delete)
- Assets: Edit any asset (so she can upload hero images)
- Settings: read-only

If the existing **Editor** role already lets her publish anything in the space, that's fine for now — you can tighten it later.

## Smoke test

1. In Contentful, create one `blogPost` entry with a title, slug (`hello-world`), today's date, a body paragraph, and one or two tags. Publish it.
2. Locally: `npm install` (to pull `@contentful/rich-text-react-renderer`), then `npm start`.
3. Visit `/blog` — you should see the post card.
4. Click it — `/blog/hello-world` should render the body.
5. Filters should appear once you have posts spanning multiple tags or years.

## Renderer notes

- Embedded assets in rich text render as `<figure><img/><figcaption/></figure>`. Set the asset's **Description** field for alt text and the **Title** for caption.
- Hyperlinks in rich text open in a new tab.
- If you need additional rich-text node types (e.g. embedded entries), extend `renderOptions` in `src/pages/blog-post.js`.
