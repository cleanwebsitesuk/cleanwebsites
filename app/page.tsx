"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/*  Content (wording unchanged)                                        */
/* ------------------------------------------------------------------ */

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

const FEATURED_PROJECT = {
  title: "AIRDEFENCE.AI",
  domain: "airdefence.ai",
  description:
    "An autonomous counter-UAS defence platform, presented as a live command console. The site pairs a real-time tactical radar display with a fully playable live-fire simulation, streaming telemetry and a layered systems breakdown — engineered so the website feels as capable as the product it presents.",
  href: "https://www.airdefence.ai",
  image: "/portfolio/airdefence.png",
  kicker: "Featured project",
  points: [
    "Live animated tactical display with a streaming event feed",
    "Interactive live-fire simulation playable directly on the page",
    "Precision command-console design system, engineered end-to-end",
  ],
  stats: [
    { value: "Live", label: "Tactical radar feed" },
    { value: "3 waves", label: "Playable simulation" },
    { value: "360°", label: "Console telemetry" },
  ],
} as const;

const PORTFOLIO_ITEMS = [
  {
    title: "McKenzieFriend.ai",
    domain: "mckenziefriend.ai",
    description:
      "An AI-assisted preparation platform for Family and Civil Court, designed to help litigants organise documents, structure information clearly, and prepare with confidence.",
    href: "https://mckenziefriend.ai",
    image: "/portfolio/mckenziefriend.png",
    kicker: "Recent work",
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

const CHECKLIST_ITEMS = [
  "Business details",
  "Services, menu or offer",
  "Photos, logo or brand assets",
  "Review notes before launch",
] as const;

/* ------------------------------------------------------------------ */
/*  Design tokens — one radius scale, three shadows, one ease          */
/* ------------------------------------------------------------------ */

const easeOut = [0.22, 1, 0.36, 1] as const;

// Radii: rounded-xl (12) small • rounded-2xl (16) cards • rounded-[28px] panels
const SHADOW_SOFT = "shadow-[0_2px_8px_rgba(11,18,32,0.04),0_12px_32px_rgba(11,18,32,0.05)]";
const SHADOW_LIFT = "shadow-[0_4px_12px_rgba(11,18,32,0.06),0_24px_60px_rgba(11,18,32,0.10)]";
const SHADOW_DARK = "shadow-[0_24px_80px_rgba(11,18,32,0.22)]";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F6FED]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC]";

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mediaQuery.matches);
    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

/** Smooth in-page scrolling on <html>, respecting reduced motion. */
function useSmoothScroll(reduceMotion: boolean) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = reduceMotion ? "auto" : "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, [reduceMotion]);
}

