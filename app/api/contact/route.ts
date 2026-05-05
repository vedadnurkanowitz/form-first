import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, goal, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If Resend API key is configured, send the email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "website@formfirst.com",
        to: "trainer@formfirst.com",
        subject: `New enquiry from ${name}`,
        html: `
          <h2>New enquiry from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Goal:</strong> ${goal || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
