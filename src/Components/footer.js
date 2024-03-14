import React from "react";
import "./footer.css";
import companylogo from "../Assets/companyLogo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-1">
          <img src={companylogo} alt="company-logo" />
          <p className="title">BusinessGuru</p>
          <p className="title-quote">Connect | Consult | Collaborate</p>
        </div>
        <div className="footer-2">
          <h3>Services</h3>
          <div className="s-inner-div-1">
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
            <p>services link</p>
          </div>
        </div>
        <div className="footer-3">
          <h3>Get in Touch</h3>
          <div className="s-inner-div">
            <p>BusinessGuru Consulting Pvt. Ltd.</p>
            <p>CIN: U11111HR1111PTC111111 </p>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <span> <p><b>Phone:</b> 91.111111111</p></span>
            <p><b>Email:</b> Businessguru@gmail.com</p>
            <div className="footer-div-3">
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright"> Copyright © 2024  BusinessGuru, All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
