"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { formSchema, FormSchema } from "./validations";

export const sendMail = async (formData: FormSchema) => {
  try {
    const validateFields = formSchema.safeParse(formData);

    if (!validateFields.success) {
      throw new Error("Invalid fields");
    }

    const { email, message, name } = validateFields.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_FORM_USERNAME,
        pass: process.env.CONTACT_FORM_APP_PASSWORD,
      },
    });

    const options: Mail.Options = {
      from: `${name} <${email}>`,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      // cc: `${name} <${email}>`,
      subject: `Message from ${name} (${email})`,
      text: message,
      replyTo: `${name} <${email}>`,
    };

    await transporter.sendMail(options);

    return {
      success: true,
      message: "Email sent!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send the message",
      error: error,
    };
  }
};
