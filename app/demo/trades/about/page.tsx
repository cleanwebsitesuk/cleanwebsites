"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TradesAboutPage() {
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
              className="text-sm font-medium text-[#2563EB]"
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
                className="rounded-2xl bg-blue-50 px-4 py-3 text-base font-medium text-[#2563EB]"
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
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
            <div className="animate-[fadeUp_.7s_ease-out]">
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
                About Bestflow Plumbing
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
                Local plumbing work done properly, with clear communication from
                start to finish
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Bestflow Plumbing is a Bristol plumbing company focused on the
                things customers care about most: turning up when expected,
                explaining the work clearly, and getting the job done to a good
                standard without unnecessary fuss.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                From emergency plumbing issues to planned repairs and bathroom
                work, the service is built to feel straightforward, reliable,
                and professional for homeowners, landlords, and small
                businesses.
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

            <div className="animate-[fadeUp_.9s_ease-out]">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div
                  className="h-[320px] bg-cover bg-center sm:h-[460px]"
                  style={{
                    backgroundImage:
                      "url('/demo/trades/about-hero.jpg')",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main About Copy */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-[fadeUp_.65s_ease-out]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                A practical local service for homes, landlords, and small
                commercial jobs
              </h2>
            </div>

            <div className="space-y-6 text-slate-600">
              <p className="animate-[fadeUp_.75s_ease-out] text-base leading-8">
                Bestflow Plumbing is designed to feel like the kind of local
                trades business people are comfortable calling when they need
                help quickly or want a job handled properly the first time. The
                approach is simple: be easy to deal with, be clear about the
                work, and keep standards high across every job.
              </p>
              <p className="animate-[fadeUp_.85s_ease-out] text-base leading-8">
                That means giving customers honest advice, practical solutions,
                and a clear idea of what to expect before work begins. Whether
                it is a leaking pipe, an urgent repair, or a larger installation
                project, the goal is always the same — dependable workmanship
                and a service that feels organised and professional throughout.
              </p>
              <p className="animate-[fadeUp_.95s_ease-out] text-base leading-8">
                For a local plumbing business, trust is built in the details:
                prompt responses, tidy work, clear pricing, and the confidence
                that the person doing the job knows what they are doing. That is
                the standard Bestflow Plumbing is built around.
              </p>
            </div>
          </div>
        </section>

        {/* Expectations Section */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div className="animate-[fadeUp_.65s_ease-out]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                  What Customers Can Expect
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                  Clear service, qualified tradespeople, and work completed with
                  care
                </h2>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Straightforward communication",
                    text: "Customers should not have to chase for updates or guess what is happening. The service is built around being clear, responsive, and easy to deal with.",
                  },
                  {
                    title: "Reliable workmanship",
                    text: "Every job should feel properly handled, whether it is a quick repair or more involved plumbing work. The focus stays on quality, neatness, and practical results.",
                  },
                  {
                    title: "Qualified professionals",
                    text: "Experience matters, but so does professionalism. The work is presented in a way that gives customers confidence from the first enquiry onwards.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0"
                    style={{
                      animation: `fadeUp .55s ease-out ${index * 0.08}s both`,
                    }}
                  >
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image + Local Focus */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-[fadeUp_.7s_ease-out] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div
                className="h-[320px] bg-cover bg-center sm:h-[480px]"
                style={{
                  backgroundImage:
                    "url('/demo/trades/about-secondary.jpg')",
                }}
              />
            </div>

            <div className="animate-[fadeUp_.85s_ease-out]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                Bristol Service Area
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                A local business that feels dependable before the job even begins
              </h2>

              <div className="mt-6 space-y-5 text-slate-600">
                <p className="text-base leading-8">
                  For many customers, choosing a plumber comes down to trust.
                  They want to know the business is local, the work will be
                  handled properly, and the process will feel clear from the
                  first phone call onwards.
                </p>
                <p className="text-base leading-8">
                  Bestflow Plumbing is presented with exactly that in mind. The
                  tone is straightforward, the service offering is practical,
                  and the experience is designed to feel realistic for the kind
                  of local plumbing company people genuinely use and recommend.
                </p>
                <p className="text-base leading-8">
                  That makes this a stronger, more believable example of a
                  trades website: clean and modern, but still grounded in what
                  matters to real customers.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-[#0F172A]">
                    Domestic plumbing
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Repairs, maintenance, and installation work for homes across
                    Bristol.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-[#0F172A]">
                    Small commercial work
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Practical plumbing support for local premises, landlords,
                    and managed properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
            <div className="grid gap-6 text-center md:grid-cols-3 md:text-left">
              {[
                "Fast response across Bristol",
                "Qualified, professional plumbing support",
                "Clear quotes and dependable workmanship",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm font-medium text-slate-200"
                  style={{
                    animation: `fadeUp .55s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18)_0%,rgba(255,255,255,0.04)_100%)] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.28)] md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                    Need a plumber?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Get in touch for reliable plumbing support in Bristol
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
