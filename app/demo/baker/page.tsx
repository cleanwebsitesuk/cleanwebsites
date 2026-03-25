"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Inter, Cormorant_Garamond } from "next/font/google";

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

const navItems = [
  { label: "Home", href: "/demo/baker" },
  { label: "Our Cakes", href: "/demo/baker/menu" },
  { label: "Celebrations", href: "/demo/baker/about" },
  { label: "Contact", href: "/demo/baker/contact" },
];

const cakeCollections = [
  {
    eyebrow: "For birthdays",
    title: "Statement cakes",
    text: "Tall layers, refined piping, clean finishes, and flavours that hold attention long after the candles are gone.",
  },
  {
    eyebrow: "For intimate tables",
    title: "Small gathering cakes",
    text: "Elegant, understated cakes sized for dinners, thank-yous, and the kind of evening that deserves dessert done properly.",
  },
  {
    eyebrow: "For weddings & events",
    title: "Made to be photographed",
    text: "Soft palettes, floral detailing, sculpted buttercream, and a finish designed to sit beautifully at the centre of the room.",
  },
];

const flavours = [
  {
    name: "Vanilla Fig",
    detail: "Brown sugar sponge, vanilla bean cream, roasted fig compote.",
  },
  {
    name: "Black Cherry Chocolate",
    detail: "Dark sponge, satin ganache, black cherry preserve.",
  },
  {
    name: "Lemon Mascarpone",
    detail: "Citrus sponge, mascarpone cream, candied zest.",
  },
  {
    name: "Pistachio Rose",
    detail: "Pistachio sponge, rose cream, toasted pistachio finish.",
  },
];

const tastingNotes = [
  {
    title: "Light where it should be",
    text: "Whipped fillings, delicate sponges, and enough air in the texture to keep every slice graceful.",
  },
  {
    title: "Rich where it matters",
    text: "Chocolate, butter, vanilla, fruit, and nuts are used for depth, not for heaviness.",
  },
  {
    title: "Beautiful without excess",
    text: "Every finish feels considered — romantic, editorial, and quietly luxurious.",
  },
];

const faqs = [
  {
    q: "Do you make custom celebration cakes?",
    a: "Yes — from birthdays to engagement dinners, custom cakes can be designed around size, palette, and mood.",
  },
  {
    q: "How far ahead should I order?",
    a: "As early as possible for weekends and events. Smaller cakes may be available closer to date depending on studio capacity.",
  },
  {
    q: "Can I order something elegant but simple?",
    a: "Absolutely. Some of the most beautiful cakes are the most restrained — smooth sides, clean detail, perfect flavour.",
  },
];

