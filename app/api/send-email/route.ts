import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.reset_key);

// 1. Pass the 'request' parameter into your handler function
export async function POST(request: Request) {
  try {
    // 2. Uncomment this so you can pull the real form submission data
    const { name, email, date, time } = await request.json();

    // 3. ADD 'await' here so Next.js waits for Resend's API response
    const data = await resend.emails.send({
      from: "testing@honourablecleaning.com",
      to: "nammydesigns@gmail.com", // Change this to email if sending to the user
      subject: "Appointment Booking Confirmation",
      html: `
        <h3>New Appointment Booked!</h3>
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
