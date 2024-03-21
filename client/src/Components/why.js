import React from "react";
import "./why.css";
import WhyImg1 from "../Assets/why-img-1.png";
import WhyImg2 from "../Assets/why-img-2.png";
import WhyImg3 from "../Assets/why-img-3.png";
import WhyImg4 from "../Assets/why-img-4.png";

const Why = () => {
  return (
    <div className="why-div">
      <h1>Why Business Guru?</h1>
      <div className="why-content-div">
        <div className="why-content">
          <img src={WhyImg1} alt="image1" />
          <p>Industry Leaders with Domain Expertise</p>
        </div>
        <div className="why-center-line"></div>
        <div className="why-content">
          <img src={WhyImg2} alt="image2" />
          <p>Digitization across Business Processes</p>
        </div>
        <div className="why-center-line"></div>

        <div className="why-content">
          <img src={WhyImg3} alt="image3" />
          <p>Focus on delivering Return-on-investment (ROI)</p>
        </div>
        <div className="why-center-line"></div>

        <div className="why-content">
          <img src={WhyImg4} alt="image4" />
          <p>Unmatched Customer Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
