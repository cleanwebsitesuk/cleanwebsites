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
  from: "Clean Websites <hello@cleanwebsites.co.uk>",
  to: process.env.ENQUIRY_TO_EMAIL,
  replyTo: email,
  subject: `🚀 NEW WEBSITE ENQUIRY — ${businessName}`,
  html: `
  <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:40px;">
    <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden; border:1px solid #eee;">
      
      <div style="background:#0A0A0B; padding:20px 28px;">
        <h2 style="color:#ffffff; margin:0;">New Website Enquiry</h2>
      </div>

      <div style="padding:28px;">
        
        <h3 style="margin-top:0;">Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />

        <h3>Business</h3>
        <p><strong>Business name:</strong> ${businessName}</p>
        <p><strong>Type of business:</strong> ${businessType}</p>
        <p><strong>Already has website:</strong> ${hasWebsite}</p>

        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />

        <h3>Project details</h3>
        <p style="line-height:1.6;">${about.replace(/\n/g, "<br>")}</p>

      </div>

      <div style="background:#fafafa;padding:16px 28px;font-size:12px;color:#666;">
        Sent from cleanwebsites.co.uk enquiry form
      </div>

    </div>
  </div>
  `
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
