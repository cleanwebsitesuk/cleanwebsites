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

// --- Constants & Data ---

const NAV_ITEMS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

const FIT_POINTS = [
  "Custom-coded for speed (No slow templates)",
  "100% UK Based, Managed & Infrastructure",
  "Fixed price with zero hidden 'Agency Tax'",
  "Suitable for local and professional UK services",
] as const;

const COMPARISON_DATA = [
  { label: "Upfront Build Fee", agency: "£1,500 - £3,500+", us: "£99", highlight: true },
  { label: "Launch Timeline", agency: "4 - 8 Weeks", us: "24 Hours", highlight: true },
  { label: "Build Method", agency: "Bloated Templates", us: "Lean, Custom Code", highlight: false },
  { label: "Location", agency: "Often Offshore", us: "100% UK Based", highlight: false },
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
      "Sub-second load times",
      "Designed for UK standards",
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
      "Built on UK infrastructure",
      "Designed for everyday commuter use",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Send your content",
    description:
      "Provide the text and business information you want included. We cut out the long meetings.",
  },
  {
    step: "02",
    title: "Your website is built",
    description:
      "We use our proprietary high-speed code stack to build your site from scratch in 24 hours.",
  },
  {
    step: "03",
    title: "Review the build",
    description:
      "One revision is included so you can review and refine the layout before we go live.",
  },
  {
    step: "04",
    title: "UK Launch",
    description:
      "Your domain is connected, SSL is enabled, and your site is launched on UK-based servers.",
  },
] as const;

const INCLUDED_ITEMS = [
  "A custom 4-page website (Home, About, Services, Contact)",
  "Clean, custom code (No bloated builders)",
  "Mobile-optimised layout for phones and tablets",
  "Contact form/booking enquiry setup",
  "UK-Central server infrastructure",
  "Secure SSL and technical management",
  "Lightning-fast Vercel deployment",
  "One revision before launch",
] as const;

const BUILD_INCLUDES = [
  "Home page",
  "About page",
  "Services page",
  "Contact or booking page",
  "Contact form",
  "Mobile optimisation",
  "One revision",
  "Launch support",
] as const;

const HOSTING_INCLUDES = [
  {
    title: "Secure UK hosting",
    text: "Your website runs on reliable London-based infrastructure designed for maximum local speed.",
  },
  {
    title: "SSL certificate included",
    text: "Your website includes UK-standard SSL security, enabling HTTPS and the secure padlock.",
  },
  {
    title: "Technical management",
    text: "We manage the technical side so you don't have to deal with server setups or security issues.",
  },
] as const;

const FAQS = [
  {
    question: "Why is it only £99?",
    answer:
      "Most UK agencies charge for fancy offices and sales teams. We don't. We've stripped the 'Agency Tax' by using an efficient, custom-coded workflow that allows us to build in 24 hours what takes others weeks. You pay for the code, not our overhead.",
  },
  {
    question: "Is this a template (Wix/Squarespace)?",
    answer:
      "No. We don't use template-mills. Every site is custom-coded using modern tech (Next.js), making it faster, more secure, and professionally built to UK standards.",
  },
  {
    question: "Do I keep ownership of my domain?",
    answer:
      "Yes. Your domain stays in your name. We manage the technical hosting and infrastructure to keep you online, but you retain full ownership.",
  },
  {
    question: "What does the monthly fee cover?",
    answer:
      "The fee covers secure UK-based hosting, SSL management, technical support, and the infrastructure needed to ensure your site stays lightning-fast and secure.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. All sites are built mobile-first to ensure they look and work perfectly on smartphones as well as desktops.",
  },
] as const;

const OFFER_STATS = [
  { label: "Build fee", value: "£99" },
  { label: "Monthly hosting", value: "£0" },
  { label: "Launch time", value: "24h" },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

// --- Hooks ---

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
    const previous = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [locked]);
}

// --- UI Components ---

