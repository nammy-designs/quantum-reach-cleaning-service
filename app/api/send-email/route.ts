import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.reset_key);

export async function POST(request: Request) {
  try {
    const { name, email, date, time } = await request.json();

    const data = await resend.emails.send({
      from: `${email}@honourablecleaning.com`,
      to: "nammydesigns@gmail.com",
      subject: `New Booking Request from ${name}`,
      replyTo: email,
      html: `
        <h3>New Appointment Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
