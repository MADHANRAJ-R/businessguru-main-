const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { organization, name, phone, email, message } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: "sbvg hlly erye lkuj",
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website",
    html: `<p>You got a new visitor for Business Guru website.</p><p>Organization: ${organization} <br />Name: ${name} <br /> Email: ${email} <br /> WhatsApp Number: ${phone}<br /> Message: ${message}</p>`,
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

app.post("/send-email-2", (req, res) => {
  const { organization, name, phone, email, message } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daskrishna0902@gmail.com",
      pass: "sbvg hlly erye lkuj",
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "daskrishna0902@gmail.com",
    subject: "New visitor for Business Guru website route2",
    html: `<p>You got a new visitor for Business Guru website.</p><p>Organization: ${organization} <br />Name: ${name} <br /> Email: ${email} <br /> WhatsApp Number: ${phone}<br /> Message: ${message}</p>`,
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});