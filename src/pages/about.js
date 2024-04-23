import React from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowWeWork from '../components/HowWeWork';
import MeetTheTeam from '../components/MeetTheTeam';
import PageNameHeader from '../components/PageNameHeader';
import '../scss/about.scss';

const AboutPage = () => {
  return (
    <>
      <div className="site-wrap about-page">
        <Header />
        <PageNameHeader pageName="About" />
        <h2 className="main-h2">Why we do it</h2>
        <p>
          The Period Collective is an{' '}
          <strong>all-volunteer 501(c)(3) non-profit</strong> organization based
          in Chicago that is dedicated to promoting menstrual equity by ensuring
          that all individuals have access to menstrual products. We believe
          that menstrual equity is a basic human right, and we are committed to
          doing everything in our power to make it a reality.<br></br>
          <br></br> Since our inception, we have distributed{' '}
          <strong>over two million menstrual products</strong> to social service
          organizations such as schools, food banks, and shelters. These
          organizations then distribute the menstrual products to people in
          need, providing them with the dignity and respect they deserve. Our
          mission is to create a world where everyone has access to menstrual
          products, regardless of their income or living situation. <br></br>
          <br></br>As an all-volunteer non-profit organization, we rely on the
          generosity and dedication of our volunteers to make our work possible.
          By supporting The Period Collective through a donation or by
          volunteering your time,{' '}
          <strong>
            you can be a part of our mission to make menstrual equity a reality
            for all
          </strong>
          . We are proud to be a by Chicago, for Chicago organization and
          believe that together, we can make a difference in the lives of those
          who need it most.
        </p>
        <HowWeWork />
        {/* TODO after MVP */}
        {/* <MeetTheTeam /> */}
        <h2 className="main-h2">Who we help</h2>
        <div className="names-grid">
          <div>A Safe Haven Foundation</div>
          <div>A Safe Place</div>
          <div>Advocate Trauma Recovery Center</div>
          <div>Antioch Traveling Closet</div>
          <div>Belmont Cragin Mutual Aid</div>
          <div>Cara Chicago</div>
          <div>CASA Lake County</div>
          <div>Chi-Care</div>
          <div>Chicago Lights</div>
          <div>Coalition for Spirtiual and Public Leadership</div>
          <div>CYN Grayslake</div>
          <div>Deborah&apos;s Place</div>
          <div>Dress for Success</div>
          <div>Girls in the Game</div>
          <div>
            Healthcare Alternative System: BASTA Domestic Violence Program
          </div>
          <div>Heartland Alliance</div>
          <div>Home of the Sparrow</div>
          <div>Hope Collective</div>
          <div>Inner Voice</div>
          <div>Irving Park Community Food Pantry</div>
          <div>Joanie&apos;s Closet</div>
          <div>La Casa Norte</div>
          <div>Lake County Haven</div>
          <div>Maristella</div>
          <div>Moraine Township Food Pantry</div>
          <div>New Life Centers</div>
          <div>Nicasa</div>
          <div>North Lawndale Employment Network</div>
          <div>Pacific Garden Mission</div>
          <div>PEP Chicago</div>
          <div>Phalanx Family Services</div>
          <div>Pioneer Center for Human Services</div>
          <div>Roseland Community Good News Daycare</div>
          <div>SGA Youth and Family Services</div>
          <div>Southside Center of Hope</div>
          <div>St. Coletta&apos;s</div>
          <div>The Bloc Chicago</div>
          <div>The Harbour</div>
          <div>The Healing Circle</div>
          <div>Thresholds</div>
          <div>Urban Alliance</div>
          <div>Virtue and Voilure</div>
          <div>Well of Mercy</div>
          <div>Women&apos;s Residential Services</div>
          <div>Youth Guidance: Working on Womanhood Program</div>
          <div>Youth Job Center</div>
          <div>YWCA Metropolitan Chicago</div>
        </div>
      </div>
      <ConsiderDonating pageName="about" />
      <Footer />
    </>
  );
};

export default AboutPage;
