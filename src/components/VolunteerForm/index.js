import React, { useState } from 'react';
import './index.scss';

const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const HELP_OPTIONS = [
  'Make donation deliveries',
  'Volunteer at events',
  'Pack period kits',
  'Sew bags for period kits',
  'Administrative or creative skills',
];

const VolunteerForm = () => {
  const [fields, setFields] = useState({
    'first-name': '',
    'last-name': '',
    email: '',
    phone: '',
    location: '',
    'contact-me': false,
  });
  const [helpOptions, setHelpOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setFields({ ...fields, [name]: type === 'checkbox' ? checked : value });
  };

  const handleCheckbox = e => {
    const { value, checked } = e.target;
    setHelpOptions(prev =>
      checked ? [...prev, value] : prev.filter(o => o !== value)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      'form-name': 'volunteer-form',
      ...fields,
      'how-to-help': helpOptions.join(', '),
      'contact-me': fields['contact-me'] ? 'Yes' : 'No',
    };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  if (submitted) {
    return (
      <div className="form-success" role="alert">
        <h3>Thank you for signing up!</h3>
        <p>We&apos;ll be in touch soon with volunteer opportunities.</p>
      </div>
    );
  }

  return (
    <>
    <p className="form-intro">Thank you for your interest in volunteering with The Period Collective! Add your information below to be added to our volunteer email list.</p>
    <p className="form-intro">If you&apos;d like to chat to learn more about The Period Collective, share information about a skill you&apos;d like to use to help (e.g. graphic design, etc.), or if you&apos;d like to speak about volunteering on an ongoing basis, please check the box below and someone will reach out to you directly.</p>
    <form
      className="pc-form volunteer-form"
      name="volunteer-form"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="volunteer-form" />

      {error && <p className="form-error" role="alert">Something went wrong. Please try again or email us directly.</p>}

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="first-name">First Name <span className="required">*</span></label>
          <input id="first-name" type="text" name="first-name" required value={fields['first-name']} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name <span className="required">*</span></label>
          <input id="last-name" type="text" name="last-name" required value={fields['last-name']} onChange={handle} />
        </div>
      </div>

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input id="email" type="email" name="email" required value={fields.email} onChange={handle} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" value={fields.phone} onChange={handle} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full">
          <label htmlFor="location">Location (Town / Neighborhood)</label>
          <input id="location" type="text" name="location" value={fields.location} onChange={handle} />
        </div>
      </div>

      <div className="form-row">
        <fieldset className="form-group full checkbox-fieldset">
          <legend>How Would You Like to Help?</legend>
          <div className="checkbox-group">
            {HELP_OPTIONS.map(option => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  name="how-to-help"
                  value={option}
                  checked={helpOptions.includes(option)}
                  onChange={handleCheckbox}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="form-row">
        <div className="form-group full">
          <label className="checkbox-label contact-me-label">
            <input
              type="checkbox"
              name="contact-me"
              checked={fields['contact-me']}
              onChange={handle}
            />
            Please contact me with volunteer opportunities
          </label>
        </div>
      </div>

      <p className="form-note"><span className="required">*</span> Required fields</p>

      <button type="submit" className="blue-button form-submit">Submit</button>
    </form>
    </>
  );
};

export default VolunteerForm;
