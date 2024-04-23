import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export const fetchEntries = async contentType => {
  const entries = await client.getEntries({
    content_type: contentType
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType}.`);
};

export default { fetchEntries };
