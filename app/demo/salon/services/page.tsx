"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const serviceCategories = [
  {
    title: "Cutting & Styling",
    intro:
      "Polished cuts and styling services designed to suit your features, routine, and personal style.",
    services: [
      {
        name: "Haircut & Styling",
        price: "£35",
        text: "Precision cutting with a polished finish tailored to your look.",
      },
      {
        name: "Blow Dry",
        price: "£25",
        text: "Smooth, glossy styling for everyday confidence or special occasions.",
      },
      {
        name: "Restyle Cut",
        price: "£48",
        text: "A more transformative appointment for a fresh new shape and finish.",
      },
      {
        name: "Occasion Styling",
        price: "£45",
        text: "Elegant styling for events, evenings, and special moments.",
      },
    ],
  },
  {
    title: "Colour Services",
    intro:
      "Modern colour work using professional products for rich, dimensional, beautifully blended results.",
    services: [
      {
        name: "Full Colour",
        price: "£70",
        text: "Even, glossy all-over colour with a professional salon finish.",
      },
      {
        name: "Balayage Colour",
        price: "£95",
        text: "Soft, luminous dimension for a natural and effortless look.",
      },
      {
        name: "Root Refresh",
        price: "£48",
        text: "Maintain your colour beautifully between larger appointments.",
      },
      {
        name: "Toner & Gloss",
        price: "£32",
        text: "Refine tone, boost shine, and refresh the overall finish.",
      },
    ],
  },
  {
    title: "Treatments & Care",
    intro:
      "Hair health-focused services that restore softness, shine, and manageability.",
    services: [
      {
        name: "Deep Conditioning Treatment",
        price: "£20",
        text: "Nourishing care to support hydration, softness, and shine.",
      },
      {
        name: "Bond Repair Treatment",
        price: "£28",
        text: "Strengthening treatment designed to support damaged or coloured hair.",
      },
      {
        name: "Scalp Care Treatment",
        price: "£22",
        text: "A refreshing service focused on scalp comfort and healthy-looking hair.",
      },
      {
        name: "Luxury Finish Add-On",
        price: "£15",
        text: "A finishing boost for extra smoothness, shine, and polished styling.",
      },
    ],
  },
];

const highlights = [
  "Tailored consultations before every appointment",
  "Professional salon-quality products",
  "Modern cuts, colour, and polished finishing",
  "A calm boutique salon in central Leeds",
];

