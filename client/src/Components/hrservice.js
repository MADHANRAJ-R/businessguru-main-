import React from "react";
import "./hrservice.css";

const Hrservice = ({ serviceMappings2 }) => {
  return (
    <section className="hrsection">
      <h1 className="hrh1">Business Strategy Creation Services</h1>
      <p className="BSP">
        In today’s fast-paced and ever-changing business landscape, having a
        well-defined and adaptable strategy is crucial for long-term success.
        Our business strategy creation services are tailored to help
        organizations of all sizes and industries craft clear, actionable, and
        data-driven plans that align with their vision and objectives. We
        partner with you to build a robust strategy that drives sustainable
        growth, competitiveness, and innovation.
      </p>
      <h1 className="hrh1">1. Our Approach to Business Strategy Creation</h1>
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

      <h1 className="hrh1">2. Why Choose Us for Business Strategy Creation?</h1>
      <div className="service-process-div">
        <div className="service-toWhom-text">
          <h1>Tailored Solutions</h1>
          <h2>
            We don’t believe in one-size-fits-all. Each strategy is customized
            to your unique business needs, market dynamics, and growth
            aspirations.
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Expert Insights</h1>
          <h2>
            Our experienced strategists bring industry-specific expertise and
            cutting-edge thinking to help you navigate complex business
            challenges.
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>Data-Driven Approach</h1>
          <h2>
            We rely on rigorous data analysis to inform our recommendations,
            ensuring that your strategy is built on a solid foundation of market
            intelligence and financial acumen.
          </h2>
        </div>
        <div className="service-toWhom-text">
          <h1>End-to-End Support</h1>
          <h2>
            From analysis and planning to execution and refinement, we partner
            with you every step of the way to ensure your strategic goals are
            met.
          </h2>
        </div>
      </div>
      <p className="BSP">With our business strategy creation services, you can feel confident that your business is equipped with a well-structured, actionable plan to drive growth, optimize performance, and secure long-term success in an increasingly competitive environment. Let us help you turn your vision into reality.</p>
    </section>
  );
};

export default Hrservice;
