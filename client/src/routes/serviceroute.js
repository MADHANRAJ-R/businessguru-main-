import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import ServicesPortfolio from "../Components/servicesPortfolio";

const ServiceRoute = () => {
  return (
    <div>
      <Header active3="active"  />
      <Form apiRoute="http://localhost:3001/general-enquiry" />
      <ServicesPortfolio />
      <Footer />
    </div>
  );
};

export default ServiceRoute;
