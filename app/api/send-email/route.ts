import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  try {
    const { name, email, date, time } = await req.json();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport(
      new SMTPTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    );

    // Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SMTP_RECEIPT,
      subject: "Appointment booking",
      text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
