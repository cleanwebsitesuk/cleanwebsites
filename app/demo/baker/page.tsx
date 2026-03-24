"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const featuredBrownies = [
  {
    name: "Sea Salt Dark",
    price: "£4.80",
    description:
      "Our signature dark chocolate brownie with a glossy fudgy centre and a fine sea salt finish.",
    note: "Most loved",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Brown Butter Blondie",
    price: "£4.60",
    description:
      "Golden, chewy, and quietly indulgent, with brown butter depth and a soft vanilla finish.",
    note: "Small batch",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hazelnut Praline",
    price: "£5.20",
    description:
      "Deep cocoa, toasted hazelnut praline, and a little crunch for a richer, more layered bite.",
    note: "Signature",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80",
  },
];

const craftsmanshipPoints = [
  {
    title: "Thoughtful ingredients",
    text: "We use proper chocolate, cultured butter, deep cocoa, and carefully balanced sweetness.",
  },
  {
    title: "Elegant presentation",
    text: "Every bake is designed to feel giftable, premium, and genuinely worth choosing.",
  },
  {
    title: "Hand-finished daily",
    text: "Small batches give us better texture, consistency, and a more considered final product.",
  },
  {
    title: "Comfort with restraint",
    text: "Rich enough to feel indulgent, refined enough to feel beautifully made.",
  },
];

const testimonials = [
  {
    quote:
      "Beautifully packaged, deeply chocolatey, and genuinely one of the best brownies I’ve had.",
    author: "Amelia R.",
  },
  {
    quote:
      "Everything feels considered. It has the warmth of a local bakery with the finish of a premium brand.",
    author: "Daniel S.",
  },
  {
    quote:
      "The kind of place you instantly want to recommend. Rich, balanced, and never overly sweet.",
    author: "Nina P.",
  },
];

const stats = [
  { value: "4.9/5", label: "Customer rating" },
  { value: "12+", label: "Signature flavours" },
  { value: "Leeds", label: "Local bakery brand" },
];

