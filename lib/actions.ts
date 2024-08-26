"use server";

import { db } from "@/db/db";
import { subscriberEmailTable } from "@/db/schema";
import {
  formSchema,
  getInTouchFormSchema,
  newsletterEmailSchema,
} from "@/lib/definitions";
import { Transporter, createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { action } from "./safe-action";

//Function for nodemailer transporter
function getNodemailerTransporter(): Transporter {
  return createTransport({
    service: process.env.NODEMAILER_HOST as string,
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
}

// Server action for contact form
export const contactFormAction = action
  .schema(getInTouchFormSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    if (!name || !email) {
      return { success: false, message: "Please add all required fields" };
    }

    const transporter = getNodemailerTransporter();

    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_USERNAME,
      to: process.env.NODEMAILER_USERNAME,
      subject: `Message from Big0 Contact Form`,
      text: `New Submission from ${name}
      Email: ${email}
      Message: ${message}
      `,
    };

    const sendMailPromise = () => {
      return new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve();
          } else {
            reject(new Error(err.message));
          }
        });
      });
    };

    try {
      await sendMailPromise();
      return { success: true, message: "Form submitted successfully" };
    } catch (error) {
      return {
        success: false,
        message: `An error occurred: ${(error as Error).message}`,
      };
    }
  });

// Server action for quote form
export const quoteFormAction = action
  .schema(formSchema)
  .action(async ({ parsedInput: { fullname, email, phone, company } }) => {
    if (!fullname || !email || !phone || !company) {
      return { success: false, message: "Please add all required fields" };
    }

    const transport = getNodemailerTransporter();
    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_USERNAME,
      to: process.env.NODEMAILER_USERNAME,
      subject: `New quote for Big0 from ${fullname} ${email}`,
      text: `${fullname} Submitted following data: 
        Fullname: ${fullname}
        Email: ${email}
        Phone Number: ${phone}
        Company: ${company}
        `,
    };

    const sendMailPromise = () =>
      new Promise<void>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve();
          } else {
            reject(err.message);
          }
        });
      });

    try {
      await sendMailPromise();
      return { success: true, message: "Form Submitted Successfully" };
    } catch (error) {
      if (error) {
        return {
          success: false,
          message: `An error occurred: ${(error as Error).message}`,
        };
      }
    }
  });

// Server action for news letter
export const subscriberEmailAction = action
  .schema(newsletterEmailSchema)
  .action(async ({ parsedInput: { email } }) => {
    if (!email) {
      return { success: false, message: "Entire a valid email" };
    }

    try {
      await db.insert(subscriberEmailTable).values({ email: email });
      return { success: true, message: "Email Sent!!" };
    } catch (err) {
      if (err)
        return {
          errors: { message: "Email already subscribed" },
          message: "Email already subscribed",
        };
    }
  });
