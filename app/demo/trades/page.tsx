"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response for urgent plumbing issues, including burst pipes, major leaks, and sudden breakdowns.",
    icon: "🚨",
  },
  {
    title: "Leak Repairs",
    description:
      "Prompt diagnosis and repair of leaking taps, toilets, pipe joints, and hidden water issues.",
    icon: "💧",
  },
  {
    title: "Boiler Repairs",
    description:
      "Reliable boiler fault finding and repair work to help restore heating and hot water quickly.",
    icon: "🔥",
  },
  {
    title: "Bathroom Installations",
    description:
      "Complete bathroom plumbing for renovations, upgrades, replacements, and new fittings.",
    icon: "🛁",
  },
  {
    title: "Pipe Replacement",
    description:
      "Replacement of damaged, corroded, or ageing pipework to improve safety and water flow.",
    icon: "🔧",
  },
  {
    title: "Drain Unblocking",
    description:
      "Effective clearing of blocked sinks, toilets, and drains to get things moving again.",
    icon: "🌀",
  },
];

const features = [
  "Fast response times",
  "Fully qualified plumbers",
  "Transparent pricing",
  "Local Bristol business",
];

const testimonials = [
  {
    quote: "Arrived quickly and fixed the issue straight away.",
  },
  {
    quote: "Very professional service. Highly recommend.",
  },
  {
    quote: "Clear pricing, polite team, and everything sorted on the same visit.",
  },
  {
    quote: "Turned up on time and explained the repair clearly before starting work.",
  },
];

export default function TradesHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 420;
      setShowBackButton(window.scrollY < triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
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
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Demo Banner */}
      <div className="fixed inset-x-0 top-0 z-[90] border-b border-blue-200 bg-[#2563EB] px-4 py-3 text-center text-sm font-medium text-white shadow-md">
        This is a demo website created by{" "}
        <Link
          href="/"
          className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-blue-100"
        >
          Clean Websites
        </Link>
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/demo/trades"
            className="text-lg font-bold tracking-[0.08em] text-[#0F172A] sm:text-xl"
          >
            BESTFLOW PLUMBING
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/demo/trades"
              className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]"
            >
              Home
            </Link>
            <Link
              href="/demo/trades/about"
              className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]"
            >
              About
            </Link>
            <Link
              href="/demo/trades/services"
              className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]"
            >
              Services
            </Link>
            <Link
              href="/demo/trades/contact"
              className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]"
            >
              Contact
            </Link>
            <Link
              href="/demo/trades/contact"
              className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-[#0F172A] shadow-sm transition hover:bg-slate-50 md:hidden"
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

      {/* Back Button */}
      <Link
        href="/"
        className={`fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 md:top-[4.1rem]
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
            className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-slate-900/40 transition-opacity duration-200 md:hidden"
          />

          <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[24px] border border-slate-200 bg-white p-4 shadow-2xl md:hidden">
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
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Contact
              </Link>

              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="pt-[122px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-slate-950/55" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
                Trusted local plumbers in Bristol
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Reliable plumbing services in Bristol
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                Bestflow Plumbing provides fast, professional plumbing and
                emergency repairs for homes and businesses across Bristol.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo/trades/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:01170000000"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-blue-100">
                  Call now
                </p>
                <a
                  href="tel:01170000000"
                  className="mt-2 inline-block text-2xl font-bold text-white sm:text-3xl"
                >
                  0117 000 0000
                </a>
                <p className="mt-2 text-sm text-slate-200">
                  Fast response for plumbing repairs and emergency callouts.
                </p>
              </div>
            </div>

            <div className="hidden md:block" />
          </div>
        </section>

        {/* Services Overview */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Practical plumbing services for homes and businesses
            </h2>
            <p className="mt-4 text-slate-600">
              Clear, dependable plumbing support for everyday repairs, urgent
              issues, and installation work across Bristol.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                  Why Choose Us
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  Straightforward service you can rely on
                </h2>
                <p className="mt-4 max-w-2xl text-slate-600">
                  Bestflow Plumbing is built around the things local customers
                  care about most: turning up on time, doing the job properly,
                  explaining the work clearly, and keeping pricing transparent.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-sm text-white">
                        ✓
                      </span>
                      <p className="text-base font-medium text-slate-800">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Customer Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              What customers say about our service
            </h2>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-2xl text-amber-400">★★★★★</div>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-800">
              “{testimonials[activeReview].quote}”
            </p>

            <div className="mt-8 flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveReview(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeReview ? "bg-[#2563EB]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Need a plumber?
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Get fast, dependable help from a local Bristol team
                </h2>
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Link
                  href="/demo/trades/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:01170000000"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  Call Now
                </a>
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
                practical solutions.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/demo/trades" className="hover:text-[#2563EB]">
                  Home
                </Link>
                <Link href="/demo/trades/about" className="hover:text-[#2563EB]">
                  About
                </Link>
                <Link
                  href="/demo/trades/services"
                  className="hover:text-[#2563EB]"
                >
                  Services
                </Link>
                <Link
                  href="/demo/trades/contact"
                  className="hover:text-[#2563EB]"
                >
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
                  <a href="tel:01170000000" className="hover:text-[#2563EB]">
                    0117 000 0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:demo@bestflowplumbing.co.uk"
                    className="hover:text-[#2563EB]"
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
                repairs, installations, and ongoing maintenance support.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
