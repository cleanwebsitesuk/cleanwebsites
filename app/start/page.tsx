"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

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

const demoLinks = [
  {
    label: "Barber demo",
    href: "https://cleanwebsites.co.uk/demo/barber",
  },
  {
    label: "Restaurant demo",
    href: "https://cleanwebsites.co.uk/demo/restaurant",
  },
  {
    label: "Salon demo",
    href: "https://cleanwebsites.co.uk/demo/salon",
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
  children: React.ReactNode;
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

function SectionCard({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title?: string;
  copy?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5 sm:rounded-[28px] sm:p-7">
      <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
        {eyebrow}
      </div>

      {title && (
        <h2 className="mt-4 font-serif text-[clamp(1.8rem,6vw,2.9rem)] leading-[1] tracking-[-0.04em] text-[#F5F2EA]">
          {title}
        </h2>
      )}

      {copy && (
        <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px]">
          {copy}
        </p>
      )}

      <div className="mt-5 sm:mt-6">{children}</div>
    </div>
  );
}

export default function StartPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: null,
    text: "",
  });

  const reduceMotion = useReducedMotion();
  const motionEnabled = !reduceMotion && !isMobile;

  useEffect(() => {
    if (!submitMessage.type) return;

    const timeout = setTimeout(() => {
      setSubmitMessage({ type: null, text: "" });
    }, 7000);

    return () => clearTimeout(timeout);
  }, [submitMessage]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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

      <main className="relative">
        <section className="mx-auto w-full max-w-7xl px-5 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-16">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <MagneticLink
                href="/"
                disabled={isMobile}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#F5F2EA] transition duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:text-[12px] sm:tracking-[0.18em]"
              >
                Back to homepage
              </MagneticLink>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-[14ch] font-serif text-[clamp(2.35rem,10vw,5rem)] leading-[0.94] tracking-[-0.04em] text-[#F5F2EA]"
            >
              Tell us about your business and get your website project started.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-[#A9ABB3] sm:text-[20px] sm:leading-8"
            >
              We build clean, professional websites for UK businesses that want
              to look credible online and make it easy for customers to get in
              touch.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm text-[#A9ABB3] sm:text-base"
            >
              Website builds start from £595 • Hosting £40/month after launch
            </motion.p>
          </motion.div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:px-8">
          <div className="space-y-5 sm:space-y-6">
            <Reveal>
              <SectionCard
                eyebrow="What you’ll get"
                title="A professional website built for your business"
                copy="Every website includes the core pages most businesses need."
              >
                <div className="space-y-3">
                  {servicePoints.map((item, index) => (
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
                      className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 sm:px-4 sm:py-4 ${
                        index > 3 ? "hidden sm:flex" : ""
                      }`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                      <span className="text-sm leading-6 text-[#F5F2EA]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

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
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
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
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-[#F5F2EA]"
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
                    </motion.div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionCard eyebrow="Practical details">
                <div className="space-y-3">
                  {practicalDetails.map((item, index) => (
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
                      className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 sm:px-4 sm:py-4 ${
                        index > 2 ? "hidden sm:flex" : ""
                      }`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                      <span className="text-sm leading-6 text-[#F5F2EA]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

            <Reveal delay={0.15}>
              <SectionCard
                eyebrow="Demo websites"
                title="Explore example website styles"
                copy="You can explore demo websites before sending an enquiry."
              >
                <div className="space-y-3">
                  {demoLinks.map((demo, index) => (
                    <motion.a
                      key={demo.label}
                      href={demo.href}
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
                      whileHover={motionEnabled ? { y: -3 } : {}}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#F5F2EA] transition duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:py-4"
                    >
                      <span>{demo.label}</span>
                      <span className="text-[#8BB5FF]">Open</span>
                    </motion.a>
                  ))}
                </div>
              </SectionCard>
            </Reveal>
          </div>

          <Reveal className="h-fit">
            <div className="rounded-[26px] border border-white/10 bg-[#111214] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:rounded-[30px]">
              <div className="border-b border-white/10 px-5 py-5 sm:px-8">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3] sm:text-[12px] sm:tracking-[0.18em]">
                  Tell us about your project
                </div>
                <h2 className="mt-3 text-[1.65rem] tracking-[-0.03em] text-[#F5F2EA] sm:text-2xl">
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
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      autoComplete="name"
                      placeholder="Your name"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      autoComplete="email"
                      placeholder="you@business.com"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                    >
                      Phone <span className="text-[#7F828A]">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={isSubmitting}
                      autoComplete="tel"
                      placeholder="Phone number"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                    >
                      Business name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      disabled={isSubmitting}
                      autoComplete="organization"
                      placeholder="Business name"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Type of business
                  </label>
                  <input
                    id="businessType"
                    name="businessType"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="Describe your business"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <fieldset disabled={isSubmitting}>
                  <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                    Do you already have a website?
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05] sm:py-4">
                      <input
                        type="radio"
                        name="hasWebsite"
                        value="yes"
                        required
                        className="h-4 w-4 accent-[#3B82F6]"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05] sm:py-4">
                      <input
                        type="radio"
                        name="hasWebsite"
                        value="no"
                        required
                        className="h-4 w-4 accent-[#3B82F6]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset disabled={isSubmitting}>
                  <legend className="mb-3 block text-sm font-medium text-[#F5F2EA]">
                    Do you already own a domain?
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05] sm:py-4">
                      <input
                        type="radio"
                        name="hasDomain"
                        value="yes"
                        required
                        className="h-4 w-4 accent-[#3B82F6]"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05] sm:py-4">
                      <input
                        type="radio"
                        name="hasDomain"
                        value="no"
                        required
                        className="h-4 w-4 accent-[#3B82F6]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="about"
                    className="mb-2 block text-sm font-medium text-[#F5F2EA]"
                  >
                    Tell us about your business
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us what your business does, which pages you need, and anything else we should know."
                    className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA] outline-none transition placeholder:text-[#7F828A] focus:border-[#3B82F6]/60 focus:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send my enquiry"}
                  </button>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20D466] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
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
                    <motion.p
                      key={submitMessage.type + submitMessage.text}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      aria-live="polite"
                      className={`text-sm leading-6 ${
                        submitMessage.type === "success"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {submitMessage.text}
                    </motion.p>
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
        </section>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0B]/95 p-4 backdrop-blur md:hidden">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20D466] text-sm font-semibold text-white"
          >
            <WhatsAppIcon />
            Message us on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
