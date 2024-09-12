import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Webdev from "../Components/webdev";


const ServiceRoute7 = () => {
  return (
    <div>
      <Header />
      <Form
        serviceName="Web Development"
        apiRoute="http://localhost:3001/web-development"
      />
      <Webdev />
      
      <Footer />
    </div>
  );
};

export default ServiceRoute7;
