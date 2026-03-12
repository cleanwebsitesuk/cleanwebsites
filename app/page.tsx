"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const featuredDemos = [
  {
    title: "Barber / Salon",
    copy: "A booking-led example layout with services, gallery sections, and clear contact points.",
    href: "/demo/barber",
    kicker: "Demo website",
  },
  {
    title: "Restaurant / Takeaway",
    copy: "A menu-first example build with opening hours, directions, and strong mobile action points.",
    href: "/demo/burger",
    kicker: "Demo website",
  },
  {
    title: "Trades / Services",
    copy: "A service-led example layout with trust sections, coverage areas, and a clear quote request flow.",
    href: "/demo/trades",
    kicker: "Demo website",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Send your details",
    desc: "Tell us about your business and share your logo, services, and contact details.",
  },
  {
    step: "02",
    title: "We build your site",
    desc: "Your website is structured and styled around your business.",
  },
  {
    step: "03",
    title: "You review",
    desc: "One revision is included to refine layout or content.",
  },
  {
    step: "04",
    title: "We launch",
    desc: "We connect your domain, set up SSL, and launch the site.",
  },
];

const trustCards = [
  {
    title: "Clear structure",
    copy: "Visitors can quickly understand what you do and how to contact you.",
  },
  {
    title: "Mobile-first layout",
    copy: "Built to look clean and work properly on phones as well as desktop.",
  },
  {
    title: "Fast loading pages",
    copy: "Focused on speed, clarity, and easy enquiry or booking points.",
  },
];

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5">
      <span
        className={`absolute left-0 top-1 h-px w-5 bg-[#F5F2EA] transition-all duration-300 ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-px w-5 bg-[#F5F2EA] transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-px w-5 bg-[#F5F2EA] transition-all duration-300 ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#3B82F6]/10 blur-[140px]" />
        <div className="absolute bottom-[-14%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0A0A0B]/72 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Clean Websites logo"
              width={144}
              height={40}
              className="h-9 w-auto opacity-95"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] text-[#A9ABB3] md:flex">
            <a className="transition hover:text-[#F5F2EA]" href="#demos">
              Demos
            </a>
            <a className="transition hover:text-[#F5F2EA]" href="#process">
              Process
            </a>
            <a className="transition hover:text-[#F5F2EA]" href="#pricing">
              Pricing
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/demos"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              View demo websites
            </Link>
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Get my website quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        <div
          className={`fixed inset-0 z-40 bg-[#0A0A0B]/96 px-6 transition-all duration-300 md:hidden ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex min-h-screen flex-col justify-center gap-7 text-3xl font-light tracking-tight text-[#F5F2EA]">
            {[
              { href: "#demos", label: "Demos" },
              { href: "#process", label: "Process" },
              { href: "#pricing", label: "Pricing" },
              { href: "/start", label: "Get my website quote" },
            ].map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`translate-y-3 transition-all duration-500 ${
                  mobileOpen ? "translate-y-0 opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-7xl items-center justify-center px-5 pb-20 pt-10 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              Professional websites for UK businesses
            </div>

            <h1 className="mx-auto mt-6 max-w-[14ch] font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.03em] text-[#F5F2EA]">
              Professional websites for UK businesses.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]">
              Clean, fast, mobile-first websites that help your business look
              credible online and make it easy for customers to get in touch.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]">
              Custom-built with a simple process and ready to launch in as
              little as 24 hours once content is received.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/start"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Get my website quote
                <ArrowRight />
              </Link>
              <a
                href="#demos"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                View demo websites
                <ArrowRight />
              </a>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-sm text-[#A9ABB3] sm:grid-cols-2">
              {[
                "Custom-built for your business",
                "Mobile-first and fast loading",
                "Managed hosting with free SSL",
                "Simple launch process",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111214] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="max-w-2xl">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Simple launch package
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.04em] text-[#F5F2EA]">
                Simple launch package
              </h2>
              <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
                A straightforward website build for businesses that need a
                professional online presence without a long agency process.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#17181B]">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="text-sm text-[#A9ABB3]">Website build</div>

                  <div className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-5xl">
                    From £595
                  </div>

                  <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                  <div className="mt-6 space-y-3 text-sm text-[#F5F2EA]">
                    {[
                      "Home page",
                      "About page",
                      "Services or menu page",
                      "Contact or booking page",
                      "Contact or booking form",
                      "Mobile optimisation",
                      "One revision included",
                      "Launch support",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                  <div className="text-sm text-[#A9ABB3]">
                    Managed hosting & support
                  </div>

                  <div className="mt-2 text-3xl font-medium tracking-[-0.03em] text-[#F5F2EA]">
                    £40 / month
                  </div>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#A9ABB3]">
                    <p>Secure hosting</p>
                    <p>Free SSL certificate</p>
                    <p>Domain connection setup</p>
                    <p>Deployment and launch support</p>
                    <p>Technical management</p>
                    <p>Your domain is purchased separately in your name.</p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <Link
                      href="/start"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto lg:w-full xl:w-auto"
                    >
                      Get my website quote
                    </Link>

                    <Link
                      href="/start"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#A9ABB3] transition hover:border-white/20 hover:bg-white/[0.05] hover:text-[#F5F2EA] sm:w-auto lg:w-full xl:w-auto"
                    >
                      Send an enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              Process
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
              A simple process
            </h2>
            <p className="mt-4 text-[18px] leading-8 text-[#A9ABB3]">
              No bloated agency timelines. Just a clear path from enquiry to
              launch.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
            <div className="grid gap-4 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px] border border-white/10 bg-[#111214] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#F5F2EA]">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="demos"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              Demo websites
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
              Demo websites
            </h2>
            <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
              Preview example website styles and layouts that can be adapted to
              different types of businesses.
            </p>
            <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
              These are demo builds designed to show layout structure, design
              direction, and how your website could be organised.
            </p>
            <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
              Built to support enquiries, bookings, or quote requests.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#A9ABB3]">
            {[
              "Service businesses",
              "Studios and beauty",
              "Restaurants and hospitality",
              "Local service companies",
              "Other small businesses",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredDemos.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.32)]"
              >
                <div className="relative h-[20rem] overflow-hidden border-b border-white/10 bg-[#0D0E10]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />
                  <div className="absolute inset-0 transition duration-500 group-hover:scale-[1.03]">
                    <div className="absolute left-6 right-6 top-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                          {card.kicker}
                        </span>
                        <span className="rounded-full bg-[#3B82F6]/15 px-3 py-1 text-xs text-[#8BB5FF]">
                          Preview build
                        </span>
                      </div>
                      <div className="mt-5 h-28 rounded-[18px] bg-white/[0.05]" />
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-2xl bg-white/[0.04]" />
                        <div className="h-16 rounded-2xl bg-white/[0.04]" />
                        <div className="h-16 rounded-2xl bg-white/[0.04]" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                      <div className="text-sm text-[#F5F2EA]">
                        Example homepage direction
                      </div>
                      <div className="mt-2 h-10 rounded-2xl bg-[#3B82F6]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-[#A9ABB3]">{card.kicker}</div>
                  <h3 className="mt-2 text-[26px] font-medium tracking-[-0.03em] text-[#F5F2EA]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                    {card.copy}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F2EA]">
                    Open demo
                    <ArrowRight />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Why it works
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                Designed to make your business look established online
              </h2>
              <p className="mt-5 text-[18px] leading-8 text-[#A9ABB3]">
                A good website should help customers trust your business and get
                in touch easily.
              </p>
              <p className="mt-4 text-[18px] leading-8 text-[#A9ABB3]">
                The result is a website that feels modern, professional, and
                easy to use.
              </p>
            </div>

            <div className="space-y-4">
              {trustCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[26px] border border-white/10 bg-[#111214] p-6 transition duration-300 hover:border-white/15 hover:bg-[#141518]"
                >
                  <h3 className="text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                    {card.copy}
                  </p>
                </div>
              ))}
              <div className="rounded-[26px] border border-white/10 bg-[#111214] p-6 transition duration-300 hover:border-white/15 hover:bg-[#141518]">
                <h3 className="text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                  Clear enquiry points
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                  Customers always have a clear next step to call, message,
                  book, or request a quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111214] px-6 py-14 text-center sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3B82F6]/18 blur-[110px]" />
            <div className="relative mx-auto max-w-3xl">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Start
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,4.5rem)] leading-[0.97] tracking-[-0.045em] text-[#F5F2EA]">
                Get your business online properly
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#A9ABB3]">
                Send your details and we’ll review your project and the next
                steps.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-8 text-[#A9ABB3]">
                Websites start from £595. Managed hosting is £40/month after
                launch.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/start"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Get my website quote
                  <ArrowRight />
                </Link>
                <Link
                  href="/demos"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  View demo websites
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-7xl border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-lg font-semibold tracking-[-0.03em] text-[#F5F2EA]">
                CLEAN WEBSITES
              </div>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#A9ABB3]">
                Professional websites for UK businesses.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3]">
              <Link href="/demos" className="transition hover:text-[#F5F2EA]">
                Demos
              </Link>
              <Link href="/pricing" className="transition hover:text-[#F5F2EA]">
                Pricing
              </Link>
              <a href="#process" className="transition hover:text-[#F5F2EA]">
                Process
              </a>
              <Link href="/start" className="transition hover:text-[#F5F2EA]">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3] md:items-start">
              <a
                href="mailto:hello@cleanwebsites.co.uk"
                className="transition hover:text-[#F5F2EA]"
              >
                hello@cleanwebsites.co.uk
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#F5F2EA]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#7F828A] sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Clean Websites. All rights reserved.</div>
            <div className="flex gap-5">
              <Link href="/privacy" className="transition hover:text-[#F5F2EA]">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-[#F5F2EA]">
                Terms
              </Link>
            </div>
          </div>
        </footer>

        <div
          className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-300 lg:block ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/start"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#111214]/92 px-5 py-3 text-sm font-semibold text-[#F5F2EA] shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
          >
            Get my website quote
          </Link>
        </div>
      </main>
    </div>
  );
}
