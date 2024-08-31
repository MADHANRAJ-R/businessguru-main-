const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

//Below are the api routes for the email templates

// Email Templates
const obj = {
  Mainservice: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: General Enquiry <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  Contact: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Contact <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service1: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Start-Up Advisory <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service2: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry:Business Strategy <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service3: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Marketing Consulting <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service4: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Digital Marketing <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service5: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Lead Generation <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service6: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Customer Success Consulting <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service7: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Web Development <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },

  service8: (organization, name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for Business Guru website.</p>
                     <p>Enquiry: Virtual CXO <br /> 
                     Organization: ${organization} <br />
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  },
};

// Main Service
app.post("/general-enquiry", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.Mainservice(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Contact
app.post("/contact", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.Contact(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-1
app.post("/startup-advisory", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service1(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-2
app.post("/business-strategy", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service2(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-3
app.post("/marketing-consulting", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service3(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-4
app.post("/digital-marketing", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service4(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-5
app.post("/lead-generation", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service5(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-6
app.post("/customer-success-consulting", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service6(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-7
app.post("/web-development", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service7(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//service-8
app.post("/virtual-cxo", (req, res) => {
  const { organization, name, phone, email, message } = req.body;
  //nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: obj.service8(organization, name, email, phone, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

//listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
