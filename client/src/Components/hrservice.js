import React from "react";
import "./hrservice.css";

const Hrservice = ({ serviceMappings2 }) => {
  return (
    <section className="hrsection">
      <h1 className="hrh1">1. Virtual Chief Human Resource Officer (vCHRO)</h1>
      <div className="service-process-div">
        {serviceMappings2.map((mapping, index) => (
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
      <h1 className="hrh1">2. HR Shared Services</h1>
        <div className="service-process-div">
        
        <div className="service-toWhom-text">
        <div className="service-toWhom-points">
            <p>Strategic HR & Advisory</p>
            <p>HR Policy Formulation</p>
            <p>Compensation Designing</p>
          </div>
        </div>
        <div className="service-toWhom-text">
        <div className="service-toWhom-points">
            <p>Payroll Administration</p>
            <p>Creating KRA’s</p>
            <p>Dedicated Key Account Manager (KAM)</p>
          </div>
        </div>
        <div className="service-toWhom-text">
        <div className="service-toWhom-points">
            <p>HR Automation – HRMS & ESS Portal</p>
            <p>Statutory Compliance & Advisory</p>
            <p>Grievance Handling</p>
          </div>
        </div>
          
          
         
        
        </div>
        
        <h1 className="hrh1">3. Recruitment Services</h1>
        <div className="service-process-div">
        <div className="service-toWhom-text">
          <h1>Access to the best Candidates</h1>
          <h2>
            Our team specializing in working from our own databases,
            traditional/ new recruitment mediums, and using our extensive
            industry & domain expertise
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Recruitment Process Outsourcing</h1>
          <h2>
            Our technical RPO team handles your complete recruitment process to
            let you focus on your core business
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Automation Enablement</h1>
          <h2>
            We partner with the industry leading Artificial Intelligence driven
            recruitment tools, ATS, Employee screening & pulse check tools, etc.
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Affordable & Efficient Services</h1>
          <h2>
            As our specialized team of recruiters get into a calibration call
            with your team, we understand your business and goals, and hire the
            right people in a timely, cost-effective manner
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Add-on Services</h1>
          <h2>
            Technical interviews (TIAS), Psychometric tests, contract and
            permanent recruitment, executive search, project support, managed
            services, etc.
          </h2>
        </div>
       </div>
    </section>
  );
};

export default Hrservice;
