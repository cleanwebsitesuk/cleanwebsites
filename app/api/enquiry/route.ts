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

    const imageFiles = formData
      .getAll("images")
      .filter((file): file is File => file instanceof File && file.size > 0);

    if (!name || !email || !businessName || !businessType || !about) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (imageFiles.length > 10) {
      return NextResponse.json(
        { error: "You can upload up to 10 images." },
        { status: 400 }
      );
    }

    for (const file of imageFiles) {
      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "Only image files are allowed." },
          { status: 400 }
        );
      }

      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Each image must be under 5MB." },
          { status: 400 }
        );
      }
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
      imageCount: imageFiles.length,
      imageNames: imageFiles.map((file) => file.name),
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
