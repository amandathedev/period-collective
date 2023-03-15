import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import '../scss/packing-party.scss';

const PackingPartyPage = () => {
  return (
    <>
      <div className="site-wrap packing-parties">
        <Header />
        <PageNameHeader pageName="Packing Parties" />
        <div className="info">
          <h2 className="main-h2">What is it?</h2>
          <p>
            It&apos;s a party! Gather supplies and some friends or coworkers and
            pack up period supplies in individual kits. A kit lasts each
            menstruator about 3 months and contains a variety of pads, tampons,
            and other supplies to get them through their period.
          </p>
        </div>
        <div className="past-parties">
          <h3 className="main-h3">Past packing parties</h3>
          <div className="d-flex photo-row">
            <img src="./images/period-party1.png" className="photo" />
            <img src="./images/period-party2.png" className="photo" />
            <img src="./images/period-party3.png" className="photo" />
          </div>
        </div>
        <h3 className="main-h3">How do I do it?</h3>
        <ol>
          <li>
            Get together some friends or coworkers who are interested in helping
            with the cause.
          </li>
          <li>
            Gather supplies: You can purchase menstrual products and bags to
            donate, or reach out to us to pick up supplies from us.
          </li>
          <li>
            If you would like a Period Collective representative to attend your
            event, please reach out to us!
          </li>
          <li>
            Work together to pack the menstrual supplies. Bags usually contain
            25 tampons, 5 overnight pads, and 22 liners.
          </li>
          <li>
            Deliver the bags you put together! Contact us to arrange a drop off
            time.
          </li>
          <li>
            Share your experience: Take pictures and share your experience on
            social media to encourage others to get involved and support the
            cause!
          </li>
        </ol>
        <p>
          Contact us at{' '}
          <a href="mailto:contact@theperiodcollective.org" className="link">
            contact@theperiodcollective.org
          </a>{' '}
          for more information, to schedule supply pickup or donation drop off,
          or to ask a Period Collective representative to attend your event.
        </p>
        <p>
          We have put together a slideshow that can be used during your event to
          help provide information and instructions, which can be found at{' '}
          <a
            href="https://www.canva.com/design/DAFSPbwB0-o/z5ZKe64TQRuuRjxHPdNLkA/view?utm_content=DAFSPbwB0-o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            className="link"
          >
            this link
          </a>
          . Please send us an email if you&apos;d like a downloadable copy.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PackingPartyPage;
