"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const featuredDemos = [
  {
    title: "Barber / Salon",
    copy: "A booking-led example layout with services, gallery sections, and clear contact points.",
    href: "/demo/barber",
    kicker: "Demo website",
    image: "/demo-previews/barber.jpg",
  },
  {
    title: "Restaurant / Takeaway",
    copy: "A menu-first example build with opening hours, directions, and strong mobile action points.",
    href: "/demo/burger",
    kicker: "Demo website",
    image: "/demo-previews/burger.jpg",
  },
  {
    title: "Trades / Services",
    copy: "A service-led example layout with trust sections, coverage areas, and a clear quote request flow.",
    href: "/demo/trades",
    kicker: "Demo website",
    image: "/demo-previews/trades.jpg",
  },
];

const speedPoints = [
  "Simple structured website builds",
  "Designed for small businesses",
  "Clear pricing",
  "Fast turnaround once content is ready",
];

const processSteps = [
  {
    step: "01",
    title: "Send your business details and content",
    desc: "Tell us about your business and provide your website content.",
  },
  {
    step: "02",
    title: "We build your website",
    desc: "Your website is structured and built around your business.",
  },
  {
    step: "03",
    title: "You review the build",
    desc: "You can request one revision to refine the layout or content.",
  },
  {
    step: "04",
    title: "We connect your domain and launch",
    desc: "We set up hosting, SSL and launch your website.",
  },
];

const trustCards = [
  {
    title: "Clear structure",
    copy: "Visitors can quickly understand what your business does and how to contact you.",
  },
  {
    title: "Mobile-first layout",
    copy: "Your website is designed to work properly on phones as well as desktop.",
  },
  {
    title: "Fast loading pages",
    copy: "Clean builds focused on speed and usability.",
  },
  {
    title: "Clear enquiry points",
    copy: "Customers always have an easy way to call, message or request a quote.",
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
    text: "Your website runs on fast, secure hosting so it loads quickly and stays online reliably.",
  },
  {
    title: "Free SSL certificate",
    text: "Your site includes HTTPS security so visitors see the secure padlock in their browser.",
  },
  {
    title: "Domain connection setup",
    text: "We connect your domain so when people type your website address they reach your live site correctly.",
  },
  {
    title: "Deployment and launch support",
    text: "We handle the technical launch and check everything after the site goes live to make sure it works properly.",
  },
  {
    title: "Technical management",
    text: "We handle the technical side so you don't have to worry about updates, uptime, or setup issues.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOut },
  },
};

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

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

