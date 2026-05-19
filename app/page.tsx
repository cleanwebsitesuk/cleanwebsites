"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from "react";

const NAV_ITEMS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#package", label: "Package" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

const FIT_POINTS = [
  "Suitable for straightforward brochure-style websites",
  "Works well for businesses that need enquiries, calls or bookings",
  "A good fit when you want a professional website without a long project",
  "Suitable for many small businesses, including local and professional services",
] as const;

const PORTFOLIO_ITEMS = [
  {
    title: "McKenzieFriend.ai",
    domain: "mckenziefriend.ai",
    description:
      "An AI-assisted preparation platform for Family and Civil Court, designed to help litigants organise documents, structure information clearly, and prepare with confidence.",
    href: "https://mckenziefriend.ai",
    image: "/portfolio/mckenziefriend.png",
    kicker: "Recent work",
    cta: "Visit website",
    points: [
      "Trust-focused legal positioning",
      "Clear dashboard-led structure",
      "Designed for clarity in a sensitive context",
    ],
  },
  {
    title: "FareGuard",
    domain: "fareguard.co.uk",
    description:
      "A UK-focused product website for a tool that tracks train journeys and reminds users to claim Delay Repay, built around clarity, automation and trust.",
    href: "https://fareguard.co.uk",
    image: "/portfolio/fareguard.png",
    kicker: "Recent work",
    cta: "Visit website",
    points: [
      "Clear automation-led user journey",
      "Built around trust and simplicity",
      "Designed for everyday commuter use",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Send your business details and content",
    description:
      "Provide the text, business information and any images or videos you would like included.",
  },
  {
    step: "02",
    title: "Your website is built",
    description:
      "Your website is designed around your business, with a clean, well-structured layout that is simple for visitors to use.",
  },
  {
    step: "03",
    title: "Review the build",
    description:
      "One revision is included so you can review and refine the layout or content before launch.",
  },
  {
    step: "04",
    title: "Go live",
    description:
      "Your domain is connected, hosting is configured, SSL is enabled, and your website is fully prepared for launch.",
  },
] as const;

const INCLUDED_ITEMS = [
  "A custom 4-page website (Home, About, Services, Contact)",
  "Pages structured around your services and enquiry flow",
  "Mobile-optimised layout for phones and tablets",
  "Contact form/booking enquiry setup",
  "Domain connection and full website launch setup",
  "Secure hosting and SSL included",
  "Fast-loading, simple and reliable build",
  "One revision before launch",
] as const;

const PACKAGE_INCLUDES = [
  "Home page",
  "About page",
  "Services or menu page",
  "Contact or booking page",
  "Contact form",
  "Mobile optimisation",
  "One revision",
  "Launch support",
] as const;

const HOSTING_INCLUDES = [
  {
    title: "Secure hosting",
    text: "Your website runs on reliable hosting designed for speed, stability and day-to-day performance.",
  },
  {
    title: "SSL certificate included",
    text: "Your website includes SSL security, which enables HTTPS, shows the secure padlock in browsers, and helps protect information sent through your website such as contact form submissions.",
  },
  {
    title: "Domain connection setup",
    text: "Your domain is connected properly so visitors reach your live website without technical issues.",
  },
  {
    title: "Deployment and launch support",
    text: "The technical side of going live is handled for you and checked after launch.",
  },
  {
    title: "Technical management",
    text: "The website is managed on the technical side so you do not need to deal with server setup, SSL configuration or launch issues yourself.",
  },
] as const;

const FAQS = [
  {
    question: "How quickly can my website be built?",
    answer:
      "Once your content is received, your website can be built and prepared for launch within 24 hours.",
  },
  {
    question: "Do I keep ownership of my domain?",
    answer:
      "Yes. Your domain stays in your name. That means you keep control and ownership of your website address.",
  },
  {
    question: "What does the hosting include?",
    answer:
      "Hosting includes secure hosting, SSL, technical management, deployment support and the ongoing infrastructure needed to keep your website online and working properly.",
  },
  {
    question: "What does SSL do?",
    answer:
      "SSL enables secure HTTPS on your website, shows the secure padlock in browsers, and helps protect data submitted through your site, such as contact form enquiries. It also helps your site meet modern browser security expectations.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Websites are built mobile-first so they work properly on phones as well as desktop.",
  },
  {
    question: "Can I review the website before launch?",
    answer:
      "Yes. One revision is included before launch so adjustments can be made to the layout or content.",
  },
  {
    question: "What kind of businesses is this suitable for?",
    answer:
      "It works well for businesses that need a clear, professional website with a straightforward structure and a clean online presence.",
  },
] as const;

const HERO_STATS = [
  { label: "Launch time", value: "24h" },
  { label: "Core structure", value: "4 pages" },
  { label: "Setup", value: "Handled" },
] as const;

const TRUST_ITEMS = [
  "Mobile-first design",
  "Domain setup handled",
  "SSL included",
  "One review included",
] as const;

const COMPARISON_ROWS = [
  { traditional: "Long agency timelines", clean: "Built within 24 hours once content is received" },
  { traditional: "Multiple meetings and slow back-and-forth", clean: "Simple content handover and focused review" },
  { traditional: "Technical setup left unclear", clean: "Domain, hosting, SSL and launch setup handled" },
  { traditional: "Overcomplicated builds for simple business needs", clean: "Clean 4-page structure built around enquiries" },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mediaQuery.matches);
    onChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }

    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, [breakpoint]);

  return isMobile;
}

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