export default function BakerHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setHeaderSolid(window.scrollY > 24);
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
        ? "border-[rgba(69,42,54,0.10)] bg-[rgba(255,250,247,0.88)] shadow-[0_10px_30px_rgba(69,42,54,0.08)]"
        : "border-transparent bg-[rgba(255,250,247,0.55)]",
    [headerSolid],
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --paper: #fffaf7;
          --paper-2: #f8f0ea;
          --blush: #f2d9de;
          --rose: #d7a5b2;
          --rose-deep: #b67888;
          --plum: #4b2a36;
          --plum-soft: #755160;
          --gold: #b9905a;
          --line: rgba(75, 42, 54, 0.1);
          --ink-soft: #6f5b64;
          --panel: rgba(255, 255, 255, 0.62);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background:
            linear-gradient(180deg, #fffaf7 0%, #fcf3ef 38%, #f7ede7 100%),
            radial-gradient(circle at top left, rgba(215, 165, 178, 0.2), transparent 30%);
          color: var(--plum);
        }

        .font-heading {
          font-family: var(--font-heading), serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes softenIn {
          from {
            opacity: 0;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes menuIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.85s ease-out 0.1s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.85s ease-out 0.2s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.85s ease-out 0.3s both;
        }

        .animate-soften-in {
          animation: softenIn 1s ease-out both;
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
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen text-[var(--plum)]`}
      >
        <header
          className={`fixed inset-x-0 top-0 z-[90] border-b backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:px-8">
            <Link
              href="/demo/baker"
              aria-label="Maison Lune home"
              className="group flex items-center gap-3"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--plum)]">
                ML
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                  Cake Studio
                </p>
                <p className="font-heading text-[1.25rem] font-semibold leading-none tracking-[0.04em] text-[var(--plum)] transition group-hover:text-[var(--rose-deep)]">
                  Maison Lune
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--plum-soft)] transition hover:text-[var(--plum)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/demo/baker/menu"
                className="rounded-full border border-[rgba(75,42,54,0.08)] bg-[var(--plum)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[var(--plum)] md:hidden"
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
            <div className="fixed inset-0 z-[70] bg-[rgba(33,19,25,0.4)] md:hidden" />
            <div
              ref={menuPanelRef}
              className="animate-menu-in fixed inset-x-3 top-[5.7rem] z-[80] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(64,34,45,0.98)_0%,rgba(43,23,30,0.98)_100%)] p-3 md:hidden"
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
                  href="/demo/baker/menu"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[var(--plum)]"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative overflow-hidden pt-[108px] sm:pt-[116px]">
          <div className="absolute inset-0">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f0ccd5]/50 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f3dfca]/50 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="rounded-[30px] border border-white/60 bg-[rgba(255,255,255,0.55)] p-6 shadow-[0_24px_80px_rgba(75,42,54,0.08)] backdrop-blur-md sm:p-8 lg:p-10">
                <p className="animate-fade-up text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">
                  Romantic cakes for modern celebrations
                </p>

                <h1 className="font-heading animate-fade-up-delay-1 mt-4 max-w-[12ch] text-[3rem] leading-[0.9] tracking-[-0.05em] text-[var(--plum)] sm:text-[4.4rem] lg:text-[6.2rem]">
                  Less bakery. More occasion.
                </h1>

                <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-[15px] leading-7 text-[var(--ink-soft)] sm:text-[17px] sm:leading-8">
                  Maison Lune creates cakes that feel poised, editorial, and deeply
                  celebratory — the kind of centrepiece people notice before the
                  first slice and remember after the last.
                </p>

                <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--plum)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Browse Signature Cakes
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--plum)] transition hover:bg-white"
                  >
                    Enquire for an Event
                  </Link>
                </div>
              </div>

              <div className="animate-soften-in rounded-[30px] border border-white/60 bg-[rgba(255,255,255,0.45)] p-3 shadow-[0_24px_80px_rgba(75,42,54,0.08)] backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1400&q=80"
                  alt="Elegant celebration cake with refined floral styling"
                  className="h-[320px] w-full rounded-[24px] object-cover sm:h-[420px] lg:h-[620px]"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="rounded-[26px] border border-[var(--line)] bg-[var(--plum)] p-6 text-white shadow-[0_16px_42px_rgba(75,42,54,0.16)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ebd3b2]">
                  Studio note
                </p>
                <p className="font-heading mt-3 text-[2rem] leading-[0.95] sm:text-[2.4rem]">
                  Every cake should feel dressed for the room it enters.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {cakeCollections.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[26px] border border-[var(--line)] bg-white/70 p-5 shadow-[0_12px_30px_rgba(75,42,54,0.05)] backdrop-blur-sm"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rose-deep)]">
                      {item.eyebrow}
                    </p>
                    <h2 className="font-heading mt-3 text-[1.8rem] leading-[0.95] text-[var(--plum)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                Signature flavour language
              </p>
              <h2 className="font-heading mt-3 max-w-[10ch] text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-[var(--plum)] sm:text-[3.3rem]">
                Made for the first glance and the second slice.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--ink-soft)] sm:text-base sm:leading-8">
                We think in textures, finishes, softness, contrast, and how a cake
                sits on a table before anyone has even tasted it.
              </p>

              <div className="mt-8 grid gap-4">
                {tastingNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[var(--line)] bg-white/65 p-5"
                  >
                    <h3 className="font-heading text-[1.65rem] leading-none text-[var(--plum)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/70 p-2 shadow-[0_18px_50px_rgba(75,42,54,0.08)] sm:translate-y-10">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
                  alt="Layered cake with berries and cream"
                  className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[420px]"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/70 p-2 shadow-[0_18px_50px_rgba(75,42,54,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80"
                  alt="Elegant frosted cake on a styled table"
                  className="h-[260px] w-full rounded-[22px] object-cover sm:h-[300px] lg:h-[360px]"
                />
              </div>

              <div className="sm:col-span-2 rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#f4e5e8_0%,#fff8f6_100%)] p-6 shadow-[0_18px_50px_rgba(75,42,54,0.06)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--rose-deep)]">
                  Current favourites
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {flavours.map((item) => (
                    <div key={item.name} className="border-t border-[var(--line)] pt-4">
                      <h3 className="font-heading text-[1.8rem] leading-none text-[var(--plum)]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[14px] leading-6 text-[var(--ink-soft)]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/demo/baker/menu"
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--plum)] transition hover:text-[var(--rose-deep)]"
                >
                  See all available cakes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f7ede7_0%,#fbf3ee_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-white/70 p-3 shadow-[0_20px_60px_rgba(75,42,54,0.07)]">
                <img
                  src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury pink cake with detailed frosting"
                  className="h-[320px] w-full rounded-[26px] object-cover sm:h-[440px] lg:h-[620px]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[30px] border border-[var(--line)] bg-white/72 p-6 shadow-[0_14px_40px_rgba(75,42,54,0.05)] sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                    For elegant gatherings
                  </p>
                  <h2 className="font-heading mt-3 text-[2.5rem] leading-[0.94] tracking-[-0.04em] text-[var(--plum)] sm:text-[3.2rem]">
                    Cakes with a stronger point of view.
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Romantic, sculpted, soft-edged, editorial — Maison Lune is
                    built for clients who want something more elevated than a
                    standard bakery homepage promises.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-[var(--line)] bg-[var(--plum)] p-6 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e7cda8]">
                      Collection
                    </p>
                    <p className="font-heading mt-3 text-[2rem] leading-none">
                      Bespoke cakes
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/80">
                      Designed around palette, mood, size, and celebration type.
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-[var(--line)] bg-white/72 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rose-deep)]">
                      Availability
                    </p>
                    <p className="font-heading mt-3 text-[2rem] leading-none text-[var(--plum)]">
                      By pre-order
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">
                      Created fresh for collection dates rather than made to sit in a display.
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[var(--line)] bg-[linear-gradient(135deg,#4b2a36_0%,#7e5966_100%)] p-6 text-white shadow-[0_18px_50px_rgba(75,42,54,0.14)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ebd6bb]">
                    Begin your order
                  </p>
                  <p className="font-heading mt-3 text-[2.2rem] leading-[0.95]">
                    Tell us the date, the mood, and how you want it to feel.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/demo/baker/contact"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--plum)]"
                    >
                      Start an Enquiry
                    </Link>
                    <Link
                      href="/demo/baker/menu"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
          <div className="mb-8 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
              Frequently asked
            </p>
            <h2 className="font-heading mt-3 text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-[var(--plum)] sm:text-[3.3rem]">
              The practical details, beautifully put.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {faqs.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[var(--line)] bg-white/72 p-6 shadow-[0_12px_30px_rgba(75,42,54,0.05)]"
              >
                <h3 className="font-heading text-[1.85rem] leading-[0.95] text-[var(--plum)]">
                  {item.q}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-[var(--ink-soft)]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-[var(--line)] bg-[rgba(255,255,255,0.45)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.9fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                Maison Lune
              </p>
              <h3 className="font-heading mt-3 text-[2rem] leading-none text-[var(--plum)]">
                Cakes for beautiful rooms and better celebrations.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-[var(--ink-soft)]">
                A modern cake studio creating romantic, made-to-order cakes with a
                polished finish and a distinctly editorial feel.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--plum)]">
                Navigate
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--ink-soft)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[var(--plum)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--plum)]">
                Studio
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                <p>14 Hanover Court</p>
                <p>Manchester</p>
                <p>M2 2EF</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--plum)]">
                Hours
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                <p>Tue–Fri: 10:00 – 6:00</p>
                <p>Sat: 10:00 – 4:00</p>
                <p>Sun–Mon: Pre-orders only</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
