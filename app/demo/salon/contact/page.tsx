"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const contactDetails = {
  addressLine1: "97 Example Street",
  city: "Leeds",
  postcode: "LS1 0XX",
  phone: "0113 XXX XXXX",
};

const openingHours = [
  "Mon–Fri: 9:00 – 6:00",
  "Sat: 9:00 – 5:00",
  "Sun: Closed",
];

const services = [
  "Haircut & Styling",
  "Blow Dry",
  "Full Colour",
  "Balayage Colour",
  "Restyle Cut",
  "Treatment",
  "Not sure yet",
];

export default function SalonContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
            box-shadow: 0 0 0 rgba(196, 92, 171, 0.14);
          }
          50% {
            box-shadow: 0 10px 30px rgba(196, 92, 171, 0.2);
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
      `}</style>

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff2fb_0%,#fdf6fc_35%,#f8eff8_100%)] text-[#332633]">
        <div className="fixed inset-x-0 top-0 z-[90] border-b border-[#efcfe8] bg-[linear-gradient(90deg,#a4377f_0%,#7e3fb2_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_rgba(126,63,178,0.22)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-white"
          >
            Clean Websites
          </Link>
        </div>

        <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-[#ead9e6] bg-[rgba(255,248,252,0.96)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/salon"
              className="text-xl font-semibold uppercase tracking-[0.18em] text-[#4a2344]"
            >
              Luna Studio
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/demo/salon"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                Home
              </Link>
              <Link
                href="/demo/salon/about"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                About
              </Link>
              <Link
                href="/demo/salon/services"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                Services
              </Link>
              <Link
                href="/demo/salon/contact"
                className="text-sm font-medium text-[#b23592]"
              >
                Contact
              </Link>
              <Link
                href="/demo/salon/contact"
                className="rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(161,70,160,0.35)]"
              >
                Book Now
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-[#e8d7e4] bg-white/90 p-3 text-[#4a2344] shadow-sm transition hover:bg-white md:hidden"
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
          className={`animate-glow-soft fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-[#efc7e4] bg-white/95 px-4 py-2 text-sm font-semibold text-[#8d2d78] shadow-[0_10px_24px_rgba(141,45,120,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
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
              className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-[rgba(44,18,45,0.5)] transition-opacity duration-200 md:hidden"
            />
            <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(83,31,74,0.96)_0%,rgba(53,24,59,0.96)_100%)] p-4 shadow-[0_22px_60px_rgba(39,16,44,0.42)] transition-all duration-200 ease-out animate-[menuIn_0.2s_ease-out] md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/demo/salon"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/demo/salon/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="/demo/salon/services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Services
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-base font-medium text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(161,70,160,0.26)] transition hover:scale-[1.01]"
                >
                  Book Now
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
              className="fixed inset-0 z-[100] bg-[rgba(34,14,38,0.58)] backdrop-blur-[2px]"
            />
            <div className="fixed inset-x-4 top-1/2 z-[110] mx-auto w-full max-w-md -translate-y-1/2 rounded-[32px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,248,253,0.98)_0%,rgba(255,241,251,0.98)_100%)] p-7 shadow-[0_30px_80px_rgba(55,22,61,0.30)] animate-modal-in">
              <div className="inline-flex rounded-full border border-[#efcfe8] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a4688]">
                Demo site
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#34162f]">
                This is a Clean Websites demo
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5e495d]">
                This booking form is for demonstration purposes only. If you’d
                like a website like this for your business, visit{" "}
                <a
                  href="https://www.cleanwebsites.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#a4377f] underline underline-offset-4"
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
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Visit Clean Websites
                </a>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  className="inline-flex items-center justify-center rounded-full border border-[#e3cfe0] bg-white px-5 py-3 text-sm font-medium text-[#432640] transition hover:bg-[#fff9fd]"
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
                "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,253,0.92)_0%,rgba(255,246,252,0.84)_35%,rgba(250,242,250,0.76)_100%)] md:bg-[linear-gradient(90deg,rgba(255,248,253,0.9)_0%,rgba(255,245,252,0.74)_40%,rgba(143,72,215,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,213,241,0.42),transparent_38%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f0a7df]/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#b695ff]/12 blur-3xl" />

          <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[#ead6e5] bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#95518c] shadow-[0_8px_20px_rgba(121,60,112,0.08)] backdrop-blur-sm">
                Contact & Booking
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#34162f] sm:text-5xl lg:text-6xl">
                Book your next appointment.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#5e495d] sm:text-lg">
                Get in touch to arrange your next visit to Luna Studio. Whether
                you know exactly what you’d like or want help choosing the right
                service, we’re here to help.
              </p>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-lg grid-cols-1 gap-4 rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(96,51,97,0.12)] backdrop-blur-md sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4688]">
                    Phone
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#4e344d]">
                    {contactDetails.phone}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4688]">
                    Opening today
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#4e344d]">
                    Mon–Fri: 9:00 – 6:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#efd9ea] bg-white/90 p-7 shadow-[0_16px_40px_rgba(140,63,124,0.08)]">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                  Salon Details
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-[#3e1f3b]">
                  Visit or contact Luna Studio
                </h2>

                <div className="mt-6 space-y-6 text-sm leading-8 text-[#645262]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4688]">
                      Address
                    </p>
                    <div className="mt-2">
                      <p>{contactDetails.addressLine1}</p>
                      <p>{contactDetails.city}</p>
                      <p>{contactDetails.postcode}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4688]">
                      Phone
                    </p>
                    <p className="mt-2">{contactDetails.phone}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4688]">
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

              <div className="group overflow-hidden rounded-[28px] border border-[#efd9ea] bg-white/90 shadow-[0_16px_40px_rgba(140,63,124,0.08)]">
                <div className="relative min-h-[280px] overflow-hidden bg-[linear-gradient(135deg,#f9d9ef_0%,#edd5fb_100%)] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_30%)]" />
                  <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
                  <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-[#ffffff]/20 blur-2xl" />

                  <div className="relative h-full rounded-[22px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.35)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8e4b84]">
                          Location map
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#4a2c46]">
                          {contactDetails.addressLine1}, {contactDetails.city}
                        </p>
                      </div>
                      <div className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#8e4b84]">
                        Demo
                      </div>
                    </div>

                    <div className="relative mt-5 h-[180px] overflow-hidden rounded-[18px] border border-white/60 bg-[linear-gradient(135deg,#fff7fd_0%,#fff1fb_100%)]">
                      <div className="absolute inset-0 opacity-70">
                        <div className="absolute inset-y-0 left-[18%] w-px bg-[#ebc8e3]" />
                        <div className="absolute inset-y-0 left-[42%] w-px bg-[#ebc8e3]" />
                        <div className="absolute inset-y-0 left-[66%] w-px bg-[#ebc8e3]" />
                        <div className="absolute inset-x-0 top-[22%] h-px bg-[#ebc8e3]" />
                        <div className="absolute inset-x-0 top-[52%] h-px bg-[#ebc8e3]" />
                        <div className="absolute inset-x-0 top-[78%] h-px bg-[#ebc8e3]" />
                      </div>

                      <div className="absolute left-[12%] top-[18%] h-3 w-[48%] rotate-[12deg] rounded-full bg-[#d38de1]/60" />
                      <div className="absolute right-[10%] top-[28%] h-3 w-[38%] -rotate-[24deg] rounded-full bg-[#b997f6]/60" />
                      <div className="absolute left-[24%] bottom-[18%] h-3 w-[52%] rotate-[8deg] rounded-full bg-[#f0b1d9]/65" />

                      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-float-soft rounded-full bg-white/70 p-2 shadow-[0_12px_30px_rgba(116,37,97,0.20)]">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d14ca5_0%,#8d48d7_100%)] text-lg text-white shadow-[0_10px_24px_rgba(141,72,215,0.26)]">
                            📍
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-medium text-[#6b4867] shadow-sm">
                        {contactDetails.postcode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#efd9ea] bg-white/92 p-7 shadow-[0_18px_46px_rgba(140,63,124,0.10)] sm:p-8 lg:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Booking Form
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b]">
                Send a booking request
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6a5868]">
                Fill out the form below and we’ll show the demo booking popup.
                This is designed to feel like a polished lead-generation page for
                a real salon website.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#4c2f47]">
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
                      className="w-full rounded-[18px] border border-[#ead7e6] bg-[#fffafd] px-4 py-3.5 text-sm text-[#3e1f3b] outline-none transition placeholder:text-[#a2879c] focus:border-[#d98ac5] focus:bg-white focus:shadow-[0_0_0_4px_rgba(209,76,165,0.10)]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#4c2f47]">
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
                      className="w-full rounded-[18px] border border-[#ead7e6] bg-[#fffafd] px-4 py-3.5 text-sm text-[#3e1f3b] outline-none transition placeholder:text-[#a2879c] focus:border-[#d98ac5] focus:bg-white focus:shadow-[0_0_0_4px_rgba(209,76,165,0.10)]"
                      placeholder="Your phone number"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#4c2f47]">
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
                      className="w-full rounded-[18px] border border-[#ead7e6] bg-[#fffafd] px-4 py-3.5 text-sm text-[#3e1f3b] outline-none transition focus:border-[#d98ac5] focus:bg-white focus:shadow-[0_0_0_4px_rgba(209,76,165,0.10)]"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#4c2f47]">
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
                      className="w-full rounded-[18px] border border-[#ead7e6] bg-[#fffafd] px-4 py-3.5 text-sm text-[#3e1f3b] outline-none transition focus:border-[#d98ac5] focus:bg-white focus:shadow-[0_0_0_4px_rgba(209,76,165,0.10)]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#4c2f47]">
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
                    className="w-full rounded-[18px] border border-[#ead7e6] bg-[#fffafd] px-4 py-3.5 text-sm text-[#3e1f3b] outline-none transition placeholder:text-[#a2879c] focus:border-[#d98ac5] focus:bg-white focus:shadow-[0_0_0_4px_rgba(209,76,165,0.10)]"
                    placeholder="Tell us a little about the look or appointment you'd like."
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-[#866983]">
                    Demo booking form with a styled confirmation popup.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02]"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f6d4eb_0%,#e8cff8_100%)] shadow-[0_20px_60px_rgba(140,63,124,0.14)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#9d2b82]">
                  Plan Your Visit
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                  A calm boutique salon in the heart of Leeds
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#634f62]">
                  Whether you’re booking your regular appointment or trying
                  something new, Luna Studio is designed to make every visit feel
                  comfortable, polished, and beautifully looked after.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/salon/services"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/demo/salon/about"
                    className="inline-flex items-center justify-center rounded-full border border-[#ddb7d6] bg-white px-6 py-3.5 text-sm font-medium text-[#3e1f3b] transition hover:bg-[#fff8fd]"
                  >
                    About the Salon
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1400&q=80"
                  alt="Salon interior"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
