import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import { fetchEntries } from '../../services/contentfulClient';
import './index.scss';

const HowWeWork = () => {
  const settings = useSiteSettings();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetchEntries('howWeWorkStep', { order: 'fields.order' }).then(items => {
      if (items && items.length > 0) {
        setSteps(items.map(item => ({
          label: item.fields.label,
          description: item.fields.description,
          photoUrl: item.fields.photo?.fields?.file?.url
            ? `https:${item.fields.photo.fields.file.url}`
            : null,
          buttonText: item.fields.buttonText,
          buttonLink: item.fields.buttonLink,
        })));
      }
    });
  }, []);

  const fallbackSteps = [
    {
      label: 'ONE',
      description: 'We get period products from donors (regular people like you!) and purchase supplies in bulk with monetary donations.',
      photoUrl: null,
      localPhoto: './images/one-big.png',
      buttonText: 'See Where to Donate',
      buttonLink: '/donate',
    },
    {
      label: 'TWO',
      description: 'Volunteers create period kits so the supplies can be distributed with dignity in mind.',
      photoUrl: null,
      localPhoto: './images/two-big.png',
      buttonText: 'See Volunteering',
      buttonLink: '/get-involved',
    },
    {
      label: 'THREE',
      description: 'The supplies get distributed by local community centers to people in need.',
      photoUrl: null,
      localPhoto: './images/three-big.png',
      buttonText: 'See Who We Help',
      buttonLink: '/about',
    },
  ];

  const localPhotos = ['./images/one-big.png', './images/two-big.png', './images/three-big.png'];
  const displaySteps = steps.length > 0 ? steps : fallbackSteps;

  return (
    <section className="site-wrap how-we-work">
      <h2 className="main-h2">How we work</h2>
      <div className="d-flex row">
        {displaySteps.map((step, index) => {
          const photoSrc = step.photoUrl || step.localPhoto || localPhotos[index];
          const isExternal = step.buttonLink?.startsWith('http');
          return (
            <div key={step.label} className="d-flex flex-column column">
              <div className="image-header-wrapper">
                <img src={photoSrc} className="circle" alt="" aria-hidden="true" />
                <h3>{step.label}</h3>
              </div>
              <p>{step.description}</p>
              {isExternal ? (
                <a
                  href={step.buttonLink}
                  target="_blank"
                  className="blue-button"
                  rel="noreferrer"
                  aria-label={`${step.buttonText} (opens in new tab)`}
                >
                  {step.buttonText}
                </a>
              ) : (
                <Link className="blue-button" to={step.buttonLink}>
                  {step.buttonText}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowWeWork;
