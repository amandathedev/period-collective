import React, { useEffect, useState } from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowWeWork from '../components/HowWeWork';
import PageNameHeader from '../components/PageNameHeader';
import { fetchEntries } from '../services/contentfulClient';
import '../scss/about.scss';

const renderBold = (text) => {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
};

const FALLBACK = {
  body1: 'The Period Collective is an **all-volunteer 501(c)(3) non-profit** organization based in Chicago that is dedicated to promoting menstrual equity by ensuring that all individuals have access to menstrual products. We believe that menstrual equity is a basic human right, and we are committed to doing everything in our power to make it a reality.',
  body2: 'Since our inception, we have distributed **over two million menstrual products** to social service organizations such as schools, food banks, and shelters. These organizations then distribute the menstrual products to people in need, providing them with the dignity and respect they deserve. Our mission is to create a world where everyone has access to menstrual products, regardless of their income or living situation.',
  body3: 'As an all-volunteer non-profit organization, we rely on the generosity and dedication of our volunteers to make our work possible. By supporting The Period Collective through a donation or by volunteering your time, **you can be a part of our mission to make menstrual equity a reality for all**. We are proud to be a by Chicago, for Chicago organization and believe that together, we can make a difference in the lives of those who need it most.',
};

const AboutPage = () => {
  const [partners, setPartners] = useState([]);
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    fetchEntries('partner', { order: 'fields.name' }).then(items => {
      if (items && items.length > 0) {
        setPartners(items.map(item => item.fields.name));
      }
    });
    fetchEntries('aboutPage').then(items => {
      if (items && items.length > 0) setPageContent(items[0].fields);
    });
  }, []);

  const body1 = pageContent.body1 || FALLBACK.body1;
  const body2 = pageContent.body2 || FALLBACK.body2;
  const body3 = pageContent.body3 || FALLBACK.body3;

  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="About" />
        <div className="site-wrap about-page">
          <h2 className="main-h2">Why we do it</h2>
          <p>{renderBold(body1)}</p>
          <p>{renderBold(body2)}</p>
          <p>{renderBold(body3)}</p>
        </div>
        <HowWeWork />
        <div className="site-wrap about-partners">
          <h2 className="main-h2">Who we help</h2>
          <ul className="names-grid">
            {partners.length > 0
              ? partners.map(name => <li key={name}>{name}</li>)
              : <>
                <li>A Safe Haven Foundation</li>
                <li>A Safe Place</li>
                <li>Advocate Trauma Recovery Center</li>
                <li>Antioch Traveling Closet</li>
                <li>Belmont Cragin Mutual Aid</li>
                <li>Cara Chicago</li>
                <li>CASA Lake County</li>
                <li>Chi-Care</li>
                <li>Chicago Lights</li>
                <li>Coalition for Spirtiual and Public Leadership</li>
                <li>CYN Grayslake</li>
                <li>Deborah&apos;s Place</li>
                <li>Dress for Success</li>
                <li>Girls in the Game</li>
                <li>Healthcare Alternative System: BASTA Domestic Violence Program</li>
                <li>Heartland Alliance</li>
                <li>Home of the Sparrow</li>
                <li>Hope Collective</li>
                <li>Inner Voice</li>
                <li>Irving Park Community Food Pantry</li>
                <li>Joanie&apos;s Closet</li>
                <li>La Casa Norte</li>
                <li>Lake County Haven</li>
                <li>Maristella</li>
                <li>Moraine Township Food Pantry</li>
                <li>New Life Centers</li>
                <li>Nicasa</li>
                <li>North Lawndale Employment Network</li>
                <li>Pacific Garden Mission</li>
                <li>PEP Chicago</li>
                <li>Phalanx Family Services</li>
                <li>Pioneer Center for Human Services</li>
                <li>Roseland Community Good News Daycare</li>
                <li>SGA Youth and Family Services</li>
                <li>Southside Center of Hope</li>
                <li>St. Coletta&apos;s</li>
                <li>The Bloc Chicago</li>
                <li>The Harbour</li>
                <li>The Healing Circle</li>
                <li>Thresholds</li>
                <li>Urban Alliance</li>
                <li>Virtue and Voilure</li>
                <li>Well of Mercy</li>
                <li>Women&apos;s Residential Services</li>
                <li>Youth Guidance: Working on Womanhood Program</li>
                <li>Youth Job Center</li>
                <li>YWCA Metropolitan Chicago</li>
              </>
            }
          </ul>
        </div>
        <ConsiderDonating pageName="about" />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
