"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const navItems = [
  { label: "Home", href: "/demo/baker" },
  { label: "Story", href: "/demo/baker/about" },
  { label: "Cakes", href: "/demo/baker/menu" },
  { label: "Contact", href: "/demo/baker/contact" },
];

const signatureCakes = [
  {
    name: "Strawberry Chantilly",
    price: "£42",
    description:
      "Vanilla sponge layered with whipped mascarpone cream, ripe strawberries, and a soft cloud-like finish.",
    note: "Most loved",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Midnight Chocolate",
    price: "£46",
    description:
      "Deep cocoa sponge with glossy ganache, dark chocolate buttercream, and a luxurious melt-away crumb.",
    note: "Signature",
    image:
      "https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pistachio Rose",
    price: "£48",
    description:
      "Tender pistachio cake layered with rose cream and finished with a refined floral, nutty balance.",
    note: "Elegant pick",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  {
    title: "Designed to feel unforgettable",
    text: "Every cake is composed for beauty first, then perfected for flavour, texture, and balance.",
  },
  {
    title: "Freshly made to order",
    text: "No tired displays, no generic bakes — each cake is prepared with intention and finished close to collection.",
  },
  {
    title: "Celebration-worthy by default",
    text: "Whether it is a birthday, a wedding table, or an ordinary Friday, each cake is made to feel like an occasion.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Layered with precision",
    text: "From sponge to filling to finish, every element is portioned and assembled for a clean, elegant slice.",
  },
  {
    number: "02",
    title: "Balanced for flavour",
    text: "Sweetness is restrained, textures are varied, and every flavour note is chosen to feel rich without becoming heavy.",
  },
  {
    number: "03",
    title: "Finished like a centrepiece",
    text: "Each cake is styled, boxed, and presented to arrive as beautifully as it tastes.",
  },
];

const testimonials = [
  {
    quote:
      "Honestly stunning. It looked like a showpiece and somehow tasted even better than it looked.",
    author: "Layla M.",
  },
  {
    quote:
      "The chocolate cake was outrageously good — rich, smooth, and beautifully balanced.",
    author: "Owen T.",
  },
  {
    quote:
      "This is the kind of bakery that makes every celebration feel instantly more special.",
    author: "Priya D.",
  },
];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "24hr", label: "Fresh finish window" },
  { value: "10+", label: "Celebration styles" },
];

const highlights = [
  "Made to order",
  "Celebration cakes",
  "Luxury finishes",
];

