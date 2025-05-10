import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getAllEmails } from "./db";
import { sendEmail } from "./email_setup";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const testMode = true;

app.post("/send-email", async (req, res) => {
  try {
    let recipients: string[];

    if (testMode) {
      recipients = ["danasiamah003@gmail.com"];
    } else {
      recipients = await getAllEmails();
    }

    const { subject, body, imageUrl } = req.body;

    await sendEmail(recipients, subject, body, imageUrl);
    res.status(200).send("Email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email");
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001"); // ✅ This should appear
});
