"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Inter, DM_Serif_Display } from "next/font/google";

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const navItems = [
  { label: "Home", href: "/demo/baker" },
  { label: "Cakes", href: "/demo/baker/menu" },
  { label: "Studio", href: "/demo/baker/about" },
  { label: "Contact", href: "/demo/baker/contact" },
];

const flavourLines = [
  "Brown butter vanilla with poached pear",
  "Dark chocolate with black cherry and ganache",
  "Lemon sponge with mascarpone and soft zest",
  "Pistachio cream with rose and toasted crumb",
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
        ? "bg-[rgba(250,244,238,0.92)] border-[rgba(64,41,34,0.12)]"
        : "bg-[rgba(250,244,238,0.45)] border-transparent",
    [headerSolid],
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --paper: #faf4ee;
          --paper-deep: #f2e6da;
          --ink: #2c1d19;
          --ink-soft: #705b52;
          --line: rgba(64, 41, 34, 0.12);
          --accent: #a46642;
          --accent-deep: #7e492d;
          --berry: #7f3f4e;
          --white: #fffdf9;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
          background:
            radial-gradient(circle at top left, rgba(193, 146, 111, 0.08), transparent 28%),
            linear-gradient(180deg, #fbf6f0 0%, #f7efe6 48%, #f4e9de 100%);
          color: var(--ink);
        }

        .font-heading {
          font-family: var(--font-heading), serif;
        }

        .hairline {
          position: relative;
        }

        .hairline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -0.55rem;
          width: 3.25rem;
          height: 1px;
          background: rgba(44, 29, 25, 0.18);
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade {
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
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-rise {
          animation: rise 0.8s ease-out both;
        }

        .animate-rise-delay-1 {
          animation: rise 0.8s ease-out 0.1s both;
        }

        .animate-rise-delay-2 {
          animation: rise 0.8s ease-out 0.2s both;
        }

        .animate-fade {
          animation: fade 1s ease-out both;
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
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen text-[var(--ink)]`}
      >
        <header
          className={`fixed inset-x-0 top-0 z-[90] border-b backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
            <Link
              href="/demo/baker"
              aria-label="Aurelian Cake Studio home"
              className="flex items-center gap-3"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--ink)]">
                AC
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Cake Studio
                </p>
                <p className="font-heading text-[1.2rem] leading-none tracking-[0.03em]">
                  Aurelian
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/demo/baker/menu"
                className="border-b border-[var(--ink)] pb-1 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent-deep)] hover:border-[var(--accent-deep)]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,253,249,0.72)] text-[var(--ink)] md:hidden"
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
            <div className="fixed inset-0 z-[70] bg-[rgba(24,15,12,0.38)] md:hidden" />
            <div
              ref={menuPanelRef}
              className="animate-menu-in fixed inset-x-3 top-[5.8rem] z-[80] border border-[rgba(255,255,255,0.12)] bg-[rgba(43,27,22,0.98)] p-3 shadow-[0_24px_60px_rgba(27,17,13,0.32)] md:hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 px-4 py-4 text-[15px] font-medium text-white/95 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/demo/baker/menu"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 text-[15px] font-semibold text-[#f1cfb6]"
                >
                  Order a Cake
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative overflow-hidden pt-[104px] sm:pt-[116px]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-14">
            <div className="flex min-h-[520px] flex-col justify-between lg:min-h-[760px]">
              <div>
                <p className="animate-rise text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                  Made to order for birthdays, dinners, weddings, and beautiful tables
                </p>

                <h1 className="font-heading animate-rise-delay-1 mt-5 max-w-[9ch] text-[3.5rem] leading-[0.88] tracking-[-0.05em] sm:text-[4.8rem] lg:text-[7.2rem]">
                  Cakes with presence.
                </h1>

                <p className="animate-rise-delay-2 mt-6 max-w-xl text-[15px] leading-7 text-[var(--ink-soft)] sm:text-[17px] sm:leading-8">
                  Not cute. Not busy. Not overdone. Just beautifully composed cakes
                  with proper flavour, clean lines, and the kind of finish that makes
                  a room feel instantly more considered.
                </p>

                <div className="animate-rise-delay-2 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex min-h-12 items-center justify-center bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-deep)]"
                  >
                    Explore the collection
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex min-h-12 items-center justify-center border border-[var(--line)] bg-[rgba(255,253,249,0.7)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
                  >
                    Request something custom
                  </Link>
                </div>
              </div>

              <div className="animate-rise-delay-2 mt-12 grid gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
                <div>
                  <p className="font-heading text-[2rem] leading-none">4.9/5</p>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--ink-soft)]">
                    average customer rating
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[2rem] leading-none">Made fresh</p>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--ink-soft)]">
                    for the date it is actually needed
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[2rem] leading-none">Refined</p>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--ink-soft)]">
                    finishes without the bakery cliché
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade relative">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1600&q=80"
                alt="Editorial-style celebration cake with floral detail"
                className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[760px]"
              />
              <div className="absolute bottom-0 left-0 max-w-[280px] bg-[rgba(250,244,238,0.9)] p-5 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--berry)]">
                  This season
                </p>
                <p className="font-heading mt-2 text-[2rem] leading-[0.92]">
                  Soft florals, clean sides, unapologetically good sponge.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Our approach
              </p>
              <h2 className="font-heading hairline mt-4 max-w-[8ch] text-[2.8rem] leading-[0.9] tracking-[-0.04em] sm:text-[4rem]">
                More fashion editorial than market stall.
              </h2>
            </div>

            <div className="grid gap-8 text-[15px] leading-8 text-[var(--ink-soft)] sm:text-base">
              <p>
                Aurelian is built around restraint. The cakes are not cluttered with
                meaningless decoration, overloaded piping, or sugar for its own sake.
                They are composed to feel quiet, elegant, and certain of themselves.
              </p>
              <p>
                The flavour work matters just as much as the finish: real vanilla,
                proper chocolate, clean fruit notes, balanced sweetness, and sponge
                that still tastes like cake rather than just a vehicle for icing.
              </p>
              <p>
                Everything is made to feel like it belongs at the centre of the
                table, not shoved off to the side as an afterthought.
              </p>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="min-h-[360px] lg:min-h-[720px]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"
              alt="Layered cream cake with berries"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center bg-[var(--ink)] px-4 py-14 text-white sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#e2bf9d]">
                Signature flavour direction
              </p>
              <h2 className="font-heading mt-4 max-w-[10ch] text-[3rem] leading-[0.9] tracking-[-0.04em] sm:text-[4.2rem]">
                Delicate first. Memorable after.
              </h2>

              <div className="mt-10 space-y-5">
                {flavourLines.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/12 pb-5 text-[15px] leading-7 text-white/80 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/demo/baker/menu"
                className="mt-8 inline-flex border-b border-white pb-1 text-sm font-semibold text-white"
              >
                View full menu
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1600&q=80"
                alt="Pink buttercream cake with elegant styling"
                className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[680px]"
              />
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Celebration cakes
              </p>
              <h2 className="font-heading mt-4 max-w-[9ch] text-[2.9rem] leading-[0.9] tracking-[-0.04em] sm:text-[4rem]">
                Designed for the whole room, not just the photo.
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-8 text-[var(--ink-soft)] sm:text-base">
                Birthday cakes, dinner cakes, engagement cakes, and wedding-adjacent
                cakes should feel intentional from every angle. Ours are composed to
                read beautifully in person first — the photograph comes for free.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--berry)]">
                    For birthdays
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Sculpted buttercream, tall layers, clean inscriptions, and proper
                    flavour underneath it all.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--berry)]">
                    For intimate gatherings
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Smaller cakes with enough poise to make a dinner table feel dressed.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--berry)]">
                    For weddings & events
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Soft palettes, floral work, refined finishes, and a more elevated,
                    less expected visual language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(255,253,249,0.48)]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                  Ordering
                </p>
                <h2 className="font-heading mt-4 max-w-[8ch] text-[2.8rem] leading-[0.9] tracking-[-0.04em] sm:text-[3.8rem]">
                  Straightforward, because it should be.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-heading text-[2rem] leading-none">01</p>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Choose from the signature menu or enquire about something custom.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[2rem] leading-none">02</p>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                    Tell us the date, size, and mood you want the cake to carry.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[2rem] leading-none">03</p>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                    We bake and finish it fresh for collection or arranged delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                  Final word
                </p>
                <h2 className="font-heading mt-4 max-w-[9ch] text-[3rem] leading-[0.9] tracking-[-0.04em] sm:text-[4.2rem]">
                  Let the cake carry some authority.
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-soft)] sm:text-base">
                  Browse the collection for signature designs, or get in touch for
                  something custom and celebration-specific.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex min-h-12 items-center justify-center bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-deep)]"
                >
                  View cakes
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70"
                >
                  Contact studio
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=80"
                alt="Elegant white cake with editorial styling"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Aurelian
              </p>
              <h3 className="font-heading mt-3 max-w-[10ch] text-[2rem] leading-[0.95]">
                Cake studio for elegant celebrations.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-7 text-[var(--ink-soft)]">
                Made-to-order cakes with refined finishes, balanced flavour, and a
                stronger point of view than the usual bakery wallpaper.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                Navigate
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--ink-soft)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[var(--ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                Studio
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--ink-soft)]">
                <p>22 Portland Street</p>
                <p>Manchester</p>
                <p>M1 4GS</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
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
