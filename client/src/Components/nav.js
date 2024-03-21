import React from "react";
import "./nav.css";
import companylogo from "../Assets/companyLogo.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

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
          <p onClick={handleHome}>Home</p>
          <p onClick={handleCompany}>Company</p>
          <p>
            <p onClick={handleService}>
              Service <i className="fas fa-caret-down"></i>
            </p>
            <div className="dropdownmenu">
              <p onClick={handleService1}>Start-Up Advisory</p>
              <p onClick={handleService2}>Human Resource</p>
              <p>
                <p onClick={handleService3}>
                  Marketing Consulting <i className="fas fa-caret-right"></i>
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
          <p onClick={handleContact}>Contact</p>
        </div>
      </div>
      <div className="nav-btn">
        <button>Register Now</button>
      </div>
    </header>
  );
};

export default Nav;
