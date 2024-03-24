import React from "react";
import "./home.css";
import img1 from "../Assets/home-img-1.avif";
import img2 from "../Assets/home-img-2.avif";
import img3 from "../Assets/home-img-3.avif";
import img4 from "../Assets/home-img-2.avif";
const HomeComp = () => {
  return (
    <section className="containerhome">
      <div className="banner1">
      <img src={img1} alt="imagebackground" />
      <div className="text-box text-box1">
        <p>
          Outsourcing Services-IT | Finance | Legal & Compilance |HR | Sales &
          Marketing
        </p>
        <h1>Shared Services</h1>
        <p>Engage | Read | Operate | Transfer</p>
        <button>show more</button>
      </div>
    </div>

    <div className="banner2">
      <img src={img2} alt="imagebackground" />
      <div className="text-box text-box2">
        <p>
          Outsourcing Services-IT | Finance | Legal & Compilance |HR | Sales &
          Marketing
        </p>
        <h1>Shared Services</h1>
        <p>Engage | Read | Operate | Transfer</p>
        <button>show more</button>
      </div>
    </div>

    <div className="banner3">
      <img src={img3} alt="imagebackground" />
      <div className="text-box text-box3">
        <p>
          Outsourcing Services-IT | Finance | Legal & Compilance |HR | Sales &
          Marketing
        </p>
        <h1>Shared Services</h1>
        <p>Engage | Read | Operate | Transfer</p>
        <button>show more</button>
      </div>
    </div>

    <div className="banner4">
      <img src={img4} alt="imagebackground" />
      <div className="text-box text-box4">
        <p>
          Outsourcing Services-IT | Finance | Legal & Compilance |HR | Sales &
          Marketing
        </p>
        <h1>Shared Services</h1>
        <p>Engage | Read | Operate | Transfer</p>
        <button>show more</button>
      </div>
    </div>
    </section>
  );
};

export default HomeComp;