export default function BakerHomePage() {
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
        ? "border-[rgba(111,77,88,0.16)] bg-[rgba(255,246,248,0.92)] shadow-[0_14px_38px_rgba(92,55,66,0.10)]"
        : "border-transparent bg-[rgba(255,246,248,0.72)]",
    [headerSolid],
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --rose-1: #fff7f8;
          --rose-2: #fdecef;
          --rose-3: #f7d9e1;
          --rose-4: #efbfd0;
          --berry-1: #4f2232;
          --berry-2: #6f3a50;
          --berry-3: #92556f;
          --cream: #fffaf3;
          --champagne: #f5e8d8;
          --gold: #c79052;
          --gold-strong: #ad7237;
          --muted: #7b5f69;
          --line: rgba(103, 63, 77, 0.14);
          --panel: rgba(255, 252, 249, 0.78);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background:
            radial-gradient(circle at top left, rgba(247, 190, 211, 0.28), transparent 28%),
            radial-gradient(circle at top right, rgba(204, 160, 111, 0.12), transparent 22%),
            linear-gradient(180deg, #fff8f8 0%, #fff1f4 40%, #fcede6 100%);
          color: var(--berry-1);
        }

        .font-heading {
          font-family: var(--font-heading), serif;
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
            transform: translateY(-8px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.85s ease-out 0.12s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.85s ease-out 0.22s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.85s ease-out 0.32s both;
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
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen text-[var(--berry-1)]`}
      >
        <header
          className={`fixed inset-x-0 top-0 z-[90] border-b backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 md:px-8">
            <Link
              href="/demo/baker"
              aria-label="Lune Cake Atelier home"
              className="group flex min-w-0 items-center gap-3"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.9)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--berry-2)] sm:h-11 sm:w-11 sm:text-[11px]">
                LC
              </span>
              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold uppercase tracking-[0.26em] text-[var(--gold)] sm:text-[10px]">
                  Cake Atelier
                </p>
                <p className="font-heading truncate text-[1rem] font-semibold tracking-[0.04em] text-[var(--berry-1)] transition group-hover:text-[var(--berry-3)] sm:text-[1.18rem]">
                  Lune Cake Atelier
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/demo/baker";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-[var(--berry-1)]"
                        : "text-[var(--berry-2)] hover:text-[var(--gold-strong)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/demo/baker/menu"
                className="rounded-full bg-[linear-gradient(90deg,#7f3d59_0%,#c79052_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(114,61,80,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(114,61,80,0.26)]"
              >
                Order a Cake
              </Link>
            </nav>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.92)] text-[var(--berry-1)] shadow-sm transition hover:bg-white md:hidden"
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
            <div className="fixed inset-0 z-[70] bg-[rgba(57,24,37,0.45)] md:hidden" />
            <div
              ref={menuPanelRef}
              className="animate-menu-in fixed inset-x-3 top-[5.8rem] z-[80] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(93,42,60,0.98)_0%,rgba(61,25,39,0.98)_100%)] p-3.5 shadow-[0_24px_60px_rgba(44,19,28,0.34)] sm:inset-x-4 sm:top-[6.1rem] sm:p-4 md:hidden"
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
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#8c4a67_0%,#c79052_100%)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(86,42,59,0.24)]"
                >
                  Order a Cake
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[104px] sm:pt-[112px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,193,214,0.34),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(201,151,86,0.12),transparent_22%)]" />
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#f1bfd1]/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f4d8b8]/24 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-5 sm:py-14 md:px-8 lg:min-h-[88vh] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-24">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.8)] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-strong)] shadow-[0_8px_18px_rgba(109,64,79,0.06)] backdrop-blur-sm sm:px-4 sm:text-[11px]">
                Celebration cakes, beautifully done
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-5 max-w-[10ch] text-[2.85rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--berry-1)] sm:mt-6 sm:text-[3.9rem] md:max-w-xl md:text-6xl lg:max-w-[11ch] lg:text-[5.35rem]">
                Cakes that make the room stop.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Lush layers, graceful finishes, and flavour combinations designed
                to feel every bit as special as the moment they are made for.
              </p>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-2.5 sm:mt-8">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.74)] px-4 text-[12px] font-medium text-[var(--berry-2)] shadow-[0_8px_18px_rgba(109,64,79,0.04)] sm:text-[13px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#7f3d59_0%,#c79052_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(114,61,80,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(114,61,80,0.25)]"
                >
                  Explore Cakes
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.86)] px-6 py-3.5 text-sm font-semibold text-[var(--berry-2)] shadow-[0_8px_24px_rgba(109,64,79,0.05)] transition hover:bg-white"
                >
                  Plan a Celebration
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-7 grid grid-cols-3 gap-2.5 rounded-[24px] border border-white/50 bg-[rgba(255,255,255,0.64)] p-4 shadow-[0_24px_60px_rgba(111,62,82,0.08)] backdrop-blur-md sm:mt-10 sm:gap-4 sm:rounded-[30px] sm:p-5">
                {stats.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="font-heading text-xl font-semibold leading-none text-[var(--berry-1)] sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-[#8f7280] sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="relative mx-auto max-w-[760px]">
                <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(252,236,241,0.7)_100%)] p-2.5 shadow-[0_28px_80px_rgba(112,64,84,0.14)] sm:rounded-[34px] sm:p-3 lg:rounded-[38px]">
                  <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.03fr_0.97fr]">
                    <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[30px]">
                      <img
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80"
                        alt="An elegant layered cake with strawberries and cream"
                        className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[410px] lg:h-[590px]"
                      />
                    </div>

                    <div className="grid gap-2.5 sm:gap-3">
                      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[26px]">
                        <img
                          src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=80"
                          alt="Beautiful celebration cake styling"
                          className="h-36 w-full object-cover transition duration-700 hover:scale-105 sm:h-44 lg:h-[225px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between rounded-[20px] bg-[linear-gradient(180deg,#5f2f45_0%,#401d2d_100%)] p-5 text-white shadow-[0_20px_42px_rgba(72,34,50,0.24)] sm:rounded-[24px] sm:p-6 lg:rounded-[26px] lg:p-7">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f2d7a8] sm:text-[11px]">
                            This week’s centrepiece
                          </p>
                          <h2 className="font-heading mt-2.5 text-[1.45rem] font-semibold leading-[1.05] sm:mt-3 sm:text-[1.75rem] lg:text-[2.05rem]">
                            Strawberry Chantilly
                          </h2>
                        </div>

                        <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#f5e6eb] sm:mt-5 sm:text-sm sm:leading-7">
                          Airy vanilla layers, mascarpone cream, and fresh berries
                          finished with a soft romantic touch.
                        </p>

                        <Link
                          href="/demo/baker/menu"
                          className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-[#f3d39a] transition hover:text-white"
                        >
                          See the full cake →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 top-3 rounded-[16px] border border-white/40 bg-[rgba(255,255,255,0.78)] px-3.5 py-3 shadow-[0_14px_32px_rgba(108,61,78,0.08)] backdrop-blur-md sm:left-4 sm:top-4 sm:rounded-[18px] sm:px-4 sm:py-3.5 lg:-left-4 lg:top-8 lg:rounded-[22px] lg:px-5 lg:py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-strong)] sm:text-[10px] lg:text-[11px]">
                    Booking now
                  </p>
                  <p className="font-heading mt-1.5 text-[13px] font-semibold text-[var(--berry-1)] sm:text-[15px] lg:mt-2 lg:text-lg">
                    Weekend celebration slots
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-strong)] sm:text-[11px]">
                Signature cakes
              </p>
              <h2 className="font-heading mt-3 max-w-[13ch] text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--berry-1)] sm:max-w-none sm:text-[2.6rem] md:text-[3.05rem]">
                Refined favourites made to be remembered.
              </h2>
            </div>

            <Link
              href="/demo/baker/menu"
              className="text-sm font-semibold text-[var(--berry-3)] transition hover:text-[var(--gold-strong)]"
            >
              View full cake menu →
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {signatureCakes.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.82)] shadow-[0_16px_42px_rgba(109,64,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(109,64,79,0.14)] sm:rounded-[28px] lg:rounded-[30px]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="inline-flex rounded-full border border-[#f2d7df] bg-[#fff3f6] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--berry-3)]">
                        {item.note}
                      </span>
                      <h3 className="font-heading mt-3 text-[1.4rem] font-semibold leading-[1.08] text-[var(--berry-1)] sm:text-[1.56rem]">
                        {item.name}
                      </h3>
                    </div>

                    <span className="shrink-0 pt-2 text-sm font-semibold text-[var(--gold-strong)]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-4 max-w-sm text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                    {item.description}
                  </p>

                  <Link
                    href="/demo/baker/menu"
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--berry-3)] transition hover:text-[var(--gold-strong)]"
                  >
                    Add to celebration →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.18)] bg-[linear-gradient(135deg,#55283a_0%,#7a4358_42%,#c79052_100%)] shadow-[0_28px_80px_rgba(89,41,58,0.24)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f3d5a2] sm:text-[11px]">
                  Why Lune
                </p>
                <h2 className="font-heading mt-3 max-w-lg text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[2.65rem] lg:text-[3.1rem]">
                  Not just dessert — a whole atmosphere in cake form.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#f8e9ee] sm:mt-6 sm:text-base sm:leading-8">
                  We make cakes that feel polished, generous, and unmistakably
                  special — beautiful enough for the first impression and good
                  enough to be talked about long after the last slice.
                </p>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
                  {values.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/12 bg-white/6 p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5 lg:rounded-[24px]"
                    >
                      <h3 className="font-heading text-[1.22rem] font-semibold text-white sm:text-[1.34rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-[#f7e7ed] sm:text-sm sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[440px]">
                <img
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury celebration cake styled for an elegant bakery brand"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,13,20,0.14)_0%,rgba(31,13,20,0.52)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:pb-7 lg:p-8">
                  <div className="max-w-sm rounded-[20px] border border-white/12 bg-[rgba(255,251,247,0.14)] p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5 lg:rounded-[24px]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4d39c] sm:text-[11px]">
                      Wedding & event ready
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white sm:text-base sm:leading-7">
                      Soft romance, clean detail, and a finish that belongs in the
                      centre of the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff1f4_0%,#fce8ed_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-strong)] sm:text-[11px]">
                  Our process
                </p>
                <h2 className="font-heading mt-3 max-w-[13ch] text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--berry-1)] sm:max-w-none sm:text-[2.5rem] lg:text-[3rem]">
                  Careful from first whisk to final ribbon.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8">
                  Behind every beautiful cake is a method built around texture,
                  timing, and the little details that make a slice feel luxurious.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 rounded-[22px] border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-5 shadow-[0_14px_30px_rgba(109,64,79,0.06)] sm:grid-cols-[82px_1fr] sm:gap-5 sm:rounded-[26px] sm:p-6 lg:rounded-[28px]"
                  >
                    <div className="font-heading text-[1.8rem] font-semibold leading-none text-[var(--gold-strong)] sm:text-3xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.22rem] font-semibold text-[var(--berry-1)] sm:text-[1.34rem]">
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-strong)] sm:text-[11px]">
                Kind words
              </p>
              <h2 className="font-heading mt-3 max-w-[12ch] text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--berry-1)] sm:max-w-none sm:text-[2.45rem] lg:text-[2.95rem]">
                Loved for beauty, praised for taste.
              </h2>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,255,255,0.8)] p-5 shadow-[0_12px_28px_rgba(109,64,79,0.06)] transition hover:-translate-y-0.5 sm:rounded-[24px] sm:p-6"
                  >
                    <p className="text-[14px] leading-6 text-[var(--berry-2)] sm:text-sm sm:leading-7">
                      “{item.quote}”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[var(--berry-3)]">
                      {item.author}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[rgba(255,255,255,0.78)] p-2.5 shadow-[0_28px_60px_rgba(109,64,79,0.12)] sm:rounded-[30px] sm:p-3 lg:rounded-[34px]">
                <img
                  src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1400&q=80"
                  alt="An elegant pink cake photographed for a luxury cake studio"
                  className="h-[280px] w-full rounded-[22px] object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] sm:rounded-[26px] lg:h-[560px] lg:rounded-[28px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.32)] bg-[linear-gradient(135deg,#f8d8e1_0%,#fff4f6_46%,#f1dfc8_100%)] shadow-[0_24px_70px_rgba(111,62,82,0.12)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--berry-3)] sm:text-[11px]">
                  Ready to order?
                </p>

                <h2 className="font-heading mt-3 max-w-[12ch] text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--berry-1)] sm:max-w-xl sm:text-[2.5rem] lg:text-[3.05rem]">
                  Let the cake be the memorable part.
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--berry-2)]/80 sm:mt-6 sm:text-base sm:leading-8">
                  Browse signature cakes, reserve a custom design, or get in touch
                  for birthdays, weddings, showers, and every gathering worth
                  dressing beautifully.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#7f3d59_0%,#c79052_100%)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Browse Cakes
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(100,61,75,0.14)] bg-[rgba(255,255,255,0.72)] px-6 py-3.5 text-sm font-semibold text-[var(--berry-2)] transition hover:bg-white"
                  >
                    Contact the Atelier
                  </Link>
                </div>
              </div>

              <div className="min-h-[260px] overflow-hidden sm:min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1400&q=80"
                  alt="A luxury cake styled with flowers and soft pastel details"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] bg-[linear-gradient(180deg,#fff5f6_0%,#fce9ee_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 sm:py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--gold-strong)] sm:text-[11px]">
                Lune Cake Atelier
              </p>
              <h3 className="font-heading mt-3 text-[1.5rem] font-semibold tracking-[-0.02em] text-[var(--berry-1)] sm:text-[1.72rem]">
                Luxury cakes with a romantic modern finish
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                Crafted for celebrations, styled with intention, and baked to feel
                as special as the reason you ordered one.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--berry-1)] sm:tracking-[0.18em]">
                Navigate
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[var(--gold-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--berry-1)] sm:tracking-[0.18em]">
                Atelier Details
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                <p>18 Crescent Arcade</p>
                <p>Manchester</p>
                <p>M1 5AB</p>
                <a
                  href="#"
                  className="inline-block pt-2 transition hover:text-[var(--gold-strong)]"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--berry-1)] sm:tracking-[0.18em]">
                Opening Hours
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                <p>Tue–Fri: 10:00 – 6:00</p>
                <p>Sat: 10:00 – 4:00</p>
                <p>Sun–Mon: By pre-order only</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
