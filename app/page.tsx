"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const exampleSites = [
  {
    title: "Barber / Salon",
    desc: "A booking-focused layout with services, pricing, gallery space, and clear contact points.",
    href: "/demo/barber",
    image: "/demo-previews/barber.jpg",
    tag: "Example website",
  },
  {
    title: "Restaurant / Takeaway",
    desc: "A menu-first layout with opening hours, directions, featured items, and strong mobile actions.",
    href: "/demo/burger",
    image: "/demo-previews/burger.jpg",
    tag: "Example website",
  },
  {
    title: "Trades / Services",
    desc: "A service-led layout with trust sections, coverage areas, quote flow, and enquiry points.",
    href: "/demo/trades",
    image: "/demo-previews/trades.jpg",
    tag: "Example website",
  },
];

const whoItsFor = [
  {
    title: "Local service businesses",
    text: "Ideal for trades, salons, barbers, restaurants, studios, and other businesses that need a proper website.",
  },
  {
    title: "Owners who need something done properly",
    text: "You do not need to figure out hosting, SSL, layout, structure, or launch setup yourself.",
  },
  {
    title: "Businesses that need to look credible fast",
    text: "Built for businesses that want a clear, modern online presence without a long agency process.",
  },
];

const includedItems = [
  "Home page",
  "About page",
  "Services or menu page",
  "Contact or booking page",
  "Contact or booking form",
  "Mobile-first layout",
  "One revision before launch",
  "Domain connection support",
  "SSL setup",
  "Launch support",
];

const notIncludedItems = [
  "Ecommerce stores",
  "Advanced custom systems",
  "Large-scale copywriting projects",
  "Branding or logo design",
  "Unlimited revisions",
];

const supportItems = [
  {
    title: "Managed hosting",
    text: "Your website runs on secure hosting that is set up and managed for you after launch.",
  },
  {
    title: "Free SSL certificate",
    text: "Your site includes HTTPS security so visitors see a secure connection in their browser.",
  },
  {
    title: "Technical setup handled",
    text: "Domain connection, deployment, and launch setup are handled for you.",
  },
  {
    title: "Ongoing technical management",
    text: "The technical side stays managed so you are not left figuring out setup problems yourself.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Send your details",
    desc: "Tell us about your business and send your services, logo, and contact details.",
  },
  {
    step: "02",
    title: "We build the first draft",
    desc: "Your website is structured around your business with a clear, mobile-friendly layout.",
  },
  {
    step: "03",
    title: "You review it",
    desc: "You review the draft and request your included revision before anything goes live.",
  },
  {
    step: "04",
    title: "We launch it",
    desc: "We connect the domain, set up SSL, and launch the site properly.",
  },
];

const reasons = [
  {
    title: "Clear fixed starting price",
    copy: "You can see the starting price on the homepage instead of being forced into a call just to find out basic costs.",
  },
  {
    title: "Simple process",
    copy: "No bloated agency workflow. Just a clear path from business details to review to launch.",
  },
  {
    title: "Built for enquiries",
    copy: "The structure is designed to make it obvious what you do and how customers should contact you.",
  },
  {
    title: "You keep ownership",
    copy: "Your domain is registered in your name, so you are not locked out of your own website identity.",
  },
];

const faqs = [
  {
    q: "How long does it take?",
    a: "Once your content and business details are received, the first draft can often be prepared within a few days. More complex projects take longer, but the process is kept straightforward.",
  },
  {
    q: "Are the example websites templates?",
    a: "They are example layouts showing style and structure. Your website is adapted around your business details, services, and contact flow.",
  },
  {
    q: "Do I own the domain?",
    a: "Yes. Your domain is purchased in your name, so you keep ownership of it.",
  },
  {
    q: "What happens after I click start?",
    a: "You send the business details needed for the project, then the next steps are reviewed and your build can begin.",
  },
  {
    q: "Can I request changes?",
    a: "Yes. One revision is included before launch so layout or content can be refined.",
  },
  {
    q: "What is not included?",
    a: "This offer is built for straightforward brochure-style business websites. Advanced functionality, ecommerce, or large custom systems are outside the standard launch package.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
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

function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3]">
      {children}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:brightness-110 ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </Link>
  );
}

