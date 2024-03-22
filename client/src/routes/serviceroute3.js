import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute3 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Marketing Consulting"
        apiRoute="http://localhost:3001/marketing-consulting"
      />
      <Servicetemplate />
      <Footer />
    </div>
  );
};

export default ServiceRoute3;
