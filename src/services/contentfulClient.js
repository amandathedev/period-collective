import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const cache = new Map();

export const fetchEntries = async (contentType, params = {}) => {
  const key = `${contentType}:${JSON.stringify(params)}`;
  if (cache.has(key)) return cache.get(key);
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      ...params
    });
    if (entries.items) {
      cache.set(key, entries.items);
      return entries.items;
    }
  } catch (e) {
    console.error(`Error getting Entries for ${contentType}.`, e);
  }
  return [];
};

export default { fetchEntries };
