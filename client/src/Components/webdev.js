import React from "react";
import "./webdev.css";
import companylogo from "../Assets/domainLogo.jpg";
import web1 from "../Assets/web1.jpg"
import web2 from "../Assets/web2.jpg"
import web3 from "../Assets/web3.jpg"
import web4 from "../Assets/web4.jpg"

const Webdev = () => {
  return (
    <section className="webdev-main">
      <div className="service-template-div-1">
        <div className="intro-img-div">
          <img src={companylogo} alt="companylogo" />
        </div>
        <div className="service-intro-content-div">
          <h1>Introduction</h1>
          <p>
            Business Guru is a leading B2B services marketplace for
            Cross-Functional Business Outsourcing, Consulting, and Execution
            needs through the platform businessguru.com.
          </p>
          <br />
          <p>
            We understand business & curate tailor-made solutions by weaving
            together the right strategy, right execution, and right technology
            within a budget and timelines. We own end-to-end delivery thereby
            reducing the risk and liability, promising efficient and on-time
            delivery. The Business Guru stamp ensures transparency, trust &
            commitment.
          </p>
          <br />
          <p>
            Our Practice Leaders are Industry stalwarts in their domains and
            bring rich experience of 25+ years each. Backed by a robust platform
            with 100+ subject-matter expert consultants we own the strategy,
            delivery & governance.
          </p>
          <br />
          <b>Connect | Consult | Collaborate</b>
        </div>
      </div>
      <div className="web1">
      <h1>Our Previous Works</h1>
      <div className="workProfile">
        <div className="pr1">
        <a
            href="https://softwares.structuralguru.in"
            target="_blank"
            rel="noreferrer"
          >
            <img src={web3} alt="web1" />
            </a>
        </div>
        <div className="pr1">
        <a
            href="https://rcc.structuralguru.in"
            target="_blank"
            rel="noreferrer"
          >
        <img src={web2} alt="web1" />
        </a>
        </div>
        <div className="pr1">
        <a
            href="https://steel.structuralguru.in"
            target="_blank"
            rel="noreferrer"
          >
        <img src={web4} alt="web1" />
        </a>
        </div>
        <div className="pr1">
        <a
            href="https://structuralguru.in"
            target="_blank"
            rel="noreferrer"
          >
        <img src={web1} alt="web1" />
        </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Webdev;
