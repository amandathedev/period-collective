import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { fetchEntries } from '../services/contentfulClient';

const SiteSettingsContext = createContext({});

export const SiteSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetchEntries('siteSettings').then(items => {
      if (items && items.length > 0) {
        const fields = items[0].fields;
        const processed = { ...fields };
        if (fields.logo?.fields?.file?.url) {
          processed.logoUrl = `https:${fields.logo.fields.file.url}`;
        }
        setSettings(processed);

        const root = document.documentElement;
        if (fields.primaryColor) root.style.setProperty('--primary-blue', fields.primaryColor);
        if (fields.primaryColorHover) root.style.setProperty('--blue-hover', fields.primaryColorHover);
        if (fields.accentColor) root.style.setProperty('--primary-coral', fields.accentColor);
        if (fields.highlightColor) root.style.setProperty('--primary-yellow', fields.highlightColor);
        if (fields.highlightColorHover) root.style.setProperty('--yellow-hover', fields.highlightColorHover);
      }
    });
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

SiteSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useSiteSettings = () => useContext(SiteSettingsContext);
