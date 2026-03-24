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
  "Premium ingredients",
  "Fudgy-centred texture",
  "Elegant presentation",
];

const principles = [
  {
    title: "Flavour before excess",
    text: "Velvet Crumb is built around depth, balance, and finish. We use proper chocolate, cultured butter, and carefully measured sweetness so every brownie feels rich without ever becoming heavy.",
  },
  {
    title: "Small batches, by design",
    text: "We bake in short runs to keep texture consistent, edges clean, and every tray feeling as considered as the first one that left the kitchen.",
  },
  {
    title: "Quietly premium",
    text: "Nothing is loud for the sake of it. The ingredients, packaging, and overall experience are designed to feel elevated in a way that is understated and memorable.",
  },
];

const storySteps = [
  {
    label: "Where it started",
    title: "A search for the right brownie, not the most complicated one.",
    text: "Velvet Crumb began with a simple idea: the best brownies are defined less by novelty and more by precision. Better chocolate. Better texture. Better restraint.",
  },
  {
    label: "How it evolved",
    title: "From home-kitchen favourite to a focused bakery identity.",
    text: "What started with a handful of trays became a refined collection of signature brownies, seasonal flavours, and gift-ready boxes made to feel recognisable and consistent.",
  },
  {
    label: "What remains true",
    title: "The brand still stays intentionally small in spirit.",
    text: "Even as the menu grows, the philosophy stays the same: bake fresh, finish carefully, and make every order feel worth sharing, gifting, and coming back for.",
  },
];

const craftsmanship = [
  {
    number: "01",
    title: "Ingredients chosen with discipline",
    text: "Each ingredient has a purpose. We select for flavour, texture, and finish rather than adding extras that distract from the final bite.",
  },
  {
    number: "02",
    title: "Baked for contrast and depth",
    text: "The aim is always the same: a delicate top, a dense and fudgy centre, and a richness that feels balanced rather than overwhelming.",
  },
  {
    number: "03",
    title: "Finished to feel gift-worthy",
    text: "Cutting, boxing, and presentation are treated as part of the product, not an afterthought. The full experience should feel polished from first look to last crumb.",
  },
];

const values = [
  {
    title: "Made for everyday indulgence",
    text: "Velvet Crumb is luxurious enough to feel special, yet familiar enough to become a favourite you return to often.",
  },
  {
    title: "Designed for gifting",
    text: "Elegant boxes and considered finishing make every order feel ready for birthdays, thank-yous, celebrations, and thoughtful gestures.",
  },
  {
    title: "Built for sharing",
    text: "From small gatherings to event tables, the bakery is designed to present beautifully and leave a lasting impression.",
  },
];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "12+", label: "Signature flavours" },
  { value: "48hr", label: "Fresh-bake window" },
  { value: "Small batch", label: "Every tray" },
];

