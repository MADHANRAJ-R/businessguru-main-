import React, { useState } from "react";
import "./form.css";
import axios from "axios";

function Form(props) {
  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    try {
      await axios.post(props.apiRoute, {
        organization,
        name,
        phone,
        email,
        message,
      });

      alert("email sent");
      setOrganization("");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h2>
          {props.serviceName} Services
          {/* <br /> */}
          
        </h2>
      </div>
     
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <div className="input-group">
              <input
                placeholder="Organization"
                type="text"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                placeholder="Phone"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      
    </div>
  );
}

export default Form;