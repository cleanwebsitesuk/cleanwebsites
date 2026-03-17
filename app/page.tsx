"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const NAV_ITEMS = [
  { href: "#demos", label: "Demos" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

const HERO_SUPPORTING_POINTS = [
  "Built to work properly on mobile",
  "Fast launch once content is received",
  "Managed hosting, SSL and technical setup included",
] as const;

const FAST_LAUNCH_POINTS = [
  "Clear structure from the start",
  "Built for speed, clarity and usability",
  "Designed to be simple to launch",
  "Fast turnaround once content is received",
] as const;

const DEMO_TAGS = [
  "Service businesses",
  "Studios and beauty",
  "Restaurants and hospitality",
  "Local service companies",
  "Small business layouts",
] as const;

const DEMO_CARDS = [
  {
    title: "Barber / Salon",
    description:
      "A booking-led example layout with clear service sections, strong mobile usability and contact points that are easy to find.",
    href: "/demo/barber",
    image: "/demo-previews/barber.jpg",
    kicker: "Demo website",
    badge: "Preview build",
    zoom: "scale-[1.08]",
  },
  {
    title: "Restaurant / Takeaway",
    description:
      "A menu-first example build with opening hours, directions and mobile-friendly action points for customers ready to order or visit.",
    href: "/demo/burger",
    image: "/demo-previews/burger.jpg",
    kicker: "Demo website",
    badge: "Preview build",
    zoom: "scale-[1]",
  },
  {
    title: "Trades / Services",
    description:
      "A service-led example layout with clear sections, trust-building structure, coverage information and a straightforward quote enquiry flow.",
    href: "/demo/trades",
    image: "/demo-previews/trades.jpg",
    kicker: "Demo website",
    badge: "Preview build",
    zoom: "scale-[0.94]",
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
  "A clean custom build for your business",
  "Pages structured around your services and contact flow",
  "Mobile-first layout",
  "Fast-loading pages",
  "Contact or booking enquiry points",
  "Managed hosting",
  "SSL security",
  "Launch setup and technical support",
] as const;

const WHY_CHOOSE_CARDS = [
  {
    title: "Clear structure",
    copy: "Visitors can quickly understand what your business does and where to go next.",
  },
  {
    title: "Professional presentation",
    copy: "A clean, modern layout helps your business look more established and trustworthy online.",
  },
  {
    title: "Mobile-first design",
    copy: "Your website is designed to work properly on phones, where many customers will first view it.",
  },
  {
    title: "Fast loading pages",
    copy: "Performance and usability are prioritised so the experience feels smooth and professional.",
  },
  {
    title: "Visible contact points",
    copy: "Customers can easily call, message, book or send an enquiry without searching for how to do it.",
  },
  {
    title: "Simple launch process",
    copy: "The service is designed to help you get online properly without turning it into a complicated project.",
  },
] as const;

const WHAT_YOU_NEED = [
  "your business name and contact details",
  "your services, menu or offer",
  "any business description or wording you want included",
  "any photos, branding or images you want used",
] as const;

const BUILD_INCLUDES = [
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
    question: "What does the monthly hosting fee include?",
    answer:
      "The monthly fee includes secure hosting, SSL, technical management, deployment support and the ongoing infrastructure needed to keep your website online and working properly.",
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

const OFFER_STATS = [
  { label: "Build fee", value: "£595" },
  { label: "Monthly hosting", value: "£40" },
  { label: "Launch time", value: "24h" },
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
      className={`mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9DA2AE] sm:text-[12px]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
      {children}
    </div>
  );
}

function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-md ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}

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
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const lineBase =
    "absolute left-0 h-px w-5 rounded-full bg-[#F5F2EA] transition-all duration-300";

  return (
    <div className="relative h-5 w-5" aria-hidden="true">
      <span
        className={`${lineBase} top-1 ${open ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`${lineBase} top-2.5 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`${lineBase} top-4 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
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

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.68, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({
  href,
  className,
  children,
  disabled = false,
}: {
  href: string;
  className: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [style, setStyle] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setStyle({ x, y });
  };

  const handleLeave = () => setStyle({ x: 0, y: 0 });

  return (
    <motion.div
      animate={disabled ? { x: 0, y: 0 } : { x: style.x, y: style.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.5 }}
    >
      <Link
        href={href}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function BulletRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#93C5FD]">
        <CheckIcon />
      </span>
      <span className="text-sm leading-6 text-[#E8EAF0] sm:text-[15px]">
        {children}
      </span>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-4 py-2 text-[15px] text-[#A9ABB3] transition duration-300 hover:bg-white/[0.04] hover:text-[#F5F2EA]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function DesktopActions({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Link
        href="#demos"
        className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
      >
        View demo websites
      </Link>
      <MagneticLink
        href="/start"
        disabled={isMobile}
        className="group inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        Start my website
      </MagneticLink>
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
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: easeOut }}
          className="fixed inset-x-0 bottom-0 top-[78px] z-40 border-t border-white/10 bg-[#08090C]/96 backdrop-blur-2xl md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-6 pt-6 sm:px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="flex flex-1 flex-col"
            >
              <div className="grid gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.04 + index * 0.07,
                      ease: easeOut,
                    }}
                    className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-[17px] font-medium text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                <div className="grid grid-cols-3 gap-3">
                  {OFFER_STATS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[16px] border border-white/10 bg-[#0C0E11] px-3 py-3 text-center"
                    >
                      <div className="text-base font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-lg">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#7F828A]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.32,
                    delay: 0.24,
                    ease: easeOut,
                  }}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3"
                >
                  <Link
                    href="/start"
                    onClick={onClose}
                    className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(59,130,246,0.28)] transition duration-300 hover:brightness-110"
                  >
                    Start my website
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroSupportStrip() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3">
      {HERO_SUPPORTING_POINTS.map((item, index) => (
        <motion.div
          key={item}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.5,
            delay: 0.18 + index * 0.06,
            ease: easeOut,
          }}
          className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
              <CheckIcon />
            </span>
            <span className="text-[14px] font-medium leading-6 text-[#E7E9EE] sm:text-[15px]">
              {item}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function HeroMetrics() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {OFFER_STATS.map((item) => (
        <div
          key={item.label}
          className="rounded-[18px] border border-white/10 bg-[#0C0E11]/90 px-4 py-3.5"
        >
          <div className="text-[1.25rem] font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-[1.45rem]">
            {item.value}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#7F828A]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroSection({
  isMobile,
  reduceMotion,
}: {
  isMobile: boolean;
  reduceMotion: boolean;
}) {
  const motionEnabled = !reduceMotion && !isMobile;

return (
  <section className="relative">
    <div className="mx-auto flex min-h-[calc(100svh-78px)] w-full max-w-7xl items-center px-5 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-14 lg:pt-10">
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(440px,1fr)] lg:items-start lg:gap-10">
        <div className="mx-auto flex w-full max-w-[680px] flex-col justify-center lg:mx-0 lg:max-w-[680px]">
          <div className="w-fit">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3] sm:text-[12px]">
              <motion.span
                animate={motionEnabled ? { scale: [1, 1.22, 1] } : {}}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"
              />
              Professional business websites
            </div>
          </div>

<h1 className="mt-4 max-w-[11.5ch] font-serif text-[clamp(2.6rem,6.2vw,4.5rem)] leading-[1] tracking-[-0.05em] text-[#F5F2EA]">
  A professional website for your business — built within{" "}
  <motion.span
    initial={reduceMotion ? false : { opacity: 0.7, y: 6 }}
    animate={
      reduceMotion
        ? {}
        : {
            opacity: [0.75, 1, 0.9, 1],
            textShadow: [
              "0 0 0px rgba(59,130,246,0)",
              "0 0 18px rgba(59,130,246,0.35)",
              "0 0 8px rgba(59,130,246,0.18)",
              "0 0 14px rgba(59,130,246,0.28)",
            ],
          }
    }
    transition={{
      duration: 1.6,
      delay: 0.35,
      ease: "easeOut",
    }}
    className="inline-block bg-gradient-to-r from-[#A5C8FF] to-[#60A5FA] bg-clip-text font-medium text-transparent"
  >
    24 hours
  </motion.span>
</h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
            A clean, mobile-first website designed to make your business look
            credible online and make it easy for customers to get in touch.
            Once your content is ready, your website can be built and prepared
            for launch within 24 hours.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <MagneticLink
              href="/start"
              disabled={isMobile}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Start my website
              <ArrowRight />
            </MagneticLink>

            <a
              href="#demos"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-[14px] font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
            >
              View demo websites
              <ArrowRight />
            </a>
          </div>
        </div>
<div className="hidden lg:block lg:pt-2" aria-hidden="true">
  <GlassCard className="p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
    <div className="absolute -top-20 right-[-10%] h-[220px] w-[220px] rounded-full bg-[#3B82F6]/10 blur-[100px]" />
    <div className="flex flex-col rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,17,0.9),rgba(13,14,17,0.75))] p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
          Website launch package
        </div>
        <div className="rounded-full border border-[#3B82F6]/18 bg-[#3B82F6]/10 px-2.5 py-0.5 text-[11px] text-[#A9C7FF]">
          Fast launch
        </div>
      </div>

      <HeroMetrics />

      <div className="mt-5 h-px w-full bg-white/8" />

      <div className="mt-5">
        <div className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[#F5F2EA]">
          Everything included
        </div>

        <div className="mt-4 grid gap-3.5">
          {[
            "Core pages (Home, About, Services, Contact)",
            "Contact or booking page",
            "Mobile-optimised and launch ready",
            "Hosting, SSL and setup",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 text-[15px] leading-7 text-[#E5E7EC]"
            >
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/18 text-[#A5C8FF]">
                <CheckIcon />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[18px] border border-white/8 bg-white/[0.02] p-4">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#7F828A]">
            Domain ownership
          </div>
          <div className="mt-2 text-sm leading-6 text-[#E5E7EC]">
            Your domain stays in your name.
          </div>
        </div>
        <div className="rounded-[18px] border border-white/8 bg-white/[0.02] p-4">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#7F828A]">
            Review before launch
          </div>
          <div className="mt-2 text-sm leading-6 text-[#E5E7EC]">
            One revision included before going live.
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>
      </div>
    </div>
  </section>
);
}

function MobileStickyCta({ hidden }: { hidden: boolean }) {
  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/92 p-4 backdrop-blur-2xl md:hidden">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/start"
          className="flex h-14 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-[16px] font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.3)]"
        >
          Start my website
        </Link>
      </div>
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

  const headerHeightClass = useMemo(
    () => (scrolled ? "h-[70px]" : "h-[76px] sm:h-[82px]"),
    [scrolled]
  );

  return (
    <>
      <motion.header
        animate={{ backdropFilter: scrolled ? "blur(22px)" : "blur(0px)" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#090A0C]/72 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${headerHeightClass}`}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Clean Websites logo"
              width={144}
              height={40}
              className="h-8 w-auto opacity-95 sm:h-9"
              priority
            />
          </Link>

          <DesktopNav />
          <DesktopActions isMobile={isMobile} />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Toggle menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </motion.header>

      <div id="mobile-menu">
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          reduceMotion={reduceMotion}
        />
      </div>

      <HeroSection isMobile={isMobile} reduceMotion={reduceMotion} />
      <MobileStickyCta hidden={mobileOpen} />
    </>
  );
}

function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative ml-2 inline-flex shrink-0">
      <button
        type="button"
        aria-label="More information"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#A9ABB3] transition hover:border-white/25 hover:text-[#F5F2EA]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v5" />
          <path d="M12 7.5h.01" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-8 z-30 w-64 rounded-2xl border border-white/10 bg-[#111214] p-3 text-left text-xs leading-6 text-[#A9ABB3] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:w-72"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SupportItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-[#F5F2EA]">{title}</span>
        <div className="hidden sm:block">
          <InfoTooltip text={text} />
        </div>
      </div>
      <p className="mt-1 text-sm leading-6 text-[#7F828A] sm:hidden">{text}</p>
    </div>
  );
}

function DemoCard({
  card,
  index,
  interactionEnabled,
}: {
  card: (typeof DEMO_CARDS)[number];
  index: number;
  interactionEnabled: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !interactionEnabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * 7;
    const rx = (0.5 - py) * 6;

    setRotateX(rx);
    setRotateY(ry);
  };

  const handleLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Reveal delay={index * 0.08}>
      <motion.a
        href={card.href}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={reduceMotion || !interactionEnabled ? {} : { y: -6 }}
        transition={{ duration: 0.35, ease: easeOut }}
        style={
          interactionEnabled
            ? { transformStyle: "preserve-3d", rotateX, rotateY }
            : undefined
        }
        className="group block overflow-hidden rounded-[24px] border border-white/10 bg-[#111214]/90 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 md:hover:border-white/20 md:hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)]"
      >
        <div className="relative overflow-hidden border-b border-white/10 bg-[#0C0D10]">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_35%)]"
            animate={
              reduceMotion || !interactionEnabled ? {} : { scale: [1, 1.05, 1] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative p-4">
            <div
              style={
                interactionEnabled ? { transform: "translateZ(28px)" } : undefined
              }
              className="flex flex-col rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[11px]">
                  {card.kicker}
                </span>
                <span className="rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/12 px-2.5 py-1 text-[11px] text-[#8BB5FF] sm:px-3 sm:text-xs">
                  {card.badge}
                </span>
              </div>

              <div className="mt-4 aspect-[16/10] overflow-hidden rounded-[16px] border border-white/10 bg-[#0D0E10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <Image
                  src={card.image}
                  alt={`${card.title} preview`}
                  width={1280}
                  height={800}
                  className={`h-full w-full object-cover object-top ${card.zoom} transition duration-700 md:group-hover:scale-[1.03]`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden p-5">
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
          <div className="text-sm text-[#A9ABB3]">{card.kicker}</div>
          <h3 className="mt-2 text-[1.45rem] font-medium tracking-[-0.03em] text-[#F5F2EA] sm:text-[1.6rem]">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
            {card.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F2EA]">
            Open demo
            <ArrowRight />
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[16px] font-medium leading-7 text-[#F5F2EA] sm:text-[17px]">
          {question}
        </span>
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#A9ABB3]">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() ?? false;
  const motionEnabled = !reduceMotion && !isMobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#06070A] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white md:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={
            motionEnabled
              ? {
                  x: [0, 20, -10, 0],
                  y: [0, -14, 10, 0],
                  scale: [1, 1.04, 0.98, 1],
                }  
              : {}
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-12%] top-[-8%] h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/10 blur-[120px] sm:h-[30rem] sm:w-[30rem] sm:bg-[#3B82F6]/12 sm:blur-[145px]"
        />
        <motion.div
          animate={
            motionEnabled
              ? {
                  x: [0, -24, 12, 0],
                  y: [0, 16, -8, 0],
                  scale: [1, 0.98, 1.03, 1],
                }
              : {}
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-14%] right-[-10%] h-[20rem] w-[20rem] rounded-full bg-[#3B82F6]/8 blur-[110px] sm:h-[28rem] sm:w-[28rem] sm:bg-[#3B82F6]/10 sm:blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      </div>

      <HeroHeader scrolled={scrolled} />

      <main className="relative">
        <Reveal>
          <SectionShell className="pt-2 sm:pt-3 lg:pt-6">
            <GlassCard className="p-5 sm:p-6 lg:p-7">
              <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                  <SectionEyebrow>Why this works</SectionEyebrow>
                  <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.4rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                    A straightforward way to get your website properly in place
                  </h2>
                </div>

                <div className="grid gap-4">
                  <p className="text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                    Your website should do a simple job well: help people
                    understand your business quickly, trust what they see, and
                    know how to contact you. Clean Websites is built around that
                    goal.
                  </p>
                  <p className="text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                    You send the business details and content. Your website is
                    then structured, built and prepared for launch with a simple
                    process and clear pricing from the start. No unnecessary
                    back-and-forth or vague proposal process.
                  </p>
                </div>
              </div>
            </GlassCard>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell>
            <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <div className="max-w-xl">
                <SectionEyebrow>Fast launch</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Launch your website within 24 hours
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  Once your business content is ready, your website can be built
                  and prepared for launch within 24 hours. That means no
                  drawn-out project timeline and no need to wait weeks just to
                  get a straightforward business website live.
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  If you already know what you want your customers to see,
                  our process is designed to get your website online quickly and set up the right way.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {FAST_LAUNCH_POINTS.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.06,
                      ease: easeOut,
                    }}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:min-h-[100px]"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                    <div className="relative flex items-start gap-3">
                      <span className="mt-[0.5rem] h-2.5 w-2.5 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA]">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell>
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="max-w-xl">
                <SectionEyebrow>What your website needs to do</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  A website that makes your business easier to trust
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  For most businesses, a good website is not about unnecessary
                  complexity. It is about clarity.
                </p>

                <div className="mt-5 grid gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  {[
                    "who you are",
                    "what you offer",
                    "where you are",
                    "how to contact or book with you",
                  ].map((item) => (
                    <BulletRow key={item}>{item}</BulletRow>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  That is what this service is designed to deliver: a website
                  that looks professional, feels credible, and makes it easier
                  for customers to take the next step.
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  Designed to work well for businesses such as restaurants,
                  salons, studios, service businesses and local companies — or
                  any business that needs a clean, credible online presence.
                </p>
              </div>
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="demos">
            <div className="max-w-3xl">
              <SectionEyebrow>Demo websites</SectionEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                See how your website could be structured
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                These demo websites show how different types of businesses can
                present their services clearly and make it easy for customers to
                take action.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                Each layout is designed around clarity, mobile usability and
                strong contact points so visitors can quickly understand what
                the business does and what to do next.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#A9ABB3]">
              {DEMO_TAGS.map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: easeOut,
                  }}
                  className={`rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 ${
                    index > 2 ? "hidden sm:block" : ""
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {DEMO_CARDS.map((card, index) => (
                <DemoCard
                  key={card.title}
                  card={card}
                  index={index}
                  interactionEnabled={!isMobile}
                />
              ))}
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="process">
            <div className="max-w-2xl">
              <SectionEyebrow>What happens next</SectionEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                A simple process from content to launch
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                Starting your website should feel straightforward.
              </p>
            </div>

            <div className="relative mt-8">
              <motion.div
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
                whileInView={reduceMotion ? {} : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: easeOut }}
                style={{ originX: 0 }}
                className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
              />

              <div className="grid gap-4 lg:grid-cols-4">
                {PROCESS_STEPS.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: easeOut,
                    }}
                    className="relative rounded-[20px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
                  >
                    <motion.div
                      initial={
                        reduceMotion ? false : { scale: 0.85, opacity: 0 }
                      }
                      whileInView={reduceMotion ? {} : { scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.08,
                        ease: easeOut,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),rgba(255,255,255,0.04))] text-sm text-[#F5F2EA]"
                    >
                      {item.step}
                    </motion.div>

                    <h3 className="mt-4 text-[19px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                Once content is received, websites can be built within 24 hours.
              </div>
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="pricing">
            <GlassCard className="px-5 py-6 sm:px-7 sm:py-8 lg:px-8">
              <div className="max-w-4xl">
                <SectionEyebrow>Pricing</SectionEyebrow>
                <h2 className="mt-4 max-w-none font-serif text-[clamp(2rem,6vw,3.2rem)] leading-[1] tracking-[-0.045em] text-[#F5F2EA]">
                  Simple pricing for a professional launch
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  The pricing is designed to be clear from the start, so you
                  know exactly what is included and what happens after launch.
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-white/10 bg-[#121417]/90 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
                <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="p-5 sm:p-7 lg:p-8">
                    <div className="text-sm text-[#A9ABB3]">Website build</div>
                    <div className="mt-2 text-[2.1rem] font-semibold tracking-[-0.05em] text-[#F5F2EA] sm:text-[3.2rem]">
                      £595
                    </div>
                    <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                    <div className="mt-5 grid gap-3 text-sm text-[#F5F2EA] sm:grid-cols-2">
                      {BUILD_INCLUDES.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                          whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.04,
                            ease: easeOut,
                          }}
                          className="flex items-start gap-3 rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                            <CheckIcon />
                          </span>
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[18px] border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                      Once your content is received, your website can be built
                      within 24 hours.
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-white/[0.02] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                    <div className="text-sm text-[#A9ABB3]">
                      Hosting &amp; support
                    </div>
                    <div className="mt-2 text-[1.8rem] font-semibold tracking-[-0.03em] text-[#F5F2EA] sm:text-[2.2rem]">
                      £40 / month
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
                      Your website is hosted securely and managed technically so
                      it stays online, loads properly and continues to run as
                      expected after launch.
                    </p>

                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#A9ABB3]">
                      {HOSTING_INCLUDES.map((item) => (
                        <SupportItem
                          key={item.title}
                          title={item.title}
                          text={item.text}
                        />
                      ))}

                      <div className="rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3">
                        <p>
                          Your domain is purchased separately in your name, so
                          you keep full ownership of it.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                      <MagneticLink
                        href="/start"
                        disabled={isMobile}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,130,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto lg:w-full xl:w-auto"
                      >
                        Start my website
                      </MagneticLink>

                      <Link
                        href="#demos"
                        className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#A9ABB3] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-[#F5F2EA] sm:w-auto lg:w-full xl:w-auto"
                      >
                        View demo websites
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-xl">
                <SectionEyebrow>What is included</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Everything needed for a clean, credible business website
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  The service is designed to give your business the essentials
                  needed for a professional online presence without
                  overcomplicating the process.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {INCLUDED_ITEMS.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.05,
                      ease: easeOut,
                    }}
                    className="rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.16)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA]">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-7 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
              The result is a website that looks professional, works properly,
              and is ready for customers to use.
            </p>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell>
            <div className="max-w-3xl">
              <SectionEyebrow>Why businesses choose this</SectionEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                Built for clarity, credibility and ease
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                A website often loses people for simple reasons: it feels
                outdated, confusing or incomplete. This service focuses on the
                fundamentals that make a business website work better.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {WHY_CHOOSE_CARDS.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: easeOut,
                  }}
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                  <h3 className="relative text-[19px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[20px]">
                    {card.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                    {card.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-xl">
                <SectionEyebrow>What you need to provide</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Getting started is simple
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  To build your website, the main things needed are usually:
                </p>
              </div>

              <div className="grid gap-4">
                {WHAT_YOU_NEED.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: easeOut,
                    }}
                    className="flex items-start gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-4"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                      <CheckIcon />
                    </span>
                    <p className="text-[15px] leading-7 text-[#F5F2EA]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-7 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
              Once this is received, the website can be built and prepared for
              review.
            </p>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="faq">
            <div className="max-w-3xl">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                Common questions
              </h2>
            </div>

            <div className="mt-8 grid gap-4">
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell className="pb-16 sm:pb-20 lg:pb-24">
            <GlassCard className="overflow-hidden px-5 py-10 text-center sm:px-8 sm:py-12">
              <motion.div
                animate={
                  motionEnabled
                    ? {
                        x: [0, 14, -8, 0],
                        y: [0, -10, 8, 0],
                        scale: [1, 1.05, 0.98, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-[#3B82F6]/14 blur-[100px] sm:h-60 sm:w-60 sm:bg-[#3B82F6]/18 sm:blur-[110px]"
              />

              <div className="relative mx-auto max-w-3xl">
                <h2 className="font-serif text-[clamp(2.1rem,6vw,3.6rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  Get your website properly in place
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  If your business needs a clean, professional website that is
                  quick to launch and easy for customers to use, you can start
                  here.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  Website build £595 • Hosting &amp; support £40/month after
                  launch
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  Built within 24 hours once content is received.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <MagneticLink
                    href="/start"
                    disabled={isMobile}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                  >
                    Start my website
                    <ArrowRight />
                  </MagneticLink>

                  <Link
                    href="#demos"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] sm:w-auto"
                  >
                    View demo websites
                    <ArrowRight />
                  </Link>
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9ABB3]">
                  Clear pricing, secure hosting, SSL included, and your domain
                  stays in your name.
                </p>
              </div>
            </GlassCard>
          </SectionShell>
        </Reveal>

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
              <Link href="#faq" className="transition hover:text-[#F5F2EA]">
                FAQ
              </Link>
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
            <div>
              © {new Date().getFullYear()} Clean Websites. All rights reserved.
            </div>
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
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="fixed bottom-6 right-6 z-40 hidden lg:block"
            >
              <motion.div
                animate={motionEnabled ? { scale: [1, 1.03, 1] } : {}}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  repeat: 1,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#111214]/92 px-5 py-3 text-sm font-semibold text-[#F5F2EA] shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
                >
                  Start my website
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
