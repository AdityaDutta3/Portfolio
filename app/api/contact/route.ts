import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    const mailOptions: nodemailer.SendMailOptions = {
      from: request.email, 
      to: process.env.EMAIL_RECEIVER,
      subject: 'New message from "Contact Me" form',
      text: request.message,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <h1 style="color: #333333;">Name: ${request.name}</h1>
          <h2 style="color: #666666;">Email: ${request.email}</h2>
          <h4 style="color: #333333;">Subject: ${request.subject}</h4>
          <p style="color: #333333;">Message: ${request.message}</p>
        </div>
      `,
    };

    const response = await transporter.sendMail(mailOptions);


    return NextResponse.json(
      { error: false, emailSent: true, errors: [], response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { error: true, emailSent: false, errors: [error] },
      { status: 500 }
    );
  }
}