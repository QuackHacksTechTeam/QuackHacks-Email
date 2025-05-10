import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (
  recipients: string[],
  subject: string,
  text: string
): Promise<void> => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join(','),
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (err) {
    console.error('Failed to send email:', err);
  }
};

export { sendEmail };