/* ------------------------------------------------------------------ */
/*  Primitives                                                         */
/* ------------------------------------------------------------------ */

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
      className={`mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#DBE4F5] bg-white/70 px-3.5 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" aria-hidden="true" />
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3D4A61]">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#0B1220] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
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
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CheckBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-white/10 text-[#AFC6F8]" : "bg-[#EAF2FF] text-[#2F6FED]"
      }`}
    >
      <CheckIcon />
    </span>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
        open ? "rotate-45" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const lineBase =
    "absolute left-0 h-px w-5 rounded-full bg-[#0B1220] transition-all duration-300 motion-reduce:transition-none";

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
      transition={{ duration: 0.55, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F6FED] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(47,111,237,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#245FDB] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${FOCUS_RING} ${className}`}
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
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#DDE4EE] bg-white px-6 text-sm font-semibold text-[#0B1220] ${SHADOW_SOFT} transition duration-300 hover:-translate-y-0.5 hover:border-[#C4CFDE] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${FOCUS_RING} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Header + mobile menu                                               */
/* ------------------------------------------------------------------ */

function BrandMark() {
  const reduceMotion = useReducedMotion() ?? false;

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <Link
      href="#top"
      aria-label="Clean Websites home"
      className={`inline-flex items-center rounded-lg ${FOCUS_RING}`}
      onClick={handleLogoClick}
    >
      <Image src="/logo.png" alt="Clean Websites" width={160} height={40} priority className="h-9 w-auto sm:h-10" />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`rounded-full px-4 py-2 text-[15px] font-medium text-[#536176] transition duration-200 hover:bg-[#EEF2F7] hover:text-[#0B1220] ${FOCUS_RING}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <SecondaryButton href="#portfolio" className="h-10 px-5">
        View portfolio
      </SecondaryButton>
      <PrimaryButton href="/start" className="h-10 px-5">
        Start my website
      </PrimaryButton>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  reduceMotion,
}: {
  open: boolean;
  onClose: () => void;
  reduceMotion: boolean;
}) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: easeOut }}
          className="fixed inset-x-0 bottom-0 top-[64px] z-40 border-t border-[#E2E8F0] bg-[#F8FAFC]/97 backdrop-blur-2xl md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6 sm:px-6">
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
                    className={`flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-[17px] font-semibold text-[#0B1220] ${SHADOW_SOFT} ${FOCUS_RING}`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight />
                  </motion.a>
                ))}
              </div>

              {/* Direct contact routes — more useful here than repeated stats */}
              <div className="mt-6 grid gap-3">
                <a
                  href="https://wa.me/message/CIUXDPB67KAAJ1"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-[15px] font-medium text-[#293548] ${SHADOW_SOFT} ${FOCUS_RING}`}
                >
                  <span>WhatsApp</span>
                  <ArrowRight />
                </a>
                <a
                  href="mailto:hello@cleanwebsites.co.uk"
                  className={`flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-[15px] font-medium text-[#293548] ${SHADOW_SOFT} ${FOCUS_RING}`}
                >
                  <span>hello@cleanwebsites.co.uk</span>
                  <ArrowRight />
                </a>
              </div>

              <div className="mt-auto pt-6">
                <PrimaryButton href="/start" className="h-14 w-full text-[16px]">
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

function HeroHeader({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() ?? false;
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    if (!isMobile && mobileOpen) setMobileOpen(false);
  }, [isMobile, mobileOpen]);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-[#E2E8F0] bg-[#F8FAFC]/90 shadow-[0_8px_30px_rgba(11,18,32,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#F8FAFC]/70 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[76px] lg:px-8">
          <BrandMark />
          <DesktopNav />
          <DesktopActions />

          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white ${SHADOW_SOFT} md:hidden ${FOCUS_RING}`}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={mobileOpen} onClose={closeMenu} reduceMotion={reduceMotion} />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function CleanSweep({ active }: { active: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
      {active && (
        <motion.div
          aria-hidden="true"
          initial={{ x: "-35%", opacity: 0 }}
          animate={{ x: ["-35%", "120%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, repeatDelay: 3.4, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/3 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)] blur-sm"
        />
      )}
    </div>
  );
}

function FloatingBuildCard({ animate }: { animate: boolean }) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 18, scale: 0.98 } : false}
      animate={animate ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: 0.5, ease: easeOut }}
      className={`absolute -bottom-6 left-4 hidden w-[250px] rounded-2xl border border-white/70 bg-white/92 p-4 backdrop-blur-xl lg:block ${SHADOW_LIFT}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#647085]">Launch checklist</div>
        <div className="rounded-full bg-[#EAF2FF] px-2 py-1 text-[11px] font-bold text-[#2F6FED]">24h build</div>
      </div>

      <div className="mt-4 grid gap-2">
        {CHECKLIST_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl border border-[#EBF0F6] bg-[#F8FAFC] px-3 py-2 text-[12px] font-medium text-[#293548]"
          >
            <CheckBadge />
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

function HeroWebsitePreview() {
  const reduceMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  // Pause ambient animation when scrolled offscreen (battery + CPU on mobile)
  const inView = useInView(ref, { amount: 0.2 });
  const animate = !reduceMotion && inView;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[560px] lg:mx-0">
      <div className="absolute -left-10 top-12 hidden h-44 w-44 rounded-full bg-[#DCEAFF] blur-3xl lg:block" />
      <div className="absolute -right-10 bottom-4 hidden h-52 w-52 rounded-full bg-[#E2E8F0] blur-3xl lg:block" />

      <div
        className={`relative rounded-[28px] border border-[#E2E8F0] bg-white/80 p-2.5 backdrop-blur-xl sm:p-3 ${SHADOW_LIFT}`}
      >
        <CleanSweep active={animate} />
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
            </div>
            <div className="ml-3 h-6 flex-1 rounded-full bg-[#F1F5F9]" />
          </div>

          <div className="p-3 sm:p-5">
            <div className="rounded-2xl bg-[#0B1220] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-white/12 sm:h-8 sm:w-8" />
                  <div>
                    <div className="h-2.5 w-20 rounded-full bg-white/75 sm:w-24" />
                    <div className="mt-2 h-2 w-14 rounded-full bg-white/18 sm:w-16" />
                  </div>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                  <div className="h-2.5 w-10 rounded-full bg-white/18" />
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:mt-9 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                <div>
                  <div className="h-2.5 w-20 rounded-full bg-[#2F6FED] sm:w-24" />
                  <div className="mt-4 h-6 w-full rounded-full bg-white sm:h-8" />
                  <div className="mt-2 h-6 w-4/5 rounded-full bg-white sm:h-8" />
                  <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                    <div className="h-2.5 w-full rounded-full bg-white/18" />
                    <div className="h-2.5 w-5/6 rounded-full bg-white/18" />
                    <div className="h-2.5 w-2/3 rounded-full bg-white/18" />
                  </div>
                  <div className="mt-5 h-10 w-32 rounded-full bg-[#2F6FED] sm:mt-6 sm:h-11 sm:w-36" />
                </div>

                <div className="hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:block">
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

            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              {["Services", "About", "Contact"].map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl border border-[#E2E8F0] bg-white p-3 sm:p-4 ${SHADOW_SOFT}`}
                >
                  <div className="h-7 w-7 rounded-xl bg-[#EAF2FF] sm:h-8 sm:w-8" />
                  <div className="mt-3 text-[12px] font-bold text-[#0B1220] sm:mt-4">{item}</div>
                  <div className="mt-2.5 h-2 w-full rounded-full bg-[#EBF0F6] sm:mt-3" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-[#EBF0F6]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute -bottom-5 right-3 hidden w-[168px] rounded-[28px] border border-[#E2E8F0] bg-white p-2 lg:block ${SHADOW_LIFT}`}
      >
        <div className="overflow-hidden rounded-[22px] bg-[#0B1220] p-3 text-white">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/25" />
          <div className="h-16 rounded-2xl bg-white/10" />
          <div className="mt-3 h-3 w-20 rounded-full bg-white" />
          <div className="mt-2 h-2 w-full rounded-full bg-white/20" />
          <div className="mt-1.5 h-2 w-4/5 rounded-full bg-white/20" />
          <div className="mt-3 h-9 rounded-full bg-[#2F6FED]" />
        </div>
      </div>

      <FloatingBuildCard animate={animate} />
    </div>
  );
}

function HeroSection({ reduceMotion }: { reduceMotion: boolean }) {
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: reduceMotion ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: easeOut },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(circle_at_60%_0%,rgba(47,111,237,0.10),transparent_42%),linear-gradient(180deg,#F8FAFC_0%,#F1F5F9_100%)]" />
      <div className="absolute inset-x-0 top-[108px] -z-10 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-6 sm:gap-12 sm:pb-20 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-12">
        <div className="max-w-2xl">
          <motion.div {...rise(0)}>
            <SectionEyebrow>Professional business websites</SectionEyebrow>
          </motion.div>

          <motion.h1
            {...rise(0.05)}
            className="mt-5 max-w-[15ch] text-[2.55rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[#0B1220] text-balance sm:text-[clamp(3.2rem,5.2vw,4.4rem)]"
          >
            A professional website for your business — built within 24 hours
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-xl text-[16px] leading-8 text-[#536176] sm:text-[17px]"
          >
            A clean, mobile-first website designed not just to look credible, but to turn visitors
            into customers—clearly communicating what you do, building trust instantly, and making
            it effortless for people to get in touch.
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/start" className="h-13 w-full sm:h-12 sm:w-auto">
              Start my website
              <ArrowRight />
            </PrimaryButton>
            <Link
              href="#portfolio"
              className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#0B1220] transition duration-300 hover:bg-white sm:justify-start sm:px-4 ${FOCUS_RING}`}
            >
              View portfolio
              <ArrowRight />
            </Link>
          </motion.div>

          <motion.div {...rise(0.24)} className="mt-7 flex flex-wrap gap-2">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-3.5 py-2 text-sm font-medium text-[#3D4A61] backdrop-blur-sm"
              >
                <CheckBadge />
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
          <HeroWebsitePreview />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

function StatsStrip() {
  return (
    <div className="border-y border-[#E2E8F0] bg-white/60">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 divide-x divide-[#E2E8F0] px-5 sm:px-6 lg:px-8">
        {HERO_STATS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1 py-5 text-center sm:py-6">
            <div className="text-xl font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-2xl">
              {item.value}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#647085]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSection() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="max-w-xl lg:sticky lg:top-28">
          <SectionEyebrow>Fast launch</SectionEyebrow>
          <SectionHeading>Built fast, without cutting corners</SectionHeading>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            This service is designed for businesses that need a polished website without a lengthy
            build. The process stays simple, focused and structured from content handover to
            launch.
          </p>
        </div>

        {/* Paired rows: each traditional pain sits directly opposite its answer */}
        <div className={`overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white ${SHADOW_SOFT}`}>
          <div className="grid grid-cols-2 border-b border-[#E2E8F0]">
            <div className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#647085] sm:px-6">
              Traditional projects
            </div>
            <div className="bg-[#0B1220] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#AFC6F8] sm:px-6">
              Clean Websites
            </div>
          </div>

          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={row.traditional}
              className={`grid grid-cols-2 ${index !== COMPARISON_ROWS.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}
            >
              <div className="flex items-start gap-3 px-5 py-4 text-sm leading-6 text-[#647085] sm:px-6 sm:py-5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#CBD5E1]" aria-hidden="true" />
                {row.traditional}
              </div>
              <div className="flex items-start gap-3 bg-[#0B1220] px-5 py-4 text-sm font-medium leading-6 text-[#F8FAFC] sm:px-6 sm:py-5">
                <CheckBadge dark />
                {row.clean}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FitSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell className="!pt-0">
      <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div className="max-w-xl">
          <SectionHeading className="mt-0">
            Built for businesses that need a clean &amp; professional website
          </SectionHeading>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            This service is designed for businesses that need a polished website without a lengthy
            build. It works particularly well for local and service-based businesses that want to
            clearly present their services and make it easy for customers to get in touch.
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
              className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 ${SHADOW_SOFT}`}
            >
              <div className="flex items-start gap-3">
                <CheckBadge />
                <p className="text-[15px] leading-7 text-[#293548]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FeaturedPortfolioCard() {
  const item = FEATURED_PROJECT;

  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`group relative block overflow-hidden rounded-[28px] bg-[#0B1220] transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${SHADOW_DARK} ${FOCUS_RING}`}
      >
        {/* Ambient glow — mirrors the dark package panel so the page reads as one system */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2F6FED]/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-white/8 blur-3xl" aria-hidden="true" />

        <div className="relative grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AFC6F8]">
                {item.kicker}
              </span>
            </div>

            <h3 className="mt-4 text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[2.4rem]">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#C8D1E1] sm:text-[15px]">
              {item.description}
            </p>

            <div className="mt-6 grid gap-2.5">
              {item.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-6 text-[#F8FAFC]">
                  <CheckBadge dark />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              {item.stats.map((stat) => (
                <div key={stat.label} className="px-3 py-4 text-center sm:px-4">
                  <div className="text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A97AC] sm:text-[11px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#AFC6F8]">
              Visit website
              <ArrowRight />
            </div>
          </div>

          <div className="p-3 pt-0 sm:p-4 sm:pt-0 lg:p-6 lg:pl-0">
            <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_16px_50px_rgba(0,0,0,0.45)]">
              {/* Browser chrome — kept dark so the preview sits in its own world */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                </div>
                <div className="ml-2 flex h-7 flex-1 items-center justify-center rounded-full bg-white/[0.07] px-4 text-[12px] font-medium text-[#AFC6F8]">
                  {item.domain}
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden bg-[#060B14]">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  width={1280}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-full w-full object-cover object-top transition duration-700 motion-reduce:transition-none md:group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function PortfolioCard({ item, index }: { item: (typeof PORTFOLIO_ITEMS)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`group block overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${SHADOW_SOFT} hover:shadow-[0_4px_12px_rgba(11,18,32,0.06),0_24px_60px_rgba(11,18,32,0.10)] ${FOCUS_RING}`}
      >
        <div className="border-b border-[#E2E8F0] bg-[#F1F5F9] p-3 sm:p-4">
          <div className={`overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white ${SHADOW_SOFT}`}>
            {/* Browser chrome — domain shown once, in the URL bar where it belongs */}
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
              </div>
              <div className="ml-2 flex h-7 flex-1 items-center justify-center rounded-full bg-[#F1F5F9] px-4 text-[12px] font-medium text-[#536176]">
                {item.domain}
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
              <Image
                src={item.image}
                alt={`${item.title} preview`}
                width={1280}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-top transition duration-700 motion-reduce:transition-none md:group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6FED]">
            {item.kicker}
          </div>
          <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-[1.75rem]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#536176] sm:text-[15px]">{item.description}</p>

          <div className="mt-5 grid gap-2.5">
            {item.points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm leading-6 text-[#293548]">
                <CheckBadge />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2F6FED]">
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
    <section id="portfolio" className="scroll-mt-16 border-y border-[#E2E8F0] bg-white/68">
      <SectionShell>
        <div className="max-w-3xl">
          <SectionEyebrow>Portfolio</SectionEyebrow>
          <SectionHeading>Recent work</SectionHeading>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#536176]">
            A selection of recent projects showing the level of structure, presentation and clarity
            you can expect.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <FeaturedPortfolioCard />

          <div className="grid gap-5 lg:grid-cols-2">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <PortfolioCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

function IncludedSection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl lg:sticky lg:top-28">
          <SectionEyebrow>What is included</SectionEyebrow>
          <SectionHeading>Everything needed for a clean, credible business website</SectionHeading>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            Our service includes everything needed to get your website properly built, set up and
            live — without needing to handle any of the technical side yourself.
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
              className={`rounded-2xl border border-[#E2E8F0] bg-white p-4 ${SHADOW_SOFT}`}
            >
              <div className="flex items-start gap-3">
                <CheckBadge />
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
    <div className="grid gap-x-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 border-b border-white/10 py-3 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
          <CheckBadge dark />
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
        <SectionHeading>A complete website for your business</SectionHeading>
        <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#536176]">
          Handled for you from start to finish, so getting online is straightforward.
        </p>
      </div>

      <div className={`relative mt-10 overflow-hidden rounded-[28px] bg-[#0B1220] ${SHADOW_DARK}`}>
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2F6FED]/24 blur-3xl" />
        <div className="absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-sm font-semibold text-[#AFC6F8]">Website build</div>
            <div className="mt-3 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[2.75rem]">
              Built within 24 hours
            </div>
            <div className="mt-3 max-w-lg text-sm leading-7 text-[#C8D1E1]">
              Once your content is received, your website can be built and prepared for launch
              within 24 hours.
            </div>

            <div className="mt-7">
              <PackageList items={PACKAGE_INCLUDES} />
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.055] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="text-sm font-semibold text-[#AFC6F8]">Hosting &amp; support</div>
            <div className="mt-3 text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2rem]">
              Setup handled
            </div>
            <p className="mt-4 text-sm leading-7 text-[#C8D1E1]">
              Your website is hosted securely and managed technically so it stays online, loads
              properly and continues to run as expected after launch.
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
                  Your domain is purchased separately in your name, so you keep full ownership of
                  it.
                </p>
              </div>
            </div>

            <Link
              href="/start"
              className={`group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#0B1220] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF2FF] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto ${FOCUS_RING}`}
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
    <section id="process" className="scroll-mt-16 border-y border-[#E2E8F0] bg-white/68">
      <SectionShell>
        <div className="max-w-2xl">
          <SectionEyebrow>What happens next</SectionEyebrow>
          <SectionHeading>A simple process from enquiry to launch</SectionHeading>
          <p className="mt-5 text-[16px] leading-8 text-[#536176]">
            Launching your website is straightforward with Clean Websites.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting line — the steps read as one journey, not four islands */}
          <div
            aria-hidden="true"
            className="absolute left-[26px] top-6 hidden h-[calc(100%-3rem)] w-px bg-[#DBE4F5] lg:left-0 lg:top-6 lg:block lg:h-px lg:w-full"
          />
          <div
            aria-hidden="true"
            className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-[#DBE4F5] lg:hidden"
          />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-5">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
                className="relative flex gap-5 lg:block"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1220] text-sm font-semibold text-white ring-4 ring-[#F8FAFC]">
                  {item.step}
                </div>
                <div className="lg:mt-5">
                  <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.02em] text-[#0B1220] sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-7 text-[#536176]">{item.description}</p>
                </div>
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
  const panelId = useId();

  return (
    <div className={`rounded-2xl border border-[#E2E8F0] bg-white ${SHADOW_SOFT}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left sm:p-6 ${FOCUS_RING}`}
      >
        <span className="text-[16px] font-semibold leading-7 text-[#0B1220] sm:text-[17px]">
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            open
              ? "border-[#2F6FED] bg-[#2F6FED] text-white"
              : "border-[#E2E8F0] bg-[#F8FAFC] text-[#536176]"
          }`}
        >
          <PlusIcon open={open} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-7 text-[#536176] sm:px-6 sm:pb-6 sm:text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  return (
    <SectionShell id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-3xl lg:sticky lg:top-28 lg:self-start">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionHeading>Common questions</SectionHeading>
        </div>

        <div className="grid gap-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FinalCTA() {
  return (
    <SectionShell className="!pt-0">
      <div
        className={`relative overflow-hidden rounded-[28px] bg-[#0B1220] px-5 py-14 text-center sm:px-8 sm:py-18 ${SHADOW_DARK}`}
      >
        <div className="absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#2F6FED]/25 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white text-balance">
            A clean website for your business
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline">built in 24 hours</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#C8D1E1] sm:text-[16px]">
            Clean, coded and built to present your services clearly and make it easy for customers
            to get in touch.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/start" className="h-13 w-full sm:h-12 sm:w-auto">
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
  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] bg-[#F8FAFC]/94 px-4 pb-[calc(0.875rem+env(safe-area-inset-bottom))] pt-3.5 backdrop-blur-2xl transition-transform duration-300 will-change-transform motion-reduce:transition-none md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <PrimaryButton
          href="/start"
          className={`h-14 w-full text-[16px] ${hidden ? "pointer-events-none" : ""}`}
        >
          Start my website
        </PrimaryButton>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl border-t border-[#E2E8F0] px-5 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-[-0.03em] text-[#0B1220]">Clean Websites</div>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#536176]">
            Professional websites for growing businesses.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#536176]">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#647085]">Navigate</div>
          <a href="#portfolio" className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>Portfolio</a>
          <a href="#package" className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>Package</a>
          <a href="#process" className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>Process</a>
          <a href="#faq" className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>FAQ</a>
          <Link href="/start" className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>Start</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#536176] md:items-start">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#647085]">Contact</div>
          <a
            href="mailto:hello@cleanwebsites.co.uk"
            className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}
          >
            hello@cleanwebsites.co.uk
          </a>
          <a
            href="https://wa.me/message/CIUXDPB67KAAJ1"
            target="_blank"
            rel="noreferrer"
            className={`w-fit rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 text-sm text-[#647085] sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Clean Websites. All rights reserved.</div>
        <div className="flex gap-5">
          <Link href="/privacy" className={`rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>
            Privacy
          </Link>
          <Link href="/terms" className={`rounded transition hover:text-[#0B1220] ${FOCUS_RING}`}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useSmoothScroll(reduceMotion);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        setShowSticky(window.scrollY > 560);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F8FAFC] pb-24 font-[Manrope,DM_Sans,Inter,system-ui,sans-serif] text-[#0B1220] antialiased selection:bg-[#DCEAFF] selection:text-[#0B1220] md:pb-0"
    >
      <HeroHeader scrolled={scrolled} />
      <HeroSection reduceMotion={reduceMotion} />

      <main className="relative">
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
