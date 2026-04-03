"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/message/CIUXDPB67KAAJ1";

const servicePoints = [
  "Custom-built website",
  "Fast loading and mobile-first layout",
  "Home, About, Services/Menu, and Contact pages",
  "Contact or booking form",
  "Launch support included",
  "Ready to go live once content is provided",
];

const nextSteps = [
  "We review the details of your project and business.",
  "We respond once we have reviewed the information.",
  "We confirm the structure of your website and what content is needed.",
  "Once content is ready, we build the website and prepare it for launch.",
];

const portfolioLinks = [
  {
    label: "McKenzieFriend.ai",
    href: "https://mckenziefriend.ai",
  },
  {
    label: "FareGuard",
    href: "https://fareguard.co.uk",
  },
];

const practicalDetails = [
  "Website builds start from £595 depending on scope",
  "Managed hosting and support is £40/month after launch",
  "Your domain is purchased separately in your name",
  "Content and images must be supplied before build begins",
  "One revision is included",
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: easeOut },
  },
};

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(media.matches);

    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, [breakpoint]);

  return isMobile;
}

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3] sm:text-[12px]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
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
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="relative">{children}</div>
    </div>
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
  const reduceMotion = useReducedMotion() ?? false;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.68, delay, ease: easeOut }}
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

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.41Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.23c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.91 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.38-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function BackHomeLink({ isMobile }: { isMobile: boolean }) {
  return (
    <MagneticLink
      href="/"
      disabled={isMobile}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#F5F2EA] transition duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:text-[12px] sm:tracking-[0.18em]"
    >
      Back to homepage
    </MagneticLink>
  );
}

function SectionCard({
  eyebrow,
  title,
  copy,
  children,
  className = "",
}: {
  eyebrow: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <GlassCard className={`p-5 sm:p-7 ${className}`}>
      <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
        {eyebrow}
      </div>

      {title && (
        <h2 className="mt-4 font-serif text-[clamp(1.85rem,6vw,2.95rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
          {title}
        </h2>
      )}

      {copy && (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px]">
          {copy}
        </p>
      )}

      <div className="mt-5 sm:mt-6">{children}</div>
    </GlassCard>
  );
}

