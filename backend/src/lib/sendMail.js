const nodemailer = require('nodemailer');

const sendMail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // use SSL
      auth: {
        user: process.env.BOT_MAIL,
        pass: process.env.BOT_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.BOT_MAIL,
      to: email,
      subject,
      text,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendMail;