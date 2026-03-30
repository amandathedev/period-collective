import React from 'react';
import './index.scss';

const VolunteerQuote = () => {
  return (
    <div className="volunteer-quote d-flex">
      <div>
        <h2>
          &ldquo;It is shocking that women are struggling with period poverty so close
          to home. It is great knowing that my volunteering will make a
          difference in my community.&rdquo;
        </h2>
        <p>- Allison, period party volunteer</p>
      </div>
      <img src="./images/dolly.png" alt="Volunteer with donation cart" />
    </div>
  );
};

export default VolunteerQuote;
