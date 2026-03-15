"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const featuredDemos = [
  {
    title: "Barber / Salon",
    copy: "Booking-led layout with services, gallery sections, and clear contact points.",
    href: "/demo/barber",
    kicker: "Demo website",
    image: "/demo-previews/barber.jpg",
  },
  {
    title: "Restaurant / Takeaway",
    copy: "Menu-first layout with opening hours, directions, and strong mobile action points.",
    href: "/demo/burger",
    kicker: "Demo website",
    image: "/demo-previews/burger.jpg",
  },
  {
    title: "Trades / Services",
    copy: "Service-led layout with trust sections, coverage areas, and a clear quote request flow.",
    href: "/demo/trades",
    kicker: "Demo website",
    image: "/demo-previews/trades.jpg",
  },
];

const speedPoints = [
  "Built for small businesses",
  "Clear pricing",
  "Fast turnaround",
  "Mobile-first from the start",
];

const processSteps = [
  {
    step: "01",
    title: "Send your details",
    desc: "Tell us about your business and send over your content, images, and contact details.",
  },
  {
    step: "02",
    title: "We build the site",
    desc: "Your website is structured around your business with a clean mobile-first layout.",
  },
  {
    step: "03",
    title: "Review and refine",
    desc: "You review the build and can request one revision to tighten the layout or wording.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We connect the domain, set up hosting and SSL, and put the site live properly.",
  },
];

const trustCards = [
  {
    title: "Easy to understand",
    copy: "Visitors quickly see what you do, where you operate, and how to contact you.",
  },
  {
    title: "Designed for phones",
    copy: "The layout is built around small screens first, then expanded for larger devices.",
  },
  {
    title: "Fast and focused",
    copy: "Clean builds keep pages lightweight, readable, and easier to navigate.",
  },
  {
    title: "Clear action points",
    copy: "Calls, quote requests, bookings, and enquiries stay obvious throughout the site.",
  },
];

const whoItsFor = [
  "Barbers and salons",
  "Restaurants and takeaways",
  "Trades and service businesses",
  "Studios and beauty clinics",
  "Local service companies",
  "Businesses launching their first website",
];

const supportItems = [
  {
    title: "Secure hosting",
    text: "Fast, managed hosting so your website loads quickly and stays online reliably.",
  },
  {
    title: "Free SSL certificate",
    text: "HTTPS security is included so visitors see the secure padlock in their browser.",
  },
  {
    title: "Domain connection",
    text: "We connect your domain properly so visitors reach the correct live website.",
  },
  {
    title: "Launch support",
    text: "We handle the technical launch and check everything after the site goes live.",
  },
  {
    title: "Technical management",
    text: "We handle the technical side so you do not have to worry about setup or uptime.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 13 4 4L19 7" />
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

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function MobileMenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base font-medium text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
    >
      <span>{label}</span>
      <ArrowRight />
    </a>
  );
}