export default function BakerAboutPage() {
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
                const isActive = item.href === "/demo/baker/about";
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
                href="/demo/baker/menu"
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
                  href="/demo/baker/menu"
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,142,0.24),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,58,45,0.10),transparent_24%)]" />
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c79d74]/14 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7a5338]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-5 sm:py-14 md:px-8 lg:min-h-[88vh] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] shadow-[0_8px_18px_rgba(74,52,38,0.05)] backdrop-blur-sm sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
                About Velvet Crumb
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-5 max-w-[11ch] text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--cocoa-1)] sm:mt-6 sm:text-[3.8rem] md:max-w-xl md:text-6xl lg:max-w-[11ch] lg:text-[5.2rem]">
                Not just brownies. A standard.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Velvet Crumb was created for people who notice the difference:
                between rich and flat, between soft and properly fudgy, between
                something that looks good and something that feels considered.
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

              <div className="animate-fade-up-delay-3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                >
                  Explore the Menu
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] shadow-[0_8px_24px_rgba(73,49,37,0.05)] transition hover:bg-white"
                >
                  Order for Events
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-7 grid grid-cols-2 gap-2.5 rounded-[24px] border border-white/50 bg-[rgba(255,251,246,0.76)] p-4 shadow-[0_24px_60px_rgba(79,52,39,0.08)] backdrop-blur-md sm:mt-10 sm:grid-cols-4 sm:gap-4 sm:rounded-[30px] sm:p-5">
                {stats.map((item) => (
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
                  <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.03fr_0.97fr]">
                    <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[30px]">
                      <img
                        src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80"
                        alt="Luxury brownie arrangement styled for a premium bakery brand"
                        className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] lg:h-[600px]"
                      />
                    </div>

                    <div className="grid gap-2.5 sm:gap-3">
                      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[26px]">
                        <img
                          src="https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1200&q=80"
                          alt="Chocolate brownies styled for a refined bakery display"
                          className="h-36 w-full object-cover transition duration-700 hover:scale-105 sm:h-44 lg:h-[230px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between rounded-[20px] bg-[linear-gradient(180deg,#3a271f_0%,#2d1d17_100%)] p-5 text-[#fff8f2] shadow-[0_20px_40px_rgba(56,36,27,0.24)] sm:rounded-[24px] sm:p-6 lg:rounded-[26px] lg:p-7">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0a6] sm:text-[11px] sm:tracking-[0.24em]">
                            Our philosophy
                          </p>
                          <h2 className="font-heading mt-2.5 text-[1.4rem] font-semibold leading-[1.05] sm:mt-3 sm:text-[1.7rem] lg:text-[2rem]">
                            Good baking is restraint.
                          </h2>
                        </div>

                        <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#ead9ca] sm:mt-5 sm:text-sm sm:leading-7">
                          The difference is not how much goes in. It is knowing
                          what improves the final bite and what does not.
                        </p>

                        <Link
                          href="/demo/baker/menu"
                          className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-[#f0d6bf] transition hover:text-white"
                        >
                          Discover the flavours →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 top-3 rounded-[16px] border border-white/30 bg-[rgba(255,250,244,0.82)] px-3.5 py-3 shadow-[0_14px_32px_rgba(80,53,39,0.08)] backdrop-blur-md sm:left-4 sm:top-4 sm:rounded-[18px] sm:px-4 sm:py-3.5 lg:-left-5 lg:top-10 lg:rounded-[22px] lg:px-5 lg:py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.22em] lg:text-[11px] lg:tracking-[0.24em]">
                    Baked with intent
                  </p>
                  <p className="font-heading mt-1.5 text-[13px] font-semibold text-[var(--cocoa-1)] sm:text-[15px] lg:mt-2 lg:text-lg">
                    Rich, balanced, memorable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-5 md:px-8">
          <div className="overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#5f4031_55%,#7a5642_100%)] px-6 py-14 text-center shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d9bca2] sm:text-[11px]">
              Signature belief
            </p>
            <h2 className="font-heading mx-auto mt-4 max-w-4xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.8rem] lg:text-[3.5rem]">
              The best brownies are not the loudest. They are the ones people
              remember.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#ead9cc] sm:mt-6 sm:text-base sm:leading-8">
              Velvet Crumb is built on flavour depth, exact texture, and the kind
              of finish that makes an ordinary moment feel elevated.
            </p>
          </div>
        </section>

