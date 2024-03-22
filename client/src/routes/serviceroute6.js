import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute6 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Virtual CXO"
        apiRoute="http://localhost:3001/virtual-cxo"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute6;
