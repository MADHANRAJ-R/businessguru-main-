import React from "react";
import "./home.css";
import img1 from "../Assets/home-img-1.avif";
import img2 from "../Assets/home-img-2.avif";
import img3 from "../Assets/home-img-3.avif";
import img4 from "../Assets/home-img-2.avif";
import { useNavigate } from "react-router-dom";

const HomeComp = () => {
  const navigate = useNavigate();

  const handleService1 = () => {
    setTimeout(() => {
      navigate("/services/startup-advisory");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService2 = () => {
    setTimeout(() => {
      navigate("/services/business-strategy");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService3 = () => {
    setTimeout(() => {
      navigate("/services/marketing-consulting");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService6 = () => {
    setTimeout(() => {
      navigate("/services/virtual-cxo");
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <section className="containerhome">
      
      <div className="banner1">
        <img src={img1} alt="imagebackground" />
        <div className="textboxmaindiv">
        <div className="text-box text-box1">
          
          <h1>Startup-Advisory Services</h1>
          <p>Connect | Consult | Collaborate</p>
          <button className="button2" onClick={handleService1}>View Details</button>
        </div>
        </div>
      </div>

      <div className="banner2">
        <img src={img2} alt="imagebackground" />
        <div className="textboxmaindiv">
        <div className="text-box text-box2">
         
         <h1>Business Strategy Services</h1>
         <p>Connect | Consult | Collaborate</p>
         <button className="button2" onClick={handleService2}>View Details</button>
       </div>
        </div>
        
      </div>

      <div className="banner3">
        <img src={img3} alt="imagebackground" />
        <div className="textboxmaindiv">
        <div className="text-box text-box3">
          
          <h1>Marketing Consulting Services</h1>
          <p>Connect | Consult | Collaborate</p>
          <button className="button2" onClick={handleService3}>View Details</button>
        </div>
        </div>
        
      </div>

      <div className="banner4">
        <img src={img4} alt="imagebackground" />
        <div className="textboxmaindiv">
        <div className="text-box text-box4">
          
          <h1>Virtual CXO Services</h1>
          <p>Connect | Consult | Collaborate</p>
          <button className="button2" onClick={handleService6}>View Details</button>
        </div>

        </div>
       
      </div>
    </section>
  );
};

export default HomeComp;
