import React from "react";
import "./nav.css";
import companylogo from "../Assets/companyLogo.jpg";

const Nav = () => {
  return (
    <nav>
      <div className="nav-div-1">
        <div className="company-logo-div">
          <img src={companylogo} alt="company-logo" />
        </div>
        <div className="title-div">
          <p className="title">BusinessGuru</p>
          <p className="title-quote">Connect | Consult | Collaborate</p>
        </div>
      </div>

      <div className="nav-center-div">
      <div className="nav-div-2">
        <div className="nav-contact">
          <div className="contact-div-1">
            <img src={companylogo} alt="company-logo" />
            <p>91.9555626260</p>
          </div>
          <div className="contact-div-1">
            <img src={companylogo} alt="company-logo" />
            <p>91.9555626260</p>
          </div>
        </div>

        <div className="nav-div-3">
          <div className="social-media-1">
            <img src={companylogo} alt="company-logo" />
          </div>
          <div className="social-media-1">
            <img src={companylogo} alt="company-logo" />
          </div>
          <div className="social-media-1">
            <img src={companylogo} alt="company-logo" />
          </div>
          <div className="social-media-1">
            <img src={companylogo} alt="company-logo" />
          </div>
        </div>

        
      </div>
      <div className="router-div">
          <p>Home</p>
          <p>Company</p>
          <p>Service</p>
          <p>Case Studies</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="nav-btn">
        <button>Sign Up Now</button>
      </div>
    </nav>
  );
};

export default Nav;
