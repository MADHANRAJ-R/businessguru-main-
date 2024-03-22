import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute2 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Human Resource"
        apiRoute="http://localhost:3001/human-resource"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute2;
