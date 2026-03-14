"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const serviceOptions = [
  "Emergency Plumbing",
  "Leak Detection",
  "Boiler Repairs",
  "Bathroom Installations",
  "Pipe Repairs",
  "Drain Clearing",
  "General Enquiry",
];

export default function TradesContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 420;
      setShowBackButton(window.scrollY < triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !showDemoModal) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showDemoModal) {
          setShowDemoModal(false);
        } else {
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen, showDemoModal]);

  useEffect(() => {
    if (showDemoModal) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showDemoModal]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowDemoModal(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-[#0F172A]">
      {/* Demo Banner */}
      <div className="fixed inset-x-0 top-0 z-[90] border-b border-blue-300/40 bg-[linear-gradient(90deg,#2563EB_0%,#1D4ED8_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,99,235,0.22)]">
        This is a demo website created by{" "}
        <Link
          href="/"
          className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-blue-100"
        >
          Clean Websites
        </Link>
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/demo/trades"
            className="group flex items-center gap-3 text-lg font-bold tracking-[0.08em] text-[#0F172A] sm:text-xl"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition duration-300 group-hover:-translate-y-0.5">
              💧
            </span>
            <span>BESTFLOW PLUMBING</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/demo/trades"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              Home
            </Link>
            <Link
              href="/demo/trades/about"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              About
            </Link>
            <Link
              href="/demo/trades/services"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              Services
            </Link>
            <Link
              href="/demo/trades/contact"
              className="text-sm font-medium text-[#2563EB]"
            >
              Contact
            </Link>
            <Link
              href="/demo/trades/contact"
              className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-[#0F172A] shadow-sm transition duration-200 hover:bg-slate-50 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Back Button */}
      <Link
        href="/"
        className={`fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
        ${
          menuOpen || !showBackButton
            ? "pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto"
            : "translate-y-0 opacity-100"
        }`}
      >
        ← Back to Clean Websites
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-slate-950/45 md:hidden"
          />

          <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:hidden animate-[fadeIn_.2s_ease-out]">
            <div className="flex flex-col gap-2">
              <Link
                href="/demo/trades"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/demo/trades/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/demo/trades/services"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Services
              </Link>
              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-blue-50 px-4 py-3 text-base font-medium text-[#2563EB]"
              >
                Contact
              </Link>
              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-5">
          <button
            type="button"
            aria-label="Close modal overlay"
            onClick={() => setShowDemoModal(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"
          />
          <div className="relative w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_30px_100px_rgba(15,23,42,0.28)] animate-[fadeUp_.25s_ease-out] sm:p-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#2563EB]">
              ✓
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Demo site
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0F172A]">
              This is a Clean Websites demo
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This booking form is for demonstration purposes only. If you’d
              like a website like this for your business, visit{" "}
              <a
                href="https://www.cleanwebsites.co.uk"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#2563EB] underline decoration-blue-200 underline-offset-4"
              >
                www.cleanwebsites.co.uk
              </a>
              .
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.cleanwebsites.co.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Visit Clean Websites
              </a>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] transition duration-200 hover:border-blue-200 hover:text-[#2563EB]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[122px]">
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="animate-[fadeUp_.7s_ease-out]">
                <div className="inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
                  Request a Quote
                </div>

                <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
                  Tell us about your plumbing issue and we’ll get back to you shortly
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Bestflow Plumbing provides fast, dependable support across
                  Bristol for urgent repairs, planned plumbing work, and general enquiries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                      Call now
                    </p>
                    <a
                      href="tel:01170000000"
                      className="mt-2 inline-block text-2xl font-bold text-[#0F172A]"
                    >
                      0117 000 0000
                    </a>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Click to call on mobile for fast help.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                      Email
                    </p>
                    <a
                      href="mailto:demo@bestflowplumbing.co.uk"
                      className="mt-2 inline-block break-all text-lg font-semibold text-[#0F172A]"
                    >
                      demo@bestflowplumbing.co.uk
                    </a>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      For quotes, bookings, and general enquiries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-[fadeUp_.85s_ease-out]">
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-7 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                        Contact details
                      </p>

                      <div className="mt-6 space-y-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Address
                          </p>
                          <p className="mt-2 text-base leading-8 text-slate-700">
                            21 Example Drive
                            <br />
                            Bristol
                            <br />
                            BS8 0XX
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Opening hours
                          </p>
                          <div className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
                            <p>Mon–Fri: 8:00 – 18:00</p>
                            <p>Sat: 9:00 – 15:00</p>
                            <p>Sun: Emergency only</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="min-h-[280px] border-t border-slate-200 bg-[#E2E8F0] md:min-h-full md:border-l md:border-t-0">
                      <div className="flex h-full min-h-[280px] items-center justify-center bg-[linear-gradient(135deg,#dbeafe_0%,#e2e8f0_100%)] p-6 text-center">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                            Map Placeholder
                          </p>
                          <p className="mt-3 max-w-[16rem] text-sm leading-7 text-slate-600">
                            A map embed or local service coverage graphic can sit here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form + Side Panel */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div className="animate-[fadeUp_.7s_ease-out]">
                <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
                  <div className="max-w-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                      Quote Form
                    </p>
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                      Request a quote
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          Name
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          Phone
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          placeholder="Your phone number"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          Email
                        </span>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          placeholder="Your email address"
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          Service required
                        </span>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              service: e.target.value,
                            }))
                          }
                          className="h-12 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-700">
                        Message
                      </span>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="rounded-[24px] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        placeholder="Tell us about the plumbing issue or work required"
                      />
                    </label>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                      >
                        Request Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="animate-[fadeUp_.85s_ease-out] space-y-6">
                <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    What to include
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                    Help us respond faster
                  </h3>
                  <div className="mt-6 space-y-4">
                    {[
                      "A short description of the issue",
                      "Your postcode or area in Bristol",
                      "Any relevant timings or urgency",
                      "Photos if applicable when following up by email",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
                        <p className="text-sm leading-7 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-7 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    Opening Hours
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                      <span>Mon–Fri</span>
                      <span className="font-medium">8:00 – 18:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                      <span>Sat</span>
                      <span className="font-medium">9:00 – 15:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Sun</span>
                      <span className="font-medium">Emergency only</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    Local Service
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                    Bristol and surrounding areas
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Bestflow Plumbing supports homeowners, landlords, and small
                    commercial premises across Bristol with emergency plumbing,
                    repairs, and planned work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18)_0%,rgba(255,255,255,0.04)_100%)] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.28)] md:p-10">
              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                    Need a plumber?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Call now for fast, dependable plumbing support
                  </h2>
                  <p className="mt-4 text-slate-300">
                    Speak directly to a local Bristol plumbing team for repairs,
                    urgent issues, and quote requests.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <a
                    href="tel:01170000000"
                    className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Call Now
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Bestflow Plumbing
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Professional plumbing services for homes and businesses across
                Bristol, with a focus on reliability, clear communication, and
                practical workmanship.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/demo/trades" className="transition hover:text-[#2563EB]">
                  Home
                </Link>
                <Link href="/demo/trades/about" className="transition hover:text-[#2563EB]">
                  About
                </Link>
                <Link href="/demo/trades/services" className="transition hover:text-[#2563EB]">
                  Services
                </Link>
                <Link href="/demo/trades/contact" className="transition hover:text-[#2563EB]">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Contact Info
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>21 Example Drive</p>
                <p>Bristol</p>
                <p>BS8 0XX</p>
                <p>
                  <a href="tel:01170000000" className="transition hover:text-[#2563EB]">
                    0117 000 0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:demo@bestflowplumbing.co.uk"
                    className="transition hover:text-[#2563EB]"
                  >
                    demo@bestflowplumbing.co.uk
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Service Area
              </h4>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Serving Bristol and surrounding areas with emergency plumbing,
                repairs, installations, and general maintenance support.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