function SectionShell({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <>{children ? null : null}</>;
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 3.5C22.8 13.1 26.9 17.2 36.5 20C26.9 22.8 22.8 26.9 20 36.5C17.2 26.9 13.1 22.8 3.5 20C13.1 17.2 17.2 13.1 20 3.5Z" />
      <path d="M20 11.5V5.5" />
      <path d="M20 34.5V28.5" />
      <path d="M5.5 20H11.5" />
      <path d="M28.5 20H34.5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const lineBase =
    "absolute left-0 h-px w-5 rounded-full bg-[#0B1220] transition-all duration-300";

  return (
    <div className="relative h-5 w-5" aria-hidden="true">
      <span className={`${lineBase} top-1 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
      <span className={`${lineBase} top-2.5 ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`${lineBase} top-4 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  amount = 0.18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.58, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F6FED] px-6 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#245FDB] focus:outline-none focus:ring-4 focus:ring-[#CFE0FF] ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white/85 px-6 text-sm font-semibold text-[#0B1220] shadow-[0_12px_28px_rgba(11,18,32,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#E2E8F0] ${className}`}
    >
      {children}
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-4 py-2 text-[15px] font-medium text-[#536176] transition duration-300 hover:bg-[#F1F5F9] hover:text-[#0B1220]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function BrandMark() {
  const reduceMotion = useReducedMotion() ?? false;

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <Link
      href="#top"
      aria-label="Clean Websites home"
      className="inline-flex items-center"
      onClick={handleLogoClick}
    >
      <Image
        src="/logo.png"
        alt="Clean Websites"
        width={160}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}

function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <SecondaryButton href="#portfolio" className="h-11 px-5">
        View portfolio
      </SecondaryButton>
      <PrimaryButton href="/start" className="h-11 px-5">
        Start my website
      </PrimaryButton>
    </div>
  );
}

function MobileMenu({ open, onClose, reduceMotion }: { open: boolean; onClose: () => void; reduceMotion: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 border-t border-[#E2E8F0] bg-[#F8FAFC]/96 backdrop-blur-2xl md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-6 pt-6 sm:px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="flex flex-1 flex-col"
            >
              <div className="grid gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.26, delay: 0.03 + index * 0.05, ease: easeOut }}
                    className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white/80 px-5 py-4 text-[17px] font-semibold text-[#0B1220] shadow-sm transition hover:border-[#CBD5E1] hover:bg-white"
                  >
                    <span>{item.label}</span>
                    <ArrowRight />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-[#E2E8F0] bg-white/70 p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-3">
                  {HERO_STATS.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-3 text-center">
                      <div className="text-sm font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-base">{item.value}</div>
                      <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#647085]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <PrimaryButton href="/start" className="w-full">
                  Start my website
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CleanSweep({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          initial={{ x: "-35%", opacity: 0 }}
          animate={{ x: ["-35%", "120%"], opacity: [0, 0.52, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/3 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)] blur-sm"
        />
      )}
    </div>
  );
}

function FloatingBuildCard({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={
        reduceMotion
          ? {}
          : {
              opacity: 1,
              y: [0, -7, 0],
              scale: 1,
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.55, delay: 0.5, ease: easeOut },
              scale: { duration: 0.55, delay: 0.5, ease: easeOut },
              y: { duration: 4.4, repeat: Infinity, ease: "easeInOut" },
            }
      }
      className="absolute -bottom-8 left-4 hidden w-[255px] rounded-[22px] border border-white/70 bg-white/88 p-4 shadow-[0_24px_70px_rgba(11,18,32,0.14)] backdrop-blur-xl sm:block"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#647085]">Launch checklist</div>
        <div className="rounded-full bg-[#EAF2FF] px-2 py-1 text-[10px] font-bold text-[#2F6FED]">24h build</div>
      </div>

      <div className="mt-4 grid gap-2.5">
        {[
          "Business details",
          "Services, menu or offer",
          "Photos, logo or brand assets",
          "Review notes before launch",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-[12px] font-medium text-[#293548]">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
              <CheckIcon />
            </span>
            {item}
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-5 text-[#647085]">
        Send the essentials once. The build, setup and launch are handled from there.
      </p>
    </motion.div>
  );
}

function HeroWebsitePreview({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
      <div className="absolute -left-10 top-12 hidden h-44 w-44 rounded-full bg-[#EAF2FF] blur-3xl sm:block" />
      <div className="absolute -right-10 bottom-4 hidden h-52 w-52 rounded-full bg-[#E2E8F0] blur-3xl sm:block" />

      <div className="relative rounded-[30px] border border-[#E2E8F0] bg-white/78 p-3 shadow-[0_30px_90px_rgba(11,18,32,0.12)] backdrop-blur-xl">
        <CleanSweep reduceMotion={reduceMotion} />
        <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-white/86 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
            </div>
            <div className="ml-3 h-7 flex-1 rounded-full bg-[#F1F5F9]" />
          </div>

          <div className="p-4 sm:p-5">
            <div className="rounded-[24px] bg-[#0B1220] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/12" />
                  <div>
                    <div className="h-2.5 w-24 rounded-full bg-white/75" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-white/18" />
                  </div>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                <div>
                  <div className="h-2.5 w-24 rounded-full bg-[#2F6FED]" />
                  <div className="mt-4 h-8 w-full rounded-full bg-white" />
                  <div className="mt-2 h-8 w-4/5 rounded-full bg-white" />
                  <div className="mt-5 space-y-2.5">
                    <div className="h-2.5 w-full rounded-full bg-white/18" />
                    <div className="h-2.5 w-5/6 rounded-full bg-white/18" />
                    <div className="h-2.5 w-2/3 rounded-full bg-white/18" />
                  </div>
                  <div className="mt-6 h-11 w-36 rounded-full bg-[#2F6FED]" />
                </div>

                <div className="rounded-[18px] border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center gap-1 text-[#F5C542]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="text-xs">★</span>
                    ))}
                  </div>
                  <div className="mt-3 h-2.5 w-full rounded-full bg-white/20" />
                  <div className="mt-2 h-2.5 w-4/5 rounded-full bg-white/20" />
                  <div className="mt-4 h-7 w-24 rounded-full bg-white/12" />
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {["Services", "About", "Contact"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_10px_28px_rgba(11,18,32,0.04)]">
                  <div className="h-8 w-8 rounded-xl bg-[#EAF2FF]" />
                  <div className="mt-4 text-[12px] font-bold text-[#0B1220]">{item}</div>
                  <div className="mt-3 h-2 w-full rounded-full bg-[#E2E8F0]" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-[#E2E8F0]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 right-3 hidden w-[176px] rounded-[28px] border border-[#E2E8F0] bg-white p-2 shadow-[0_22px_70px_rgba(11,18,32,0.18)] sm:block">
        <div className="overflow-hidden rounded-[22px] bg-[#0B1220] p-3 text-white">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/25" />
          <div className="h-20 rounded-2xl bg-white/10" />
          <div className="mt-3 h-3 w-20 rounded-full bg-white" />
          <div className="mt-2 h-2 w-full rounded-full bg-white/20" />
          <div className="mt-1.5 h-2 w-4/5 rounded-full bg-white/20" />
          <div className="mt-4 h-9 rounded-full bg-[#2F6FED]" />
        </div>
      </div>

      <FloatingBuildCard reduceMotion={reduceMotion} />
    </div>
  );
}

function HeroHeader({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() ?? false;

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    if (!isMobile && mobileOpen) setMobileOpen(false);
  }, [isMobile, mobileOpen]);

  const headerClass = useMemo(
    () =>
      scrolled
        ? "border-b border-[#E2E8F0] bg-[#F8FAFC]/88 shadow-[0_12px_40px_rgba(11,18,32,0.06)] backdrop-blur-2xl"
        : "border-b border-transparent bg-[#F8FAFC]/72 backdrop-blur-xl",
    [scrolled]
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[76px] lg:px-8">
          <BrandMark />
          <DesktopNav />
          <DesktopActions />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Toggle menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-sm md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} reduceMotion={reduceMotion} />
      </div>
    </>
  );
}

function HeroSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_60%_0%,rgba(47,111,237,0.11),transparent_42%),linear-gradient(180deg,#F8FAFC_0%,#F1F5F9_100%)]" />
      <div className="absolute inset-x-0 top-[110px] -z-10 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-14 pt-10 sm:px-6 sm:pb-18 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-10">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <SectionEyebrow>Professional business websites</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.05, ease: easeOut }}
            className="mt-5 max-w-[12.5ch] text-[3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0B1220] sm:text-[clamp(4rem,6.2vw,5.25rem)]"
          >
            A professional website for your business — built within 24 hours
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12, ease: easeOut }}
            className="mt-6 max-w-xl text-[16px] leading-8 text-[#536176] sm:text-[17px] sm:leading-8"
          >
            A clean, mobile-first website designed not just to look credible, but to turn visitors into customers—clearly communicating what you do, building trust instantly, and making it effortless for people to get in touch.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18, ease: easeOut }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
          >
            <PrimaryButton href="/start" className="w-full sm:w-auto">
              Start my website
              <ArrowRight />
            </PrimaryButton>
            <SecondaryButton href="#portfolio" className="w-full sm:w-auto">
              View portfolio
              <ArrowRight />
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24, ease: easeOut }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/74 px-3.5 py-2 text-sm font-medium text-[#536176] shadow-sm backdrop-blur-xl">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                  <CheckIcon />
                </span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
        >
          <HeroWebsitePreview reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <SectionShell className="!py-0">
      <div className="rounded-[26px] border border-[#E2E8F0] bg-white/78 px-4 py-4 shadow-[0_18px_60px_rgba(11,18,32,0.06)] backdrop-blur-xl">
        <div className="grid gap-3 md:grid-cols-3">
          {HERO_STATS.map((item, index) => (
            <div key={item.label} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${index === 1 ? "bg-[#F8FAFC]" : "bg-white/40"}`}>
              <div className="text-[15px] font-semibold text-[#0B1220]">{item.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#647085]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ComparisonSection() {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="max-w-xl">
          <SectionEyebrow>Fast launch</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(2.05rem,4.4vw,3.3rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            Built fast, without cutting corners
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            This service is designed for businesses that need a polished website without a lengthy build. The process stays simple, focused and structured from content handover to launch.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white/72 p-5 shadow-[0_18px_60px_rgba(11,18,32,0.05)] backdrop-blur-xl sm:p-6">
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#647085]">Traditional projects</div>
            <div className="mt-5 grid gap-3">
              {COMPARISON_ROWS.map((row) => (
                <div key={row.traditional} className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#647085]">
                  {row.traditional}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1220] p-5 text-white shadow-[0_24px_80px_rgba(11,18,32,0.18)] sm:p-6">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#2F6FED]/20 blur-3xl" />
            <div className="relative text-[12px] font-bold uppercase tracking-[0.16em] text-[#AFC6F8]">Clean Websites</div>
            <div className="relative mt-5 grid gap-3">
              {COMPARISON_ROWS.map((row) => (
                <div key={row.clean} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium leading-6 text-[#F8FAFC]">
                  {row.clean}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function FitSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell className="!pt-0">
      <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2.05rem,4.4vw,3.35rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            Built for businesses that need a clean & professional website
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            This service is designed for businesses that need a polished website without a lengthy build. It works particularly well for local and service-based businesses that want to clearly present their services and make it easy for customers to get in touch.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {FIT_POINTS.map((item, index) => (
            <motion.div
              key={item}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: easeOut }}
              className="rounded-[24px] border border-[#E2E8F0] bg-white/72 p-5 shadow-[0_16px_48px_rgba(11,18,32,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                  <CheckIcon />
                </span>
                <p className="text-[15px] leading-7 text-[#293548]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PortfolioCard({ item, index }: { item: (typeof PORTFOLIO_ITEMS)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-[30px] border border-[#E2E8F0] bg-white shadow-[0_18px_60px_rgba(11,18,32,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(11,18,32,0.12)]"
      >
        <div className="border-b border-[#E2E8F0] bg-[#F1F5F9] p-3 sm:p-4">
          <div className="overflow-hidden rounded-[22px] border border-[#E2E8F0] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-white px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#647085] sm:text-[11px]">{item.kicker}</span>
              <span className="text-sm font-semibold text-[#0B1220]">{item.cta}</span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
              <Image
                src={item.image}
                alt={`${item.title} preview`}
                width={1280}
                height={800}
                className="h-full w-full object-cover object-top transition duration-700 md:group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#2F6FED]">{item.domain}</div>
          <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-[1.9rem]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#536176] sm:text-[15px]">{item.description}</p>

          <div className="mt-5 grid gap-3">
            {item.points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm leading-6 text-[#293548]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                  <CheckIcon />
                </span>
                {point}
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B1220]">
            Visit website
            <ArrowRight />
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="border-y border-[#E2E8F0] bg-white/68">
      <SectionShell>
        <div className="max-w-3xl">
          <SectionEyebrow>Portfolio</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(2.05rem,4.4vw,3.35rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            Recent work
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#536176]">
            A selection of recent projects showing the level of structure, presentation and clarity you can expect.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function IncludedSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <SectionEyebrow>What is included</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(2.05rem,4.4vw,3.35rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            Everything needed for a clean, credible business website
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            Our service includes everything needed to get your website properly built, set up and live — without needing to handle any of the technical side yourself.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {INCLUDED_ITEMS.map((item, index) => (
            <motion.div
              key={item}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.035, ease: easeOut }}
              className="rounded-[22px] border border-[#E2E8F0] bg-white/72 p-4 shadow-[0_16px_48px_rgba(11,18,32,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                  <CheckIcon />
                </span>
                <p className="text-[14px] leading-6 text-[#293548] sm:text-[15px]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PackageList({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-6">
      {items.map((item, index) => (
        <div
          key={item}
          className={`flex items-start gap-3 py-3 ${index !== items.length - 1 ? "border-b border-white/10" : ""} ${index < items.length - 2 ? "sm:border-b" : ""}`}
        >
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#AFC6F8]">
            <CheckIcon />
          </span>
          <span className="text-sm leading-6 text-[#F8FAFC]">{item}</span>
        </div>
      ))}
    </div>
  );
}

function PackageSection() {
  return (
    <SectionShell id="package" className="!pt-0">
      <div className="max-w-4xl">
        <SectionEyebrow>Package</SectionEyebrow>
        <h2 className="mt-4 max-w-none text-[clamp(2.05rem,4.4vw,3.25rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
          A complete website for your business
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#536176]">
          Handled for you from start to finish, so getting online is straightforward.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-[34px] bg-[#0B1220] shadow-[0_30px_100px_rgba(11,18,32,0.22)]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2F6FED]/24 blur-3xl" />
        <div className="absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-sm font-semibold text-[#AFC6F8]">Website build</div>
            <div className="mt-3 text-[2.35rem] font-semibold tracking-[-0.05em] text-white sm:text-[3rem]">
              Built within 24 hours
            </div>
            <div className="mt-3 max-w-lg text-sm leading-7 text-[#C8D1E1]">
              Once your content is received, your website can be built and prepared for launch within 24 hours.
            </div>

            <div className="mt-7">
              <PackageList items={PACKAGE_INCLUDES} />
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.055] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="text-sm font-semibold text-[#AFC6F8]">Hosting &amp; support</div>
            <div className="mt-3 text-[1.9rem] font-semibold tracking-[-0.04em] text-white sm:text-[2.25rem]">
              Setup handled
            </div>
            <p className="mt-4 text-sm leading-7 text-[#C8D1E1]">
              Your website is hosted securely and managed technically so it stays online, loads properly and continues to run as expected after launch.
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {HOSTING_INCLUDES.map((item) => (
                <div key={item.title} className="py-4 first:pt-0">
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <p className="mt-1 text-sm leading-6 text-[#AAB6C8]">{item.text}</p>
                </div>
              ))}

              <div className="py-4">
                <p className="text-sm leading-7 text-[#AAB6C8]">
                  Your domain is purchased separately in your name, so you keep full ownership of it.
                </p>
              </div>
            </div>

            <Link
              href="/start"
              className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#0B1220] shadow-[0_14px_34px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF2FF] sm:w-auto"
            >
              Start my website
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ProcessSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section id="process" className="border-y border-[#E2E8F0] bg-white/68">
      <SectionShell>
        <div className="max-w-2xl">
          <SectionEyebrow>What happens next</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(2.05rem,4.4vw,3.35rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            A simple process from enquiry to launch
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            Launching your website is straightforward with Clean Websites.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-[#E2E8F0] lg:block" />
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { x: "0%" }}
            whileInView={reduceMotion ? {} : { x: ["0%", "100%"] }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.5, ease: easeOut }}
            className="absolute left-[8%] top-[1.85rem] z-10 hidden h-3 w-3 rounded-full bg-[#2F6FED] shadow-[0_0_0_6px_rgba(47,111,237,0.12)] lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: easeOut }}
                className="relative rounded-[26px] border border-[#E2E8F0] bg-white p-5 shadow-[0_16px_48px_rgba(11,18,32,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1220] text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.035em] text-[#0B1220]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#536176]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white/76 p-5 shadow-[0_16px_48px_rgba(11,18,32,0.04)] backdrop-blur-xl sm:p-6">
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={open}>
        <span className="text-[16px] font-semibold leading-7 text-[#0B1220] sm:text-[17px]">{question}</span>
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#536176]">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-7 text-[#536176] sm:text-[15px]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  return (
    <SectionShell id="faq">
      <div className="max-w-3xl">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-4 text-[clamp(2.05rem,4.4vw,3.35rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
          Common questions
        </h2>
      </div>

      <div className="mt-10 grid gap-4">
        {FAQS.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </SectionShell>
  );
}

function FinalCTA() {
  return (
    <SectionShell className="pb-16 sm:pb-20 lg:pb-24">
      <div className="relative overflow-hidden rounded-[34px] border border-[#E2E8F0] bg-white px-5 py-12 text-center shadow-[0_28px_100px_rgba(11,18,32,0.08)] sm:px-8 sm:py-16">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#EAF2FF] blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          
          <h2 className="text-[clamp(2.05rem,4.4vw,3.65rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#0B1220]">
            A clean website for your business
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline">built in 24 hours</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#536176] sm:text-[16px]">
            Clean, coded and built to present your services clearly and make it easy for customers to get in touch.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/start" className="w-full sm:w-auto">
              Start my website
              <ArrowRight />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function MobileStickyCta({ hidden }: { hidden: boolean }) {
  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] bg-[#F8FAFC]/92 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur-2xl md:hidden">
      <div className="mx-auto max-w-7xl">
        <PrimaryButton href="/start" className="h-14 w-full text-[16px]">
          Start my website
        </PrimaryButton>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl border-t border-[#E2E8F0] px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-[-0.035em] text-[#0B1220]">Clean Websites</div>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#536176]">Professional websites for growing businesses.</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#536176]">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#647085]">Navigate</div>
          <Link href="#portfolio" className="transition hover:text-[#0B1220]">Portfolio</Link>
          <Link href="#package" className="transition hover:text-[#0B1220]">Package</Link>
          <a href="#process" className="transition hover:text-[#0B1220]">Process</a>
          <Link href="#faq" className="transition hover:text-[#0B1220]">FAQ</Link>
          <Link href="/start" className="transition hover:text-[#0B1220]">Start</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#536176] md:items-start">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#647085]">Contact</div>
          <a href="mailto:hello@cleanwebsites.co.uk" className="transition hover:text-[#0B1220]">hello@cleanwebsites.co.uk</a>
          <a href="https://wa.me/message/CIUXDPB67KAAJ1" target="_blank" rel="noreferrer" className="transition hover:text-[#0B1220]">WhatsApp</a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 text-sm text-[#647085] sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Clean Websites. All rights reserved.</div>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition hover:text-[#0B1220]">Privacy</Link>
          <Link href="/terms" className="transition hover:text-[#0B1220]">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowSticky(window.scrollY > 560);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

return (
  <div
    id="top"
    className="min-h-screen scroll-smooth bg-[#F8FAFC] pb-24 font-[Manrope,DM_Sans,Inter,system-ui,sans-serif] text-[#0B1220] antialiased selection:bg-[#DCEAFF] selection:text-[#0B1220] md:pb-0"
  >
    <HeroHeader scrolled={scrolled} />
    <HeroSection reduceMotion={reduceMotion} />
    
      <main className="relative overflow-hidden">
        <StatsStrip />
        <ComparisonSection />
        <FitSection reduceMotion={reduceMotion} />
        <PortfolioSection />
        <IncludedSection reduceMotion={reduceMotion} />
        <PackageSection />
        <ProcessSection reduceMotion={reduceMotion} />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </main>

      <MobileStickyCta hidden={!showSticky} />
    </div>
  );
}