function SectionShell({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#9DA2AE] sm:text-[12px]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
      {children}
    </div>
  );
}

function GlassCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-md ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const lineBase = "absolute left-0 h-px w-5 rounded-full bg-[#F5F2EA] transition-all duration-300";
  return (
    <div className="relative h-5 w-5" aria-hidden="true">
      <span className={`${lineBase} top-1 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
      <span className={`${lineBase} top-2.5 ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`${lineBase} top-4 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
    </div>
  );
}

function Reveal({ children, delay = 0, amount = 0.18, className }: { children: ReactNode; delay?: number; amount?: number; className?: string }) {
  const reduceMotion = useReducedMotion() ?? false;
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount }} transition={{ duration: 0.68, delay, ease: easeOut }}>
      {children}
    </motion.div>
  );
}

function MagneticLink({ href, className, children, disabled = false }: { href: string; className: string; children: ReactNode; disabled?: boolean }) {
  const reduceMotion = useReducedMotion() ?? false;
  const [style, setStyle] = useState({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setStyle({ x, y });
  };
  return (
    <motion.div animate={disabled ? { x: 0, y: 0 } : { x: style.x, y: style.y }} transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.5 }}>
      <Link href={href} className={className} onMouseMove={handleMove} onMouseLeave={() => setStyle({ x: 0, y: 0 })}>
        {children}
      </Link>
    </motion.div>
  );
}

// --- Business Components ---

function HeroMetrics() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {OFFER_STATS.map((item) => {
        // Highlighting Build Fee and Launch Time for maximum "Bite"
        const highlighted = item.value === "£99" || item.value === "24h";
        return (
          <div key={item.label} className={highlighted 
            ? "rounded-[18px] border border-[#3B82F6]/40 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(59,130,246,0.08))] px-5 py-4 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
            : "rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4"
          }>
            <div className={highlighted 
              ? "bg-gradient-to-r from-[#C7DDFF] to-[#60A5FA] bg-clip-text text-[1.35rem] font-semibold tracking-[-0.04em] text-transparent sm:text-[1.45rem]"
              : "text-[1.25rem] font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-[1.45rem]"
            }>
              {item.value}{item.label === "Monthly hosting" && <span className="text-[0.7rem] ml-1 opacity-60">/12m</span>}
            </div>
            <div className={highlighted ? "mt-1 text-[11px] uppercase tracking-[0.16em] text-[#9FB7D9]" : "mt-1 text-[11px] uppercase tracking-[0.16em] text-[#7F828A]"}>
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="mt-10 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02]">
      <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.04] text-center text-[10px] uppercase tracking-widest text-[#7F828A]">
        <div className="py-3 border-r border-white/10">Traditional Agencies</div>
        <div className="py-3 text-[#60A5FA] font-bold">Clean Websites</div>
      </div>
      {COMPARISON_DATA.map((item) => (
        <div key={item.label} className="grid grid-cols-2 border-b border-white/10 last:border-0">
          <div className="p-4 border-r border-white/10">
            <div className="text-[10px] uppercase text-[#7F828A] mb-1">{item.label}</div>
            <div className="text-xs line-through opacity-40">{item.agency}</div>
          </div>
          <div className={`p-4 ${item.highlight ? 'bg-[#3B82F6]/5' : ''}`}>
            <div className="text-[10px] uppercase text-[#7F828A] mb-1 opacity-0">{item.label}</div>
            <div className={`text-xs font-semibold ${item.highlight ? 'text-[#F5F2EA]' : 'text-[#A9ABB3]'}`}>{item.us}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BeforeAfterSlider() {
  return (
    <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#0C0D10] p-1">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
        <Image src="/portfolio/fareguard.png" alt="High Performance Build" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm text-center px-6">
           <SectionEyebrow>The Transformation</SectionEyebrow>
           <h3 className="mt-4 text-xl font-serif">We turn outdated, slow sites into lean business assets.</h3>
           <p className="mt-2 text-sm text-[#A9ABB3]">Custom-coded on Vercel for sub-second speeds.</p>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-[15px] text-[#A9ABB3] transition duration-300 hover:bg-white/[0.04] hover:text-[#F5F2EA]">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function DesktopActions({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Link href="#portfolio" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F5F2EA] transition duration-300 hover:bg-white/[0.06]">
        Portfolio
      </Link>
      <MagneticLink href="/start" disabled={isMobile} className="group inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition duration-300 hover:brightness-110">
        Start £99 Website
      </MagneticLink>
    </div>
  );
}

function MobileMenu({ open, onClose, reduceMotion }: { open: boolean; onClose: () => void; reduceMotion: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-x-0 bottom-0 top-[78px] z-40 border-t border-white/10 bg-[#08090C]/96 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="grid gap-3">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={onClose} className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-[17px] text-[#F5F2EA]">
                  {item.label} <ArrowRight />
                </a>
              ))}
            </div>
            <Link href="/start" onClick={onClose} className="mt-auto block w-full bg-[#3B82F6] p-4 text-center rounded-full font-bold shadow-[0_12px_30px_rgba(59,130,246,0.28)]">
              Start £99 Website
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroHeader({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  useLockBodyScroll(mobileOpen);
  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#090A0C]/72 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
          <Link href="/" className="text-xl font-bold tracking-tighter">CLEAN WEBSITES</Link>
          <DesktopNav />
          <DesktopActions isMobile={isMobile} />
          <button className="md:hidden h-11 w-11 flex items-center justify-center rounded-full border border-white/10" onClick={() => setMobileOpen(!mobileOpen)}>
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} reduceMotion={false} />
      <HeroSection isMobile={isMobile} reduceMotion={false} />
    </>
  );
}

function HeroSection({ isMobile, reduceMotion }: { isMobile: boolean; reduceMotion: boolean }) {
  const motionEnabled = !reduceMotion && !isMobile;
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-7xl items-center px-5 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-8 lg:min-h-[calc(100svh-78px)] lg:px-8 lg:pb-14 lg:pt-10">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(440px,1fr)] lg:items-start lg:gap-10">
          <div className="mx-auto flex w-full max-w-[680px] flex-col justify-center lg:mx-0 lg:max-w-[680px]">
            <div className="w-fit">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3]">
                <motion.span animate={motionEnabled ? { scale: [1, 1.22, 1] } : {}} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                100% UK Based & Custom Coded
              </div>
            </div>
            <h1 className="mt-4 max-w-[14ch] font-serif text-[2.55rem] leading-[1] tracking-[-0.05em] text-[#F5F2EA] sm:max-w-[11.5ch] sm:text-[clamp(3.4rem,6.2vw,4.5rem)]">
              A professional UK website — built within <span className="bg-gradient-to-r from-[#A5C8FF] to-[#60A5FA] bg-clip-text font-medium text-transparent">24 hours</span>
            </h1>
            <p className="mt-5 hidden max-w-xl text-[15px] leading-8 text-[#A9ABB3] sm:block">
              We've stripped the agency overhead. Get a custom-coded, high-performance digital presence built to UK standards without the £2,000 price tag or the 2-month wait.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
              <MagneticLink href="/start" disabled={isMobile} className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:brightness-110 sm:w-auto">
                Start £99 Build <ArrowRight />
              </MagneticLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <GlassCard className="p-5">
              <div className="flex flex-col rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,17,0.9),rgba(13,14,17,0.75))] p-5">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-widest text-[#A9ABB3]">
                  <span>Launch Special Offer</span>
                  <span className="text-[#60A5FA]">No Templates</span>
                </div>
                <HeroMetrics />
                <div className="mt-5 h-px w-full bg-white/8" />
                <ComparisonTable />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: (typeof PORTFOLIO_ITEMS)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <a href={item.href} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-[24px] border border-white/10 bg-[#111214]/90 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 md:hover:-translate-y-1">
        <div className="relative overflow-hidden border-b border-white/10 bg-[#0C0D10] p-4">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-widest text-[#A9ABB3]">
              <span>{item.kicker}</span>
              <span className="text-[#F5F2EA] font-medium">{item.cta}</span>
            </div>
            <div className="mt-4 aspect-[16/10] overflow-hidden rounded-[16px] border border-white/10 relative">
              <Image src={item.image} alt={item.title} fill className="object-cover object-top transition duration-700 md:group-hover:scale-[1.03]" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="text-[10px] uppercase tracking-widest text-[#7F828A]">{item.domain}</div>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-[#F5F2EA]">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">{item.description}</p>
          <div className="mt-5 grid gap-2">
            {item.points.map(p => (
              <div key={p} className="flex items-start gap-3 text-xs text-[#E5E7EC]">
                <span className="mt-1 h-4 w-4 flex items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#60A5FA]"><CheckIcon /></span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function PricingList({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-6">
      {items.map((item, index) => (
        <div key={item} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
          <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#60A5FA]"><CheckIcon /></span>
          <span className="text-sm text-[#F5F2EA]">{item}</span>
        </div>
      ))}
    </div>
  );
}

function PricingAccordion({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03] mt-3">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-5 py-4 text-sm font-medium">
        {title} <span>{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence>{open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 p-5">
          {children}
        </motion.div>
      )}</AnimatePresence>
    </div>
  );
}

function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-flex ml-2">
      <button onClick={() => setOpen(!open)} className="h-5 w-5 flex items-center justify-center rounded-full border border-white/20 text-[10px] opacity-40 hover:opacity-100 transition">i</button>
      {open && <div className="absolute right-0 top-7 z-30 w-64 rounded-xl bg-[#111214] p-3 text-xs text-[#A9ABB3] border border-white/10 shadow-2xl">{text}</div>}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between text-left gap-4">
        <span className="font-medium text-[#F5F2EA]">{question}</span>
        <span className="opacity-40">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pt-4 text-sm leading-7 text-[#A9ABB3]">{answer}</p>}
    </div>
  );
}

// --- Main Page ---

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#06070A] pb-24 text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 md:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-[#3B82F6]/10 blur-[145px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      </div>

      <HeroHeader scrolled={scrolled} />

      <main className="relative">
        <Reveal>
          <SectionShell>
            <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <div className="max-w-xl">
                <SectionEyebrow>Engineered in the UK</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-tight">Custom UK Code. Zero Agency Bloat.</h2>
                <p className="mt-4 text-[16px] leading-8 text-[#A9ABB3]">
                  Most agencies charge for sales teams and project managers. We don't. We focus purely on engineering lightning-fast websites that help UK businesses look credible instantly.
                </p>
                <BeforeAfterSlider />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:mt-24">
                {FIT_POINTS.map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.02] p-4 flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                    <p className="text-sm text-[#E5E7EC]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="portfolio">
            <SectionEyebrow>Portfolio</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl">Recent UK builds</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </SectionShell>
        </Reveal>

        <Reveal>
          <SectionShell id="pricing">
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl">Total Value. Fixed Price.</h2>
            <div className="mt-8">
              {!isMobile ? (
                <GlassCard className="bg-[#0F1115]">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8">
                      <div className="text-xs uppercase tracking-widest text-[#7F828A]">Website Build</div>
                      <div className="mt-3 text-5xl font-bold">£99</div>
                      <div className="mt-2 text-sm text-[#60A5FA]">Founder's Launch Rate</div>
                      <div className="mt-8"><PricingList items={BUILD_INCLUDES} /></div>
                    </div>
                    <div className="bg-white/[0.02] p-8 lg:border-l border-white/10">
                      <div className="text-xs uppercase tracking-widest text-[#7F828A]">Hosting & Management</div>
                      <div className="mt-3 text-3xl font-bold">£0 <span className="text-sm font-normal opacity-40">/mo for 12 months</span></div>
                      <p className="mt-4 text-sm text-[#A9ABB3]">We handle the security, technical management, and hosting on UK servers so you stay online effortlessly.</p>
                      <div className="mt-6 divide-y divide-white/5">
                        {HOSTING_INCLUDES.map(i => (
                          <div key={i.title} className="py-4 first:pt-0 flex justify-between">
                            <span className="text-sm">{i.title}</span>
                            <InfoTooltip text={i.text} />
                          </div>
                        ))}
                      </div>
                      <MagneticLink href="/start" className="mt-8 block bg-[#3B82F6] p-4 text-center rounded-full font-bold shadow-2xl transition hover:brightness-110">Start £99 Website Build</MagneticLink>
                    </div>
                  </div>
                </GlassCard>
              ) : (
                <div className="space-y-4">
                  <GlassCard className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div><div className="text-3xl font-bold">£99</div><div className="text-[10px] uppercase text-[#60A5FA]">Build Fee</div></div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#F5F2EA]">24h</div>
                        <div className="text-[10px] uppercase text-[#7F828A]">Launch Time</div>
                      </div>
                    </div>
                    <Link href="/start" className="block w-full bg-[#3B82F6] p-4 text-center rounded-full font-bold">Start My Website</Link>
                  </GlassCard>
                  <PricingAccordion title="What's included?" defaultOpen>
                    <PricingList items={BUILD_INCLUDES} />
                  </PricingAccordion>
                  <PricingAccordion title="Hosting & Management">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold">£0 /month</div>
                      <p className="text-sm text-[#A9ABB3]">Included for the first year. Covers UK servers, SSL, and all technical management.</p>
                    </div>
                  </PricingAccordion>
                </div>
              )}
            </div>
          </SectionShell>
        </Reveal>

        <SectionShell id="process">
            <SectionEyebrow>The Process</SectionEyebrow>
            <h2 className="mt-4 font-serif text-3xl">Simple 24-hour launch</h2>
            <div className="grid gap-4 mt-8 lg:grid-cols-4">
              {PROCESS_STEPS.map(s => (
                <div key={s.step} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#3B82F6]/20 text-[#F5F2EA] text-sm">{s.step}</div>
                  <h3 className="mt-4 font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#A9ABB3]">{s.description}</p>
                </div>
              ))}
            </div>
        </SectionShell>

        <SectionShell id="faq">
            <SectionEyebrow>Transparency</SectionEyebrow>
            <h2 className="mt-4 font-serif text-3xl">Common Questions</h2>
            <div className="mt-10 grid gap-4">
              {FAQS.map(f => <FAQItem key={f.question} {...f} />)}
            </div>
        </SectionShell>

        <footer className="mx-auto w-full max-w-7xl border-t border-white/10 px-5 py-12">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-lg font-bold">CLEAN WEBSITES</div>
              <p className="mt-3 text-sm text-[#A9ABB3]">Professional, custom-coded websites for UK businesses. Built for speed, reliability, and creditability.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3]">
              <div className="text-xs uppercase tracking-widest text-[#7F828A] mb-2">Navigate</div>
              {NAV_ITEMS.map(i => <Link key={i.href} href={i.href}>{i.label}</Link>)}
            </div>
            <div className="flex flex-col gap-3 text-sm text-[#A9ABB3]">
              <div className="text-xs uppercase tracking-widest text-[#7F828A] mb-2">Contact</div>
              <a href="mailto:hello@cleanwebsites.co.uk">hello@cleanwebsites.co.uk</a>
              <a href="https://wa.me/message/CIUXDPB67KAAJ1" target="_blank" rel="noreferrer">WhatsApp Support</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-[#7F828A]">
            <div>© {new Date().getFullYear()} Clean Websites. 100% UK Managed.</div>
            <div className="flex gap-6"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
