"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const aboutSections = [
  {
    title: "The salon story",
    text: "Luna Studio was created to offer a more personal salon experience in Leeds — one that feels calm, elevated, and genuinely attentive. From the beginning, our goal has been simple: combine modern styling with thoughtful service so every appointment feels tailored, comfortable, and confidence-boosting.",
  },
  {
    title: "Professional stylists",
    text: "Our team brings experience, creativity, and attention to detail to every appointment. Whether you’re booking a precision cut, signature colour, or polished finish, we focus on understanding your goals and delivering results that suit your features, routine, and personal style.",
  },
  {
    title: "Quality products",
    text: "We use trusted professional products chosen for performance, shine, and hair health. From colour services to aftercare, every product in the salon is selected to support beautiful results while helping to maintain strength, softness, and long-term condition.",
  },
  {
    title: "Relaxing salon environment",
    text: "We believe the best salon visits should feel as good as the results look. That’s why Luna Studio is designed to feel bright, elegant, and welcoming — a boutique space where you can switch off, feel looked after, and enjoy a little time for yourself.",
  },
];

const teamHighlights = [
  "Tailored consultations before every service",
  "Modern cuts, colour work, and finish styling",
  "Professional product advice and aftercare guidance",
  "A calm boutique atmosphere in central Leeds",
];

export default function SalonAboutPage() {
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
                className="text-sm font-medium text-[#b23592]"
              >
                About
              </Link>
              <Link
                href="/demo/salon/services"
                className="text-sm font-medium text-[#5a3957] transition hover:text-[#b23592]"
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
                  className="rounded-2xl bg-white/10 px-4 py-3 text-base font-medium text-white"
                >
                  About
                </Link>
                <Link
                  href="/demo/salon/services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
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
                "url('https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,253,0.92)_0%,rgba(255,246,252,0.84)_35%,rgba(250,242,250,0.76)_100%)] md:bg-[linear-gradient(90deg,rgba(255,248,253,0.9)_0%,rgba(255,245,252,0.74)_40%,rgba(143,72,215,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,213,241,0.42),transparent_38%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f0a7df]/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#b695ff]/12 blur-3xl" />

          <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[#ead6e5] bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#95518c] shadow-[0_8px_20px_rgba(121,60,112,0.08)] backdrop-blur-sm">
                About Luna Studio
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#34162f] sm:text-5xl lg:text-6xl">
                Our passion is helping you feel confident.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#5e495d] sm:text-lg">
                We believe salon visits should feel personal, calming, and
                beautifully considered — with expert styling, thoughtful
                service, and a boutique environment that helps every client feel
                their very best.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/salon/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/demo/salon/services"
                  className="inline-flex items-center justify-center rounded-full border border-[#e4d6e1] bg-white/95 px-6 py-3.5 text-sm font-medium text-[#432640] shadow-[0_8px_24px_rgba(86,47,88,0.05)] transition hover:bg-white hover:shadow-md"
                >
                  Explore Services
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-lg grid-cols-2 gap-4 rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(96,51,97,0.12)] backdrop-blur-md sm:grid-cols-2">
                {teamHighlights.map((item) => (
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

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-fade-up">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Salon Interior
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                A bright boutique setting designed to feel calm and elevated
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#695766]">
                Luna Studio blends modern styling with a relaxed atmosphere so
                every visit feels polished and comfortable. From the interior
                layout to the finishing touches, the space is designed to feel
                warm, premium, and welcoming.
              </p>
            </div>

            <div className="animate-fade-up-delay-1 group overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-[0_20px_50px_rgba(96,51,97,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1400&q=80"
                alt="Salon interior"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff3fb_0%,#f8ecf9_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="max-w-2xl animate-fade-up">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                What We’re About
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                A salon experience built on care, quality, and confidence
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {aboutSections.map((item, index) => (
                <article
                  key={item.title}
                  className={`group rounded-[28px] border border-[#efd9ea] bg-white/90 p-7 shadow-[0_16px_40px_rgba(140,63,124,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(140,63,124,0.12)] ${
                    index % 2 === 0 ? "animate-fade-up" : "animate-fade-up-delay-1"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#3e1f3b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-[#6e5a6b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-[0_20px_50px_rgba(96,51,97,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=80"
                  alt="Styled hair in salon"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Professional Care
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Skilled styling supported by trusted professional products
              </h2>
              <p className="mt-5 text-base leading-8 text-[#695766]">
                Every part of the Luna Studio experience is designed to feel
                thoughtful and polished. We take pride in consultations,
                technique, product choice, and the overall atmosphere — because
                the details are what make clients feel confident returning again
                and again.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#efd9ea] bg-white/90 p-5 shadow-[0_12px_30px_rgba(140,63,124,0.08)]">
                  <h3 className="text-base font-semibold text-[#3e1f3b]">
                    Professional stylists
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6e5a6b]">
                    Tailored advice, precise technique, and modern styling.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#efd9ea] bg-white/90 p-5 shadow-[0_12px_30px_rgba(140,63,124,0.08)]">
                  <h3 className="text-base font-semibold text-[#3e1f3b]">
                    Quality products
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6e5a6b]">
                    Chosen for shine, performance, and long-term hair health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f6d4eb_0%,#e8cff8_100%)] shadow-[0_20px_60px_rgba(140,63,124,0.14)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#9d2b82]">
                  Visit Luna Studio
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                  Ready for a salon experience that feels personal?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#634f62]">
                  Whether you’re booking a fresh cut, colour appointment, or a
                  styling session, our team is here to help you feel refreshed,
                  confident, and beautifully looked after.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/salon/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/demo/salon/services"
                    className="inline-flex items-center justify-center rounded-full border border-[#ddb7d6] bg-white px-6 py-3.5 text-sm font-medium text-[#3e1f3b] transition hover:bg-[#fff8fd]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=80"
                  alt="Stylist working with client"
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
