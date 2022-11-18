import React from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import "../scss/index.scss";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="../images/boxes.png" alt="Two people carrying boxes of menstrual products" />
        
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
