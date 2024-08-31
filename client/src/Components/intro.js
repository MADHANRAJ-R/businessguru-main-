import React from "react";
import "./intro.css";
import introImg from "../Assets/intro-img.jpg"


const Intro = () => {
  return (
    
      <div className="intro-div">
        <div className="intro-video-div">
          <div className="video-div">
            {/* <iframe
              
              height="350"
              src="https://www.youtube.com/embed/DgJ4sgI5GXM?si=dsxg8-PlpNIOFznr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <img src={introImg} alt="introImg" />
          </div>
        </div>
        <div className="intro-content-div">
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

  );
};

export default Intro;