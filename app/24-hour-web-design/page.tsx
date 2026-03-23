import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24 Hour Web Design for UK Businesses",
  description:
    "Need a professional website fast? Clean, mobile-first business websites built in 24 hours once your content is ready. Website builds from £595.",
  alternates: {
    canonical: "/24-hour-web-design",
  },
  openGraph: {
    title: "24 Hour Web Design for UK Businesses | Clean Websites",
    description:
      "Professional websites for UK businesses built in 24 hours once content is ready. Clear, credible and built to generate enquiries.",
    url: "https://cleanwebsites.co.uk/24-hour-web-design",
    siteName: "Clean Websites",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "24 hour web design by Clean Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Hour Web Design for UK Businesses | Clean Websites",
    description:
      "Need a professional website fast? Website builds from £595.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can my website be built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once your content is ready, your website can be built and prepared for launch within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the website build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The website build includes a custom website, core pages, mobile optimisation, contact or booking form setup, and launch support.",
      },
    },
    {
      "@type": "Question",
      name: "Do I keep ownership of my domain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your domain is purchased separately in your name so you keep full ownership.",
      },
    },
    {
      "@type": "Question",
      name: "What does the monthly hosting fee include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The monthly hosting fee includes secure hosting, SSL, deployment support, and technical management after launch.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24 Hour Web Design",
  provider: {
    "@type": "ProfessionalService",
    name: "Clean Websites",
    url: "https://cleanwebsites.co.uk",
    email: "hello@cleanwebsites.co.uk",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "24 Hour Web Design",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "595",
    description: "Website build from £595",
  },
};

const included = [
  "Custom website for your business",
  "Core pages such as Home, About, Services and Contact",
  "Mobile-first design for phones and tablets",
  "Contact form or booking enquiry setup",
  "Fast-loading build with clean structure",
  "Domain connection and launch support",
  "One revision before launch",
] as const;

const fitPoints = [
  "Local service businesses",
  "Trades and home services",
  "Barbers, salons and studios",
  "Restaurants and takeaways",
  "Professional and brochure-style businesses",
] as const;

const notFor = [
  "Large custom platforms or web apps",
  "Complex membership or portal websites",
  "Projects without content ready",
  "Businesses needing extensive branding work first",
] as const;

const process = [
  {
    step: "01",
    title: "Send your content",
    text: "You send your business details, services, images and contact information.",
  },
  {
    step: "02",
    title: "We build the site",
    text: "Your website is structured around clarity, trust and getting visitors to contact you.",
  },
  {
    step: "03",
    title: "Review it",
    text: "You review the build and one revision is included before launch.",
  },
  {
    step: "04",
    title: "Go live",
    text: "Your domain is connected, hosting is configured, SSL is enabled, and the site is ready to launch.",
  },
] as const;

const faqs = [
  {
    q: "How quickly can my website be built?",
    a: "Once your content is ready, your website can be built and prepared for launch within 24 hours.",
  },
  {
    q: "What kinds of businesses is this suitable for?",
    a: "This works best for businesses that need a clean, professional website with a straightforward structure and a clear enquiry path.",
  },
  {
    q: "Do I keep ownership of my domain?",
    a: "Yes. Your domain is purchased separately in your name, so you keep full ownership and control of it.",
  },
  {
    q: "What does the monthly hosting fee include?",
    a: "The hosting fee includes secure hosting, SSL, technical management, deployment support and the infrastructure needed to keep your website online.",
  },
  {
    q: "Can I review the website before launch?",
    a: "Yes. One revision is included before launch so you can review the layout and content.",
  },
] as const;

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
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

