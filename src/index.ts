import { getAllEmails } from './db';
import { sendEmail } from './email_setup';
/*
const main = async () => {
  const recipients = await getAllEmails();
  const subject = 'Hackathon Reminder';
  const message = `Hey everyone! Just a quick reminder that the hackathon kicks off tomorrow morning. See you there!`;

  await sendEmail(recipients, subject, message);
};

main();*/

const testMode = true;

const main = async () => {
  let recipients: string[];

  if (testMode) {
    recipients = ['danasiamah003@example.com']; // replace with your test email
  } else {
    recipients = await getAllEmails(); // pull from database
  }

  const subject = 'Test Email from QuackHacks';
  const message = `TEST TEST TEST 123`;

  await sendEmail(recipients, subject, message);
};

main();