function DemoCard({
  card,
  index,
}: {
  card: (typeof featuredDemos)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <a
        href={card.href}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] transition duration-300 hover:border-white/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#0D0E10]">
          <Image
            src={card.image}
            alt={`${card.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4">
            <span className="rounded-full border border-white/10 bg-[#0A0A0B]/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#D5D7DC] backdrop-blur">
              {card.kicker}
            </span>
            <span className="rounded-full bg-[#3B82F6]/15 px-3 py-1 text-[11px] font-medium text-[#9CC0FF]">
              Preview
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#7F828A]">
            {card.kicker}
          </div>
          <h3 className="mt-2 text-[1.35rem] font-medium tracking-[-0.03em] text-[#F5F2EA] sm:text-2xl">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
            {card.copy}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F2EA]">
            Open demo
            <ArrowRight />
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function InfoListItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-6 text-[#E7E8EC]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
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
    <div className="min-h-screen bg-[#0A0A0B] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white md:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-18%] top-[-10%] h-[18rem] w-[18rem] rounded-full bg-[#3B82F6]/10 blur-[100px] sm:left-[-10%] sm:top-[-8%] sm:h-[26rem] sm:w-[26rem] sm:bg-[#3B82F6]/12 sm:blur-[130px]" />
        <div className="absolute bottom-[-14%] right-[-18%] h-[18rem] w-[18rem] rounded-full bg-[#3B82F6]/8 blur-[100px] sm:right-[-8%] sm:h-[24rem] sm:w-[24rem] sm:bg-[#3B82F6]/10 sm:blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.055),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <motion.header
        animate={reduceMotion ? {} : { backdropFilter: scrolled ? "blur(16px)" : "blur(0px)" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0A0A0B]/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between px-4 sm:h-[74px] sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Clean Websites logo"
              width={144}
              height={40}
              className="h-8 w-auto opacity-95 sm:h-9"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] text-[#A9ABB3] md:flex">
            <a href="#demos" className="transition hover:text-[#F5F2EA]">
              Demos
            </a>
            <a href="#pricing" className="transition hover:text-[#F5F2EA]">
              Pricing
            </a>
            <a href="#process" className="transition hover:text-[#F5F2EA]">
              Process
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#demos"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              View demos
            </Link>
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Start my website
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1 }}
            exit={reduceMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[68px] z-40 bg-[#0A0A0B]/96 backdrop-blur md:hidden"
          >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-5 pt-5">
              <div className="space-y-3">
                <MobileMenuLink
                  href="#demos"
                  label="Demo websites"
                  onClick={() => setMobileOpen(false)}
                />
                <MobileMenuLink
                  href="#pricing"
                  label="Pricing"
                  onClick={() => setMobileOpen(false)}
                />
                <MobileMenuLink
                  href="#process"
                  label="How it works"
                  onClick={() => setMobileOpen(false)}
                />
              </div>

              <div className="mt-auto border-t border-white/10 pt-5">
                <Link
                  href="/start"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-[15px] font-semibold text-white"
                >
                  Start my website
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        <Section className="pt-6 sm:pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                Professional websites for UK businesses
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="mx-auto mt-5 max-w-[12ch] font-serif text-[clamp(2.35rem,12vw,4.7rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA] sm:max-w-none sm:leading-[1.02]">
                Professional websites built properly for mobile
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                Clean, fast, mobile-first websites for local businesses with a
                simple process and clear pricing.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                Once your content is ready, your website can be built within 24
                hours.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[#E2E4E9]">
                <span>Website build £595</span>
                <span className="hidden sm:inline text-[#61646B]">•</span>
                <span>Hosting £40/month after launch</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/start"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-[15px] font-semibold text-white transition hover:brightness-110 sm:w-auto"
                >
                  Start my website
                  <ArrowRight />
                </Link>
                <a
                  href="#demos"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-[15px] font-semibold text-[#F5F2EA] transition hover:border-white/15 hover:bg-white/[0.05] sm:w-auto"
                >
                  View demo websites
                  <ArrowRight />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#A9ABB3] sm:mt-7">
                Ideal for trades, salons, restaurants, studios, and local
                service businesses.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Clear pricing",
                  "Designed for small businesses",
                  "Managed hosting included",
                  "Domain stays in your name",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium leading-6 text-[#E2E4E9]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  Fast launch
                </div>
                <h2 className="mt-3 font-serif text-[clamp(2rem,9vw,3.8rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Launch your website within 24 hours
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  Once your business content is ready, your website can be built
                  and prepared for launch quickly without a drawn-out agency
                  process.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {speedPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="rounded-[22px] border border-white/10 bg-[#111214] px-4 py-4 sm:min-h-[96px] sm:px-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA]">
                        {item}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="demos">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                Demo websites
              </div>
              <h2 className="mt-3 font-serif text-[clamp(2rem,9vw,3.8rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                Example layouts for different business types
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                These examples show how your website could be structured to make
                information easier to read on phones and easier to act on.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="mt-6 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-2.5">
                {[
                  "Service businesses",
                  "Studios and beauty",
                  "Restaurants and hospitality",
                  "Local companies",
                  "Small business layouts",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#A9ABB3]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
            {featuredDemos.map((card, index) => (
              <DemoCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  Who this is for
                </div>
                <h2 className="mt-3 font-serif text-[clamp(2rem,9vw,3.8rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Ideal for businesses that need a professional website quickly
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  This is for businesses that need a clean website that looks
                  credible, explains the offer clearly, and gives customers an
                  easy way to get in touch.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {whoItsFor.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="rounded-[22px] border border-white/10 bg-[#111214] px-4 py-4 sm:min-h-[90px] sm:px-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA]">
                        {item}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="pricing">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111214]">
              <div className="border-b border-white/10 px-4 py-6 sm:px-7 sm:py-8">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  Pricing
                </div>
                <h2 className="mt-3 font-serif text-[clamp(2rem,8vw,3.5rem)] leading-[1.02] tracking-[-0.045em] text-[#F5F2EA]">
                  Simple website launch package
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  Clear pricing for small businesses that want a professional
                  website without a complicated process.
                </p>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="px-4 py-6 sm:px-7 sm:py-8">
                  <div className="text-sm text-[#A9ABB3]">Website build</div>
                  <div className="mt-2 text-[2.4rem] font-semibold tracking-[-0.05em] text-[#F5F2EA] sm:text-5xl">
                    £595
                  </div>
                  <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Home page",
                      "About page",
                      "Services or menu page",
                      "Contact or booking page",
                      "Contact form",
                      "Mobile optimisation",
                      "One revision",
                      "Launch support",
                    ].map((item) => (
                      <InfoListItem key={item}>{item}</InfoListItem>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                    Websites can be built within 24 hours once content is
                    received.
                  </div>
                </div>

                <div className="border-t border-white/10 px-4 py-6 sm:px-7 sm:py-8 lg:border-l lg:border-t-0">
                  <div className="text-sm text-[#A9ABB3]">
                    Managed hosting and support
                  </div>
                  <div className="mt-2 text-[2rem] font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-[2.2rem]">
                    £40 / month
                  </div>

                  <div className="mt-6 space-y-4">
                    {supportItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <div className="text-sm font-medium text-[#F5F2EA]">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#A9ABB3]">
                          {item.text}
                        </p>
                      </div>
                    ))}

                    <p className="text-sm leading-6 text-[#A9ABB3]">
                      Your domain is purchased separately in your name so you
                      keep full ownership.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link
                      href="/start"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Start my website
                    </Link>
                    <Link
                      href="#demos"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      View demo websites
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="process">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                Process
              </div>
              <h2 className="mt-3 font-serif text-[clamp(2rem,9vw,3.8rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                A simple 4-step process
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                A clear route from your content to a live website.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:mt-8 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#F5F2EA]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-[#A9ABB3]">
              Once content is received, the website can be built within 24
              hours.
            </div>
          </Reveal>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  Why it works
                </div>
                <h2 className="mt-3 font-serif text-[clamp(2rem,9vw,3.8rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Built to make your business look credible online
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  The goal is simple: give your business a website that looks
                  professional, feels easy to use on a phone, and helps people
                  take action.
                </p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {trustCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.04}>
                  <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5">
                    <h3 className="text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">
                      {card.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pt-2 sm:pt-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] px-4 py-10 text-center sm:px-8 sm:py-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#3B82F6]/16 blur-[90px]" />

              <div className="relative mx-auto max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                  Start
                </div>
                <h2 className="mt-3 font-serif text-[clamp(2.15rem,9vw,4.2rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                  Get your business online properly
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  Send your details and we will review the project and confirm
                  the next steps.
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  Websites start from £595 with £40/month hosting after launch.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    href="/start"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
                  >
                    Start my website
                    <ArrowRight />
                  </Link>
                  <Link
                    href="#demos"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition hover:border-white/15 hover:bg-white/[0.05] sm:w-auto"
                  >
                    View demo websites
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
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
              <div className="text-xs uppercase tracking-[0.16em] text-[#7F828A]">
                Navigate
              </div>
              <Link href="#demos" className="transition hover:text-[#F5F2EA]">
                Demos
              </Link>
              <Link href="#pricing" className="transition hover:text-[#F5F2EA]">
                Pricing
              </Link>
              <a href="#process" className="transition hover:text-[#F5F2EA]">
                Process
              </a>
              <Link href="/start" className="transition hover:text-[#F5F2EA]">
                Start
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3]">
              <div className="text-xs uppercase tracking-[0.16em] text-[#7F828A]">
                Contact
              </div>
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

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#7F828A] sm:flex-row sm:items-center sm:justify-between">
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

        {!mobileOpen && (
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-4 backdrop-blur md:hidden">
            <div className="mx-auto max-w-6xl">
              <Link
                href="/start"
                className="flex h-14 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-[16px] font-semibold text-white shadow-[0_16px_40px_rgba(59,130,246,0.22)]"
              >
                Start my website
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
