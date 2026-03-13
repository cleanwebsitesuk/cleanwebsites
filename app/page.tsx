"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
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
  children: React.ReactNode;
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  const reduceMotion = useReducedMotion();
  const [style, setStyle] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setStyle({ x, y });
  };

  const handleLeave = () => setStyle({ x: 0, y: 0 });

  return (
    <motion.div
      animate={{ x: style.x, y: style.y }}
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

function DemoCard({
  card,
  index,
}: {
  card: (typeof featuredDemos)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
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
        whileHover={reduceMotion ? {} : { y: -8 }}
        transition={{ duration: 0.35, ease: easeOut }}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        className="group block overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] transition duration-300 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.32)]"
      >
        <div className="relative h-[20rem] overflow-hidden border-b border-white/10 bg-[#0D0E10]">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]"
            animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0"
            transition={{ duration: 0.55, ease: easeOut }}
            whileHover={reduceMotion ? {} : { scale: 1.035, y: -4 }}
          >
            <motion.div
              style={{ transform: "translateZ(28px)" }}
              className="absolute left-6 right-6 top-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
            >
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
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(14px)" }}
              className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className="text-sm text-[#F5F2EA]">
                Example homepage direction
              </div>
              <motion.div
                className="mt-2 h-10 rounded-2xl bg-[#3B82F6]"
                whileHover={reduceMotion ? {} : { scaleX: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden p-6">
          <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
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
      </motion.a>
    </Reveal>
  );
}

function PriceHighlight({
  children,
  className,
}: {
  children: React.ReactNode;
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
  const reduceMotion = useReducedMotion();

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
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 20, -10, 0],
                  y: [0, -14, 10, 0],
                  scale: [1, 1.04, 0.98, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#3B82F6]/10 blur-[140px]"
        />
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -24, 12, 0],
                  y: [0, 16, -8, 0],
                  scale: [1, 0.98, 1.03, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-14%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/8 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
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
            scrolled ? "h-[70px]" : "h-[78px]"
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
                className="h-9 w-auto opacity-95"
              />
            </motion.div>
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

            <MagneticLink
              href="/start"
              className="group inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
            >
              Get my website quote
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

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 z-40 bg-[#0A0A0B]/96 px-6 md:hidden"
            >
              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 14, opacity: 0 }}
                transition={{ duration: 0.32, ease: easeOut }}
                className="flex min-h-screen flex-col justify-center gap-7 text-3xl font-light tracking-tight text-[#F5F2EA]"
              >
                {[
                  { href: "#demos", label: "Demos" },
                  { href: "#process", label: "Process" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "/start", label: "Get my website quote" },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.06 + index * 0.06,
                      ease: easeOut,
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative">
        <section className="mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-7xl items-center justify-center px-5 pb-20 pt-10 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] text-[#A9ABB3]"
            >
              <motion.span
                animate={reduceMotion ? {} : { scale: [1, 1.22, 1] }}
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
              className="mx-auto mt-6 max-w-[14ch] font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.03em] text-[#F5F2EA]"
            >
              Professional websites for UK businesses.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]"
            >
              Clean, fast, mobile-first websites that help your business look
              credible online and make it easy for customers to get in touch.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-3xl text-[18px] leading-8 text-[#A9ABB3] sm:text-[20px]"
            >
              Custom-built with a simple process and ready to launch in as
              little as 24 hours once content is received.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <MagneticLink
                href="/start"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
              >
                Get my website quote
                <ArrowRight />
              </MagneticLink>

              <a
                href="#demos"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                View demo websites
                <ArrowRight />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 grid max-w-3xl gap-3 text-sm text-[#A9ABB3] sm:grid-cols-2"
            >
              {[
                "Custom-built for your business",
                "Mobile-first and fast loading",
                "Managed hosting with free SSL",
                "Simple launch process",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5 + index * 0.06,
                    ease: easeOut,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Reveal>
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

                    <PriceHighlight className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-5xl">
                      From £595
                    </PriceHighlight>

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
                  </div>

                  <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                    <div className="text-sm text-[#A9ABB3]">
                      After launch - Managed hosting & support
                    </div>

                    <PriceHighlight className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-[#F5F2EA]">
                      £40 / month
                    </PriceHighlight>

                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#A9ABB3]">
                      <div className="flex items-start justify-between gap-3">
                        <span>Secure hosting</span>
                        <InfoTooltip text="Your website runs on fast, secure hosting so it loads quickly and stays online reliably." />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <span>Free SSL certificate</span>
                        <InfoTooltip text="Your site includes HTTPS security so visitors see the secure padlock in their browser." />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <span>Domain connection setup</span>
                        <InfoTooltip text="We connect your domain so when people type your website address they reach your live site correctly." />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <span>Deployment and launch support</span>
                        <InfoTooltip text="We handle the technical launch and check everything after the site goes live to make sure it works properly." />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <span>Technical management</span>
                        <InfoTooltip text="We handle the technical side so you don't have to worry about updates, uptime, or setup issues." />
                      </div>

                      <p>
                        Your domain is purchased separately in your name so you
                        always keep full ownership.
                      </p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                      <MagneticLink
                        href="/start"
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white transition duration-300 hover:brightness-110 sm:w-auto lg:w-full xl:w-auto"
                      >
                        Get my website quote
                      </MagneticLink>

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
        </Reveal>

        <Reveal>
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
                   initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                   whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: easeOut,
                    }}
                    className="rounded-[28px] border border-white/10 bg-[#111214] p-6"
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
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#F5F2EA]"
                    >
                      {item.step}
                    </motion.div>

                    <h3 className="mt-5 text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
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
                Preview example website styles and layouts that can be adapted
                to different types of businesses.
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
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {featuredDemos.map((card, index) => (
                <DemoCard key={card.title} card={card} index={index} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
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
                  A good website should help customers trust your business and
                  get in touch easily.
                </p>
                <p className="mt-4 text-[18px] leading-8 text-[#A9ABB3]">
                  The result is a website that feels modern, professional, and
                  easy to use.
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
                      reduceMotion
                        ? {}
                        : {
                            y: -4,
                            transition: { duration: 0.25, ease: easeOut },
                          }
                    }
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#111214] p-6 transition duration-300 hover:border-white/15 hover:bg-[#141518]"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
                    <h3 className="relative text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                      {card.copy}
                    </p>
                  </motion.div>
                ))}

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.18, ease: easeOut }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -4,
                          transition: { duration: 0.25, ease: easeOut },
                        }
                  }
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#111214] p-6 transition duration-300 hover:border-white/15 hover:bg-[#141518]"
                >
                  <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
                  <h3 className="relative text-[22px] tracking-[-0.03em] text-[#F5F2EA]">
                    Clear enquiry points
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-7 text-[#A9ABB3]">
                    Customers always have a clear next step to call, message,
                    book, or request a quote.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111214] px-6 py-14 text-center sm:px-10">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        x: [0, 14, -8, 0],
                        y: [0, -10, 8, 0],
                        scale: [1, 1.05, 0.98, 1],
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3B82F6]/18 blur-[110px]"
              />

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
                  <MagneticLink
                    href="/start"
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
                  >
                    Get my website quote
                    <ArrowRight />
                  </MagneticLink>

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
                  Get my website quote
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