<section className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
  <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
    <div className="lg:sticky lg:top-28">
      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.3em]">
        Our story
      </p>

      <h2 className="font-heading mt-3 max-w-[10ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--cocoa-1)] sm:max-w-[11ch] sm:text-[2.55rem] lg:text-[3.2rem]">
        Built slowly, carefully, and on purpose.
      </h2>

      <div className="mt-6 max-w-lg space-y-4">
        <p className="text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
          Velvet Crumb did not begin with a trend. It began with a question:
          what makes a brownie feel genuinely exceptional rather than simply indulgent?
        </p>

        <p className="text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
          The answer was never excess. It was better ingredients, more precise
          texture, and a quieter, more refined idea of what a bakery experience
          could feel like.
        </p>
      </div>

      <div className="mt-8 grid max-w-md grid-cols-2 gap-3 sm:mt-10">
        <div className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4 shadow-[0_12px_24px_rgba(76,50,38,0.05)]">
          <p className="font-heading text-[1.4rem] font-semibold leading-none text-[var(--cocoa-1)] sm:text-[1.7rem]">
            2019
          </p>
          <p className="mt-2 text-[12px] leading-5 text-[var(--muted)] sm:text-[13px]">
            First recipes refined
          </p>
        </div>

        <div className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4 shadow-[0_12px_24px_rgba(76,50,38,0.05)]">
          <p className="font-heading text-[1.4rem] font-semibold leading-none text-[var(--cocoa-1)] sm:text-[1.7rem]">
            Small batch
          </p>
          <p className="mt-2 text-[12px] leading-5 text-[var(--muted)] sm:text-[13px]">
            Still the standard
          </p>
        </div>
      </div>
    </div>

    <div className="grid gap-4 sm:gap-5">
      {storySteps.map((item) => (
        <article
          key={item.title}
          className="rounded-[22px] border border-[var(--line)] bg-[rgba(255,251,246,0.88)] p-5 shadow-[0_14px_30px_rgba(76,50,38,0.06)] sm:rounded-[26px] sm:p-6 lg:rounded-[28px]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.24em]">
            {item.label}
          </p>
          <h3 className="font-heading mt-3 max-w-[18ch] text-[1.2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[1.35rem] lg:text-[1.55rem]">
            {item.title}
          </h3>
          <p className="mt-4 max-w-2xl text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

        <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2] sm:text-[11px] sm:tracking-[0.28em]">
                  What we believe
                </p>
                <h2 className="font-heading mt-3 max-w-lg text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Great baking is often about what you leave out.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#e7d8cc] sm:mt-6 sm:text-base sm:leading-8">
                  We believe restraint creates elegance. The texture should feel
                  deliberate, the sweetness balanced, and the final result strong
                  enough to speak for itself.
                </p>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
                  {principles.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5 lg:rounded-[24px]"
                    >
                      <h3 className="font-heading text-[1.2rem] font-semibold text-white sm:text-[1.3rem] lg:text-[1.35rem]">
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
                  src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1600&q=80"
                  alt="A premium stack of rich chocolate brownies"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,9,0.10)_0%,rgba(20,12,9,0.54)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:pb-7 lg:p-8">
                  <div className="max-w-sm rounded-[20px] border border-white/10 bg-[rgba(255,248,241,0.14)] p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5 lg:rounded-[24px]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ecd0b7] sm:text-[11px] sm:tracking-[0.24em]">
                      Quietly premium
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white sm:text-base sm:leading-7">
                      Refined branding, rich flavour, and a bakery experience that
                      feels polished without becoming precious.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4eadf_0%,#efe3d5_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.3em]">
                  Craftsmanship
                </p>
                <h2 className="font-heading mt-3 max-w-[13ch] text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:max-w-none sm:text-[2.45rem] lg:text-[2.95rem]">
                  Every tray is shaped by the same careful decisions.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8">
                  Precision matters at every stage, from the first mix to the
                  final box.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {craftsmanship.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 rounded-[22px] border border-[var(--line)] bg-[rgba(255,251,246,0.88)] p-5 shadow-[0_14px_30px_rgba(76,50,38,0.06)] sm:grid-cols-[82px_1fr] sm:gap-5 sm:rounded-[26px] sm:p-6 lg:rounded-[28px]"
                  >
                    <div className="font-heading text-[1.7rem] font-semibold leading-none text-[var(--accent-strong)] sm:text-3xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.2rem] font-semibold text-[var(--cocoa-1)] sm:text-[1.3rem] lg:text-[1.35rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.3em]">
                Designed for moments
              </p>
              <h2 className="font-heading mt-3 max-w-[12ch] text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:max-w-none sm:text-[2.4rem] lg:text-[2.9rem]">
                Made to feel right at home in gifting, gatherings, and everyday treats.
              </h2>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5">
                {values.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,251,246,0.88)] p-5 shadow-[0_12px_28px_rgba(76,50,38,0.06)] transition hover:-translate-y-0.5 sm:rounded-[24px] sm:p-6"
                  >
                    <h3 className="font-heading text-[1.2rem] font-semibold text-[var(--cocoa-1)] sm:text-[1.3rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-2.5 shadow-[0_28px_60px_rgba(76,50,38,0.12)] sm:rounded-[30px] sm:p-3 lg:rounded-[34px]">
                <img
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1400&q=80"
                  alt="Brownies styled on a tray for a premium bakery website"
                  className="h-[280px] w-full rounded-[22px] object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] sm:rounded-[26px] lg:h-[560px] lg:rounded-[28px]"
                />
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
                  Taste the brownies behind the story.
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--cocoa-2)]/80 sm:mt-6 sm:text-base sm:leading-8">
                  Explore signature flavours, seasonal favourites, and gift-ready
                  boxes made with the same care this page is meant to reflect.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] transition hover:-translate-y-0.5"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(69,43,31,0.14)] bg-[rgba(255,251,246,0.86)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] transition hover:bg-white"
                  >
                    Contact Bakery
                  </Link>
                </div>
              </div>

              <div className="min-h-[260px] overflow-hidden sm:min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80"
                  alt="Elegant brownie and dessert table styling"
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
