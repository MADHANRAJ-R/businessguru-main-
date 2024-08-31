import React, { useState } from "react";
import axios from "axios";
import instalogo from "../Assets/instalogo.jpg";
import fblogo from "../Assets/fblogo.jpg";
import walogo from "../Assets/walogo.jpg";
import linkedinlogo from "../Assets/linkedinlogo.jpg";
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
          <p>BusinessGuru</p>
          <p>D-54, 2nd Floor, Trichy Coworks, 9th A Cross,</p>
          <p>Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018.</p>
          <span>
            {" "}
            <p>
              <b>Phone:</b>{" "}
              <a
                href="https://wa.me/918637608759"
                target="_blank"
                rel="noreferrer"
              >
                +91-8637608759
              </a>
            </p>
          </span>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:businessguruoffice@gmail.com">
              businessguruoffice@gmail.com
            </a>
          </p>
          <div className="footer-div-3">
            <div className="social-media-2">
              <a
                href="https://www.linkedin.com/company/31344253/admin/dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinlogo} alt="company-logo" />
              </a>
            </div>
            <div className="social-media-2">
              <a
                href="https://www.facebook.com/profile.php?id=100063566156848"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fblogo} alt="company-logo" />
              </a>{" "}
            </div>
            <div className="social-media-2">
              <img src={instalogo} alt="company-logo" />
            </div>
            <div className="social-media-2">
              <a
                href="https://wa.me/918637608759"
                target="_blank"
                rel="noreferrer"
              >
                <img src={walogo} alt="company-logo" />
              </a>{" "}
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
