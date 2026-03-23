// app/24-hour-web-design/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24 Hour Web Design for UK Businesses",
  description:
    "Need a professional website fast? Clean Websites builds mobile-first websites for UK businesses in 24 hours. Fixed pricing from £595.",
  alternates: {
    canonical: "/24-hour-web-design",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold">
        24 hour web design for UK businesses
      </h1>

      <p className="mt-6 text-lg">
        We design and build clean, professional websites for UK businesses
        within 24 hours. Perfect for businesses that need to get online quickly
        and start generating enquiries.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">
        What’s included
      </h2>

      <ul className="mt-4 space-y-2">
        <li>• Custom-built website</li>
        <li>• Mobile-first design</li>
        <li>• Contact or booking form</li>
        <li>• Fast loading pages</li>
        <li>• Launch support included</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">
        How it works
      </h2>

      <p className="mt-4">
        Send us your business details and content. Once everything is ready,
        your website can be built and prepared for launch within 24 hours.
      </p>

      <div className="mt-10">
        <Link
          href="/start"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          Start your website
        </Link>
      </div>
    </main>
  );
}