export default function BakerHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackButton(window.scrollY < 460);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --cream-1: #f8f2ea;
          --cream-2: #f2e8dc;
          --cream-3: #eadcca;
          --cocoa-1: #2f211b;
          --cocoa-2: #4a342a;
          --cocoa-3: #6f4d3d;
          --accent: #b88358;
          --accent-soft: #e7d0bb;
          --muted: #6f5c50;
          --line: rgba(69, 43, 31, 0.12);
          --white-soft: rgba(255, 251, 246, 0.84);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background:
            radial-gradient(circle at top left, rgba(208, 175, 141, 0.18), transparent 28%),
            radial-gradient(circle at top right, rgba(110, 78, 59, 0.08), transparent 26%),
            linear-gradient(180deg, #fbf7f2 0%, #f5ede3 38%, #f2e7da 100%);
          color: var(--cocoa-1);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
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
            transform: translateY(-12px) scale(0.985);
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
            transform: translateY(-10px);
          }
        }

        @keyframes glowSoft {
          0%,
          100% {
            box-shadow: 0 10px 24px rgba(87, 58, 44, 0.12);
          }
          50% {
            box-shadow: 0 16px 34px rgba(87, 58, 44, 0.18);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.85s ease-out 0.12s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.85s ease-out 0.24s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.85s ease-out 0.36s both;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float-soft {
          animation: floatSoft 6.4s ease-in-out infinite;
        }

        .animate-glow-soft {
          animation: glowSoft 3.8s ease-in-out infinite;
        }

        .animate-menu-in {
          animation: menuIn 0.22s ease-out both;
        }

        .font-heading {
          font-family: var(--font-heading), serif;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen text-[var(--cocoa-1)]`}
      >
        <div className="fixed inset-x-0 top-0 z-[90] border-b border-white/10 bg-[linear-gradient(90deg,#2d1d17_0%,#5a3b2e_54%,#8a6147_100%)] px-4 py-3 text-center text-sm font-medium text-[#fff8f2] shadow-[0_12px_34px_rgba(48,29,22,0.24)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/75 underline-offset-4 transition hover:text-[#f5ddc4]"
          >
            Clean Websites
          </Link>
        </div>

        <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-[var(--line)] bg-[rgba(251,246,239,0.72)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/baker"
              className="group flex items-center gap-3"
              aria-label="Velvet Crumb home"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.78)] text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--cocoa-2)] shadow-[0_8px_20px_rgba(63,41,31,0.08)]">
                VC
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Brownie Bakery
                </p>
                <p className="font-heading text-[1.55rem] leading-none tracking-[0.06em] text-[var(--cocoa-1)] transition group-hover:text-[var(--cocoa-3)]">
                  Velvet Crumb
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/demo/baker"
                aria-current="page"
                className="text-sm font-medium text-[var(--cocoa-2)] transition hover:text-[var(--accent)]"
              >
                Home
              </Link>
              <Link
                href="/demo/baker/about"
                className="text-sm font-medium text-[var(--cocoa-2)] transition hover:text-[var(--accent)]"
              >
                About
              </Link>
              <Link
                href="/demo/baker/menu"
                className="text-sm font-medium text-[var(--cocoa-2)] transition hover:text-[var(--accent)]"
              >
                Menu
              </Link>
              <Link
                href="/demo/baker/contact"
                className="text-sm font-medium text-[var(--cocoa-2)] transition hover:text-[var(--accent)]"
              >
                Contact
              </Link>
              <Link
                href="/demo/baker/menu"
                className="rounded-full border border-[rgba(255,255,255,0.18)] bg-[linear-gradient(90deg,#5a3b2e_0%,#8a6147_100%)] px-5 py-3 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
              >
                Order Brownies
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-3 text-[var(--cocoa-1)] shadow-sm transition hover:bg-white md:hidden"
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
          className={`animate-glow-soft fixed left-4 top-[8rem] z-[85] inline-flex items-center rounded-full border border-[var(--line)] bg-[rgba(255,252,247,0.92)] px-4 py-2 text-sm font-semibold text-[var(--cocoa-3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.15rem] ${
            menuOpen || !showBackButton
              ? "pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto"
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
              className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-[rgba(33,21,16,0.5)] md:hidden"
            />
            <div className="animate-menu-in fixed inset-x-4 top-[8.65rem] z-[70] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(60,39,30,0.98)_0%,rgba(38,24,18,0.98)_100%)] p-4 shadow-[0_24px_60px_rgba(28,18,13,0.42)] md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/demo/baker"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/demo/baker/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="/demo/baker/menu"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Menu
                </Link>
                <Link
                  href="/demo/baker/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                >
                  Contact
                </Link>
                <Link
                  href="/demo/baker/menu"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6f4d3d_0%,#b88358_100%)] px-5 py-3.5 text-center text-sm font-semibold text-[#fffaf5] shadow-[0_12px_30px_rgba(80,53,39,0.24)]"
                >
                  Order Brownies
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[184px] md:pt-[136px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,142,0.22),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,58,45,0.10),transparent_24%)]" />
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c79d74]/14 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7a5338]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.88)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] shadow-[0_8px_18px_rgba(74,52,38,0.06)] backdrop-blur-sm">
                Handcrafted in small batches
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-6 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight text-[var(--cocoa-1)] sm:text-6xl lg:text-[5.35rem]">
                Brownies with depth,
                <span className="block text-[var(--cocoa-3)]">restraint, and presence.</span>
              </h1>

              <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Velvet Crumb is a premium brownie bakery concept built around deep
                chocolate flavour, elegant presentation, and the kind of quiet visual
                confidence that makes a small business feel instantly desirable.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#5a3b2e_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/demo/baker/about"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.88)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] shadow-[0_8px_24px_rgba(73,49,37,0.05)] transition hover:bg-white"
                >
                  Discover the Brand
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-[30px] border border-white/60 bg-[rgba(255,251,246,0.72)] p-5 shadow-[0_24px_60px_rgba(79,52,39,0.10)] backdrop-blur-md">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="font-heading text-3xl font-semibold leading-none text-[var(--cocoa-1)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-[#7a675b]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="relative mx-auto max-w-[690px]">
                <div className="absolute -left-6 top-8 hidden rounded-[22px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,250,244,0.68)] px-5 py-4 shadow-[0_22px_48px_rgba(80,53,39,0.12)] backdrop-blur-md lg:block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    This week’s feature
                  </p>
                  <p className="font-heading mt-2 text-2xl leading-none text-[var(--cocoa-1)]">
                    Sea Salt Dark
                  </p>
                </div>

                <div className="overflow-hidden rounded-[38px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(180deg,rgba(255,251,246,0.86)_0%,rgba(244,234,223,0.76)_100%)] p-3 shadow-[0_34px_90px_rgba(73,48,36,0.16)]">
                  <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="overflow-hidden rounded-[30px]">
                      <img
                        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=80"
                        alt="A premium stack of rich chocolate brownies"
                        className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[560px]"
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="overflow-hidden rounded-[26px]">
                        <img
                          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80"
                          alt="Elegant brownie and dessert table styling"
                          className="h-44 w-full object-cover transition duration-700 hover:scale-105 sm:h-[215px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between rounded-[26px] bg-[linear-gradient(180deg,#3a271f_0%,#2d1d17_100%)] p-7 text-[#fff8f2] shadow-[0_20px_40px_rgba(56,36,27,0.24)]">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ddc0a6]">
                            Crafted to feel giftable
                          </p>
                          <h2 className="font-heading mt-3 text-4xl leading-[0.92]">
                            Fudgy centres.
                            <span className="block">Clean finish.</span>
                          </h2>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#ead9ca]">
                          Built for viewers who want their own site to feel this calm,
                          tasteful, and premium at first glance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-float-soft absolute -bottom-6 right-3 rounded-[22px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,250,244,0.76)] px-5 py-4 shadow-[0_22px_48px_rgba(80,53,39,0.12)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Premium local concept
                  </p>
                  <p className="font-heading mt-2 text-2xl leading-none text-[var(--cocoa-1)]">
                    Velvet Crumb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Featured brownies
              </p>
              <h2 className="font-heading mt-3 text-5xl leading-[0.96] text-[var(--cocoa-1)] sm:text-[3.6rem]">
                Signature bakes with a more considered kind of indulgence.
              </h2>
            </div>

            <Link
              href="/demo/baker/menu"
              className="text-sm font-semibold text-[var(--cocoa-3)] transition hover:text-[var(--accent)]"
            >
              View full menu →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredBrownies.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[30px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] shadow-[0_16px_42px_rgba(76,50,38,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(76,50,38,0.14)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-[#ead9c8] bg-[#f8eee4] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                        {item.note}
                      </span>
                      <h3 className="font-heading mt-3 text-[2rem] leading-none text-[var(--cocoa-1)]">
                        {item.name}
                      </h3>
                    </div>

                    <span className="pt-2 text-sm font-semibold text-[var(--cocoa-3)]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4eadf_0%,#efe3d5_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  Why it works
                </p>
                <h2 className="font-heading mt-3 text-5xl leading-[0.96] text-[var(--cocoa-1)] sm:text-[3.5rem]">
                  Warm, premium, and distinctive without trying too hard.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                  The strongest small-business websites feel intentional from the first
                  screen. This concept is built around restraint, texture, typography,
                  and the kind of spacing that makes everything feel more expensive.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {craftsmanshipPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-6 shadow-[0_14px_30px_rgba(76,50,38,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(76,50,38,0.12)]"
                  >
                    <h3 className="font-heading text-[2rem] leading-none text-[var(--cocoa-1)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Customer notes
              </p>
              <h2 className="font-heading mt-3 text-5xl leading-[0.96] text-[var(--cocoa-1)] sm:text-[3.4rem]">
                Loved for flavour, texture, and presentation.
              </h2>

              <div className="mt-8 grid gap-5">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,251,246,0.84)] p-6 shadow-[0_12px_28px_rgba(76,50,38,0.06)]"
                  >
                    <p className="text-sm leading-7 text-[var(--cocoa-2)]">
                      “{item.quote}”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                      {item.author}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[34px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-3 shadow-[0_28px_60px_rgba(76,50,38,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium brownie arrangement styled for a luxury bakery brand"
                  className="h-[420px] w-full rounded-[28px] object-cover transition duration-700 hover:scale-[1.03] sm:h-[560px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="overflow-hidden rounded-[38px] border border-[rgba(255,255,255,0.28)] bg-[linear-gradient(135deg,#e7d0bb_0%,#f4e7da_45%,#d8b498_100%)] shadow-[0_24px_70px_rgba(80,53,39,0.12)]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--cocoa-3)]">
                  Ready to order?
                </p>

                <h2 className="font-heading mt-3 max-w-xl text-5xl leading-[0.96] text-[var(--cocoa-1)] sm:text-[3.5rem]">
                  Browse the menu and find your next favourite bake.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--cocoa-2)]/80">
                  From classic dark chocolate squares to seasonal flavours and
                  gift-ready boxes, Velvet Crumb is designed to feel like the kind
                  of brand people immediately want to emulate.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#5a3b2e_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] transition hover:-translate-y-0.5"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(69,43,31,0.14)] bg-[rgba(255,251,246,0.84)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] transition hover:bg-white"
                  >
                    Contact Bakery
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1400&q=80"
                  alt="Brownies styled on a tray for a premium bakery website"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] bg-[linear-gradient(180deg,#f8f1e8_0%,#f0e4d5_100%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Velvet Crumb
              </p>
              <h3 className="font-heading mt-3 text-4xl leading-none text-[var(--cocoa-1)]">
                Premium brownie bakery
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
                A refined small-business bakery concept focused on handcrafted
                brownies, elegant presentation, and a visual identity that feels
                warm, modern, and confidently premium.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-1)]">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                <Link
                  href="/demo/baker"
                  className="transition hover:text-[var(--accent)]"
                >
                  Home
                </Link>
                <Link
                  href="/demo/baker/about"
                  className="transition hover:text-[var(--accent)]"
                >
                  About
                </Link>
                <Link
                  href="/demo/baker/menu"
                  className="transition hover:text-[var(--accent)]"
                >
                  Menu
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="transition hover:text-[var(--accent)]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-1)]">
                Bakery Details
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                <p>27 Albion Lane</p>
                <p>Leeds</p>
                <p>LS1 4BT</p>
                <a
                  href="#"
                  className="inline-block pt-2 transition hover:text-[var(--accent)]"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-1)]">
                Opening Hours
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                <p>Tue–Fri: 10:00 – 6:00</p>
                <p>Sat: 10:00 – 5:00</p>
                <p>Sun–Mon: Closed</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
