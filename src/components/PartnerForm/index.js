import React, { useState } from 'react';
import './index.scss';

const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const INITIAL = {
  'organization-name': '',
  'contact-name': '',
  email: '',
  phone: '',
  'individuals-served': '',
  neighborhoods: '',
  'products-per-quarter': '',
  'street-address': '',
  'address-line-2': '',
  city: '',
  state: '',
  zip: '',
  county: '',
  comments: '',
};

const PartnerForm = () => {
  const [fields, setFields] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handle = e => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'partner-form', ...fields }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  if (submitted) {
    return (
      <div className="form-success" role="alert">
        <h3>Thank you for your interest!</h3>
        <p>We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <>
    <p className="form-intro">Thank you for your interest in partnering with The Period Collective! Please note that we do have a waiting list. For any questions, please reach out to Leah at <a href="mailto:leah@theperiodcollective.org">leah@theperiodcollective.org</a>.</p>
    <form
      className="pc-form partner-form"
      name="partner-form"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="partner-form" />

      {error && <p className="form-error" role="alert">Something went wrong. Please try again or email us directly.</p>}

      <div className="form-row">
        <div className="form-group full">
          <label htmlFor="organization-name">Organization Name <span className="required">*</span></label>
          <input id="organization-name" type="text" name="organization-name" required value={fields['organization-name']} onChange={handle} />
        </div>
      </div>

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="contact-name">Your Name <span className="required">*</span></label>
          <input id="contact-name" type="text" name="contact-name" required value={fields['contact-name']} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email <span className="required">*</span></label>
          <input id="email" type="email" name="email" required value={fields.email} onChange={handle} />
        </div>
      </div>

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number <span className="required">*</span></label>
          <input id="phone" type="tel" name="phone" required value={fields.phone} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="individuals-served">How Many Individuals Served? <span className="required">*</span></label>
          <input id="individuals-served" type="number" name="individuals-served" required min="1" value={fields['individuals-served']} onChange={handle} />
        </div>
      </div>

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="neighborhoods">What Neighborhoods Do You Serve? <span className="required">*</span></label>
          <input id="neighborhoods" type="text" name="neighborhoods" required value={fields.neighborhoods} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="products-per-quarter">How Many Products Per Quarter? <span className="required">*</span></label>
          <input id="products-per-quarter" type="number" name="products-per-quarter" required min="1" value={fields['products-per-quarter']} onChange={handle} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full">
          <label htmlFor="street-address">Street Address <span className="required">*</span></label>
          <input id="street-address" type="text" name="street-address" required value={fields['street-address']} onChange={handle} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full">
          <label htmlFor="address-line-2">Address Line 2</label>
          <input id="address-line-2" type="text" name="address-line-2" value={fields['address-line-2']} onChange={handle} />
        </div>
      </div>

      <div className="form-row four-col">
        <div className="form-group">
          <label htmlFor="city">City <span className="required">*</span></label>
          <input id="city" type="text" name="city" required value={fields.city} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State <span className="required">*</span></label>
          <input id="state" type="text" name="state" required maxLength="2" value={fields.state} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code <span className="required">*</span></label>
          <input id="zip" type="text" name="zip" required value={fields.zip} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="county">County</label>
          <input id="county" type="text" name="county" value={fields.county} onChange={handle} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full">
          <label htmlFor="comments">Questions or Comments</label>
          <textarea id="comments" name="comments" rows="4" value={fields.comments} onChange={handle} />
        </div>
      </div>

      <p className="form-note"><span className="required">*</span> Required fields</p>

      <button type="submit" className="blue-button form-submit">Submit</button>
    </form>
    </>
  );
};

export default PartnerForm;
