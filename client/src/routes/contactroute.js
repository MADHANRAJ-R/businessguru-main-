import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";

const ContactRoute = () => {
  return (
    <div>
      <Header />
      <Form serviceName="" apiRoute="http://localhost:3001/contact" />
      <Footer />
    </div>
  );
};

export default ContactRoute;
