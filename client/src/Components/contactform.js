import React, { useState } from "react";
import axios from "axios";
import companylogo from "../Assets/companyLogo.jpg";
function Contactform(props) {
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
      alert("Error sending email. Please try again da.");
    }
  };

  return (
    <div className="container">
        <div className="footer-3">
          <h2>Get in Touch</h2>
          <div className="s-inner-div">
            <p>BusinessGuru Consulting Pvt. Ltd.</p>
            <p>CIN: U11111HR1111PTC111111 </p>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <span>
              {" "}
              <p>
                <b>Phone:</b> 91.111111111
              </p>
            </span>
            <p>
              <b>Email:</b> Businessguru@gmail.com
            </p>
            <div className="footer-div-3">
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
            </div>
          </div>
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

export default Contactform;