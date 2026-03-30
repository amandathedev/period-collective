import React, { useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { fetchEntries } from '../services/contentfulClient';
import '../scss/packing-party.scss';

const FALLBACK_INTRO = "It's a party! Gather supplies and some friends or coworkers and pack up period supplies in individual kits. A kit lasts each menstruator about one month and contains 25 tampons, 5 overnight pads, and 22 liners to get them through their period.";

const FALLBACK_STEPS = [
  'Get together some friends or coworkers who are interested in helping with the cause.',
  'Gather supplies: Purchase menstrual products and bags to donate. Tampons, pads, and liners need to be individually-wrapped.',
  'If you would like a Period Collective representative to attend your event, please reach out to us!',
  'Work together to pack the menstrual supplies. Bags contain 25 tampons, 5 overnight pads, and 22 liners.',
  'Deliver the bags you put together! Contact us to arrange a drop off time.',
  'Share your experience: Take pictures and share your experience on social media to encourage others to get involved and support the cause!',
];

const PackingPartyPage = () => {
  const settings = useSiteSettings();
  const contactEmail = settings.contactEmail || 'contact@theperiodcollective.org';
  const iframeRef = useRef(null);
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    fetchEntries('packingPartyPage').then(items => {
      if (items && items.length > 0) setPageContent(items[0].fields);
    });
  }, []);

  useEffect(() => {
    const resizeIframe = () => {
      const iframe = iframeRef.current;
      const aspectRatio = 8 / 16;
      const width = iframe.parentNode.offsetWidth;
      const height = width * aspectRatio;
      iframe.style.height = `${height}px`;
    };

    window.addEventListener('resize', resizeIframe);
    resizeIframe();

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  const intro = pageContent.intro || FALLBACK_INTRO;
  const steps = pageContent.steps
    ? pageContent.steps.split('\n').filter(s => s.trim())
    : FALLBACK_STEPS;

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="site-wrap packing-parties">
          <PageNameHeader pageName="Packing Parties" />
          <div className="info">
            <h2 className="main-h2">What is it?</h2>
            <p>{intro}</p>
          </div>
          <div className="past-parties">
            <h3 className="main-h3">Past packing parties</h3>
            <div className="d-flex photo-row">
              <img src="./images/period-party1.png" className="photo" alt="Volunteers at a packing party assembling period kits" />
              <img src="./images/period-party2.png" className="photo" alt="Volunteers sorting and packing period supplies" />
              <img src="./images/period-party3.png" className="photo" alt="Completed period kits ready for distribution" />
            </div>
          </div>
          <h3 className="main-h3">How do I do it?</h3>
          <ol>
            {steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <p>
            Contact us at{' '}
            <a href={`mailto:${contactEmail}`} className="link">
              {contactEmail}
            </a>{' '}
            for more information, to schedule a donation drop off, or to ask a
            Period Collective representative to attend your event.
          </p>
          <p>
            We have put together a slideshow that can be used during your event to
            help provide information and instructions, which can be found below
            and at{' '}
            <a
              href="https://www.canva.com/design/DAFSPbwB0-o/z5ZKe64TQRuuRjxHPdNLkA/view?utm_content=DAFSPbwB0-o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="link"
              target="_blank"
              rel="noreferrer"
              aria-label="View the packing party slideshow on Canva (opens in new tab)"
            >
              the Canva slideshow
            </a>
            . Please send us an email if you&apos;d like a downloadable copy.
          </p>
          <iframe
            title="Canva Presentation"
            ref={iframeRef}
            src="https://www.canva.com/design/DAFSPbwB0-o/z5ZKe64TQRuuRjxHPdNLkA/view?embed"
            width="60%"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PackingPartyPage;
