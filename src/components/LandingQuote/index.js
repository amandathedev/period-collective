import React, { useEffect, useState } from 'react';

import { fetchEntries } from '../../services/contentfulClient';
import './index.scss';

const LandingQuote = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchEntries('homePage').then(items => {
      if (items && items.length > 0) setContent(items[0].fields);
    });
  }, []);

  const quoteText = content.quoteText || 'There are more than 65,000 people experiencing houselessness in Chicago, 40% of whom can menstruate.';
  const attribution = content.quoteAttribution || '2020 Study by Chicago Coalition for the Homeless';
  const attributionUrl = content.quoteAttributionUrl || 'https://www.chicagohomeless.org/';
  const subheadline = content.quoteSubheadline || 'We believe everyone has the right to dignity.';

  return (
    <div className="landing-quote">
      <h3>{quoteText}</h3>
      <p className="quote-attr">
        - <a href={attributionUrl}>{attribution}</a>
      </p>
      <h4>{subheadline}</h4>
      <a
        href="/donate"
        className="yellow-button"
      >
        Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default LandingQuote;