export default function SalonServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 420;
      setShowBackButton(window.scrollY < triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes menuIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmerGlow {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(196, 92, 171, 0.14);
          }
          50% {
            box-shadow: 0 10px 30px rgba(196, 92, 171, 0.2);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.8s ease-out 0.12s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.24s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.8s ease-out 0.36s both;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float-soft {
          animation: floatSoft 6s ease-in-out infinite;
        }

        .animate-glow-soft {
          animation: shimmerGlow 3.6s ease-in-out infinite;
        }
      `}</style>

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff2fb_0%,#fdf6fc_35%,#f8eff8_100%)] text-[#332633]">
        <div className="fixed inset-x-0 top-0 z-[90] border-b border-[#efcfe8] bg-[linear-gradient(90deg,#a4377f_0%,#7e3fb2_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_rgba(126,63,178,0.22)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-white"
          >
            Clean Websites
          </Link>
        </div>

        <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-[#ead9e6] bg-[rgba(255,248,252,0.96)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/salon"
              className="text-xl font-semibold uppercase tracking-[0.18em] text-[#4a2344]"
            >
              Luna Studio
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/demo/salon"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                Home
              </Link>
              <Link
                href="/demo/salon/about"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                About
              </Link>
              <Link
                href="/demo/salon/services"
                className="text-sm font-medium text-[#b23592]"
              >
                Services
              </Link>
              <Link
                href="/demo/salon/contact"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
              >
                Contact
              </Link>
              <Link
                href="/demo/salon/contact"
                className="rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(161,70,160,0.35)]"
              >
                Book Now
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-[#e8d7e4] bg-white/90 p-3 text-[#4a2344] shadow-sm transition hover:bg-white md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </header>

        <Link
          href="/"
          className={`animate-glow-soft fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-[#efc7e4] bg-white/95 px-4 py-2 text-sm font-semibold text-[#8d2d78] shadow-[0_10px_24px_rgba(141,45,120,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
          ${
            menuOpen || !showBackButton
              ? "pointer-events-none opacity-0 -translate-y-3 md:pointer-events-auto"
              : "translate-y-0 opacity-100"
          }`}
        >
          ← Back to Clean Websites
        </Link>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-[rgba(44,18,45,0.5)] transition-opacity duration-200 md:hidden"
            />
            <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(83,31,74,0.96)_0%,rgba(53,24,59,0.96)_100%)] p-4 shadow-[0_22px_60px_rgba(39,16,44,0.42)] transition-all duration-200 ease-out animate-[menuIn_0.2s_ease-out] md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/demo/salon"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/demo/salon/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="/demo/salon/services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-base font-medium text-white"
                >
                  Services
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Contact
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(161,70,160,0.26)] transition hover:scale-[1.01]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[180px] md:pt-[130px]">
          <div
            className="absolute inset-0 animate-fade-in bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,253,0.92)_0%,rgba(255,246,252,0.84)_35%,rgba(250,242,250,0.76)_100%)] md:bg-[linear-gradient(90deg,rgba(255,248,253,0.9)_0%,rgba(255,245,252,0.74)_40%,rgba(143,72,215,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,213,241,0.42),transparent_38%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f0a7df]/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#b695ff]/12 blur-3xl" />

          <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[#ead6e5] bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#95518c] shadow-[0_8px_20px_rgba(121,60,112,0.08)] backdrop-blur-sm">
                Salon Services
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#34162f] sm:text-5xl lg:text-6xl">
                Modern services tailored to help you look and feel your best.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#5e495d] sm:text-lg">
                From precision cuts and polished styling to dimensional colour
                and nourishing treatments, every service at Luna Studio is
                delivered with care, detail, and a boutique salon experience.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/salon/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/demo/salon/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#e4d6e1] bg-white/95 px-6 py-3.5 text-sm font-medium text-[#432640] shadow-[0_8px_24px_rgba(86,47,88,0.05)] transition hover:bg-white hover:shadow-md"
                >
                  About the Salon
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-lg grid-cols-2 gap-4 rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(96,51,97,0.12)] backdrop-blur-md sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/70 px-4 py-4">
                    <p className="text-sm font-medium leading-6 text-[#4e344d]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {serviceCategories.map((category, index) => (
          <section
            key={category.title}
            className={
              index % 2 === 1
                ? "bg-[linear-gradient(180deg,#fff3fb_0%,#f8ecf9_100%)]"
                : ""
            }
          >
            <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
              <div className="max-w-2xl">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                  {category.title}
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                  {category.title === "Cutting & Styling" &&
                    "Refined cuts and polished finishes for every occasion"}
                  {category.title === "Colour Services" &&
                    "Dimensional colour work with a rich, luminous finish"}
                  {category.title === "Treatments & Care" &&
                    "Healthy-looking hair starts with thoughtful care"}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#695766]">
                  {category.intro}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {category.services.map((service, serviceIndex) => (
                  <article
                    key={service.name}
                    className={`group rounded-[28px] border border-[#efd9ea] bg-white/90 p-6 shadow-[0_16px_40px_rgba(140,63,124,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(140,63,124,0.14)] ${
                      serviceIndex % 2 === 0
                        ? "animate-fade-up"
                        : "animate-fade-up-delay-1"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-[#3e1f3b]">
                        {service.name}
                      </h3>
                      <span className="whitespace-nowrap rounded-full bg-[#fff2fb] px-3 py-1 text-sm font-semibold text-[#b23592]">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#6e5a6b]">
                      {service.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-fade-up">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Service Experience
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Every appointment is designed to feel personal, calm, and polished
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#695766]">
                At Luna Studio, services are more than a price list. We focus on
                thoughtful consultations, professional technique, premium
                products, and a relaxing environment that helps every visit feel
                elevated from start to finish.
              </p>
            </div>

            <div className="animate-fade-up-delay-1 group overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-[0_20px_50px_rgba(96,51,97,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80"
                alt="Salon service in progress"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f6d4eb_0%,#e8cff8_100%)] shadow-[0_20px_60px_rgba(140,63,124,0.14)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#9d2b82]">
                  Ready to Book?
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                  Choose your next appointment with confidence
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#634f62]">
                  Whether you’re looking for a simple refresh, a colour change,
                  or a full restyle, our team is here to help you leave feeling
                  confident, refreshed, and beautifully put together.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/salon/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/demo/salon/about"
                    className="inline-flex items-center justify-center rounded-full border border-[#ddb7d6] bg-white px-6 py-3.5 text-sm font-medium text-[#3e1f3b] transition hover:bg-[#fff8fd]"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
                  alt="Hair styling and finish"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
