import { NextResponse } from "next/server";

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

    console.log("New enquiry received:");
    console.log({
      name,
      email,
      phone,
      businessName,
      businessType,
      hasWebsite,
      about,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