function BulletListCard({
  eyebrow,
  title,
  copy,
  items,
  hideFromIndexOnMobile,
  delay = 0,
}: {
  eyebrow: string;
  title?: string;
  copy?: string;
  items: string[];
  hideFromIndexOnMobile?: number;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <Reveal delay={delay}>
      <SectionCard eyebrow={eyebrow} title={title} copy={copy}>
        <div className="grid gap-3">
          {items.map((item, index) => (
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
              className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:px-4 sm:py-4 ${
                hideFromIndexOnMobile !== undefined && index >= hideFromIndexOnMobile
                  ? "hidden sm:flex"
                  : "flex"
              }`}
            >
              <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
              <div className="relative flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                  <CheckIcon />
                </span>
                <span className="text-sm leading-6 text-[#F5F2EA]">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionCard>
    </Reveal>
  );
}

function PortfolioLinkCard({
  label,
  href,
  index,
  motionEnabled,
}: {
  label: string;
  href: string;
  index: number;
  motionEnabled: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: easeOut,
      }}
      whileHover={motionEnabled ? { y: -4 } : {}}
      className="group relative flex items-center justify-between overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
      <div className="relative flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8BB5FF]">
          <ArrowRight />
        </span>
        <span>{label}</span>
      </div>
      <span className="relative inline-flex items-center gap-2 text-[#8BB5FF]">
        Open
        <ArrowRight />
      </span>
    </motion.a>
  );
}

function InputShell({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-[#F5F2EA]"
      >
        {label}
        {optional && <span className="text-[#7F828A]"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

function RadioOption({
  name,
  value,
  label,
  disabled,
}: {
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
}) {
  return (
    <label className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#F5F2EA] transition duration-300 hover:border-white/20 hover:bg-white/[0.05] has-[:checked]:border-[#3B82F6]/40 has-[:checked]:bg-[#3B82F6]/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#3B82F6]/40">
      <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
      <input
        type="radio"
        name={name}
        value={value}
        required
        disabled={disabled}
        className="relative h-4 w-4 accent-[#3B82F6]"
      />
      <span className="relative">{label}</span>
    </label>
  );
}

export default function StartPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: null,
    text: "",
  });

  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() ?? false;
  const motionEnabled = !reduceMotion && !isMobile;

  useEffect(() => {
    if (!submitMessage.type) return;

    const timeout = setTimeout(() => {
      setSubmitMessage({ type: null, text: "" });
    }, 7000);

    return () => clearTimeout(timeout);
  }, [submitMessage]);

  const formCardClass = useMemo(
    () =>
      "rounded-[28px] border border-white/10 bg-[#111214]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-[32px]",
    []
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitMessage({ type: null, text: "" });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();

      setSubmitMessage({
        type: "success",
        text: "Thanks — your enquiry has been sent. We’ll review your project and reply with the next steps.",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to send your enquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white md:pb-0">
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
          className="absolute left-[-12%] top-[-8%] h-[24rem] w-[24rem] rounded-full bg-[#3B82F6]/8 blur-[120px] sm:h-[34rem] sm:w-[34rem] sm:bg-[#3B82F6]/10 sm:blur-[145px]"
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
          className="absolute bottom-[-14%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/6 blur-[110px] sm:h-[30rem] sm:w-[30rem] sm:bg-[#3B82F6]/8 sm:blur-[145px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <main className="relative">
        <SectionShell className="pb-10 pt-8 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-16">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <BackHomeLink isMobile={isMobile} />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-[15ch] font-serif text-[clamp(2.1rem,8vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-[#F5F2EA]"
            >
              Tell us about your business and get your website project started.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[16px] leading-7 text-[#A9ABB3] sm:text-[20px] sm:leading-8"
            >
              We build clean, professional websites for UK businesses that want
              to look credible online and make it easy for customers to get in
              touch.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 inline-flex rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] font-semibold leading-6 text-[#E2E4E9] shadow-[0_12px_36px_rgba(0,0,0,0.14)] sm:px-5"
            >
              Website builds start from £595 • Hosting £40/month after launch
            </motion.div>
          </motion.div>
        </SectionShell>

        <SectionShell className="pb-20">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
            <div className="space-y-5 sm:space-y-6">
              <BulletListCard
                eyebrow="What you’ll get"
                title="A professional website built for your business"
                copy="Every website includes the core pages most businesses need."
                items={servicePoints}
                hideFromIndexOnMobile={4}
              />

              <Reveal delay={0.05}>
                <SectionCard eyebrow="What happens next">
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "We review your enquiry",
                      "We reply with next steps",
                      "We confirm scope and timeline",
                      "We build and prepare launch",
                    ].map((title, index) => (
                      <motion.div
                        key={title}
                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.06,
                          ease: easeOut,
                        }}
                        className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      >
                        <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-700 md:group-hover:translate-x-full md:group-hover:opacity-100" />
                        <div className="relative flex gap-3">
                          <motion.div
                            initial={
                              reduceMotion ? false : { scale: 0.9, opacity: 0 }
                            }
                            whileInView={
                              reduceMotion ? {} : { scale: 1, opacity: 1 }
                            }
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.08 + index * 0.06,
                              ease: easeOut,
                            }}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),rgba(255,255,255,0.04))] text-sm text-[#F5F2EA]"
                          >
                            0{index + 1}
                          </motion.div>
                          <div>
                            <p className="pt-0.5 text-sm font-medium leading-6 text-[#F5F2EA]">
                              {title}
                            </p>
                            <p className="pt-1 text-sm leading-6 text-[#A9ABB3]">
                              {nextSteps[index]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>
              </Reveal>

              <BulletListCard
                eyebrow="Practical details"
                items={practicalDetails}
                hideFromIndexOnMobile={3}
                delay={0.1}
              />

              <Reveal delay={0.15}>
                <SectionCard
                  eyebrow="Portfolio"
                  title="Recent work"
                >
                  <div className="space-y-3">
                    {portfolioLinks.map((project, index) => (
                      <PortfolioLinkCard
                        key={project.label}
                        label={project.label}
                        href={project.href}
                        index={index}
                        motionEnabled={motionEnabled}
                      />
                    ))}
                  </div>
                </SectionCard>
              </Reveal>
            </div>

            <Reveal className="h-fit lg:sticky lg:top-6">
              <div className={formCardClass}>
                <div className="border-b border-white/10 px-5 py-5 sm:px-8 sm:py-6">
                  <h2 className="mt-3 text-[1.7rem] tracking-[-0.03em] text-[#F5F2EA] sm:text-[2rem]">
                    Tell us about your project
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A9ABB3]">
                    Fill out the form below and we’ll review your enquiry and
                    reply with the next steps.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-8 sm:py-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <InputShell label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        autoComplete="name"
                        placeholder="Your name"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                      />
                    </InputShell>

                    <InputShell label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        autoComplete="email"
                        placeholder="you@business.com"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                      />
                    </InputShell>

                    <InputShell label="Phone" htmlFor="phone" optional>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                        autoComplete="tel"
                        placeholder="Phone number"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                      />
                    </InputShell>

                    <InputShell label="Business name" htmlFor="businessName">
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        disabled={isSubmitting}
                        autoComplete="organization"
                        placeholder="Business name"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                      />
                    </InputShell>
                  </div>

                  <InputShell label="Type of business" htmlFor="businessType">
                    <input
                      id="businessType"
                      name="businessType"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Describe your business"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </InputShell>

                  <fieldset disabled={isSubmitting}>
                    <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                      Do you already have a website?
                    </legend>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <RadioOption
                        name="hasWebsite"
                        value="yes"
                        label="Yes"
                        disabled={isSubmitting}
                      />
                      <RadioOption
                        name="hasWebsite"
                        value="no"
                        label="No"
                        disabled={isSubmitting}
                      />
                    </div>
                  </fieldset>

                  <fieldset disabled={isSubmitting}>
                    <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                      Do you already own a domain?
                    </legend>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <RadioOption
                        name="hasDomain"
                        value="yes"
                        label="Yes"
                        disabled={isSubmitting}
                      />
                      <RadioOption
                        name="hasDomain"
                        value="no"
                        label="No"
                        disabled={isSubmitting}
                      />
                    </div>
                  </fieldset>

                  <InputShell
                    label="Tell us about your business"
                    htmlFor="about"
                  >
                    <textarea
                      id="about"
                      name="about"
                      rows={6}
                      required
                      disabled={isSubmitting}
                      placeholder="Tell us what your business does, which pages you need, and anything else we should know."
                      className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#3B82F6]/20 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </InputShell>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send my enquiry"}
                    </button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20D466] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(32,212,102,0.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                    >
                      <WhatsAppIcon />
                      Message us on WhatsApp
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm leading-6 text-[#7F828A]">
                      No obligation. Just send your details and we’ll review your
                      project.
                    </p>
                    <p className="hidden text-sm leading-6 text-[#7F828A] sm:block">
                      Prefer messaging? You can also contact us directly on
                      WhatsApp.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitMessage.type && (
                      <motion.div
                        key={submitMessage.type + submitMessage.text}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        aria-live="polite"
                        className={`rounded-[18px] border px-4 py-3 text-sm leading-6 ${
                          submitMessage.type === "success"
                            ? "border-green-400/20 bg-green-400/10 text-green-300"
                            : "border-red-400/20 bg-red-400/10 text-red-300"
                        }`}
                      >
                        {submitMessage.text}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2 text-sm leading-6 text-[#7F828A]">
                    <p>
                      Website builds start from £595 depending on scope. Managed
                      hosting is £40/month after launch. Your domain is purchased
                      separately in your name.
                    </p>
                    <p className="hidden sm:block">
                      By sending this form, you’re asking us to review your
                      project and reply with the next steps.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </SectionShell>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-4 backdrop-blur-2xl md:hidden">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20D466] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(32,212,102,0.22)]"
          >
            <WhatsAppIcon />
            Message us on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
