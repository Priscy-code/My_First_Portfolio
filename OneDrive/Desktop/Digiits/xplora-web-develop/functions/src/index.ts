import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "your-email@gmail.com", 
    pass: "your-email-password-or-app-password", 
  },
});

export const sendWaitlistEmail = onDocumentCreated("waitlist/{docId}", async (event) => {
  const data = event.data?.data();
  if (!data || !data.email) {
    console.error("No email found in the document data");
    return;
  }

  const email = data.email;

  const mailOptions = {
    from: '"Your App Name" <your-email@gmail.com>',
    to: email,
    subject: "Welcome to Our Waitlist!",
    text: `Hi ${email}, thanks for signing up for our waitlist!`,
    html: `<p>Hi <strong>${email}</strong>,</p><p>Thank you for signing up for our waitlist!</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
});
