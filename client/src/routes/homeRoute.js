import React from "react";
import Header from "../Components/nav";
import Intro from "../Components/intro";
import Footer from "../Components/footer";
import HomeComp from "../Components/home";
import HomeImg1 from "../Assets/home-img-1.avif";
import HomeImg2 from "../Assets/home-img-2.avif";
import HomeImg3 from "../Assets/home-img-3.avif";
import ServicesPortfolio from "../Components/servicesPortfolio"

const Home = () => {
  const images = [HomeImg1, HomeImg2, HomeImg3];
  return (
    <div>
      <Header />
      <HomeComp images={images} />
      <Intro />
      <ServicesPortfolio />
      <Footer />
    </div>
  );
};

export default Home;