function SectionShell({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
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
  children: React.ReactNode;
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

function StatCard({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-[18px] border border-[#60A5FA]/40 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(59,130,246,0.08))] px-5 py-4 shadow-[0_0_40px_rgba(59,130,246,0.18)]"
          : "rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4"
      }
    >
      <div
        className={
          highlight
            ? "bg-gradient-to-r from-[#C7DDFF] to-[#60A5FA] bg-clip-text text-[1.35rem] font-semibold tracking-[-0.04em] text-transparent sm:text-[1.45rem]"
            : "text-[1.25rem] font-semibold tracking-[-0.04em] text-[#F5F2EA] sm:text-[1.45rem]"
        }
      >
        {value}
      </div>
      <div
        className={
          highlight
            ? "mt-1 text-[11px] uppercase tracking-[0.16em] text-[#9FB7D9]"
            : "mt-1 text-[11px] uppercase tracking-[0.16em] text-[#7F828A]"
        }
      >
        {label}
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-[20px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
        <span className="text-[16px] font-medium leading-7 text-[#F5F2EA] sm:text-[17px]">
          {q}
        </span>
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#A9ABB3]">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <p className="pt-4 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">{a}</p>
    </details>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/start"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        Start my website
        <ArrowRight />
      </Link>

      <a
        href="https://wa.me/message/CIUXDPB67KAAJ1"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
      >
        Message on WhatsApp
        <ArrowRight />
      </a>
    </div>
  );
}

export default function TwentyFourHourWebDesignPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <main className="min-h-screen bg-[#06070A] text-[#F5F2EA] antialiased selection:bg-[#3B82F6]/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-12%] top-[-8%] h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/10 blur-[120px] sm:h-[30rem] sm:w-[30rem] sm:bg-[#3B82F6]/12 sm:blur-[145px]" />
          <div className="absolute bottom-[-14%] right-[-10%] h-[20rem] w-[20rem] rounded-full bg-[#3B82F6]/8 blur-[110px] sm:h-[28rem] sm:w-[28rem] sm:bg-[#3B82F6]/10 sm:blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090A0C]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.18em] text-[#F5F2EA]"
            >
              CLEAN WEBSITES
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/message/CIUXDPB67KAAJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05] sm:inline-flex"
              >
                WhatsApp
              </a>

              <Link
                href="/start"
                className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition hover:brightness-110"
              >
                Start
              </Link>
            </div>
          </div>
        </header>

        <section className="relative">
          <div className="mx-auto flex w-full max-w-7xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
            <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="max-w-3xl">
                <SectionEyebrow>24 hour web design for UK businesses</SectionEyebrow>

                <h1 className="mt-5 max-w-[11ch] font-serif text-[clamp(2.7rem,8vw,5.2rem)] leading-[0.95] tracking-[-0.05em] text-[#F5F2EA]">
                  Need a website fast that still looks credible?
                </h1>

                <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#A9ABB3] sm:text-[19px] sm:leading-8">
                  We build clean, professional websites for UK businesses within
                  24 hours once your content is ready — designed to help you get
                  more enquiries, calls, bookings and messages.
                </p>

                <div className="mt-8">
                  <CtaButtons />
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatCard value="£595" label="website build" />
                  <StatCard value="£40" label="monthly hosting" />
                  <StatCard value="24h" label="launch time" highlight />
                </div>

                <div className="mt-6 grid gap-2 text-sm leading-6 text-[#A9ABB3]">
                  <p>• Built for businesses that need leads, not just a prettier website</p>
                  <p>• Best for straightforward brochure-style sites with content ready</p>
                  <p>• Domain stays in your name</p>
                </div>
              </div>

              <GlassCard className="p-5">
                <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,14,17,0.9),rgba(13,14,17,0.75))] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                      Fast launch offer
                    </div>
                    <div className="rounded-full border border-[#3B82F6]/18 bg-[#3B82F6]/10 px-2.5 py-0.5 text-[11px] text-[#A9C7FF]">
                      High intent page
                    </div>
                  </div>

                  <h2 className="mt-4 text-[1.9rem] tracking-[-0.03em] text-[#F5F2EA]">
                    What happens when someone lands here
                  </h2>

                  <div className="mt-5 grid gap-3">
                    {[
                      "They understand the offer quickly",
                      "They see the pricing without friction",
                      "They know whether they are a good fit",
                      "They have a clear next step to message or enquire",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA]"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-[#F5F2EA]">
                      Ready to get started?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#A9ABB3]">
                      Send your details and we’ll tell you if your project is a
                      good fit for a 24 hour build.
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                      <Link
                        href="/start"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white"
                      >
                        Start my website
                      </Link>
                      <a
                        href="mailto:hello@cleanwebsites.co.uk"
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#F5F2EA]"
                      >
                        hello@cleanwebsites.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <SectionShell>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Built for leads",
                text: "The page structure is designed to help people understand what you do fast and get in touch without friction.",
              },
              {
                title: "Built for mobile",
                text: "Most visitors will land on their phone first, so the layout needs to feel immediate, clean and easy to act on.",
              },
              {
                title: "Built to launch quickly",
                text: "This is for businesses that want a strong online presence without waiting weeks for a website project to drag on.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <h2 className="text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#A9ABB3]">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <SectionEyebrow>What is included</SectionEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                Everything needed to get online properly
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                The offer is simple on purpose: get your business a clean,
                professional website online quickly, without unnecessary delay.
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/8 bg-white/[0.025] px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-[0.45rem] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                      <CheckIcon />
                    </span>
                    <p className="text-[14px] leading-6 text-[#F5F2EA] sm:text-[15px] sm:leading-6">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-5 lg:grid-cols-2">
            <GlassCard className="p-6">
              <div className="text-sm uppercase tracking-[0.16em] text-[#7F828A]">
                Good fit for
              </div>
              <h2 className="mt-3 text-[1.7rem] tracking-[-0.03em] text-[#F5F2EA]">
                Businesses that need a strong online presence quickly
              </h2>

              <div className="mt-5 grid gap-3">
                {fitPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-sm uppercase tracking-[0.16em] text-[#7F828A]">
                Not ideal for
              </div>
              <h2 className="mt-3 text-[1.7rem] tracking-[-0.03em] text-[#F5F2EA]">
                Projects that need a much bigger build
              </h2>

              <div className="mt-5 grid gap-3">
                {notFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#A9ABB3]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </SectionShell>

        <SectionShell>
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionEyebrow>Before build starts</SectionEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                  What you need ready for a 24 hour build
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                  Speed depends on content being ready. The more prepared your
                  business details are, the faster the site can be built and launched.
                </p>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {[
                  "Business name and contact details",
                  "Your services or menu",
                  "Text for key pages",
                  "Images you want included",
                  "Preferred call to action",
                  "Any domain details if already purchased",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-white/8 bg-white/[0.025] px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                      <p className="text-[14px] leading-6 text-[#F5F2EA] sm:text-[15px] sm:leading-6">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </SectionShell>

        <SectionShell id="process">
          <div className="max-w-2xl">
            <SectionEyebrow>Process</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
              From enquiry to launch
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
              The process is intentionally simple so the decision feels easy and the build moves fast.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            <div className="grid gap-4 lg:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-[20px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),rgba(255,255,255,0.04))] text-sm text-[#F5F2EA]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-[19px] tracking-[-0.03em] text-[#F5F2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="pricing">
          <div className="max-w-4xl">
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h2 className="mt-4 max-w-none font-serif text-[clamp(2rem,6vw,3.2rem)] leading-[1] tracking-[-0.045em] text-[#F5F2EA]">
              Clear pricing. No vague offer.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
              This page should make the commercial decision feel straightforward.
            </p>
          </div>

          <GlassCard className="mt-8 overflow-hidden bg-[#0F1115] border-white/12 shadow-[0_10px_40px_rgba(0,0,0,0.35)] [&>div:first-child]:hidden [&>div:nth-child(2)]:hidden">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-6 lg:p-8">
                <div className="text-sm text-[#A9ABB3]">Website build</div>
                <div className="mt-2 text-[3.1rem] font-semibold tracking-[-0.05em] text-[#F5F2EA]">
                  £595
                </div>
                <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

                <div className="mt-6 grid gap-0 sm:grid-cols-2 sm:gap-x-6">
                  {[
                    "Home page",
                    "About page",
                    "Services page",
                    "Contact page",
                    "Contact form",
                    "Mobile optimisation",
                    "One revision",
                    "Launch support",
                  ].map((item, index, arr) => (
                    <div
                      key={item}
                      className={`flex items-start gap-3 py-3 ${
                        index !== arr.length - 1 ? "border-b border-white/8" : ""
                      } ${index < arr.length - 2 ? "sm:border-b sm:border-white/8" : ""}`}
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/12 text-[#8BB5FF]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm leading-6 text-[#F5F2EA]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[18px] border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                  Once your content is ready, your website can be built within 24 hours.
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.02] p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="text-sm text-[#A9ABB3]">Hosting &amp; support</div>
                <div className="mt-2 text-[2.2rem] font-semibold tracking-[-0.03em] text-[#F5F2EA]">
                  £40 / month
                </div>

                <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
                  Includes secure hosting, SSL, technical management and launch support after your website goes live.
                </p>

                <div className="mt-5 divide-y divide-white/8">
                  {[
                    {
                      title: "Secure hosting",
                      text: "Reliable hosting designed for speed, stability and performance.",
                    },
                    {
                      title: "SSL included",
                      text: "Your site can run securely on HTTPS.",
                    },
                    {
                      title: "Deployment support",
                      text: "The technical side of going live is handled properly.",
                    },
                    {
                      title: "Technical management",
                      text: "You do not need to deal with setup or server-side issues yourself.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="py-4 first:pt-0">
                      <div className="text-sm text-[#F5F2EA]">{item.title}</div>
                      <p className="mt-1 text-sm leading-6 text-[#7F828A]">{item.text}</p>
                    </div>
                  ))}

                  <div className="py-4">
                    <p className="text-sm leading-7 text-[#A9ABB3]">
                      Your domain is purchased separately in your name, so you keep full ownership of it.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/start"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,130,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Start my website
                  </Link>
                  <a
                    href="mailto:hello@cleanwebsites.co.uk"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    Email us instead
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </SectionShell>

        <SectionShell id="faq">
          <div className="max-w-3xl">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
              Common questions
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </SectionShell>

        <SectionShell className="pb-16 sm:pb-20 lg:pb-24">
          <GlassCard className="overflow-hidden px-5 py-10 text-center sm:px-8 sm:py-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-[#3B82F6]/14 blur-[100px] sm:h-60 sm:w-60 sm:bg-[#3B82F6]/18 sm:blur-[110px]" />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-serif text-[clamp(2.1rem,6vw,3.6rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
                Need a website fast?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
                Send your business details and we’ll review whether your project is a good fit for a 24 hour website build.
              </p>

              <p className="mt-4 text-[14px] font-medium leading-6 text-[#A7ADB8] sm:text-[15px] sm:leading-7">
                <span className="whitespace-nowrap">Website build £595</span>
                <span className="mx-2 text-[#7F8692]">•</span>
                <span className="whitespace-nowrap">£40/month hosting</span>
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/start"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  Start my website
                  <ArrowRight />
                </Link>

                <a
                  href="https://wa.me/message/CIUXDPB67KAAJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
                >
                  Message on WhatsApp
                  <ArrowRight />
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#7F828A]">
                Or email{" "}
                <a
                  href="mailto:hello@cleanwebsites.co.uk"
                  className="text-[#F5F2EA] underline underline-offset-4"
                >
                  hello@cleanwebsites.co.uk
                </a>
              </p>
            </div>
          </GlassCard>
        </SectionShell>
      </main>
    </>
  );
}
