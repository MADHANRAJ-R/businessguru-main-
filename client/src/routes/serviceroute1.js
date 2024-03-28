import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute1 = () => {
  const title = {
    title1: "1.Business Registration",
    title2: "Legal & Compliance",
    title3: "GST & Income Tax Registration",
    title4: "Government Schemes and Subsidies",
  };

  const subTitle = {
    subTitle1: "Transparent | Seamless | SLA-driven",
  };

  const points = {
    name: "krishna",
  };

  return (
    <div>
      <Header />
      <Form
        serviceName="Startup Advisory"
        apiRoute="http://localhost:3001/startup-advisory"
      />
      <Servicetemplate title1={title.title1} subtitle1={subTitle.subTitle1} />
      <Footer />
    </div>
  );
};

export default ServiceRoute1;
