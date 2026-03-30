import React, { useEffect, useState } from 'react';

import { fetchEntries } from '../../services/contentfulClient';
import './index.scss';

const VolunteerQuote = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchEntries('getInvolvedPage').then(items => {
      if (items && items.length > 0) setContent(items[0].fields);
    });
  }, []);

  const quoteText = content.volunteerQuoteText || '"It is shocking that women are struggling with period poverty so close to home. It is great knowing that my volunteering will make a difference in my community."';
  const attribution = content.volunteerQuoteAttribution || '- Allison, period party volunteer';
  const photoSrc = content.volunteerPhoto?.fields?.file?.url
    ? `https:${content.volunteerPhoto.fields.file.url}`
    : './images/dolly.png';

  return (
    <div className="volunteer-quote d-flex">
      <div>
        <h2>{quoteText}</h2>
        <p>{attribution}</p>
      </div>
      <img src={photoSrc} alt="Volunteers at a packing party" />
    </div>
  );
};

export default VolunteerQuote;
