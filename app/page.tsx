"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const demoTabs = [
  {
    id: "barber",
    label: "Barber",
    title: "North Studio",
    category: "Barber / Salon",
    location: "Manchester",
    accent: "from-[#3B82F6]/18 via-[#3B82F6]/6 to-transparent",
    badge: "Booking-led",
    description:
      "Sharp service blocks, elevated gallery, reviews, team, and an enquiry flow that feels premium on mobile.",
    stats: ["Skin fades", "Beard trims", "Book now"],
    href: "/demo/barber",
  },
  {
    id: "salon",
    label: "Salon",
    title: "Atelier House",
    category: "Salon",
    location: "Leeds",
    accent: "from-[#3B82F6]/14 via-[#3B82F6]/5 to-transparent",
    badge: "Brand-first",
    description:
      "Soft luxury styling, service pricing, stylist profiles, and clean conversion points without clutter.",
    stats: ["Colour", "Extensions", "Consultation"],
    href: "/demo/salon",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    title: "Coal & Vine",
    category: "Restaurant / Takeaway",
    location: "Birmingham",
    accent: "from-[#3B82F6]/16 via-[#3B82F6]/5 to-transparent",
    badge: "Menu-ready",
    description:
      "Atmospheric hero imagery, menu highlights, opening hours, map, and a simple reservation or order path.",
    stats: ["Dinner", "Cocktails", "Reserve"],
    href: "/demo/restaurant",
  },
  {
    id: "trades",
    label: "Trades",
    title: "Apex Electrical",
    category: "Trades / Services",
    location: "London",
    accent: "from-[#3B82F6]/15 via-[#3B82F6]/4 to-transparent",
    badge: "Quote-led",
    description:
      "Clean trust sections, service breakdowns, location coverage, and a quote journey that is obvious and fast.",
    stats: ["Domestic", "Commercial", "Get a quote"],
    href: "/demo/trades",
  },
] as const;

const featuredDemos = [
  {
    title: "Barber / Salon",
    copy: "Booking-led, brand-first layout with reviews, services, and a gallery that feels considered.",
    href: "/demo/barber",
    kicker: "Selected demo",
  },
  {
    title: "Restaurant / Takeaway",
    copy: "Atmospheric menu-first structure with opening hours, directions, and strong mobile ordering paths.",
    href: "/demo/restaurant",
    kicker: "Selected demo",
  },
  {
    title: "Trades / Services",
    copy: "Service-led layout with trust cues, coverage areas, and a clean quote journey built for action.",
    href: "/demo/trades",
    kicker: "Selected demo",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Send your content",
    desc: "Logo, photos, written text, services or menu, and your contact details.",
  },
  {
    step: "02",
    title: "We design and build",
    desc: "Your site is assembled, styled, and structured around your business.",
  },
  {
    step: "03",
    title: "You review",
    desc: "One revision is included to refine layout or content. Additional revisions can be arranged depending on scope.",
  },
  {
    step: "04",
    title: "Go live",
    desc: "We deploy your site, host it, and connect your domain ready for launch.",
  },
];

