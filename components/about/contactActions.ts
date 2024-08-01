"use server";

import { sendMail } from "./../../utils/mailer";

interface IContactForm {
  name: string;
  topic: string;
  email: string;
  message: string;
}

export async function sendMailContactEmail(
  data: IContactForm
): Promise<boolean> {
  try {
    const mail = await sendMail(
      data.email,
      data.name + " | " + data.topic,
      data.message + "\n\n" + data.name
    );
    console.log(mail);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}
