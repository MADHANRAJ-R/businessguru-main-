import React from "react";
import companylogo from "../Assets/companyLogo.jpg";
import "./servicesPortfolio.css";

const ServicesPortfolio = () => {
  return (
    <div className="sp-main-div">
      <h1>ServicesPortfolio</h1>
      <div className="ServicesPortfolio-div">
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
        <div className="ServicesPortfolio-card">
          <img src={companylogo} alt="company-logo" />
          <h3>Shared Services</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesPortfolio;