const trustCards = [
  {
    title: "Designed for first impressions",
    copy: "So your business doesn’t look dated, DIY, or thrown together.",
  },
  {
    title: "Structured for action",
    copy: "Calls, messages, directions, bookings, or quote requests are always easy to find.",
  },
  {
    title: "Easy to manage",
    copy: "You get a live link, clear setup, and support with launch.",
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
  const [activeDemo, setActiveDemo] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentDemo = useMemo(() => demoTabs[activeDemo], [activeDemo]);

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
              View demo
            </Link>
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Start your site
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
              { href: "/start", label: "Start your site" },
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
        <section className="mx-auto grid min-h-[calc(100vh-78px)] w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              Built for UK local businesses
            </div>

<h1 className="mt-6 max-w-[12ch] font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.03em] text-[#F5F2EA]">
  Clean websites that look professional.
  <span className="mt-2 block text-[#A9ABB3]">
    Designed, built, and live in 24 hours.
  </span>
</h1>

            <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]">
  Custom-coded websites for businesses that want a professional
  online presence without a long agency process. Fast loading,
  mobile-first, and live in 24 hours from content received.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Start your site
                <ArrowRight />
              </Link>
              <a
                href="#demos"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                View live demos
                <ArrowRight />
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[#A9ABB3] sm:grid-cols-3">
              {[
  "Live in 24 hours from content received",
  "Custom-coded and fast loading",
  "Built primarily for UK local businesses",
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

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-12 -top-8 h-40 rounded-full bg-[#3B82F6]/10 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111214] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentDemo.accent} transition-all duration-500`}
              />
              <div className="relative border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                      Featured preview
                    </div>
                    <div className="mt-1 text-sm text-[#F5F2EA]">
                      {currentDemo.title} · {currentDemo.location}
                    </div>
                  </div>
                  <a
                    href={currentDemo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    Open demo
                  </a>
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0D0E10]">
                  <div className="relative min-h-[30rem] p-6 sm:p-7">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_32%)]" />

                    <div className="relative max-w-md">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                        {currentDemo.category}
                      </div>

                      <h2 className="mt-5 max-w-[10ch] font-serif text-4xl leading-[0.96] tracking-[-0.04em] sm:text-5xl">
                        {currentDemo.title}
                      </h2>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                        {currentDemo.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {currentDemo.stats.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-[#F5F2EA]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-10 grid gap-3">
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-medium text-[#F5F2EA]">
                              Premium first impression
                            </div>
                            <div className="mt-1 text-xs text-[#A9ABB3]">
                              Designed to feel established at a glance
                            </div>
                          </div>
                          <span className="rounded-full bg-[#3B82F6]/15 px-3 py-1 text-xs font-medium text-[#8BB5FF]">
                            {currentDemo.badge}
                          </span>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {["Hero", "Services", "Contact"].map((block, index) => (
                          <div
                            key={block}
                            className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4"
                          >
                            <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                              0{index + 1}
                            </div>
                            <div className="mt-8 h-16 rounded-2xl bg-white/[0.04]" />
                            <div className="mt-3 text-sm text-[#F5F2EA]">
                              {block}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                        <div className="text-sm text-[#F5F2EA]">
                          Clean conversion point
                        </div>
                        <div className="mt-3 grid gap-2">
                          <div className="h-11 rounded-2xl bg-white/[0.04]" />
                          <div className="h-11 rounded-2xl bg-white/[0.04]" />
                          <div className="mt-1 h-11 rounded-2xl bg-[#3B82F6]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {demoTabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDemo(index)}
                      className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                        activeDemo === index
                          ? "bg-[#3B82F6] text-white"
                          : "border border-white/10 bg-white/[0.03] text-[#A9ABB3] hover:border-white/20 hover:text-[#F5F2EA]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="demos"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
              Selected demos
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
              Real structures. Adapted for different businesses.
            </h2>
            <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
              A clean, high-end foundation shaped for different categories
              without looking like a generic template.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredDemos.map((card, index) => (
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
                          24h-ready
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
                        Premium homepage direction
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

        <section
          id="pricing"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111214]">
            <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
              <div className="max-w-2xl">
                <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                  Launch package
                </div>
                <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.04em] text-[#F5F2EA]">
                  A clean launch package for local businesses.
                </h2>
                <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#A9ABB3]">
 A custom-coded website including core pages, a contact or
 booking form, mobile optimisation, and launch support.
 Live in 24 hours from content received.
                </p>
              </div>

<div className="rounded-[28px] border border-white/10 bg-[#17181B] p-6">
  <div className="text-sm text-[#A9ABB3]">Launch package</div>

  <div className="mt-2 text-5xl font-semibold tracking-[-0.04em] text-[#F5F2EA]">
    From £595
  </div>

  <div className="mt-2 text-sm text-[#A9ABB3]">
    Live in 24 hours from content received
  </div>

  <div className="mt-6 space-y-3 text-sm text-[#F5F2EA]">
    {[
      "Home",
      "About",
      "Services / Menu",
      "Contact / Booking",
      "Contact or booking form",
      "Mobile optimisation",
      "One revision included",
    ].map((item) => (
      <div key={item} className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
        <span>{item}</span>
      </div>
    ))}
  </div>

  <div className="mt-6 border-t border-white/10 pt-5">
    <div className="text-sm text-[#A9ABB3]">Hosting</div>

    <div className="mt-1 text-xl font-medium text-[#F5F2EA]">
      £40 / month
    </div>

    <div className="mt-1 text-xs text-[#A9ABB3]">
      Hosting begins after launch. Domain purchased separately.
    </div>
  </div>

  <div className="mt-7 flex flex-col gap-3">
    <Link
      href="/start"
      className="inline-flex h-12 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
    >
      Start now
    </Link>

    <Link
      href="/start"
      className="inline-flex items-center justify-center text-sm text-[#A9ABB3] transition hover:text-[#F5F2EA]"
    >
      Need something larger? Get in touch
    </Link>
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
              A simple process.
            </h2>
            <p className="mt-4 text-[18px] leading-8 text-[#A9ABB3]">
              Minimal back-and-forth. Fast turnaround. Clear handover.
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

        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                Why it works
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                Built to make small businesses feel established online.
              </h2>
              <p className="mt-5 text-[18px] leading-8 text-[#A9ABB3]">
                Modern design, mobile-first structure, fast pages, clear
                enquiry or booking paths, and a simple ownership handover. It is
                a cleaner process than a bloated agency project, without looking
                cheap or templated.
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
                Get your business online properly.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#A9ABB3]">
                Send your details and get a clean, custom-built site live in 24 hours
                from content received.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/start"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Start your site
                  <ArrowRight />
                </Link>
                <Link
                  href="/demos"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  View demos
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
                Clean, high-end websites for UK local businesses.
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
            Start your site
          </Link>
        </div>
      </main>
    </div>
  );
}
