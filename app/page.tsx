"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const NAV_ITEMS = [
  { href: "#demos", label: "Demos" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
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

const DEMO_CATEGORIES = [
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
  },
  {
    title: "Restaurant / Takeaway",
    description:
      "A menu-first example build with opening hours, directions and mobile-friendly action points for customers ready to order or visit.",
    href: "/demo/burger",
  },
  {
    title: "Trades / Services",
    description:
      "A service-led example layout with clear sections, trust-building structure, coverage information and a straightforward quote enquiry flow.",
    href: "/demo/trades",
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Send your business details and content",
    description:
      "Provide the text, business information and any images you want included.",
  },
  {
    step: "Step 2",
    title: "Your website is built",
    description:
      "Your website is structured and built around your business, with a clean layout designed to be easy to use.",
  },
  {
    step: "Step 3",
    title: "Review the build",
    description:
      "One revision is included so you can refine the layout or content before launch.",
  },
  {
    step: "Step 4",
    title: "Go live",
    description:
      "Your domain is connected, hosting is configured, SSL is active, and the website is prepared for launch.",
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

const WHY_CHOOSE_POINTS = [
  {
    title: "Clear structure",
    text: "Visitors can quickly understand what your business does and where to go next.",
  },
  {
    title: "Professional presentation",
    text: "A clean, modern layout helps your business look more established and trustworthy online.",
  },
  {
    title: "Mobile-first design",
    text: "Your website is designed to work properly on phones, where many customers will first view it.",
  },
  {
    title: "Fast loading pages",
    text: "Performance and usability are prioritised so the experience feels smooth and professional.",
  },
  {
    title: "Visible contact points",
    text: "Customers can easily call, message, book or send an enquiry without searching for how to do it.",
  },
  {
    title: "Simple launch process",
    text: "The service is designed to help you get online properly without turning it into a complicated project.",
  },
] as const;

const WHAT_YOU_NEED = [
  "your business name and contact details",
  "your services, menu or offer",
  "any business description or wording you want included",
  "any photos, branding or images you want used",
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

    if (locked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
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
      className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9DA3AE] backdrop-blur-sm">
      <motion.span
        animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]"
      />
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%)]" />
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
  const line =
    "absolute left-0 h-px w-5 rounded-full bg-[#F5F2EA] transition-all duration-300";

  return (
    <div className="relative h-5 w-5" aria-hidden="true">
      <span
        className={`${line} top-1 ${open ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`${line} top-2.5 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`${line} top-4 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function CTAButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        primary
          ? "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
          : "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
      }
    >
      {children}
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-2 md:flex">
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

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: easeOut }}
          className="fixed inset-x-0 bottom-0 top-[78px] z-40 border-t border-white/10 bg-[#090A0C]/96 backdrop-blur-2xl md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-6 pt-6 sm:px-6">
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
                  className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 text-[17px] font-medium text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span>{item.label}</span>
                  <ArrowRight />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-3 pt-6">
              <Link
                href="#demos"
                onClick={onClose}
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-[#F5F2EA]"
              >
                View demo websites
              </Link>
              <Link
                href="/start"
                onClick={onClose}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(59,130,246,0.28)]"
              >
                Start my website
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  const headerHeightClass = useMemo(
    () => (scrolled ? "h-[72px]" : "h-[78px] sm:h-[84px]"),
    [scrolled]
  );

  return (
    <>
      <motion.header
        animate={{
          backdropFilter: scrolled ? "blur(22px)" : "blur(0px)",
        }}
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
            <motion.div
              animate={{ scale: scrolled ? 0.98 : 1 }}
              transition={{ duration: 0.25 }}
              className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F5F2EA]"
            >
              Clean Websites
            </motion.div>
          </Link>

          <DesktopNav />

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#demos"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              View demo websites
            </Link>
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Start my website
            </Link>
          </div>

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
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}

function HeroStatsStrip() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
      {HERO_SUPPORTING_POINTS.map((item, index) => (
        <motion.div
          key={item}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            delay: 0.35 + index * 0.06,
            ease: easeOut,
          }}
          className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
              <CheckIcon />
            </span>
            <span className="text-[15px] leading-6 text-[#E7E9EE]">{item}</span>
          </div>
        </motion.div>
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
      <div className="mx-auto flex min-h-[calc(100svh-78px)] w-full max-w-7xl items-center px-5 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,0.74fr)] lg:gap-10">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow>Clean Websites</Eyebrow>

            <h1 className="mt-5 max-w-[14ch] font-serif text-[clamp(2.7rem,7vw,5.4rem)] leading-[0.95] tracking-[-0.05em] text-[#F5F2EA]">
              A professional website for your business — built within 24 hours
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
              A clean, mobile-first website designed to make your business look
              credible online and make it easy for customers to get in touch.
              Once your content is ready, your website can be built and prepared
              for launch within 24 hours.
            </p>

            <motion.div
              animate={
                motionEnabled
                  ? { boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 30px rgba(0,0,0,0.12)", "0 0 0 rgba(0,0,0,0)"] }
                  : {}
              }
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 w-fit rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] font-semibold leading-6 text-[#E2E4E9]"
            >
              Website build £595 • Hosting & support £40/month after launch
            </motion.div>

            <p className="mt-4 text-sm leading-6 text-[#A9ABB3]">
              Clear pricing. Secure hosting. Your domain stays in your name.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/start" primary>
                Start my website
                <ArrowRight />
              </CTAButton>
              <CTAButton href="#demos">
                View demo websites
                <ArrowRight />
              </CTAButton>
            </div>

            <HeroStatsStrip />
          </Reveal>

          <Reveal delay={0.08} className="hidden lg:block">
            <GlassCard className="h-full min-h-[560px] p-5">
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#0D0E11]/80 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                    Website launch package
                  </div>
                  <div className="rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-3 py-1 text-xs text-[#9CC0FF]">
                    Fast launch
                  </div>
                </div>

                <div className="mt-5 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-sm text-[#A9ABB3]">Website build</div>
                      <div className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-[#F5F2EA]">
                        £595
                      </div>
                      <div className="mt-1 text-sm text-[#A9ABB3]">One-time</div>
                    </div>
                  </div>

                  <div className="mt-5 text-sm text-[#F5F2EA]">Includes:</div>
                  <div className="mt-3 grid gap-3">
                    {BUILD_INCLUDES.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-[#E5E7EC]"
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm text-[#A9ABB3]">Hosting & support</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#F5F2EA]">
                    £40/month
                  </div>

                  <div className="mt-5 text-sm text-[#F5F2EA]">Includes:</div>
                  <div className="mt-3 grid gap-3">
                    {[
                      "Secure hosting",
                      "SSL certificate",
                      "Technical management",
                      "Domain connection setup",
                      "Deployment support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-[#E5E7EC]"
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.10),rgba(255,255,255,0.03))] p-5">
                    <p className="text-sm leading-6 text-[#D7E5FF]">
                      Once your content is received, your website can be built
                      within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DemoPreview({ title }: { title: string }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[11px]">
          Demo website
        </span>
        <span className="rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/12 px-2.5 py-1 text-[11px] text-[#8BB5FF] sm:px-3 sm:text-xs">
          Preview build
        </span>
      </div>

      <div className="mt-4 aspect-[16/10] overflow-hidden rounded-[18px] border border-white/10 bg-[#0D0E10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%)]"
        >
          <div className="absolute inset-0 p-3 sm:p-4">
            <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div className="mt-4 grid gap-3">
                <div className="h-8 rounded-xl bg-white/[0.05]" />
                <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div className="space-y-3 rounded-xl bg-white/[0.04] p-3">
                    <div className="h-3 w-24 rounded bg-white/[0.08]" />
                    <div className="h-10 rounded-lg bg-white/[0.06]" />
                    <div className="h-10 rounded-lg bg-white/[0.06]" />
                  </div>
                  <div className="rounded-xl bg-[#3B82F6]/10 p-3">
                    <div className="h-full rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/8" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-white/[0.04]" />
                  <div className="h-16 rounded-xl bg-white/[0.04]" />
                  <div className="h-16 rounded-xl bg-white/[0.04]" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm font-medium text-[#F5F2EA]">{title}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DemoCard({
  title,
  description,
  href,
  index,
  interactionEnabled,
}: {
  title: string;
  description: string;
  href: string;
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
    const ry = (px - 0.5) * 5;
    const rx = (0.5 - py) * 4;
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
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={reduceMotion || !interactionEnabled ? {} : { y: -6 }}
        transition={{ duration: 0.35, ease: easeOut }}
        style={
          interactionEnabled
            ? {
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
              }
            : undefined
        }
        className="group block overflow-hidden rounded-[28px] border border-white/10 bg-[#111214]/90 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:border-white/20"
      >
        <div className="relative overflow-hidden border-b border-white/10 bg-[#0C0D10]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_36%)]" />
          <div className="relative p-4 sm:p-5">
            <DemoPreview title={title} />
          </div>
        </div>

        <div className="relative overflow-hidden p-5 sm:p-6">
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
          <div className="text-sm text-[#A9ABB3]">Demo website</div>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#F5F2EA]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
            {description}
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
    <div className="rounded-[22px] border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-[15px] font-medium text-[#F5F2EA] sm:text-[16px]">
          {question}
        </span>
        <span className="text-xl leading-none text-[#A9ABB3]">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-sm leading-7 text-[#A9ABB3] sm:px-6 sm:text-[15px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FloatingCTA({ scrolled }: { scrolled: boolean }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <>
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
              animate={reduceMotion ? {} : { scale: [1, 1.03, 1] }}
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
    </>
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
    <div className="rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-4">
      <div className="text-sm font-medium text-[#F5F2EA]">{title}</div>
      <p className="mt-2 text-sm leading-6 text-[#A9ABB3]">{text}</p>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const isMobile = useIsMobile();
  const motionEnabled = !reduceMotion && !isMobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#07080A] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white md:pb-0">
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
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-12%] top-[-8%] h-[24rem] w-[24rem] rounded-full bg-[#3B82F6]/10 blur-[120px] sm:h-[34rem] sm:w-[34rem] sm:bg-[#3B82F6]/12 sm:blur-[150px]"
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
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-14%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/8 blur-[110px] sm:h-[30rem] sm:w-[30rem] sm:bg-[#3B82F6]/10 sm:blur-[145px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <Header scrolled={scrolled} />
      <HeroSection isMobile={isMobile} reduceMotion={reduceMotion} />

      <main className="relative">
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <Reveal>
              <Eyebrow>Why this works</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                A straightforward way to get your website properly in place
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="space-y-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                <p>
                  Your website should do a simple job well: help people
                  understand your business quickly, trust what they see, and
                  know how to contact you.
                </p>
                <p>
                  Clean Websites is built around that goal. You send the
                  business details and content. Your website is then structured,
                  built and prepared for launch with a simple process and clear
                  pricing from the start.
                </p>
                <p>
                  No unnecessary back-and-forth or vague proposal process. Just
                  a clean, professional website built to support your business
                  properly online.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <Eyebrow>Fast launch</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Launch your website within 24 hours
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                <p>
                  Once your business content is ready, your website can be built
                  and prepared for launch within 24 hours.
                </p>
                <p>
                  That means no drawn-out project timeline and no need to wait
                  weeks just to get a straightforward business website live. If
                  you already know what you want your customers to see, the
                  process is designed to get it online quickly and properly.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {FAST_LAUNCH_POINTS.map((point, index) => (
                <motion.div
                  key={point}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: easeOut,
                  }}
                  whileHover={
                    motionEnabled
                      ? {
                          y: -4,
                          transition: { duration: 0.25, ease: easeOut },
                        }
                      : {}
                  }
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:min-h-[110px] sm:px-6"
                >
                  <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                  <div className="relative flex items-start gap-3">
                    <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-[#3B82F6]" />
                    <p className="text-[15px] leading-7 text-[#F5F2EA] sm:text-[16px]">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <Reveal>
              <Eyebrow>What your website needs to do</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                A website that makes your business easier to trust
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard className="p-6 sm:p-8">
                <div className="space-y-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  <p>
                    For most businesses, a good website is not about unnecessary
                    complexity. It is about clarity.
                  </p>
                  <p>It should help someone quickly understand:</p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "who you are",
                      "what you offer",
                      "where you are",
                      "how to contact or book with you",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-3 text-[#F5F2EA]"
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                          <CheckIcon />
                        </span>
                        <span className="text-sm sm:text-[15px]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p>
                    That is what this service is designed to deliver: a website
                    that looks professional, feels credible, and makes it easier
                    for customers to take the next step.
                  </p>
                  <p>
                    Designed to work well for businesses such as restaurants,
                    salons, studios, service businesses and local companies — or
                    any business that needs a clean, credible online presence.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Section>

        <Section id="demos">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Demo websites</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                See how your website could be structured
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                <p>
                  These demo websites show how different types of businesses can
                  present their services clearly and make it easy for customers
                  to take action.
                </p>
                <p>
                  Each layout is designed around clarity, mobile usability and
                  strong contact points so visitors can quickly understand what
                  the business does and what to do next.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#A9ABB3]">
            {DEMO_CATEGORIES.map((item, index) => (
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
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3">
            {DEMO_CARDS.map((card, index) => (
              <DemoCard
                key={card.title}
                title={card.title}
                description={card.description}
                href={card.href}
                index={index}
                interactionEnabled={!isMobile}
              />
            ))}
          </div>
        </Section>

        <Section id="process">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>What happens next</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                A simple process from content to launch
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                Starting your website should feel straightforward.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-8 sm:mt-10">
            <motion.div
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
              whileInView={reduceMotion ? {} : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: easeOut }}
              style={{ originX: 0 }}
              className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            />

            <div className="grid gap-4 lg:grid-cols-4">
              {PROCESS_STEPS.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="relative rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)] sm:p-6"
                >
                  <motion.div
                    initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
                    whileInView={reduceMotion ? {} : { scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.08,
                      ease: easeOut,
                    }}
                    className="inline-flex rounded-full border border-[#3B82F6]/20 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),rgba(255,255,255,0.04))] px-3 py-1 text-xs font-medium text-[#9CC0FF]"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="mt-5 text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-[#A9ABB3] sm:mt-8 sm:text-[15px]">
              Once content is received, websites can be built within 24 hours.
            </p>
          </div>
        </Section>

        <Section id="pricing">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Simple pricing for a professional launch
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                The pricing is designed to be clear from the start, so you know
                exactly what is included and what happens after launch.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-white/10 bg-[#121417]/90 shadow-[0_20px_80px_rgba(0,0,0,0.18)] lg:mt-10">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-5 sm:p-8 lg:p-9">
                <div className="text-sm text-[#A9ABB3]">Website build</div>
                <div className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-[#F5F2EA] sm:text-6xl">
                  £595
                </div>
                <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                <div className="mt-6 text-sm text-[#F5F2EA]">Includes:</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                      className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm text-[#F5F2EA]">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 rounded-[22px] border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                  Once your content is received, your website can be built
                  within 24 hours.
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.02] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                <div className="text-sm text-[#A9ABB3]">Hosting & support</div>
                <div className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#F5F2EA]">
                  £40/month
                </div>

                <p className="mt-5 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                  Your website is hosted securely and managed technically so it
                  stays online, loads properly and continues to run as expected
                  after launch.
                </p>

                <div className="mt-6 text-sm text-[#F5F2EA]">Includes:</div>
                <div className="mt-4 space-y-3">
                  {HOSTING_INCLUDES.map((item) => (
                    <SupportItem
                      key={item.title}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </div>

                <div className="mt-6 rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-6 text-[#A9ABB3]">
                  Your domain is purchased separately in your name, so you keep
                  full ownership of it.
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <CTAButton href="/start" primary>
                    Start my website
                  </CTAButton>
                  <CTAButton href="#demos">View demo websites</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <Reveal>
              <Eyebrow>What is included</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Everything needed for a clean, credible business website
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                The service is designed to give your business the essentials
                needed for a professional online presence without overcomplicating
                the process.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard className="p-6 sm:p-8">
                <div className="text-sm text-[#F5F2EA]">Your website includes:</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {INCLUDED_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm leading-6 text-[#F5F2EA]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                  The result is a website that looks professional, works
                  properly, and is ready for customers to use.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Section>

        <Section>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Why businesses choose this</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Built for clarity, credibility and ease
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                A website often loses people for simple reasons: it feels
                outdated, confusing or incomplete. This service focuses on the
                fundamentals that make a business website work better.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-10">
            {WHY_CHOOSE_POINTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: easeOut,
                }}
                whileHover={
                  motionEnabled
                    ? {
                        y: -4,
                        transition: { duration: 0.25, ease: easeOut },
                      }
                    : {}
                }
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-6"
              >
                <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                <h3 className="relative text-[20px] tracking-[-0.03em] text-[#F5F2EA]">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <Reveal>
              <Eyebrow>What you need to provide</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Getting started is simple
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                To build your website, the main things needed are usually:
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard className="p-6 sm:p-8">
                <div className="grid gap-3">
                  {WHAT_YOU_NEED.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm leading-6 text-[#F5F2EA]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                  Once this is received, the website can be built and prepared
                  for review.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Section>

        <Section>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>FAQ / objections</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,7vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F5F2EA]">
                Common questions
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:mt-10">
            {FAQS.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Section>

        <Section className="pb-16 sm:pb-20 lg:pb-24">
          <Reveal>
            <GlassCard className="relative overflow-hidden px-5 py-12 text-center sm:px-10 sm:py-14">
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
                className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#3B82F6]/14 blur-[100px] sm:h-64 sm:w-64 sm:bg-[#3B82F6]/18 sm:blur-[110px]"
              />

              <div className="relative mx-auto max-w-3xl">
                <Eyebrow>Final CTA</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(2.4rem,8vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-[#F5F2EA]">
                  Get your website properly in place
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[17px] sm:leading-8">
                  If your business needs a clean, professional website that is
                  quick to launch and easy for customers to use, you can start
                  here.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-[#E2E4E9] sm:text-[15px]">
                  <span>Website build £595</span>
                  <span className="hidden sm:inline text-white/20">•</span>
                  <span>Hosting & support £40/month after launch</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">
                  Built within 24 hours once content is received.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CTAButton href="/start" primary>
                    Start my website
                    <ArrowRight />
                  </CTAButton>
                  <CTAButton href="#demos">
                    View demo websites
                    <ArrowRight />
                  </CTAButton>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#A9ABB3]">
                  Clear pricing, secure hosting, SSL included, and your domain
                  stays in your name.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </Section>

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
      </main>

      <FloatingCTA scrolled={scrolled} />
    </div>
  );
}
