"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    id: "emergency-plumbing",
    number: "01",
    title: "Emergency Plumbing",
    description:
      "Fast response for urgent plumbing problems including burst pipes, major leaks, overflowing fixtures, and unexpected breakdowns.",
    points: [
      "Rapid response across Bristol",
      "Urgent fault diagnosis",
      "Practical repairs to reduce disruption",
    ],
  },
  {
    id: "leak-detection",
    number: "02",
    title: "Leak Detection",
    description:
      "Clear identification of visible and hidden leaks, with straightforward advice on the most effective repair approach.",
    points: [
      "Pipe and fitting checks",
      "Investigation of hidden water issues",
      "Targeted repair recommendations",
    ],
  },
  {
    id: "boiler-repairs",
    number: "03",
    title: "Boiler Repairs",
    description:
      "Reliable troubleshooting and repair support for common boiler issues affecting heating and hot water performance.",
    points: [
      "Heating and hot water faults",
      "Diagnosis of common boiler issues",
      "Clear advice before work starts",
    ],
  },
  {
    id: "bathroom-installations",
    number: "04",
    title: "Bathroom Installations",
    description:
      "Plumbing work for bathroom upgrades, refurbishments, replacements, and new installations carried out with care and attention to detail.",
    points: [
      "Bathroom plumbing layouts",
      "New fixtures and fittings",
      "Clean, tidy installation work",
    ],
  },
  {
    id: "pipe-repairs",
    number: "05",
    title: "Pipe Repairs",
    description:
      "Repair or replacement of damaged, ageing, or leaking pipework to restore reliability and improve overall performance.",
    points: [
      "Damaged pipe replacement",
      "Leaking joint repairs",
      "Upgrades to ageing pipework",
    ],
  },
  {
    id: "drain-clearing",
    number: "06",
    title: "Drain Clearing",
    description:
      "Effective clearing of blocked sinks, toilets, wastes, and drains, with practical solutions aimed at preventing repeat issues.",
    points: [
      "Blocked sink and toilet clearing",
      "Drain flow restoration",
      "Advice to reduce future blockages",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Get in touch",
    text: "Call or send a quote request with a brief outline of the issue or work needed.",
  },
  {
    number: "02",
    title: "Clear assessment",
    text: "The job is reviewed properly and the recommended next step is explained in a straightforward way.",
  },
  {
    number: "03",
    title: "Work completed properly",
    text: "Repairs or installation work are carried out neatly, professionally, and with minimal fuss.",
  },
];

export default function TradesServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 420;
      setShowBackButton(window.scrollY < triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

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
              className="text-sm font-medium text-[#2563EB]"
            >
              Services
            </Link>
            <Link
              href="/demo/trades/contact"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
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
                className="rounded-2xl bg-blue-50 px-4 py-3 text-base font-medium text-[#2563EB]"
              >
                Services
              </Link>
              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
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

      <div className="pt-[122px]">
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="animate-[fadeUp_.7s_ease-out]">
                <div className="inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
                  Our Services
                </div>

                <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
                  Plumbing services designed around reliability, clarity, and practical results
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Bestflow Plumbing provides a focused range of services for homes,
                  landlords, and small commercial properties across Bristol, from
                  urgent repairs to planned plumbing work.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/demo/trades/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href="tel:01170000000"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-[#0F172A] transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#2563EB]"
                  >
                    Call 0117 000 0000
                  </a>
                </div>
              </div>

              <div className="animate-[fadeUp_.85s_ease-out]">
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <div
                    className="h-[260px] bg-cover bg-center sm:h-[320px]"
                    style={{
                      backgroundImage:
                        "url('https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                    }}
                  />
                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                      Core Services
                    </p>

                    <div className="mt-5 grid gap-3">
                      {services.map((service) => (
                        <a
                          key={service.id}
                          href={`#${service.id}`}
                          className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm font-medium text-slate-700 transition hover:text-[#2563EB] last:border-b-0 last:pb-0"
                        >
                          <span>{service.title}</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick jump nav */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-[#2563EB]"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services index */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-12 max-w-2xl animate-[fadeUp_.6s_ease-out]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Service Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
              A focused range of services for everyday plumbing needs
            </h2>
          </div>

          <div className="grid gap-2">
            {services.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className="border-b border-slate-200 py-8 last:border-b-0"
                style={{
                  animation: `fadeUp .55s ease-out ${index * 0.06}s both`,
                }}
              >
                <div className="grid gap-6 lg:grid-cols-[110px_1fr_300px] lg:gap-10">
                  <div className="text-sm font-semibold tracking-[0.18em] text-[#2563EB]">
                    {service.number}
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
                        <span className="text-sm leading-7 text-slate-600">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="animate-[fadeUp_.65s_ease-out]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                  How We Work
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                  A simple process that keeps communication clear at every stage
                </h2>
              </div>

              <div className="grid gap-8">
                {process.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[80px_1fr]"
                    style={{
                      animation: `fadeUp .55s ease-out ${index * 0.08}s both`,
                    }}
                  >
                    <div className="text-sm font-semibold tracking-[0.16em] text-[#2563EB]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image + area */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-[fadeUp_.7s_ease-out] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div
                className="h-[320px] bg-cover bg-center sm:h-[440px]"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/7534435/pexels-photo-7534435.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
              />
            </div>

            <div className="animate-[fadeUp_.85s_ease-out]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                Bristol Service Area
              </p>
              <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                Reliable plumbing support for domestic and small commercial properties
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Bestflow Plumbing provides services across Bristol and nearby
                areas, with an emphasis on prompt response, tidy workmanship,
                and a service experience that feels clear and dependable from
                the start.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Domestic plumbing
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Landlords
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Small commercial work
                </span>
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
                    Get in touch for fast, dependable service in Bristol
                  </h2>
                  <p className="mt-4 text-slate-300">
                    For urgent repairs, planned work, or a clear written quote,
                    contact Bestflow Plumbing and get a fast response.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Link
                    href="/demo/trades/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href="tel:01170000000"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Call Now
                  </a>
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
