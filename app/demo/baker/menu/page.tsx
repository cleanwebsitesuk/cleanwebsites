"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Inter, Sora } from "next/font/google";

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const navItems = [
  { label: "Home", href: "/demo/baker" },
  { label: "About", href: "/demo/baker/about" },
  { label: "Menu", href: "/demo/baker/menu" },
  { label: "Contact", href: "/demo/baker/contact" },
];

const highlights = [
  "Freshly baked in small batches",
  "Gift-ready boxes",
  "Collection & delivery",
];

const featuredMenu = [
  {
    name: "Sea Salt Dark",
    price: "£4.80",
    tag: "Best seller",
    description:
      "Deep cocoa flavour with a glossy centre and a delicate sea salt finish for a rich, balanced bite.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Brown Butter Blondie",
    price: "£4.60",
    tag: "Small batch",
    description:
      "Golden, chewy, and buttery with soft vanilla notes and a caramelised edge.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Hazelnut Praline",
    price: "£5.20",
    tag: "Signature",
    description:
      "Dark chocolate layered with toasted hazelnut praline and a touch of crunch.",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1400&q=80",
  },
];

const brownieMenu = [
  {
    name: "Sea Salt Dark",
    price: "£4.80",
    note: "Best seller",
    description:
      "Rich dark chocolate brownie with a soft fudgy centre and delicate sea salt finish.",
  },
  {
    name: "Hazelnut Praline",
    price: "£5.20",
    note: "Signature",
    description:
      "Dark chocolate brownie layered with toasted hazelnut praline and crisp texture.",
  },
  {
    name: "Espresso Fudge",
    price: "£4.90",
    note: "Deep roast",
    description:
      "A darker bake with espresso notes that sharpen the chocolate without overpowering it.",
  },
  {
    name: "Salted Caramel Swirl",
    price: "£5.00",
    note: "Customer favourite",
    description:
      "Classic fudgy brownie marbled with caramel for a sweeter finish and silky centre.",
  },
  {
    name: "Milk Chocolate Crunch",
    price: "£4.70",
    note: "Soft bite",
    description:
      "A gentler chocolate profile with crisp inclusions and a smooth, balanced sweetness.",
  },
  {
    name: "Seasonal Special",
    price: "£5.30",
    note: "Limited release",
    description:
      "Rotating flavour crafted in small runs with the same rich base and premium finish.",
  },
];

const blondiesAndBars = [
  {
    name: "Brown Butter Blondie",
    price: "£4.60",
    note: "Small batch",
    description:
      "Golden, chewy, and buttery with soft vanilla notes and caramelised edges.",
  },
  {
    name: "White Chocolate Raspberry",
    price: "£4.90",
    note: "Bright finish",
    description:
      "A buttery blondie with sharp raspberry notes and creamy white chocolate sweetness.",
  },
  {
    name: "Pistachio Vanilla Bar",
    price: "£5.10",
    note: "Elegant",
    description:
      "Tender vanilla crumb with roasted pistachio for a quieter, more refined finish.",
  },
];

const boxes = [
  {
    name: "Four-Piece Selection Box",
    price: "£18.00",
    note: "Gift-ready",
    description:
      "A curated box of four signature bakes, finished and packed for gifting or sharing.",
  },
  {
    name: "Six-Piece Selection Box",
    price: "£26.00",
    note: "Most ordered",
    description:
      "A balanced mix of best sellers and signature favourites presented in an elegant bakery box.",
  },
  {
    name: "Twelve-Piece Event Box",
    price: "£48.00",
    note: "For gatherings",
    description:
      "Designed for dessert tables, meetings, and celebrations with a polished presentation.",
  },
];

const extras = [
  "Custom mixed boxes available",
  "Seasonal menu changes through the year",
  "Large orders available for events",
];

const menuStats = [
  { value: "12+", label: "Signature flavours" },
  { value: "48hr", label: "Fresh-bake window" },
  { value: "Small batch", label: "Every tray" },
];

const orderNotes = [
  {
    title: "Freshly baked to order",
    text: "Every tray is baked in short runs for better texture, consistency, and finish.",
  },
  {
    title: "Collection and delivery",
    text: "Available for local collection and selected delivery depending on order size and date.",
  },
  {
    title: "Events and gifting",
    text: "Larger orders and gift-ready boxes are available for birthdays, thank-yous, and celebrations.",
  },
];

