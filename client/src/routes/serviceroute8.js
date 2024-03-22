import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute8 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Customer Success Consulting"
        apiRoute="http://localhost:3001/customer-success-consulting"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute8;
