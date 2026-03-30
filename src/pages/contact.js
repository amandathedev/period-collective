import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

import '../scss/contact.scss';
import '../scss/forms.scss';

const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const ContactPage = () => {
  const [fields, setFields] = useState({ email: '', name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handle = e => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...fields }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Contact Us" />
        <div className="site-wrap contact-page">
          <div className="donate-supplies-callout mt-3">
            <div className="left">
              <h3 className="main-h3">
                Do you represent an organization interested in partnering with us?
              </h3>
              <p className="center">
                We&apos;re always looking for new partners to help us reach more
                people. Please visit{' '}
                <Link to="/partners" className="link">
                  our partner page
                </Link>{' '}
                to learn more about how we can work together.
              </p>
              <h3 className="main-h3 mt-4 mb-0">
                Interested in volunteering with us?
              </h3>
              <p className="center">
                Please visit our{' '}
                <a href="/volunteer-signup" className="link">
                  volunteer signup page
                </a>{' '}
                to sign up for our volunteer newsletter.
              </p>
            </div>
            <div>
              <img src="./images/supplies.jpg" alt="Period supplies including pads, tampons, and liners" />
            </div>
          </div>

          <h3 className="main-h3 mt-4">Send Us a Message</h3>
          <p className="form-intro">If you have a question or comment, please submit the form below and someone from The Period Collective will be in touch!</p>

          {submitted ? (
            <div className="form-success" role="alert">
              <h3>Message received!</h3>
              <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form
              className="pc-form contact-form"
              name="contact-form"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact-form" />

              {error && <p className="form-error" role="alert">Something went wrong. Please try again or email us at <a href="mailto:contact@theperiodcollective.org" className="link">contact@theperiodcollective.org</a>.</p>}

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="email">Your Email <span className="required">*</span></label>
                  <input id="email" type="email" name="email" required value={fields.email} onChange={handle} />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="required">*</span></label>
                  <input id="name" type="text" name="name" required value={fields.name} onChange={handle} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea id="message" name="message" rows="6" required value={fields.message} onChange={handle} />
                </div>
              </div>

              <p className="form-note"><span className="required">*</span> Required fields</p>

              <button type="submit" className="blue-button form-submit">Send Message</button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
