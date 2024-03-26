import React from "react";
import hrlogo from "../Assets/hrlogo.jpg";
import customerlogo from "../Assets/customerlogo.jpg";
import digilogo from "../Assets/digilogo.jpg";
import leadgenlogo from "../Assets/leadgenlogo.jpg";
import marketinglogo from "../Assets/marketinglogo.jpg";
import startuplogo from "../Assets/startuplogo.jpg";
import vrlogo from "../Assets/vrlogo.jpg";
import webdevlogo from "../Assets/webdevlogo.jpg";
import "./servicesPortfolio.css";
import { useNavigate } from "react-router-dom";

const ServicesPortfolio = () => {
  const navigate = useNavigate();

  // services

  const handleService1 = () => {
    setTimeout(() => {
      navigate("/services/startup-advisory");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService2 = () => {
    setTimeout(() => {
      navigate("/services/human-resource");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService3 = () => {
    setTimeout(() => {
      navigate("/services/marketing-consulting");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService4 = () => {
    setTimeout(() => {
      navigate("/services/digital-marketing");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService5 = () => {
    setTimeout(() => {
      navigate("/services/lead-generation");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService6 = () => {
    setTimeout(() => {
      navigate("/services/virtual-cxo");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService7 = () => {
    setTimeout(() => {
      navigate("/services/web-development");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService8 = () => {
    setTimeout(() => {
      navigate("/services/customer-success-consulting");
      window.scrollTo(0, 0);
    }, 200);
  };

  return (
    <div className="sp-main-div">
      <h1>Service Portfolio</h1>
      <div className="ServicesPortfolio-div">
        <div className="ServicesPortfolio-card" onClick={handleService1}>
          <img src={startuplogo} alt="company-logo" />
          <h3>Startup-Advisory</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService2}>
          <img src={hrlogo} alt="company-logo" />
          <h3>Human Resource</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService3}>
          <img src={marketinglogo} alt="company-logo" />
          <h3>Marketing Consulting</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService4}>
          <img src={digilogo} alt="company-logo" />
          <h3>Digital Marketing</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService5}>
          <img src={leadgenlogo} alt="company-logo" />
          <h3>Lead Generation</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService6}>
          <img src={vrlogo} alt="company-logo" />
          <h3>Virtual CXO</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService7}>
          <img src={webdevlogo} alt="company-logo" />
          <h3>Web Development</h3>
        </div>
        <div className="ServicesPortfolio-card" onClick={handleService8}>
          <img src={customerlogo} alt="company-logo" />
          <h3>Customer Success Consulting</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesPortfolio;
