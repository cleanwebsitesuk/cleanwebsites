"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/message/CIUXDPB67KAAJ1";

const servicePoints = [
  "Custom-coded website built for your business",
  "Fast loading and mobile-first layout",
  "Home, About, Services/Menu, and Contact/Booking pages",
  "Contact or booking form included",
  "Live in 24 hours from content received",
];

const nextSteps = [
  "We review your enquiry and project scope",
  "We reply as soon as possible",
  "We confirm what is needed and the timeline",
  "Once content is ready, we build and prepare launch",
];

const demoLinks = [
  {
    label: "Barber demo",
    href: "https://cleanwebsites.co.uk/demo/barber",
  },
  {
    label: "Restaurant demo",
    href: "https://cleanwebsites.co.uk/demo/restaurant",
  },
  {
    label: "Salon demo",
    href: "https://cleanwebsites.co.uk/demo/salon",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.41Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.23c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.91 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.38-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export default function StartPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: null,
    text: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitMessage({ type: null, text: "" });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();

      setSubmitMessage({
        type: "success",
        text: "Thanks — your enquiry has been sent. We’ll review it and reply as soon as possible.",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to send your enquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#3B82F6]/10 blur-[140px]" />
        <div className="absolute bottom-[-14%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <main className="relative">
        <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              Start your website
            </div>

            <h1 className="mt-6 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-[#F5F2EA]">
              Start your website
            </h1>

            <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]">
              Tell us about your business and what you need. We build
              custom-coded websites that are fast, mobile-first, and ready to
              launch in 24 hours from content received.
            </p>

            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#8BB5FF]">
              Projects start from £595
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-7">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                What you’ll get
              </div>

              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,2.9rem)] leading-[1] tracking-[-0.04em] text-[#F5F2EA]">
                A clean, professional website built for your business.
              </h2>

              <div className="mt-6 space-y-3">
                {servicePoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    <span className="text-sm leading-6 text-[#F5F2EA]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-7">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                What happens next
              </div>

              <div className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-[#F5F2EA]">
                      0{index + 1}
                    </div>
                    <p className="pt-2 text-sm leading-6 text-[#A9ABB3]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-7">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Practical details
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Projects start from £595, with final pricing depending on scope.",
                  "Hosting is £40/month after launch.",
                  "Your domain is purchased separately by you.",
                  "Written content, business details, and images need to be supplied before build begins.",
                  "One revision is included. Additional revisions can be arranged depending on scope.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    <span className="text-sm leading-6 text-[#F5F2EA]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-7">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Example websites
              </div>

              <div className="mt-5 space-y-3">
                {demoLinks.map((demo) => (
                  <a
                    key={demo.label}
                    href={demo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <span>{demo.label}</span>
                    <span className="text-[#8BB5FF]">Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#111214] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Enquiry form
              </div>
              <h2 className="mt-3 text-2xl tracking-[-0.03em] text-[#F5F2EA]">
                Tell us about your project
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 px-6 py-6 sm:px-8 sm:py-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    autoComplete="email"
                    placeholder="you@business.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Phone <span className="text-[#7F828A]">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    autoComplete="tel"
                    placeholder="Phone number"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Business name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    autoComplete="organization"
                    placeholder="Business name"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="businessType"
                  className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                >
                  Type of business
                </label>
                <input
                  id="businessType"
                  name="businessType"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Describe your business"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>

              <fieldset disabled={isSubmitting}>
                <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                  Do you already have a website?
                </legend>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="hasWebsite"
                      value="yes"
                      required
                      className="h-4 w-4 accent-[#3B82F6]"
                    />
                    <span>Yes</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="hasWebsite"
                      value="no"
                      required
                      className="h-4 w-4 accent-[#3B82F6]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>

              <fieldset disabled={isSubmitting}>
                <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                  Do you already own a domain?
                </legend>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="hasDomain"
                      value="yes"
                      required
                      className="h-4 w-4 accent-[#3B82F6]"
                    />
                    <span>Yes</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="hasDomain"
                      value="no"
                      required
                      className="h-4 w-4 accent-[#3B82F6]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="about"
                  className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                >
                  Tell us about your business
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us what your business does, which pages you need, and anything else we should know."
                  className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Start my website"}
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:w-auto"
                >
                  <WhatsAppIcon />
                  Message us on WhatsApp
                </a>
              </div>

              <p className="text-sm leading-6 text-[#7F828A]">
                Prefer messaging? You can also contact us directly on WhatsApp.
              </p>

              {submitMessage.type && (
                <p
                  aria-live="polite"
                  className={`text-sm leading-6 ${
                    submitMessage.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitMessage.text}
                </p>
              )}

              <div className="space-y-2 text-sm leading-6 text-[#7F828A]">
                <p>
                  Projects start from £595. Hosting is £40/month after launch.
                  Domain is purchased separately by the client.
                </p>
                <p>
                  By sending this form, you’re asking us to get in touch about
                  your website project.
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#111214] px-6 py-10 text-center sm:px-10">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              Need to see more first?
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.04em] text-[#F5F2EA]">
              View our demo websites
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#A9ABB3]">
              Explore example designs and get a feel for the style before you
              enquire.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/demos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                View demos
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111214]/92 px-4 py-3 text-sm font-semibold text-[#F5F2EA] shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#15171A] sm:px-5"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </main>
    </div>
  );
}
