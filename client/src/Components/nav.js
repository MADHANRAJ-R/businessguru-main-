import React, { useState } from "react";
import "./nav.css";
import companylogo from "../Assets/companyLogo.jpg";
import instalogo from "../Assets/instalogo.jpg";
import fblogo from "../Assets/fblogo.jpg";
import walogo from "../Assets/walogo.jpg";
import linkedinlogo from "../Assets/linkedinlogo.jpg";
import phonelogo from "../Assets/phonelogo2.png";
import emaillogo from "../Assets/emaillogo2.png";

import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleCompany = () => {
    setTimeout(() => {
      navigate("/company");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleHome = () => {
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService = () => {
    setIsServiceOpen(!isServiceOpen);
    setIsSubmenuOpen(false);
    setTimeout(() => {
      navigate("/services");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleContact = () => {
    setTimeout(() => {
      navigate("/contact");
      window.scrollTo(0, 0);
    }, 200);
  };

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
    setIsSubmenuOpen(!isSubmenuOpen);
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
    <header>
      <div onClick={handleHome} className="nav-div-1">
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
              <img src={phonelogo} alt="company-logo" />
              <p>91.9555626260</p>
            </div>
            <div className="contact-div-1">
              <img src={emaillogo} alt="company-logo" />
              <p>businessguru@gmail.com</p>
            </div>
          </div>

          <div className="nav-div-3">
            <div className="social-media-1">
              <img src={linkedinlogo} alt="company-logo" />
            </div>
            <div className="social-media-1">
              <img src={fblogo} alt="company-logo" />
            </div>
            <div className="social-media-1">
              <img src={instalogo} alt="company-logo" />
            </div>
            <div className="social-media-1">
              <img src={walogo} alt="company-logo" />
            </div>
          </div>
        </div>
        <input type="checkbox" id="check" />
        <label for="check" className="close-menu">
          <i className="fas fa-times"></i>
        </label>

        <div className="router-div">
          <p className={props.active1} onClick={handleHome}>
            Home
          </p>
          <p onClick={handleCompany} className={props.active4}>
            Company
          </p>
          <p>
            <p className={props.active3} onClick={handleService}>
              Service{" "}
              <i
                className={`fas fa-caret-${isServiceOpen ? "up" : "down"}`}
              ></i>
            </p>
            <div className="dropdownmenu">
              <p onClick={handleService1}>Start-Up Advisory</p>
              <p onClick={handleService2}>Human Resource</p>
              <p>
                <p onClick={handleService3}>
                  Marketing Consulting{" "}
                  <i
                    className={`fas fa-caret-${
                      isSubmenuOpen ? "right" : "down"
                    }`}
                  ></i>
                </p>
                <div className="dropdownmenu2">
                  <p onClick={handleService4}>Digital Marketing</p>
                  <p onClick={handleService5}>Lead Generation</p>
                </div>
              </p>

              <p onClick={handleService6}>Virtual CXO</p>
              <p onClick={handleService7}>Web Development</p>
              <p onClick={handleService8}>Customer Success Consulting</p>
            </div>
          </p>
          <p className={props.active2} onClick={handleContact}>
            Contact
          </p>
        </div>
        <label for="check" className="open-menu">
          <i className="fas fa-bars"></i>
        </label>
      </div>

      <div className="nav-btn">
        <button onClick={handleContact}>Get in Touch</button>
      </div>
    </header>
  );
};

export default Nav;
