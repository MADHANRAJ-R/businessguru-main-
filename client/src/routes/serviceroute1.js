import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute1 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Startup Advisory"
        apiRoute="http://localhost:3001/startup-advisory"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute1;
