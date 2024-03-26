import React from "react";
import BusinessGuruImg from "../Assets/companyLogo.jpg";
import "./towhom.css";

const Towhom = () => {
  return (
    <div className="toWhom-div">
      <h1>What's in it for me?</h1>

      <div className="toWhom-content-div">
        
        <div className="toWhom-content"  style={{"flexWrap":"wrap-reverse"}}>
          <div className="toWhom-text">
            <h1>SERVICE SEEKER</h1>
            <h2>
              Need a trusted partner with strong fundamentals to own multiple
              operational touch points
            </h2>
            <div className="toWhom-points">
              <p>Helping you focus on your own core business operations</p>
              <p>
                Seeks a reliable partner with requisite subject matter expertise
              </p>
              <p>Needs wide range of services at best commercials</p>
              <p>Corporate assurance on effective service delivery</p>
            </div>
          </div>
          <div className="toWhom-img">
            <img src={BusinessGuruImg} alt="img-bg" />
          </div>
        </div>

        <div className="toWhom-content"  style={{"flexWrap":"wrap"}}>
          <div className="toWhom-img">
            <img src={BusinessGuruImg} alt="img-bg" />
          </div>
          <div className="toWhom-text">
            <h1>CONSULTANT</h1>
            <h2>
            A subject matter expert, governance mentor serving as a link between service seeker & service provider
            </h2>
            <div className="toWhom-points">
              <p>Verified and trustworthy subject matter expert of respective domain</p>
              
              <p>Bridge between service seeker and service provider</p>
              <p>Ensures successful project allocation, governance and delivery</p>
            </div>
          </div>
        </div>

        <div className="toWhom-content"  style={{"flexWrap":"wrap-reverse"}}>
          <div className="toWhom-text">
            <h1>SERVICE PROVIDER</h1>
            <h2>
            Need a trusted partner with strong fundamentals to bring growth & efficiency in the business
            </h2>
            <div className="toWhom-points">
              <p>Sitting on idle capacity</p>
              <p>
              Needs immediate qualified leads commensurate to the size of the business
              </p>
              <p>Presently struggling with the high cost of qualified lead generation</p>
              <p>Corporate assurance on payments</p>
            </div>
          </div>
          <div className="toWhom-img">
            <img src={BusinessGuruImg} alt="img-bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Towhom;
