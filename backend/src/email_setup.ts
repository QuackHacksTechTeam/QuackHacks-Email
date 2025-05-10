import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendEmail(recipients: string[], subject: string, body: string, imageUrl?: string) {
  //console.log("EMAIL:", process.env.EMAIL);
  //console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "***hidden***" : "MISSING");
  const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com", //Namecheap Private Email
  port: 465,
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

  const htmlContent = `<p>${body}</p>${imageUrl ? `<img src="${imageUrl}" />` : ""}`;

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: recipients.join(","), // 
    subject,
    html: htmlContent,
  });
}

