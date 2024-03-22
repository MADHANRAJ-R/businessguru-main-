import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute7 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Web Development"
        apiRoute="http://localhost:3001/web-development"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute7;
