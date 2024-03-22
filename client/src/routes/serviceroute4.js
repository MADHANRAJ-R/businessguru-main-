import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute4 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Digital Marketing"
        apiRoute="http://localhost:3001/digital-marketing"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute4;
