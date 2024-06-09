"use server";
import ContactEmailForm from "@/components/email/contact-email-form";
import { getErrorMessage } from "@/utils/get-error-message";
import { validateString } from "@/utils/validate-string";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }
  var data;
  try {
    data = await resend.emails.send({
      from: "Contact <achmad24daniel@gmail.com>",
      to: "achmad24daniel@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactEmailForm, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return { data };
}
