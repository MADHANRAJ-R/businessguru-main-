import React from "react";
import companylogo from "../Assets/companyLogo.jpg";
import "./servicetemplate.css";
const Servicetemplate = ({ serviceMappings }) => {
  if (!Array.isArray(serviceMappings)) {
    // If it's not an array, return null or handle the error as needed
    console.error("serviceMappings is not an array");
    return null;
  }

  return (
    <section className="service-template">
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

      <div className="service-process-div">
        {serviceMappings.map((mapping, index) => (
          <div className="service-toWhom-text" key={index}>
            <h1>{mapping.h1}</h1>
            <h2>{mapping.h2}</h2>
            <div className="service-toWhom-points">
              {mapping.points.map((point, pointIndex) => (
                <p key={pointIndex}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicetemplate;