function Reveal({
  children,
  delay = 0,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

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

function MagneticLink({
  children,
  className,
  href,
  disabled = false,
}: {
  children: ReactNode;
  className: string;
  href: string;
  disabled?: boolean;
}) {
  const reduceMotion = useReducedMotion();
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
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#A9ABB3] transition hover:border-white/25 hover:text-[#F5F2EA]"
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
            className="absolute right-0 top-7 z-30 w-64 rounded-2xl border border-white/10 bg-[#111214] p-3 text-left text-xs leading-6 text-[#A9ABB3] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:w-72"
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
    <div>
      <div className="flex items-start justify-between gap-3">
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
  card: (typeof featuredDemos)[number];
  index: number;
  interactionEnabled: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !interactionEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 6;
    const rx = (0.5 - py) * 5;
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
        whileHover={reduceMotion || !interactionEnabled ? {} : { y: -8 }}
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
        className="group block overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] transition duration-300 md:hover:border-white/20 md:hover:shadow-[0_30px_80px_rgba(0,0,0,0.32)] sm:rounded-[28px]"
      >
        <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#0D0E10] sm:h-72 lg:h-[20rem]">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]"
            animate={
              reduceMotion || !interactionEnabled ? {} : { scale: [1, 1.04, 1] }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0"
            transition={{ duration: 0.55, ease: easeOut }}
            whileHover={
              reduceMotion || !interactionEnabled ? {} : { scale: 1.035, y: -4 }
            }
          >
            <motion.div
              style={
                interactionEnabled ? { transform: "translateZ(28px)" } : undefined
              }
              className="absolute left-4 right-4 top-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:left-6 sm:right-6 sm:top-6 sm:rounded-[22px] sm:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[11px]">
                  {card.kicker}
                </span>
                <span className="rounded-full bg-[#3B82F6]/15 px-2.5 py-1 text-[11px] text-[#8BB5FF] sm:px-3 sm:text-xs">
                  Preview build
                </span>
              </div>
              <div className="mt-4 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] sm:mt-5 sm:rounded-[18px]">
                <img
                  src={card.image}
                  alt={`${card.title} preview`}
                  className="h-36 w-full object-cover object-top sm:h-44"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden p-5 sm:p-6">
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
          <div className="text-sm text-[#A9ABB3]">{card.kicker}</div>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#F5F2EA] sm:text-[26px]">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
            {card.copy}
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

function PriceHighlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
      whileInView={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const motionEnabled = !reduceMotion && !isMobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0A0B] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white md:pb-0">
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
          className="absolute left-[-12%] top-[-8%] h-[24rem] w-[24rem] rounded-full bg-[#3B82F6]/8 blur-[120px] sm:h-[32rem] sm:w-[32rem] sm:bg-[#3B82F6]/10 sm:blur-[140px]"
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
          className="absolute bottom-[-14%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/6 blur-[110px] sm:h-[28rem] sm:w-[28rem] sm:bg-[#3B82F6]/8 sm:blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.025] sm:opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <motion.header
        animate={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
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
            <motion.div
              animate={{ scale: scrolled ? 0.96 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src="/logo.png"
                alt="Clean Websites logo"
                width={144}
                height={40}
                className="h-8 w-auto opacity-95 sm:h-9"
              />
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] text-[#A9ABB3] md:flex">
            <a className="transition hover:text-[#F5F2EA]" href="#demos">
              Demos
            </a>
            <a className="transition hover:text-[#F5F2EA]" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#F5F2EA]" href="#process">
              Process
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#demos"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              View demo websites
            </Link>

            <MagneticLink
              href="/start"
              disabled={isMobile}
              className="group inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
            >
              Start my website
            </MagneticLink>
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
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="fixed inset-x-0 bottom-0 top-[74px] z-40 flex flex-col bg-[#0A0A0B]/92 backdrop-blur-md md:hidden"
          >
            <div className="flex-1 overflow-y-auto px-5 pt-8 pb-8">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: 12 }}
                transition={{ duration: 0.28, ease: easeOut }}
                className="mx-auto w-full max-w-7xl"
              >
                <div className="flex flex-col items-center gap-8">
                  {[
                    { href: "#demos", label: "Demos" },
                    { href: "#pricing", label: "Pricing" },
                    { href: "#process", label: "Process" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.04 + index * 0.08,
                        ease: easeOut,
                      }}
                      className="text-center text-lg font-medium text-[#F5F2EA] transition hover:text-[#A9ABB3]"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="border-t border-white/10 px-5 py-6">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: 0.28, ease: easeOut }}
                className="mx-auto w-full max-w-7xl"
              >
                <Link
                  href="/start"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-[15px] font-semibold text-white transition duration-300 hover:brightness-110"
                >
                  Start my website
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative scroll-smooth">
        {/* HERO SECTION STARTS */}
        <section className="mx-auto flex min-h-[74svh] w-full max-w-7xl items-start justify-center px-5 pb-6 pt-10 text-center sm:min-h-[calc(100svh-74px)] sm:px-6 sm:items-center sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto w-full max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]"
            >
              <motion.span
                animate={motionEnabled ? { scale: [1, 1.22, 1] } : {}}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"
              />
              Professional websites for UK businesses
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mx-auto mt-4 w-full font-serif text-[clamp(2.25rem,9.5vw,4rem)] leading-[1.1] tracking-[-0.04em] text-[#F5F2EA] sm:mt-6 sm:text-[clamp(2.5rem,10vw,4.2rem)] sm:leading-[1.12]"
            >
              Professional websites for UK businesses
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 w-full max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:mt-6 sm:text-[17px] sm:leading-7"
            >
              Clean, fast, mobile-first websites built with a simple process.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 w-full max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:mt-3 sm:text-[17px] sm:leading-7"
            >
              Once your content is received, your website can be built within 24
              hours.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 text-center text-[16px] font-semibold leading-6 text-[#E2E4E9] sm:mt-6 sm:text-[15px]"
            >
              Website build £595 • Hosting £40/month after launch
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
            >
              <MagneticLink
                href="/start"
                disabled={isMobile}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-5 text-[14px] font-semibold text-white transition duration-300 hover:brightness-110 sm:w-auto sm:px-6"
              >
                Start my website
                <ArrowRight />
              </MagneticLink>

              <a
                href="#demos"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[14px] font-semibold text-[#F5F2EA] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:w-auto sm:px-6"
              >
                View demo websites
                <ArrowRight />
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 w-full max-w-2xl text-[14px] leading-6 text-[#A9ABB3] sm:mt-7 sm:text-[14px]"
            >
              Ideal for trades, salons, restaurants, studios and local
              businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 hidden max-w-6xl gap-3 text-sm text-[#A9ABB3] sm:mt-9 sm:grid sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                "Clear pricing",
                "Designed for small businesses",
                "Managed hosting included",
                "Domain stays in your name",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.42 + index * 0.06,
                    ease: easeOut,
                  }}
                  className="flex min-h-[70px] items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] font-medium leading-6 text-[#E2E4E9] lg:min-h-[78px]"
                >
                  <span className="max-w-[16ch] text-center">{item}</span>
        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Fast launch
                </div>
                <h2 className="mt-4 font-serif text-[clamp(2.15rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                  Launch your website within 24 hours
                </h2>
                <p className="mt-5 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Once your business content is ready, your website can be built
                  and prepared for launch within 24 hours.
                </p>
                <p className="mt-4 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  The process is designed to be simple and efficient so your
                  business can get online quickly without a complicated project.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {speedPoints.map((item, index) => (
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
                    whileHover={
                      motionEnabled
                        ? {
                            y: -4,
                            transition: { duration: 0.25, ease: easeOut },
                          }
                        : {}
                    }
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] px-5 py-5 transition duration-300 hover:border-white/15 hover:bg-[#141518] sm:min-h-[100px] sm:px-6 sm:py-5 sm:rounded-[26px]"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                    <div className="relative flex items-start gap-3">
                      <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA] sm:text-[16px] sm:leading-7">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="demos"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                Demo websites
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                Example websites for different types of businesses
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                These examples show how your website could be structured
                depending on your type of business.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                Each layout is designed to help visitors quickly understand what
                you do and how to get in touch.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#A9ABB3] sm:mt-8">
              {[
                "Service businesses",
                "Studios and beauty",
                "Restaurants and hospitality",
                "Local service companies",
                "Small business layouts",
              ].map((item, index) => (
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

            <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3">
              {featuredDemos.map((card, index) => (
                <DemoCard
                  key={card.title}
                  card={card}
                  index={index}
                  interactionEnabled={!isMobile}
                />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Who this is for
                </div>
                <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                  Ideal for businesses that need a professional website quickly
                </h2>
                <p className="mt-5 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  If your business needs a clean website that helps customers
                  understand what you do and how to contact you, this service is
                  designed for you.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {whoItsFor.map((item, index) => (
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
                    className="rounded-[24px] border border-white/10 bg-[#111214] px-5 py-5 sm:min-h-[92px] sm:px-6 sm:py-5 sm:rounded-[26px]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[15px] leading-7 text-[#F5F2EA] sm:text-[16px] sm:leading-7">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="pricing"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] px-5 py-7 sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-10">
              <div className="max-w-4xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Pricing
                </div>
                <h2 className="mt-4 max-w-none font-serif text-[clamp(2.15rem,7vw,3.75rem)] leading-[1.05] tracking-[-0.04em] text-[#F5F2EA]">
                  <span className="block sm:inline">Simple website launch</span>
                  <span className="hidden sm:inline"> package</span>
                  <span className="block sm:hidden">package</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Clear pricing for small businesses that want a professional
                  website without a complicated agency process.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#17181B] sm:rounded-[28px]">
                <div className="grid lg:grid-cols-2">
                  <div className="p-5 sm:p-8 lg:p-9">
                    <div className="text-sm text-[#A9ABB3]">Website build</div>

                    <PriceHighlight className="mt-2 text-[2.2rem] font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-5xl">
                      £595
                    </PriceHighlight>

                    <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                    <div className="mt-6 space-y-3 text-sm text-[#F5F2EA]">
                      {[
                        "Home page",
                        "About page",
                        "Services or menu page",
                        "Contact or booking page",
                        "Contact form",
                        "Mobile optimisation",
                        "One revision",
                        "Launch support",
                      ].map((item, index) => (
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
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-7 rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                      Websites can be built within 24 hours once content is
                      received.
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                    <div className="text-sm text-[#A9ABB3]">
                      Managed hosting and support
                    </div>

                    <PriceHighlight className="mt-2 text-[1.9rem] font-semibold tracking-[-0.02em] text-[#F5F2EA] sm:text-3xl">
                      £40 / month
                    </PriceHighlight>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#A9ABB3]">
                      {supportItems.map((item) => (
                        <SupportItem
                          key={item.title}
                          title={item.title}
                          text={item.text}
                        />
                      ))}

                      <p>
                        Your domain is purchased separately in your name so you
                        keep full ownership.
                      </p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                      <MagneticLink
                        href="/start"
                        disabled={isMobile}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:brightness-110 sm:w-auto lg:w-full xl:w-auto"
                      >
                        Start my website
                      </MagneticLink>

                      <Link
                        href="#demos"
                        className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#A9ABB3] transition hover:border-white/20 hover:bg-white/[0.05] hover:text-[#F5F2EA] sm:w-auto lg:w-full xl:w-auto"
                      >
                        View demo websites
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="process"
            className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                Process
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                A simple 4-step process
              </h2>
              <p className="mt-4 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                A clear process from your content to a live, professional
                website.
              </p>
            </div>

            <div className="relative mt-8 sm:mt-10">
              <motion.div
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
                whileInView={reduceMotion ? {} : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: easeOut }}
                style={{ originX: 0 }}
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
              />

              <div className="grid gap-4 lg:grid-cols-4">
                {processSteps.map((item, index) => (
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
                    className="rounded-[24px] border border-white/10 bg-[#111214] p-5 sm:rounded-[28px] sm:p-6"
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
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#F5F2EA] sm:h-12 sm:w-12"
                    >
                      {item.step}
                    </motion.div>

                    <h3 className="mt-5 text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-sm leading-7 text-[#A9ABB3] sm:mt-8 sm:text-[15px]">
                Once content is received, the website can be built within 24
                hours.
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-xl">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Why it works
                </div>
                <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#F5F2EA]">
                  Designed to make your business look credible online
                </h2>
                <p className="mt-5 text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  The goal is simple: give your business a clean, professional
                  website that is easy to understand and easy to contact.
                </p>
              </div>

              <div className="space-y-4">
                {trustCards.map((card, index) => (
                  <motion.div
                    key={card.title}
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
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] p-5 transition duration-300 hover:border-white/15 hover:bg-[#141518] sm:rounded-[26px] sm:p-6"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                    <h3 className="relative text-[20px] tracking-[-0.03em] text-[#F5F2EA] sm:text-[22px]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-[#A9ABB3] sm:text-[15px] sm:leading-7">
                      {card.copy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] px-5 py-12 text-center sm:rounded-[34px] sm:px-10 sm:py-14">
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
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Start
                </div>
                <h2 className="mt-4 font-serif text-[clamp(2.3rem,8vw,4.5rem)] leading-[0.97] tracking-[-0.045em] text-[#F5F2EA]">
                  Get your business online properly
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Send your details and we'll review your project and confirm
                  the next steps.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Websites start from £595 with £40/month hosting after launch.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[18px] sm:leading-8">
                  Websites can be built within 24 hours once content is
                  received.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <MagneticLink
                    href="/start"
                    disabled={isMobile}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:brightness-110 sm:w-auto"
                  >
                    Start my website
                    <ArrowRight />
                  </MagneticLink>

                  <Link
                    href="#demos"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:w-auto"
                  >
                    View demo websites
                    <ArrowRight />
                  </Link>
                </div>
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

        <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-4 backdrop-blur md:hidden ${mobileOpen ? "hidden" : ""}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              href="/start"
              className="flex h-14 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-[16px] font-semibold text-white"
            >
              Start my website
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