function ExampleCard({
  title,
  desc,
  href,
  image,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  image: string;
  tag: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className="group block overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] transition duration-300 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
    >
      <div className="relative h-60 overflow-hidden border-b border-white/10 bg-[#0D0E10] sm:h-72">
        <Image
          src={image}
          alt={`${title} example website preview`}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0A0A0B]/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] backdrop-blur">
          {tag}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#F5F2EA]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#A9ABB3]">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F2EA]">
          Open example
          <ArrowRight />
        </div>
      </div>
    </motion.a>
  );
}

function BulletListCard({
  title,
  items,
  negative = false,
}: {
  title: string;
  items: string[];
  negative?: boolean;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5 sm:p-6">
      <h3 className="text-xl font-medium tracking-[-0.03em] text-[#F5F2EA]">
        {title}
      </h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className={negative ? "text-[#A9ABB3]" : "text-[#8BB5FF]"}>
              {negative ? <XIcon /> : <CheckIcon />}
            </div>
            <span className="text-sm leading-7 text-[#A9ABB3]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#111214]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-[#F5F2EA] sm:text-[16px]">
          {q}
        </span>
        <span className="shrink-0 text-[#A9ABB3]">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-sm leading-7 text-[#A9ABB3] sm:px-6 sm:pb-6">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-8%] h-[26rem] w-[26rem] rounded-full bg-[#3B82F6]/10 blur-[130px]" />
        <div className="absolute bottom-[-14%] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-[#3B82F6]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <motion.header
        animate={{ backdropFilter: scrolled ? "blur(20px)" : "blur(0px)" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0A0A0B]/72"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-[68px]" : "h-[74px] sm:h-[78px]"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Clean Websites logo"
              width={144}
              height={40}
              className="h-8 w-auto opacity-95 sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] text-[#A9ABB3] md:flex">
            <a href="#who" className="transition hover:text-[#F5F2EA]">
              Who it&apos;s for
            </a>
            <a href="#pricing" className="transition hover:text-[#F5F2EA]">
              Pricing
            </a>
            <a href="#examples" className="transition hover:text-[#F5F2EA]">
              Examples
            </a>
            <a href="#faq" className="transition hover:text-[#F5F2EA]">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SecondaryButton href="#examples" className="h-11 px-4">
              View example websites
            </SecondaryButton>
            <PrimaryButton href="/start" className="h-11 px-5">
              Start my website
            </PrimaryButton>
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

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="border-t border-white/10 bg-[#0A0A0B]/96 px-5 pb-5 pt-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {[
                  { href: "#who", label: "Who it's for" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#examples", label: "Examples" },
                  { href: "#faq", label: "FAQ" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    {item.label}
                  </a>
                ))}

                <SecondaryButton
                  href="#examples"
                  className="mt-2 w-full"
                >
                  View example websites
                </SecondaryButton>

                <PrimaryButton href="/start" className="w-full">
                  Start my website
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative">
        <section className="mx-auto flex min-h-[82svh] w-full max-w-7xl items-center justify-center px-5 pb-14 pt-16 text-center sm:min-h-[calc(100svh-74px)] sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="hidden sm:inline-flex">
                <SectionLabel>Fast websites for small UK businesses</SectionLabel>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mx-auto mt-4 max-w-[13ch] font-serif text-[clamp(2.3rem,10vw,5.25rem)] leading-[0.92] tracking-[-0.05em] text-[#F5F2EA] sm:mt-6 sm:max-w-[14ch]">
                Fast, professional websites for small UK businesses
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-[#A9ABB3] sm:text-[20px] sm:leading-9">
                A straightforward way to get your business online with a clean,
                mobile-first website that makes you look credible and makes it
                easy for customers to get in touch.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                Built for businesses that want something done properly without a
                long agency process or vague pricing.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mx-auto mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[15px] font-medium text-[#F5F2EA]">
                Websites from £595 • Managed hosting £40/month
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
                <PrimaryButton href="/start" className="w-full sm:w-auto">
                  Start my website
                  <ArrowRight />
                </PrimaryButton>

                <SecondaryButton href="#examples" className="w-full sm:w-auto">
                  View example websites
                  <ArrowRight />
                </SecondaryButton>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mx-auto mt-4 text-sm text-[#7F828A]">
                Send your details first. No call booking required.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left text-sm text-[#A9ABB3] sm:grid-cols-2 xl:grid-cols-4">
                {[
                  "Clear fixed starting price",
                  "Mobile-first build",
                  "One revision before launch",
                  "Domain stays in your name",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <section
            id="who"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="max-w-2xl">
              <SectionLabel>Who it&apos;s for</SectionLabel>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                Built for small businesses that need a proper website
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                This is designed for businesses that need to look trustworthy
                online without getting dragged into a bloated project.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {whoItsFor.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5 transition duration-300 hover:border-white/15 hover:bg-[#141518] sm:p-6">
                    <h3 className="text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="pricing"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] px-5 py-7 sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-10">
              <div className="max-w-3xl">
                <SectionLabel>Pricing</SectionLabel>
                <h2 className="mt-4 font-serif text-[clamp(2.1rem,8vw,3.8rem)] leading-[1.02] tracking-[-0.04em] text-[#F5F2EA]">
                  Straightforward pricing for a clean business website
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  This is a clear launch package for businesses that need a
                  professional website without mystery pricing or unnecessary
                  process.
                </p>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#17181B]">
                  <div className="border-b border-white/10 p-5 sm:p-7">
                    <div className="text-sm text-[#A9ABB3]">Website build</div>
                    <div className="mt-2 text-[2.5rem] font-semibold tracking-[-0.05em] text-[#F5F2EA] sm:text-5xl">
                      From £595
                    </div>
                    <div className="mt-2 text-sm text-[#A9ABB3]">One-time cost</div>
                  </div>

                  <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-2">
                    <BulletListCard title="Included" items={includedItems} />
                    <BulletListCard
                      title="Not included"
                      items={notIncludedItems}
                      negative
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#17181B] p-5 sm:p-7">
                  <div className="text-sm text-[#A9ABB3]">
                    Managed hosting & support
                  </div>
                  <div className="mt-2 text-[2rem] font-semibold tracking-[-0.03em] text-[#F5F2EA] sm:text-4xl">
                    £40 / month
                  </div>

                  <div className="mt-6 space-y-4">
                    {supportItems.map((item) => (
                      <div key={item.title}>
                        <div className="text-sm font-medium text-[#F5F2EA]">
                          {item.title}
                        </div>
                        <p className="mt-1 text-sm leading-7 text-[#A9ABB3]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-[#A9ABB3]">
                    Your domain is purchased separately in your name, so you
                    always keep ownership of it.
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <PrimaryButton href="/start" className="w-full">
                      Start my website
                    </PrimaryButton>

                    <SecondaryButton href="#faq" className="w-full">
                      Read common questions
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-xl">
                <SectionLabel>Why choose Clean Websites</SectionLabel>
                <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                  A simpler option for businesses that just need it done right
                </h2>
                <p className="mt-5 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  This business is new, so the site does not pretend there is a
                  huge portfolio or years of inflated social proof behind it.
                </p>
                <p className="mt-4 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  The offer is built around clarity, transparent pricing, and a
                  lower-friction process for small businesses that need a proper
                  website online.
                </p>
              </div>

              <div className="space-y-4">
                {reasons.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.06}>
                    <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5 transition duration-300 hover:border-white/15 hover:bg-[#141518] sm:p-6">
                      <h3 className="text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                        {card.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="examples"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="max-w-3xl">
              <SectionLabel>Example websites</SectionLabel>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                Example website styles for common business types
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                These are example layouts showing style and structure. They are
                not presented as client case studies. Your website is built
                around your business details, services, and contact flow.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {exampleSites.map((card) => (
                <ExampleCard key={card.title} {...card} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="process"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="max-w-2xl">
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                A simple process from details to launch
              </h2>
              <p className="mt-4 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                The goal is to keep this straightforward. You send the business
                information, the draft is built, you review it, and the site is
                launched properly.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {processSteps.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.06}>
                  <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5 sm:p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#F5F2EA]">
                      {item.step}
                    </div>

                    <h3 className="mt-5 text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-8">
                <SectionLabel>About</SectionLabel>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.2rem)] leading-[1] tracking-[-0.04em] text-[#F5F2EA]">
                  Built for small businesses that need a professional online presence
                </h2>
                <p className="mt-5 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Clean Websites is positioned as a simple, affordable option
                  for businesses that need a clean website without the drag of a
                  traditional agency setup.
                </p>
                <p className="mt-4 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  The aim is not to oversell. It is to offer a clear service,
                  transparent pricing, and a website that helps your business
                  look credible and easy to contact.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#111214] p-6 sm:p-8">
                <SectionLabel>What the website is designed to do</SectionLabel>
                <div className="mt-5 space-y-4">
                  {[
                    {
                      title: "Make your business look legitimate",
                      text: "A lot of small businesses lose trust because their online presence looks unfinished or outdated.",
                    },
                    {
                      title: "Help customers understand what you do fast",
                      text: "Visitors should not have to hunt around the page to figure out your services.",
                    },
                    {
                      title: "Make it easy to get in touch",
                      text: "Strong structure and clear enquiry points matter more than flashy effects.",
                    },
                    {
                      title: "Work properly on phones",
                      text: "A large share of local-business traffic is mobile, so the layout is built with that in mind from the start.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <h3 className="text-[17px] font-medium text-[#F5F2EA]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#A9ABB3]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="faq"
            className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-serif text-[clamp(2.1rem,7vw,3.7rem)] leading-[1] tracking-[-0.04em] text-[#F5F2EA]">
                Common questions before getting started
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                These are the practical questions people usually want answered
                before they commit to anything.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openFaq === index}
                  onClick={() =>
                    setOpenFaq((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] px-5 py-12 text-center sm:rounded-[34px] sm:px-10 sm:py-14">
              <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#3B82F6]/18 blur-[110px]" />

              <div className="relative mx-auto max-w-3xl">
                <SectionLabel>Start</SectionLabel>
                <h2 className="mt-4 font-serif text-[clamp(2.3rem,8vw,4.5rem)] leading-[0.97] tracking-[-0.045em] text-[#F5F2EA]">
                  Ready to get your business online properly?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Send your business details and the next step can be reviewed
                  clearly without dragging you through a long sales process.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Website builds start from £595. Managed hosting is £40/month
                  after launch.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <PrimaryButton href="/start" className="w-full sm:w-auto">
                    Start my website
                    <ArrowRight />
                  </PrimaryButton>

                  <SecondaryButton href="#examples" className="w-full sm:w-auto">
                    View example websites
                    <ArrowRight />
                  </SecondaryButton>
                </div>

                <p className="mt-4 text-sm text-[#7F828A]">
                  Clear starting price. Clear process. No fake portfolio claims.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <footer className="mx-auto w-full max-w-7xl border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-lg font-semibold tracking-[-0.03em] text-[#F5F2EA]">
                CLEAN WEBSITES
              </div>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#A9ABB3]">
                Fast, professional websites for small UK businesses.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3]">
              <div className="text-xs uppercase tracking-[0.16em] text-[#7F828A]">
                Navigate
              </div>
              <a href="#who" className="transition hover:text-[#F5F2EA]">
                Who it&apos;s for
              </a>
              <a href="#pricing" className="transition hover:text-[#F5F2EA]">
                Pricing
              </a>
              <a href="#examples" className="transition hover:text-[#F5F2EA]">
                Examples
              </a>
              <a href="#faq" className="transition hover:text-[#F5F2EA]">
                FAQ
              </a>
              <Link href="/start" className="transition hover:text-[#F5F2EA]">
                Start
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3] md:items-start">
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

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#7F828A] sm:flex-row sm:items-center sm:justify-between">
            <div>© {year} Clean Websites. All rights reserved.</div>
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

        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="fixed bottom-6 right-6 z-40 hidden lg:block"
            >
              <Link
                href="/start"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#111214]/92 px-5 py-3 text-sm font-semibold text-[#F5F2EA] shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                Start my website
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-4 backdrop-blur md:hidden">
          <Link
            href="/start"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] text-sm font-semibold text-white"
          >
            Start my website
          </Link>
        </div>
      </main>
    </div>
  );
}
