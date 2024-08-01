"use server";

import { sendMail } from "./../../utils/mailer";

interface IContactForm {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const SEND_EMAIL_TO = "savinaykumar@outlook.com";

export async function sendMailContactEmail(
  data: IContactForm
): Promise<boolean> {
  try {
    const mail = await sendMail(
      SEND_EMAIL_TO,
      `${data.name} | ${data.subject} | ${data.email}`,
      `
      From: ${data.email}

      Name: ${data.name}

      Subject: ${data.subject}

      Message: ${data.message}

      `
    );
    console.log(mail);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}
