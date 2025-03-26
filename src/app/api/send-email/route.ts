import {NextRequest, NextResponse} from "next/server";
import nodemailer from 'nodemailer';


interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {firstName, lastName,  phone, subject, email, message}: ContactFormData = body;

    // Validate input
    if (!firstName || !lastName || !phone || !email || !message) {
        return NextResponse.json(
            {message: 'Missing required fields'},
            {status: 400}
        );
    }

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    try {
        // Send email
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New message from ${firstName + ' ' + lastName}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName + ' ' + lastName}</p>
        <p><strong>Number:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        // Successful response
        return NextResponse.json(
            {message: 'Message sent successfully!'},
            {status: 200}
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            {message: 'Failed to send message. Please try again later.'},
            {status: 500}
        );
    }
}