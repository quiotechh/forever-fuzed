import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASSWORD;
const recipientEmail = process.env.CONTACT_EMAIL;
const fromEmail = process.env.SMTP_FROM ?? smtpUser;

const transport = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth:
    smtpUser && smtpPass
      ? {
          user: smtpUser,
          pass: smtpPass,
        }
      : undefined,
});

function buildMessage(data: Record<string, string>) {
  const {
    name,
    email,
    phone,
    country,
    event_type,
    wedding_date,
    destination,
    guests,
    budget,
    referral,
    message,
  } = data;

  const html = `
    <h2>New enquiry from Forever Fuzed website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Country:</strong> ${country || "N/A"}</p>
    <p><strong>Event Type:</strong> ${event_type || "N/A"}</p>
    <p><strong>Wedding Date:</strong> ${wedding_date || "N/A"}</p>
    <p><strong>Destination:</strong> ${destination || "N/A"}</p>
    <p><strong>Guests:</strong> ${guests || "N/A"}</p>
    <p><strong>Budget:</strong> ${budget || "N/A"}</p>
    <p><strong>Referral:</strong> ${referral || "N/A"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const text = `
New enquiry from Forever Fuzed website

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Country: ${country || "N/A"}
Event Type: ${event_type || "N/A"}
Wedding Date: ${wedding_date || "N/A"}
Destination: ${destination || "N/A"}
Guests: ${guests || "N/A"}
Budget: ${budget || "N/A"}
Referral: ${referral || "N/A"}

Message:
${message}
`;

  return { html, text };
}

export async function POST(req: Request) {
  if (!smtpHost || !smtpUser || !smtpPass || !recipientEmail) {
    return NextResponse.json(
      {
        error:
          "Email server is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD and CONTACT_EMAIL.",
      },
      { status: 500 },
    );
  }

  const body = await req.json();
  const { name, email, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required fields." },
      { status: 400 },
    );
  }

  const messagePayload = buildMessage(body as Record<string, string>);

  try {
    await transport.sendMail({
      from: `Forever Fuzed <${fromEmail}>`,
      to: recipientEmail,
      subject: `New enquiry from ${name}`,
      text: messagePayload.text,
      html: messagePayload.html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 500 },
    );
  }
}
