import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const businessName = formData.get("businessName")?.toString().trim() || "";
    const businessType = formData.get("businessType")?.toString().trim() || "";
    const hasWebsite = formData.get("hasWebsite")?.toString().trim() || "";
    const about = formData.get("about")?.toString().trim() || "";

    if (!name || !email || !businessName || !businessType || !about || !hasWebsite) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    if (!process.env.ENQUIRY_TO_EMAIL) {
      return NextResponse.json(
        { error: "Missing ENQUIRY_TO_EMAIL." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Clean Websites <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: `
New website enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Business name: ${businessName}
Type of business: ${businessType}
Already has website: ${hasWebsite}

About:
${about}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process enquiry.",
      },
      { status: 500 }
    );
  }
}
