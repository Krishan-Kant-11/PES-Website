const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Replace these with your email credentials
const emailConfig = {
  user: 'your-email@example.com',
  pass: 'your-email-password',
};

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// get request for senity check
router.get('/', (req, res) => {
  res.send("Contact is working (get request)");
});

// Route to handle form submission
router.post('/send-email', async (req, res) => {
  try {
    const { name, email, message, query } = req.body;

    // Create email message
    const mailOptions = {
      from: emailConfig.user,
      to: "2021meb1293@iitrpr.ac.in", // Replace with your email address
      subject: 'Message From PES Website',
      text: `Name: ${name}\nEmail: ${email}\nQuery related to: ${query}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent sucessfully!!");

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
