// implement node mailer
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: process.env.NEXT_MAIL_PROVIDER,
  auth: {
    user: process.env.NEXT_MAIL_USER,
    pass: process.env.NEXT_MAIL_PASS,
  },
});

// write send mail function
export const sendMail = (
  to: string,
  subject: string,
  text: string
): boolean => {
  try {
    transporter.sendMail({
      from: process.env.NEXT_MAIL_USER,
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Error sending email");
    console.log(error);
    return false;
  }
};