export default function BakerMenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedMenu = menuPanelRef.current?.contains(target);
      const clickedButton = menuButtonRef.current?.contains(target);

      if (!clickedMenu && !clickedButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerClasses = useMemo(
    () =>
      headerSolid
        ? "border-[rgba(66,44,34,0.12)] bg-[rgba(250,244,237,0.94)] shadow-[0_12px_34px_rgba(51,33,25,0.08)]"
        : "border-transparent bg-[rgba(250,244,237,0.72)]",
    [headerSolid],
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --cream-1: #fcf8f3;
          --cream-2: #f4ecdf;
          --cream-3: #eadcc9;
          --cocoa-1: #231712;
          --cocoa-2: #433029;
          --cocoa-3: #6d4b3b;
          --muted: #6b5a50;
          --accent: #b9865e;
          --accent-strong: #9c6744;
          --line: rgba(66, 44, 34, 0.12);
          --panel: rgba(255, 251, 246, 0.82);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background:
            radial-gradient(circle at top left, rgba(211, 177, 141, 0.18), transparent 28%),
            radial-gradient(circle at top right, rgba(92, 61, 45, 0.08), transparent 24%),
            linear-gradient(180deg, #fcf8f3 0%, #f5ede4 42%, #f1e6d9 100%);
          color: var(--cocoa-1);
        }

        .font-heading {
          font-family: var(--font-heading), sans-serif;
        }

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
            transform: translateY(-8px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.8s ease-out 0.1s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.2s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.8s ease-out 0.3s both;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }

        .animate-menu-in {
          animation: menuIn 0.18s ease-out both;
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
        <header
          className={`fixed inset-x-0 top-0 z-[90] border-b backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 md:px-8">
            <Link
              href="/demo/baker"
              aria-label="Velvet Crumb home"
              className="group flex min-w-0 items-center gap-3"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,252,248,0.9)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cocoa-2)] sm:h-11 sm:w-11 sm:text-[11px] sm:tracking-[0.24em]">
                VC
              </span>
              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.26em]">
                  Brownie Bakery
                </p>
                <p className="font-heading truncate text-[1rem] font-semibold tracking-[0.08em] text-[var(--cocoa-1)] transition group-hover:text-[var(--accent-strong)] sm:text-[1.12rem] sm:tracking-[0.12em]">
                  Velvet Crumb
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/demo/baker/menu";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-[var(--cocoa-1)]"
                        : "text-[var(--cocoa-2)] hover:text-[var(--accent)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/demo/baker/contact"
                className="rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-5 py-3 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(78,51,38,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(78,51,38,0.28)]"
              >
                Order Now
              </Link>
            </nav>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.94)] text-[var(--cocoa-1)] shadow-sm transition hover:bg-white md:hidden"
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

        {menuOpen && (
          <>
            <div className="fixed inset-0 z-[70] bg-[rgba(29,18,14,0.5)] md:hidden" />
            <div
              ref={menuPanelRef}
              className="animate-menu-in fixed inset-x-3 top-[5.8rem] z-[80] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(59,38,29,0.98)_0%,rgba(38,24,18,0.98)_100%)] p-3.5 shadow-[0_24px_60px_rgba(28,18,13,0.42)] sm:inset-x-4 sm:top-[6.1rem] sm:p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white/95 transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/demo/baker/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#6f4d3d_0%,#b9865e_100%)] px-5 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_12px_30px_rgba(80,53,39,0.24)]"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[104px] sm:pt-[112px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,142,0.22),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,58,45,0.10),transparent_24%)]" />
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c79d74]/14 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7a5338]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-5 sm:py-14 md:px-8 lg:min-h-[86vh] lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:py-24">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] shadow-[0_8px_18px_rgba(74,52,38,0.05)] backdrop-blur-sm sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
                Our menu
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-5 max-w-[10ch] text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--cocoa-1)] sm:mt-6 sm:text-[3.7rem] md:max-w-xl md:text-6xl lg:max-w-[10ch] lg:text-[5.05rem]">
                Signature bakes, beautifully finished.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                A focused menu of rich brownies, refined blondies, and gift-ready
                boxes made for everyday treats, thoughtful gifting, and special occasions.
              </p>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-2.5 sm:mt-8">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.8)] px-4 text-[12px] font-medium text-[var(--cocoa-2)] shadow-[0_8px_18px_rgba(73,49,37,0.04)] sm:text-[13px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link
                  href="/demo/baker/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                >
                  Order Now
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] shadow-[0_8px_24px_rgba(73,49,37,0.05)] transition hover:bg-white"
                >
                  Ask About Events
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-7 grid grid-cols-3 gap-2.5 rounded-[24px] border border-white/50 bg-[rgba(255,251,246,0.76)] p-4 shadow-[0_24px_60px_rgba(79,52,39,0.08)] backdrop-blur-md sm:mt-10 sm:gap-4 sm:rounded-[30px] sm:p-5">
                {menuStats.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="font-heading text-xl font-semibold leading-none text-[var(--cocoa-1)] sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-[#7a675b] sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="relative mx-auto max-w-[760px]">
                <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(180deg,rgba(255,251,246,0.9)_0%,rgba(244,234,223,0.78)_100%)] p-2.5 shadow-[0_26px_70px_rgba(73,48,36,0.14)] sm:rounded-[34px] sm:p-3 lg:rounded-[38px]">
                  <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.04fr_0.96fr]">
                    <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[30px]">
                      <img
                        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=80"
                        alt="A premium stack of rich chocolate brownies"
                        className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[410px] lg:h-[580px]"
                      />
                    </div>

                    <div className="grid gap-2.5 sm:gap-3">
                      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[26px]">
                        <img
                          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80"
                          alt="Elegant brownie and dessert table styling"
                          className="h-36 w-full object-cover transition duration-700 hover:scale-105 sm:h-44 lg:h-[225px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between rounded-[20px] bg-[linear-gradient(180deg,#3a271f_0%,#2d1d17_100%)] p-5 text-[#fff8f2] shadow-[0_20px_40px_rgba(56,36,27,0.24)] sm:rounded-[24px] sm:p-6 lg:rounded-[26px] lg:p-7">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0a6] sm:text-[11px] sm:tracking-[0.24em]">
                            This week’s favourite
                          </p>
                          <h2 className="font-heading mt-2.5 text-[1.4rem] font-semibold leading-[1.05] sm:mt-3 sm:text-[1.7rem] lg:text-[2rem]">
                            Sea Salt Dark
                          </h2>
                        </div>

                        <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#ead9ca] sm:mt-5 sm:text-sm sm:leading-7">
                          Rich, fudgy, and finished with just enough sea salt to
                          sharpen the chocolate.
                        </p>

                        <Link
                          href="/demo/baker/contact"
                          className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-[#f0d6bf] transition hover:text-white"
                        >
                          Order this flavour →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 top-3 rounded-[16px] border border-white/30 bg-[rgba(255,250,244,0.82)] px-3.5 py-3 shadow-[0_14px_32px_rgba(80,53,39,0.08)] backdrop-blur-md sm:left-4 sm:top-4 sm:rounded-[18px] sm:px-4 sm:py-3.5 lg:-left-4 lg:top-8 lg:rounded-[22px] lg:px-5 lg:py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.22em] lg:text-[11px] lg:tracking-[0.24em]">
                    Fresh today
                  </p>
                  <p className="font-heading mt-1.5 text-[13px] font-semibold text-[var(--cocoa-1)] sm:text-[15px] lg:mt-2 lg:text-lg">
                    Limited trays available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-5 shadow-[0_20px_44px_rgba(76,50,38,0.08)] sm:rounded-[32px] sm:p-6 lg:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
                    Brownies
                  </p>
                  <h2 className="font-heading mt-3 text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-[2.4rem]">
                    Core menu
                  </h2>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  Individual portions
                </p>
              </div>

              <div className="mt-8 divide-y divide-[var(--line)]">
                {brownieMenu.map((item) => (
                  <article
                    key={item.name}
                    className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-[1.25rem] font-semibold text-[var(--cocoa-1)] sm:text-[1.4rem]">
                          {item.name}
                        </h3>
                        <span className="inline-flex rounded-full border border-[#ead9c8] bg-[#f8eee4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                          {item.note}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    <div className="sm:pt-1">
                      <span className="font-heading text-[1.15rem] font-semibold text-[var(--cocoa-3)] sm:text-[1.25rem]">
                        {item.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] p-5 shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:rounded-[32px] sm:p-6 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2] sm:text-[11px] sm:tracking-[0.28em]">
                  Order notes
                </p>
                <h2 className="font-heading mt-3 text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.2rem]">
                  Fresh bakes with a premium finish.
                </h2>

                <div className="mt-7 grid gap-4">
                  {orderNotes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <h3 className="font-heading text-[1.12rem] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-[#e8d9cd] sm:text-sm sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-2.5 shadow-[0_20px_44px_rgba(76,50,38,0.08)] sm:rounded-[32px] sm:p-3">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury brownie arrangement styled for a premium bakery brand"
                  className="h-[280px] w-full rounded-[22px] object-cover transition duration-700 hover:scale-[1.03] sm:h-[340px] sm:rounded-[26px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4eadf_0%,#efe3d5_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-5 shadow-[0_20px_44px_rgba(76,50,38,0.06)] sm:rounded-[32px] sm:p-6 lg:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
                      Blondies & bars
                    </p>
                    <h2 className="font-heading mt-3 text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-[2.3rem]">
                      Lighter, buttery, refined
                    </h2>
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    Individual portions
                  </p>
                </div>

                <div className="mt-8 divide-y divide-[var(--line)]">
                  {blondiesAndBars.map((item) => (
                    <article
                      key={item.name}
                      className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading text-[1.2rem] font-semibold text-[var(--cocoa-1)] sm:text-[1.35rem]">
                            {item.name}
                          </h3>
                          <span className="inline-flex rounded-full border border-[#ead9c8] bg-[#f8eee4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                            {item.note}
                          </span>
                        </div>
                        <p className="mt-3 text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:pt-1">
                        <span className="font-heading text-[1.1rem] font-semibold text-[var(--cocoa-3)] sm:text-[1.2rem]">
                          {item.price}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-5 shadow-[0_20px_44px_rgba(76,50,38,0.06)] sm:rounded-[32px] sm:p-6 lg:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
                      Boxes
                    </p>
                    <h2 className="font-heading mt-3 text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-[2.3rem]">
                      Made for gifting and sharing
                    </h2>
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    Curated selections
                  </p>
                </div>

                <div className="mt-8 divide-y divide-[var(--line)]">
                  {boxes.map((item) => (
                    <article
                      key={item.name}
                      className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading text-[1.2rem] font-semibold text-[var(--cocoa-1)] sm:text-[1.35rem]">
                            {item.name}
                          </h3>
                          <span className="inline-flex rounded-full border border-[#ead9c8] bg-[#f8eee4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                            {item.note}
                          </span>
                        </div>
                        <p className="mt-3 text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:pt-1">
                        <span className="font-heading text-[1.1rem] font-semibold text-[var(--cocoa-3)] sm:text-[1.2rem]">
                          {item.price}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] border border-[var(--line)] bg-[rgba(247,240,231,0.85)] p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.24em]">
                    Also available
                  </p>
                  <div className="mt-4 grid gap-3">
                    {extras.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                        <p className="text-[14px] leading-6 text-[var(--cocoa-2)] sm:text-sm sm:leading-7">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2] sm:text-[11px] sm:tracking-[0.28em]">
                  Menu philosophy
                </p>
                <h2 className="font-heading mt-3 max-w-lg text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Focused enough to feel curated, varied enough to keep you coming back.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#e7d8cc] sm:mt-6 sm:text-base sm:leading-8">
                  The menu stays intentionally selective so every flavour earns its place:
                  richer brownies, softer blondies, and polished boxes that feel easy to gift.
                </p>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
                  {[
                    {
                      title: "Better ingredients",
                      text: "Proper chocolate, cultured butter, premium cocoa, and thoughtful sweetness in every recipe.",
                    },
                    {
                      title: "Baked in short runs",
                      text: "Smaller batches allow for better texture, better consistency, and a more premium final finish.",
                    },
                    {
                      title: "Ready to gift",
                      text: "From a single selection box to a larger event order, every bake is designed to present beautifully.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5"
                    >
                      <h3 className="font-heading text-[1.2rem] font-semibold text-white sm:text-[1.3rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-[#e8d9cd] sm:text-sm sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1600&q=80"
                  alt="Chocolate brownies arranged for a premium bakery brand"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,9,0.14)_0%,rgba(20,12,9,0.54)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:pb-7 lg:p-8">
                  <div className="max-w-sm rounded-[20px] border border-white/10 bg-[rgba(255,248,241,0.14)] p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ecd0b7] sm:text-[11px] sm:tracking-[0.24em]">
                      Best for gifting
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white sm:text-base sm:leading-7">
                      Elegant boxes, standout flavour, and presentation designed
                      to feel thoughtful from the moment it arrives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.28)] bg-[linear-gradient(135deg,#e7d0bb_0%,#f4e7da_45%,#d8b498_100%)] shadow-[0_24px_70px_rgba(80,53,39,0.12)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--cocoa-3)] sm:text-[11px] sm:tracking-[0.28em]">
                  Ready to order?
                </p>

                <h2 className="font-heading mt-3 max-w-[12ch] text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:max-w-xl sm:text-[2.45rem] lg:text-[3rem]">
                  Choose your next favourite bake.
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--cocoa-2)]/80 sm:mt-6 sm:text-base sm:leading-8">
                  Enquire about individual flavours, mixed boxes, and event orders.
                  Every order is baked fresh and finished with care.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] transition hover:-translate-y-0.5"
                  >
                    Contact Bakery
                  </Link>
                  <Link
                    href="/demo/baker/about"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(69,43,31,0.14)] bg-[rgba(255,251,246,0.86)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] transition hover:bg-white"
                  >
                    About Velvet Crumb
                  </Link>
                </div>
              </div>

              <div className="min-h-[260px] overflow-hidden sm:min-h-[320px]">
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
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 sm:py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
                Velvet Crumb
              </p>
              <h3 className="font-heading mt-3 text-[1.45rem] font-semibold tracking-[-0.02em] text-[var(--cocoa-1)] sm:text-[1.65rem]">
                Premium brownie bakery
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                Handcrafted brownies with rich flavour, elegant presentation, and
                a warm, modern bakery feel.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cocoa-1)] sm:tracking-[0.18em]">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cocoa-1)] sm:tracking-[0.18em]">
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
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cocoa-1)] sm:tracking-[0.18em]">
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
