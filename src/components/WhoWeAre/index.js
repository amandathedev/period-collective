import React, { useEffect, useState } from 'react';

import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import { fetchEntries } from '../../services/contentfulClient';
import './index.scss';

const WhoWeAre = () => {
  const settings = useSiteSettings();
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchEntries('homePage').then(items => {
      if (items && items.length > 0) setContent(items[0].fields);
    });
  }, []);

  const logoSrc = settings.logoUrl || './images/tpc.png';
  const body1 = content.whoWeAreBody1 || 'The Period Collective is a 501(3)c Nonprofit in Chicago that provides period products to local shelters, transitional housing facilities, schools, and food banks to help provide dignity to all Chicagoans.';
  const body2 = content.whoWeAreBody2 || 'We are a grassroots organization that is run entirely by volunteers.';

  return (
    <section className="who-we-are site-wrap">
      <h2 className="main-h2">Who we are</h2>
      <div className="who-we-are-content">
        <Image src={logoSrc} alt="The Period Collective logo" />
        <p>{body1}</p>
        <p>{body2}</p>
      </div>
      <Link className="blue-button" to="/about">
        Learn more
      </Link>
    </section>
  );
};

export default WhoWeAre;
