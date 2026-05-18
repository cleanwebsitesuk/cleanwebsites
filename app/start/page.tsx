"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/message/CIUXDPB67KAAJ1";

const servicePoints = [
  "Custom-built website with a clean, structured layout",
  "Fast loading and mobile-first design",
  "Home, About, Services, and Contact pages",
  "Contact or booking enquiry form",
  "Domain connection, hosting setup and SSL handled",
  "Prepared for launch within 24 hours once content is provided",
];

const nextSteps = [
  "We review your enquiry and understand what your business needs.",
  "We confirm your domain setup and what content is needed.",
  "You provide your text, images and any existing brand assets.",
  "We build, review and prepare your website for launch within 24 hours.",
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
  "The 24-hour build starts once your content has been received",
  "Your domain is purchased separately in your name",
  "One revision is included before final launch",
  "Best suited to straightforward business websites",
  "Complex ecommerce, apps and advanced booking systems are not part of the standard build",
];

const requiredContent = [
  "Business name and contact details",
  "Services, menu, offer or main information",
  "Photos, logo or brand assets if available",
  "Domain details if you already own one",
  "Any example websites or style preferences",
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easeOut },
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
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F6FED] px-6 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#245FDB] focus:outline-none focus:ring-4 focus:ring-[#CFE0FF] ${className}`}
    >
      {children}
    </Link>
  );
}

function BackHomeLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#536176] shadow-sm backdrop-blur-xl transition duration-300 hover:border-[#CBD5E1] hover:bg-white hover:text-[#0B1220]"
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
      Back to homepage
    </Link>
  );
}

function CleanCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white/82 shadow-[0_20px_70px_rgba(11,18,32,0.07)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function SectionCard({
  title,
  copy,
  children,
  className = "",
}: {
  title?: string;
  copy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <CleanCard className={`p-5 sm:p-7 ${className}`}>
      {title && (
        <h2 className="text-[1.45rem] font-semibold leading-tight tracking-[-0.035em] text-[#0B1220] sm:text-[1.8rem]">
          {title}
        </h2>
      )}

      {copy && (
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#536176]">
          {copy}
        </p>
      )}

      <div className={title || copy ? "mt-5 sm:mt-6" : ""}>{children}</div>
    </CleanCard>
  );
}

function BulletListCard({
  title,
  copy,
  items,
  hideFromIndexOnMobile,
  delay = 0,
}: {
  title?: string;
  copy?: string;
  items: string[];
  hideFromIndexOnMobile?: number;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <Reveal delay={delay}>
      <SectionCard title={title} copy={copy}>
        <div className="grid gap-3">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: index * 0.035, ease: easeOut }}
              className={`rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm leading-6 text-[#293548] ${
                hideFromIndexOnMobile !== undefined && index >= hideFromIndexOnMobile
                  ? "hidden sm:flex"
                  : "flex"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#2F6FED]">
                  <CheckIcon />
                </span>
                <span>{item}</span>
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
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
      whileHover={motionEnabled ? { y: -3 } : {}}
      className="group flex items-center justify-between rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4 text-sm font-medium text-[#0B1220] transition duration-300 hover:border-[#CBD5E1] hover:bg-white"
    >
      <span>{label}</span>
      <span className="inline-flex items-center gap-2 text-[#2F6FED]">
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
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  helper?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-[#0B1220]"
      >
        {label}
        {optional && <span className="font-medium text-[#647085]"> optional</span>}
      </label>
      {children}
      {helper && <p className="mt-2 text-xs leading-5 text-[#647085]">{helper}</p>}
    </div>
  );
}

function WebsitePreviewCard() {
  return (
    <CleanCard className="p-3">
      <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-white px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
          <div className="ml-3 h-7 flex-1 rounded-full bg-[#F1F5F9]" />
        </div>

        <div className="p-4">
          <div className="rounded-[22px] bg-[#0B1220] p-5 text-white">
            <div className="flex items-center justify-between gap-4">
              <div className="h-8 w-28 rounded-full bg-white/14" />
              <div className="hidden gap-2 sm:flex">
                <div className="h-2.5 w-10 rounded-full bg-white/18" />
                <div className="h-2.5 w-10 rounded-full bg-white/18" />
                <div className="h-2.5 w-10 rounded-full bg-white/18" />
              </div>
            </div>
            <div className="mt-10 max-w-sm">
              <div className="h-2.5 w-24 rounded-full bg-[#2F6FED]" />
              <div className="mt-4 h-8 w-full rounded-full bg-white" />
              <div className="mt-2 h-8 w-4/5 rounded-full bg-white" />
              <div className="mt-5 space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-white/18" />
                <div className="h-2.5 w-5/6 rounded-full bg-white/18" />
              </div>
              <div className="mt-6 h-10 w-34 rounded-full bg-[#2F6FED]" />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["Services", "About", "Contact"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                <div className="h-8 w-8 rounded-xl bg-[#EAF2FF]" />
                <div className="mt-4 text-[12px] font-bold text-[#0B1220]">{item}</div>
                <div className="mt-3 h-2 w-full rounded-full bg-[#E2E8F0]" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-[#E2E8F0]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CleanCard>
  );
}

function FormInputClass() {
  return "h-12 w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm text-[#0B1220] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2F6FED]/70 focus:bg-white focus:ring-4 focus:ring-[#CFE0FF] disabled:cursor-not-allowed disabled:opacity-70";
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
      "rounded-[30px] border border-[#E2E8F0] bg-white shadow-[0_30px_100px_rgba(11,18,32,0.10)] sm:rounded-[34px]",
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
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-[Manrope,DM_Sans,Inter,system-ui,sans-serif] text-[#0B1220] antialiased selection:bg-[#DCEAFF] selection:text-[#0B1220] md:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-[#EAF2FF] blur-3xl" />
        <div className="absolute bottom-[-16%] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-[#E2E8F0]/70 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent)]" />
      </div>

      <main className="relative">
        <SectionShell className="pb-10 pt-7 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center"
          >
            <div className="max-w-3xl">
              <motion.div variants={fadeUp}>
                <BackHomeLink />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-[13.5ch] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0B1220] sm:text-[clamp(3.5rem,6vw,5rem)]"
              >
                Tell us about your business and get your website started.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-[16px] leading-8 text-[#536176] sm:text-[18px] sm:leading-8"
              >
                We build clean, custom-coded websites for businesses that want to look credible online and make it easy for customers to get in touch.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2.5"
              >
                {[
                  "Built within 24 hours once content is received",
                  "Mobile-first layout",
                  "Domain, hosting and SSL setup handled",
                ].map((item) => (
                  <span key={item} className="inline-flex rounded-full border border-[#E2E8F0] bg-white/82 px-3.5 py-2 text-sm font-medium text-[#536176] shadow-sm backdrop-blur-xl">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="hidden lg:block">
              <WebsitePreviewCard />
            </motion.div>
          </motion.div>
        </SectionShell>

        <SectionShell className="pb-20">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
            <div className="space-y-5 sm:space-y-6">
              <BulletListCard
                title="A professional website built for your business"
                copy="Every website includes the core pages and setup most businesses need to present their services clearly and collect enquiries."
                items={servicePoints}
                hideFromIndexOnMobile={4}
              />

              <BulletListCard
                title="What we need from you"
                copy="The faster these details are ready, the faster the website can be built and prepared for launch."
                items={requiredContent}
                hideFromIndexOnMobile={4}
                delay={0.05}
              />

              <Reveal delay={0.08}>
                <SectionCard title="What happens next">
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "We review your enquiry",
                      "We reply with next steps",
                      "We confirm content required",
                      "We custom build your website",
                    ].map((title, index) => (
                      <motion.div
                        key={title}
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.45, delay: index * 0.05, ease: easeOut }}
                        className="rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                      >
                        <div className="flex gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0B1220] text-sm font-semibold text-white">
                            0{index + 1}
                          </div>
                          <div>
                            <p className="pt-0.5 text-sm font-semibold leading-6 text-[#0B1220]">
                              {title}
                            </p>
                            <p className="pt-1 text-sm leading-6 text-[#536176]">
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
                title="Practical details"
                items={practicalDetails}
                hideFromIndexOnMobile={3}
                delay={0.1}
              />

              <Reveal delay={0.12}>
                <SectionCard title="Recent work">
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
                <div className="border-b border-[#E2E8F0] px-5 py-5 sm:px-8 sm:py-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-[1.7rem] font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-[2rem]">
                        Start your project
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#536176]">
                        Fill out the form below and we’ll review your enquiry and reply with the next steps.
                      </p>
                    </div>
                    <div className="hidden rounded-full bg-[#EAF2FF] px-3 py-1.5 text-xs font-bold text-[#2F6FED] sm:block">
                      24h build
                    </div>
                  </div>
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
                        className={FormInputClass()}
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
                        className={FormInputClass()}
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
                        placeholder="e.g. Smith's Plumbing"
                        className={FormInputClass()}
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
                        className={FormInputClass()}
                      />
                    </InputShell>
                  </div>

                  <InputShell
                    label="Current setup"
                    htmlFor="currentSetup"
                    helper="This helps us understand whether we are starting fresh, connecting a domain, or replacing an existing website."
                  >
                    <div className="relative">
                      <select
                        id="currentSetup"
                        name="currentSetup"
                        required
                        disabled={isSubmitting}
                        defaultValue=""
                        className="h-12 w-full appearance-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm text-[#0B1220] outline-none transition focus:border-[#2F6FED]/70 focus:bg-white focus:ring-4 focus:ring-[#CFE0FF] disabled:cursor-not-allowed disabled:opacity-70 [&>option]:bg-white"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="starting-fresh">Starting fresh (No domain or website yet)</option>
                        <option value="have-domain">I already own a domain name</option>
                        <option value="replacing-website">Replacing an existing website</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#647085]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </InputShell>

                  <InputShell
                    label="What do you need the website to do?"
                    htmlFor="websiteGoal"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        ["enquiries", "Get more enquiries"],
                        ["calls", "Get more calls"],
                        ["bookings", "Collect booking requests"],
                        ["presence", "Look more professional online"],
                      ].map(([value, label]) => (
                        <label key={value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#293548] transition hover:border-[#CBD5E1] hover:bg-white has-[:checked]:border-[#2F6FED]/50 has-[:checked]:bg-[#EAF2FF]">
                          <input
                            type="radio"
                            name="websiteGoal"
                            value={value}
                            required
                            disabled={isSubmitting}
                            className="h-4 w-4 accent-[#2F6FED]"
                          />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </InputShell>

                  <InputShell label="Project details" htmlFor="about">
                    <textarea
                      id="about"
                      name="about"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      placeholder="Briefly describe what your business does, what pages you need, and what you want the website to achieve..."
                      className="w-full rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#0B1220] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2F6FED]/70 focus:bg-white focus:ring-4 focus:ring-[#CFE0FF] disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </InputShell>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#2F6FED] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,111,237,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#245FDB] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Start my website"}
                    </button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20D466] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(32,212,102,0.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
                    >
                      <WhatsAppIcon />
                      Message us on WhatsApp
                    </a>
                  </div>

                  <p className="text-xs leading-5 text-[#647085]">
                    Build time depends on receiving the content needed to complete the website.
                  </p>

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
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-red-200 bg-red-50 text-red-700"
                        }`}
                      >
                        {submitMessage.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </Reveal>
          </div>
        </SectionShell>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] bg-white/92 p-4 backdrop-blur-2xl md:hidden">
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
