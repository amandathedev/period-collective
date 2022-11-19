import React from "react";
import Header from "../components/Header";
import { Image, Button } from "react-bootstrap";

import "../scss/index.scss";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <Image
          src="../images/boxes.png"
          alt="Two people carrying boxes of menstrual products"
        ></Image>
        <h1 className="hero-text">
          PERIOD PRODUCTS <br></br>
          <span className="hero-span">FOR ALL IN </span>CHICAGO.
        </h1>
        <Button className="blue-button">Get Involved</Button>
      </div>
    </div>
  );
};

export default LandingPage;
