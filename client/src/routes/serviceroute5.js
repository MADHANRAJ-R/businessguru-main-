import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
// import Servicetemplate from "../Components/servicetemplate";
import Leadgen from "../Components/leadgen";

const ServiceRoute5 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Lead Generation"
        apiRoute="http://localhost:3001/lead-generation"
      />
      <Leadgen />
      <Footer />
    </div>
  );
};

export default ServiceRoute5;
