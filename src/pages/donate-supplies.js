import React, { useEffect, useState } from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { fetchEntries } from '../services/contentfulClient';

import '../scss/donate-supplies.scss';

const FALLBACK_SUPPLIES = [
  'Pads (all sizes)',
  'Tampons (all sizes)',
  'Liners',
  'Wipes',
  'Incontinence products',
  'Menstrual cups',
  'Period underwear',
  'Reusable pads',
  'Fabric and ribbon to make bags'
];

const DonateSuppliesPage = () => {
  const settings = useSiteSettings();
  const [supplies, setSupplies] = useState([]);

  const amazonLink = settings.amazonWishlistLink || 'https://www.amazon.com/hz/wishlist/ls/1EVIC1E58SZ4G?ref=cm_sw_em_r_un_un_gkRzhGwD7pKrD';
  const contactEmail = settings.contactEmail || 'contact@theperiodcollective.org';

  useEffect(() => {
    fetchEntries('supplyItem', { order: 'fields.order' }).then(items => {
      if (items && items.length > 0) {
        setSupplies(items.map(item => item.fields.name));
      }
    });
  }, []);

  const displaySupplies = supplies.length > 0 ? supplies : FALLBACK_SUPPLIES;

  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Donate Supplies" />

        <div className="amazon-callout">
          <h2>Order directly off of our Amazon Wishlist</h2>
          <p>Hassle free, ship directly to us, and we&apos;ll handle the rest!</p>
          <a
            href={amazonLink}
            target="_blank"
            className="blue-button"
            rel="noreferrer"
          >
            Let&apos;s do it
          </a>
        </div>

        <div className="shipping-callout">
          <p>
            If you have products you&apos;d like to drop off or ship to us,
            please contact us at{' '}
            <a href={`mailto:${contactEmail}`} className="link">
              {contactEmail}
            </a>
          </p>
        </div>

        <div className="site-wrap">
          <div className="donate-supplies-callout">
            <div className="left">
              <h2>Supplies we need</h2>
              <ul>
                {displaySupplies.map(name => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="supplies-image">
              <img src="./images/supplies.jpg" alt="Period supplies including pads, tampons, and liners" />
            </div>
          </div>
        </div>
        <ConsiderDonating />
      </main>
      <Footer />
    </>
  );
};

export default DonateSuppliesPage;
