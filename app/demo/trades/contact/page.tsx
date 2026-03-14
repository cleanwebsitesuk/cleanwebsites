"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const contactDetails = {
  addressLine1: "21 Example Drive",
  city: "Bristol",
  postcode: "BS8 0XX",
  phone: "0117 000 0000",
  email: "demo@bestflowplumbing.co.uk",
};

const openingHours = [
  "Mon–Fri: 8:00 – 18:00",
  "Sat: 9:00 – 15:00",
  "Sun: Emergency only",
];

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
    preferredDate: "",
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
    if (!showDemoModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDemoModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDemoModal]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || showDemoModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, showDemoModal]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowDemoModal(true);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes menuIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmerGlow {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(37, 99, 235, 0.14);
          }
          50% {
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.8s ease-out 0.12s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.24s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.8s ease-out 0.36s both;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float-soft {
          animation: floatSoft 6s ease-in-out infinite;
        }

        .animate-glow-soft {
          animation: shimmerGlow 3.6s ease-in-out infinite;
        }

        .animate-modal-in {
          animation: modalIn 0.22s ease-out both;
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

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff_0%,#f8fbff_38%,#eef5ff_100%)] text-[#102033] selection:bg-blue-100 selection:text-[#0F172A]">
        <div className="fixed inset-x-0 top-0 z-[90] border-b border-blue-300/40 bg-[linear-gradient(90deg,#1d4ed8_0%,#2563eb_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.22)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-white"
          >
            Clean Websites
          </Link>
        </div>

        <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-blue-100 bg-[rgba(255,255,255,0.92)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/trades"
              className="flex items-center gap-3 text-xl font-semibold uppercase tracking-[0.14em] text-[#16314f]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] text-lg text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)]">
                💧
              </span>
              Bestflow Plumbing
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/demo/trades"
                className="text-sm font-medium text-[#49617b] transition hover:text-[#2563EB]"
              >
                Home
              </Link>
              <Link
                href="/demo/trades/about"
                className="text-sm font-medium text-[#49617b] transition hover:text-[#2563EB]"
              >
                About
              </Link>
              <Link
                href="/demo/trades/services"
                className="text-sm font-medium text-[#49617b] transition hover:text-[#2563EB]"
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
                className="rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#1d4ed8_100%)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(37,99,235,0.34)]"
              >
                Get a Quote
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-white/90 p-3 text-[#16314f] shadow-sm transition hover:bg-white md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </header>

        <Link
          href="/"
          className={`animate-glow-soft fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
          ${
            menuOpen || showDemoModal || !showBackButton
              ? "pointer-events-none opacity-0 -translate-y-3 md:pointer-events-auto"
              : "translate-y-0 opacity-100"
          }`}
        >
          ← Back to Clean Websites
        </Link>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-[rgba(15,23,42,0.48)] transition-opacity duration-200 md:hidden"
            />
            <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(19,49,84,0.96)_0%,rgba(15,32,56,0.96)_100%)] p-4 shadow-[0_22px_60px_rgba(15,23,42,0.34)] transition-all duration-200 ease-out animate-[menuIn_0.2s_ease-out] md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/demo/trades"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/demo/trades/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="/demo/trades/services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Services
                </Link>
                <Link
                  href="/demo/trades/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-base font-medium text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/demo/trades/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#1d4ed8_100%)] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.26)] transition hover:scale-[1.01]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </>
        )}

        {showDemoModal && (
          <>
            <button
              type="button"
              aria-label="Close demo modal"
              onClick={() => setShowDemoModal(false)}
              className="fixed inset-0 z-[100] bg-[rgba(15,23,42,0.58)] backdrop-blur-[2px]"
            />
            <div className="fixed inset-x-4 top-1/2 z-[110] mx-auto w-full max-w-md -translate-y-1/2 rounded-[32px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,255,0.98)_100%)] p-7 shadow-[0_30px_80px_rgba(15,23,42,0.24)] animate-modal-in">
              <div className="inline-flex rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
                Demo site
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#102033]">
                This is a Clean Websites demo
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#4e6177]">
                This plumbing enquiry form is for demonstration purposes only.
                If you’d like a website like this for your business, visit{" "}
                <a
                  href="https://www.cleanwebsites.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#2563EB] underline underline-offset-4"
                >
                  www.cleanwebsites.co.uk
                </a>
                .
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.cleanwebsites.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#1d4ed8_100%)] px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Visit Clean Websites
                </a>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-[#16314f] transition hover:bg-[#f8fbff]"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[180px] md:pt-[130px]">
          <div
            className="absolute inset-0 animate-fade-in bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.95)_0%,rgba(245,249,255,0.86)_35%,rgba(240,247,255,0.78)_100%)] md:bg-[linear-gradient(90deg,rgba(248,251,255,0.94)_0%,rgba(245,249,255,0.80)_42%,rgba(37,99,235,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,197,253,0.30),transparent_38%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#93c5fd]/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#60a5fa]/12 blur-3xl" />

          <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-blue-100 bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563EB] shadow-[0_8px_20px_rgba(37,99,235,0.08)] backdrop-blur-sm">
                Contact & Quotes
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#102033] sm:text-5xl lg:text-6xl">
                Fast plumbing help, repairs, and quote requests.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#51657b] sm:text-lg">
                Get in touch with Bestflow Plumbing for urgent plumbing issues,
                planned repair work, bathroom upgrades, and general enquiries
                across Bristol and surrounding areas.
              </p>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-lg grid-cols-1 gap-4 rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur-md sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                    Call now
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#23415f]">
                    {contactDetails.phone}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                    Opening today
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#23415f]">
                    Mon–Fri: 8:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-blue-100 bg-white/90 p-7 shadow-[0_16px_40px_rgba(37,99,235,0.08)]">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#2563EB]">
                  Plumbing Details
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-[#16314f]">
                  Visit or contact Bestflow Plumbing
                </h2>

                <div className="mt-6 space-y-6 text-sm leading-8 text-[#566a7f]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      Address
                    </p>
                    <div className="mt-2">
                      <p>{contactDetails.addressLine1}</p>
                      <p>{contactDetails.city}</p>
                      <p>{contactDetails.postcode}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      Phone
                    </p>
                    <p className="mt-2">{contactDetails.phone}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      Email
                    </p>
                    <p className="mt-2 break-all">{contactDetails.email}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      Opening hours
                    </p>
                    <div className="mt-2">
                      {openingHours.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-[28px] border border-blue-100 bg-white/90 shadow-[0_16px_40px_rgba(37,99,235,0.08)]">
                <div className="relative min-h-[280px] overflow-hidden bg-[linear-gradient(135deg,#dbeafe_0%,#eff6ff_100%)] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_30%)]" />
                  <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
                  <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-white/25 blur-2xl" />

                  <div className="relative h-full rounded-[22px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.34)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                          Service area
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#23415f]">
                          {contactDetails.addressLine1}, {contactDetails.city}
                        </p>
                      </div>
                      <div className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                        Demo
                      </div>
                    </div>

                    <div className="relative mt-5 h-[180px] overflow-hidden rounded-[18px] border border-white/60 bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_100%)]">
                      <div className="absolute inset-0 opacity-70">
                        <div className="absolute inset-y-0 left-[18%] w-px bg-[#bfdbfe]" />
                        <div className="absolute inset-y-0 left-[42%] w-px bg-[#bfdbfe]" />
                        <div className="absolute inset-y-0 left-[66%] w-px bg-[#bfdbfe]" />
                        <div className="absolute inset-x-0 top-[22%] h-px bg-[#bfdbfe]" />
                        <div className="absolute inset-x-0 top-[52%] h-px bg-[#bfdbfe]" />
                        <div className="absolute inset-x-0 top-[78%] h-px bg-[#bfdbfe]" />
                      </div>

                      <div className="absolute left-[12%] top-[18%] h-3 w-[48%] rotate-[12deg] rounded-full bg-[#60a5fa]/55" />
                      <div className="absolute right-[10%] top-[28%] h-3 w-[38%] -rotate-[24deg] rounded-full bg-[#2563eb]/45" />
                      <div className="absolute left-[24%] bottom-[18%] h-3 w-[52%] rotate-[8deg] rounded-full bg-[#93c5fd]/60" />

                      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-float-soft rounded-full bg-white/72 p-2 shadow-[0_12px_30px_rgba(37,99,235,0.18)]">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] text-lg text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)]">
                            🔧
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-medium text-[#44607b] shadow-sm">
                        {contactDetails.postcode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-blue-100 bg-white/92 p-7 shadow-[0_18px_46px_rgba(37,99,235,0.10)] sm:p-8 lg:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#2563EB]">
                Quote Form
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#16314f]">
                Send a plumbing enquiry
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#607387]">
                Fill out the form below and we’ll show the demo enquiry popup.
                This version is designed to feel much closer to the polish and
                layout of file 1, while staying clearly focused on plumbing.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#23415f]">
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
                      className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition placeholder:text-[#8ba1b8] focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#23415f]">
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
                      className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition placeholder:text-[#8ba1b8] focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
                      placeholder="Your phone number"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#23415f]">
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
                      className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition placeholder:text-[#8ba1b8] focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
                      placeholder="Your email address"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#23415f]">
                      Service
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
                      className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
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

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#23415f]">
                    Preferred Date
                  </span>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        preferredDate: e.target.value,
                      }))
                    }
                    className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#23415f]">
                    Message
                  </span>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#16314f] outline-none transition placeholder:text-[#8ba1b8] focus:border-[#60a5fa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.10)]"
                    placeholder="Tell us about the plumbing issue, property, and any urgency."
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-[#73869b]">
                    Demo enquiry form with a styled confirmation popup.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#1d4ed8_100%)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition hover:scale-[1.02]"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#dbeafe_0%,#eff6ff_100%)] shadow-[0_20px_60px_rgba(37,99,235,0.14)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#2563EB]">
                  Local Plumbing Support
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#16314f] sm:text-4xl">
                  Reliable plumbing service across Bristol
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#58708a]">
                  From urgent leaks and blocked drains to boiler repairs and
                  bathroom installations, Bestflow Plumbing is designed to feel
                  dependable, clear, and easy to contact for every type of job.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/trades/services"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#1d4ed8_100%)] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/demo/trades/about"
                    className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-medium text-[#16314f] transition hover:bg-[#f8fbff]"
                  >
                    About Bestflow
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80"
                  alt="Plumber working on pipework"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-blue-100 bg-white/90">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
            <div>
              <h3 className="text-lg font-semibold text-[#16314f]">
                Bestflow Plumbing
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#607387]">
                Professional plumbing services for homes and small businesses
                across Bristol, with a focus on fast response times, practical
                workmanship, and clear communication.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#16314f]">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#607387]">
                <Link href="/demo/trades" className="transition hover:text-[#2563EB]">
                  Home
                </Link>
                <Link
                  href="/demo/trades/about"
                  className="transition hover:text-[#2563EB]"
                >
                  About
                </Link>
                <Link
                  href="/demo/trades/services"
                  className="transition hover:text-[#2563EB]"
                >
                  Services
                </Link>
                <Link
                  href="/demo/trades/contact"
                  className="transition hover:text-[#2563EB]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#16314f]">
                Contact Info
              </h4>
              <div className="mt-4 space-y-3 text-sm text-[#607387]">
                <p>{contactDetails.addressLine1}</p>
                <p>{contactDetails.city}</p>
                <p>{contactDetails.postcode}</p>
                <p>
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                    className="transition hover:text-[#2563EB]"
                  >
                    {contactDetails.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="transition hover:text-[#2563EB]"
                  >
                    {contactDetails.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#16314f]">
                Service Area
              </h4>
              <p className="mt-4 text-sm leading-7 text-[#607387]">
                Serving Bristol and surrounding areas with emergency plumbing,
                pipe repairs, boiler work, drainage support, and general
                maintenance.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
