import React from "react";
import Header from "../Components/nav";
import Footer from "../Components/footer";
// import Form from "../Components/form";
import Contactform from "../Components/contactform";

const ContactRoute = () => {
  return (
    <div>
      <Header active2="active" />
      <div>
        <Contactform
          apiRoute="http://localhost:3001/contact"
          active="active1"
        />
      </div>
    
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8673512599207!2d78.67860727451774!3d10.821461858362465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf575a5752daf%3A0xe349b6321dc99adc!2sTrichy%20Coworks!5e0!3m2!1sen!2sin!4v1725106112767!5m2!1sen!2sin"
    width="100%"
    height="350"
    title="Location Link"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    
  ></iframe>
      <Footer />
    </div>
  );
};

export default ContactRoute;
