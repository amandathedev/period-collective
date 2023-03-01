import React from 'react';
import './index.scss';

const VolunteerQuote = () => {
  return (
    <div className="volunteer-quote d-flex">
      <div>
        <h2>
          “Volunteering with The Period Collective has been a great experience.
          It&apos;s great to know we&apos;re making a difference”
        </h2>
        <p>- Allison, Period party volunteer</p>
      </div>
      {/* <div className="right"> */}
      <img src="./images/dolly.png" />
      {/* </div> */}
    </div>
  );
};

export default VolunteerQuote;
