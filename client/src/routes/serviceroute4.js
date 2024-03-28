import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
// import Servicetemplate from "../Components/servicetemplate";
import Digiservice from "../Components/digiservice";

const ServiceRoute4 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Digital Marketing"
        apiRoute="http://localhost:3001/digital-marketing"
      />
      <Digiservice />
      <Footer />
    </div>
  );
};

export default ServiceRoute4;
