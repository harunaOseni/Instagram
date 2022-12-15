const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  try {
    const msg = {
      from: process.env.EMAIL_FROM,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    transporter.sendMail(msg, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;ƒ