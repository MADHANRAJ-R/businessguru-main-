import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute5 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Lead Generation"
        apiRoute="http://localhost:3001/lead-generation"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute5;
