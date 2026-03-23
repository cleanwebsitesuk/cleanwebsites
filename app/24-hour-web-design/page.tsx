import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24 Hour Web Design for UK Businesses",
  description:
    "Professional 24 hour web design for UK businesses. Clean, mobile-first websites built fast to generate enquiries, calls and bookings. Website builds from £595.",
  alternates: {
    canonical: "/24-hour-web-design",
  },
  openGraph: {
    title: "24 Hour Web Design for UK Businesses | Clean Websites",
    description:
      "Clean, professional websites for UK businesses built in 24 hours. Mobile-first, fast-loading and designed to generate enquiries.",
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
      "Professional 24 hour web design for UK businesses. Website builds from £595.",
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
  "Custom-built website for your business",
  "Mobile-first design that works properly on phones",
  "Core pages such as Home, About, Services and Contact",
  "Contact or booking enquiry form setup",
  "Fast-loading build with clean structure",
  "Domain connection and launch support",
  "One revision before launch",
];

const goodFor = [
  "Local service businesses",
  "Trades and home services",
  "Barbers and salons",
  "Restaurants and takeaways",
  "Professionals who need a clean brochure-style website",
];

const process = [
  {
    step: "01",
    title: "Send your details",
    text: "Tell us about your business, your services, and the pages you need. Send over your content, images and contact details.",
  },
  {
    step: "02",
    title: "We build your website",
    text: "Once your content is ready, we design and structure the website around your business and enquiry flow.",
  },
  {
    step: "03",
    title: "Review before launch",
    text: "You review the website and one revision is included before it goes live.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Your domain is connected, hosting is configured, SSL is enabled, and the website is prepared for launch.",
  },
];

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
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Section({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {eyebrow ? (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3] sm:text-[12px]">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.35rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
        {title}
      </h2>

      {intro ? (
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
          {intro}
        </p>
      ) : null}

      <div className="mt-8">{children}</div>
    </section>
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
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090A0C]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-[#F5F2EA]">
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
                Start my website
              </Link>
            </div>
          </div>
        </header>

        <section className="relative">
          <div className="mx-auto flex w-full max-w-7xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
            <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A9ABB3] sm:text-[12px]">
                  24 hour web design
                </div>

                <h1 className="mt-5 max-w-[12ch] font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[#F5F2EA]">
                  24 hour web design for UK businesses
                </h1>

                <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#A9ABB3] sm:text-[19px] sm:leading-8">
                  Need a professional website fast? We build clean, mobile-first
                  websites for UK businesses within 24 hours once your content is
                  ready — designed to generate enquiries, calls and bookings.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/start"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition hover:brightness-110"
                  >
                    Start my website
                  </Link>

                  <a
                    href="https://wa.me/message/CIUXDPB67KAAJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    Message us on WhatsApp
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4">
                    <div className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#F5F2EA]">
                      £595
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#7F828A]">
                      website build
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4">
                    <div className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#F5F2EA]">
                      £40
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#7F828A]">
                      monthly hosting
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-[#60A5FA]/40 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(59,130,246,0.08))] px-5 py-4 shadow-[0_0_40px_rgba(59,130,246,0.18)]">
                    <div className="bg-gradient-to-r from-[#C7DDFF] to-[#60A5FA] bg-clip-text text-[1.45rem] font-semibold tracking-[-0.04em] text-transparent">
                      24h
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#9FB7D9]">
                      launch time
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-[#7F828A]">
                  Best suited to straightforward brochure-style business websites
                  where content is ready and the goal is to get online quickly.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111214]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
                <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#A9ABB3]">
                    What’s included
                  </div>

                  <h2 className="mt-4 text-[1.8rem] tracking-[-0.03em] text-[#F5F2EA]">
                    Everything needed to launch fast
                  </h2>

                  <div className="mt-5 grid gap-3">
                    {included.map((item) => (
                      <div
                        key={item}
                        className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-[#F5F2EA]">
                      Need a quote or want to get started?
                    </div>
                    <div className="mt-3 flex flex-col gap-3">
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
              </div>
            </div>
          </div>
        </section>

        <Section
          eyebrow="Why choose this"
          title="A fast website is only useful if it still looks credible"
          intro="This page should convert people who are actively looking for 24 hour web design. So the offer needs to feel fast, clear and trustworthy — not rushed or cheap."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Built for enquiries",
                text: "The structure is designed to help customers understand what you do quickly and contact you without friction.",
              },
              {
                title: "Mobile-first layout",
                text: "Most visitors will view your website on their phone first, so the layout needs to work properly on smaller screens.",
              },
              {
                title: "Simple launch process",
                text: "You send the content, we build the site, you review it, and then it goes live.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#A9ABB3]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Who this is for"
          title="Best for businesses that need to get online quickly"
          intro="This is not aimed at large custom platform builds. It is designed for businesses that need a clean, professional website with a straightforward structure."
        >
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                Good fit for
              </h3>
              <div className="mt-4 grid gap-3">
                {goodFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#F5F2EA]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-[1.2rem] tracking-[-0.03em] text-[#F5F2EA]">
                What you need before build begins
              </h3>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#A9ABB3]">
                <p>
                  To build within 24 hours, your business details and content
                  need to be ready first.
                </p>
                <p>
                  That usually means your business name, services, contact
                  details, page content, and any images you want included are
                  supplied before the build starts.
                </p>
                <p>
                  That keeps the process fast and avoids delays.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Process"
          title="From enquiry to launch"
          intro="The process should feel simple and low friction, especially for people who want something done quickly."
        >
          <div className="grid gap-4 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),rgba(255,255,255,0.04))] text-sm text-[#F5F2EA]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-[19px] tracking-[-0.03em] text-[#F5F2EA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A9ABB3]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Pricing"
          title="Clear pricing"
          intro="Keep the commercial offer simple and obvious."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-[#111214]/90 p-6">
              <div className="text-sm text-[#A9ABB3]">Website build</div>
              <div className="mt-2 text-[3rem] font-semibold tracking-[-0.05em] text-[#F5F2EA]">
                £595
              </div>
              <div className="mt-2 text-sm text-[#A9ABB3]">One-time</div>

              <div className="mt-6 rounded-[18px] border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-3 text-sm leading-6 text-[#CFE0FF]">
                Once your content is ready, your website can be built within 24
                hours.
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm text-[#A9ABB3]">Hosting & support</div>
              <div className="mt-2 text-[2.2rem] font-semibold tracking-[-0.03em] text-[#F5F2EA]">
                £40 / month
              </div>

              <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
                Includes secure hosting, SSL, technical management and launch
                support after the website goes live.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
                Your domain is purchased separately in your name so you keep
                ownership of it.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="FAQ" title="Common questions">
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <summary className="cursor-pointer list-none text-[16px] font-medium leading-7 text-[#F5F2EA] sm:text-[17px]">
                  {faq.q}
                </summary>
                <p className="pt-4 text-sm leading-7 text-[#A9ABB3] sm:text-[15px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-10 text-center sm:px-8 sm:py-12">
            <h2 className="font-serif text-[clamp(2.1rem,6vw,3.6rem)] leading-[0.98] tracking-[-0.045em] text-[#F5F2EA]">
              Need a website fast?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#A9ABB3] sm:text-[16px] sm:leading-8">
              Start your project now and we’ll review the details of your
              business and the website you need.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/start"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.32)] transition hover:brightness-110"
              >
                Start my website
              </Link>

              <a
                href="https://wa.me/message/CIUXDPB67KAAJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-[#F5F2EA] transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Message us on WhatsApp
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
        </section>
      </main>
    </>
  );
}
