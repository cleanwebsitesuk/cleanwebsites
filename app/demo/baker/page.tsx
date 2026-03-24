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

const featuredBrownies = [
  {
    name: "Sea Salt Dark",
    price: "£4.80",
    description:
      "A rich dark chocolate brownie with a glossy fudgy centre and a clean sea salt finish.",
    note: "Most loved",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Brown Butter Blondie",
    price: "£4.60",
    description:
      "Golden, chewy, and quietly indulgent with brown butter depth and soft vanilla notes.",
    note: "Small batch",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hazelnut Praline",
    price: "£5.20",
    description:
      "Deep cocoa layered with toasted hazelnut praline and a little crunch for contrast.",
    note: "Signature",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  {
    title: "Thoughtful ingredients",
    text: "We use proper chocolate, cultured butter, deep cocoa, and balanced sweetness for depth without heaviness.",
  },
  {
    title: "Elegant presentation",
    text: "Every bake is designed to feel premium enough to gift and approachable enough for a quiet coffee break.",
  },
  {
    title: "Hand-finished daily",
    text: "Small batches allow better texture, cleaner finishing, and a more consistent standard across every tray.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Mixed in small batches",
    text: "Better control, richer texture, and cleaner consistency.",
  },
  {
    number: "02",
    title: "Baked for a fudgy centre",
    text: "Deliberately timed for depth, softness, and a delicate top crust.",
  },
  {
    number: "03",
    title: "Finished for gifting",
    text: "Made to look as considered as they taste.",
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
      "It feels like a proper premium local brand rather than a generic bakery. Everything looks considered.",
    author: "Daniel S.",
  },
  {
    quote:
      "Rich and balanced without being too sweet. The kind of place you immediately want to recommend.",
    author: "Nina P.",
  },
];

const stats = [
  { value: "4.9/5", label: "Customer rating" },
  { value: "12+", label: "Signature flavours" },
  { value: "48hr", label: "Fresh-bake window" },
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
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
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
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerClasses = useMemo(
    () =>
      headerSolid
        ? "border-[rgba(66,44,34,0.12)] bg-[rgba(250,244,237,0.92)] shadow-[0_12px_34px_rgba(51,33,25,0.08)]"
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
          --line-soft: rgba(255, 255, 255, 0.18);
          --panel: rgba(255, 251, 246, 0.8);
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
        <div className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[linear-gradient(90deg,#2c1c16_0%,#59392d_54%,#8a6147_100%)] px-4 py-3 text-center text-sm font-medium text-[#fff8f2] shadow-[0_12px_30px_rgba(47,29,22,0.22)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/75 underline-offset-4 transition hover:text-[#f2dcc5]"
          >
            Clean Websites
          </Link>
        </div>

        <header
          className={`fixed inset-x-0 top-[46px] z-[90] border-b backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/baker"
              aria-label="Velvet Crumb home"
              className="group flex items-center gap-3"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,252,248,0.85)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--cocoa-2)]">
                VC
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                  Brownie Bakery
                </p>
                <p className="font-heading text-[1.12rem] font-semibold tracking-[0.12em] text-[var(--cocoa-1)] transition group-hover:text-[var(--accent-strong)]">
                  Velvet Crumb
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
                Order Brownies
              </Link>
            </nav>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] p-3 text-[var(--cocoa-1)] shadow-sm transition hover:bg-white md:hidden"
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
            <div className="fixed inset-0 z-[70] bg-[rgba(29,18,14,0.45)] md:hidden" />
            <div
              ref={menuPanelRef}
              className="animate-menu-in fixed inset-x-4 top-[8.4rem] z-[80] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(59,38,29,0.98)_0%,rgba(38,24,18,0.98)_100%)] p-4 shadow-[0_24px_60px_rgba(28,18,13,0.42)] md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/demo/baker/menu"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6f4d3d_0%,#b9865e_100%)] px-5 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_12px_30px_rgba(80,53,39,0.24)]"
                >
                  Order Brownies
                </Link>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Back to Clean Websites
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[180px] md:pt-[136px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,142,0.22),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,58,45,0.10),transparent_24%)]" />
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c79d74]/14 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7a5338]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.9)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] shadow-[0_8px_18px_rgba(74,52,38,0.05)] backdrop-blur-sm">
                Handcrafted in small batches
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-6xl lg:text-[5rem]">
                Brownies with depth, balance, and a premium finish.
              </h1>

              <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Velvet Crumb is a premium brownie bakery concept built around deep
                chocolate flavour, elegant presentation, and a calmer, more
                refined brand presence than the usual dessert-site template.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/demo/baker/about"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.9)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] shadow-[0_8px_24px_rgba(73,49,37,0.05)] transition hover:bg-white"
                >
                  Discover the Brand
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-[30px] border border-white/50 bg-[rgba(255,251,246,0.72)] p-5 shadow-[0_24px_60px_rgba(79,52,39,0.08)] backdrop-blur-md">
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
              <div className="relative mx-auto max-w-[700px]">
                <div className="overflow-hidden rounded-[38px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(180deg,rgba(255,251,246,0.86)_0%,rgba(244,234,223,0.76)_100%)] p-3 shadow-[0_34px_90px_rgba(73,48,36,0.14)]">
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
                          <h2 className="font-heading mt-3 text-[2rem] font-semibold leading-[1.05]">
                            Fudgy centres. Clean finish.
                          </h2>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#ead9ca]">
                          A stronger mix of warmth, product focus, and premium restraint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-4 top-8 hidden rounded-[22px] border border-white/30 bg-[rgba(255,250,244,0.76)] px-5 py-4 shadow-[0_18px_42px_rgba(80,53,39,0.1)] backdrop-blur-md lg:block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    This week’s feature
                  </p>
                  <p className="font-heading mt-2 text-lg font-semibold text-[var(--cocoa-1)]">
                    Sea Salt Dark
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Featured brownies
              </p>
              <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[3rem]">
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredBrownies.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[30px] border border-[var(--line)] bg-[rgba(255,251,246,0.84)] shadow-[0_16px_42px_rgba(76,50,38,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(76,50,38,0.14)]"
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
                      <h3 className="font-heading mt-3 text-[1.55rem] font-semibold leading-[1.1] text-[var(--cocoa-1)]">
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

                  <Link
                    href="/demo/baker/menu"
                    className="mt-6 inline-flex text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--cocoa-1)]"
                  >
                    View brownie →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="overflow-hidden rounded-[38px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] shadow-[0_28px_70px_rgba(49,31,24,0.22)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9bca2]">
                  Brand feel
                </p>
                <h2 className="font-heading mt-3 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3rem]">
                  Warm enough to feel local. Polished enough to feel premium.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#e7d8cc]">
                  The page now has stronger variation through the scroll: light product
                  presentation, a darker immersive brand section, cleaner proof blocks,
                  and a more deliberate final CTA.
                </p>

                <div className="mt-10 grid gap-5">
                  {values.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <h3 className="font-heading text-[1.35rem] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#e8d9cd]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury brownie arrangement styled for a premium bakery brand"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,9,0.15)_0%,rgba(20,12,9,0.42)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-sm rounded-[24px] border border-white/10 bg-[rgba(255,248,241,0.12)] p-5 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ecd0b7]">
                      Designed to convert
                    </p>
                    <p className="mt-3 text-base leading-7 text-white">
                      Stronger contrast, better section rhythm, and more believable UX polish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4eadf_0%,#efe3d5_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  How we work
                </p>
                <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[2.95rem]">
                  A clearer process creates a more convincing premium brand.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                  Instead of repeating the same section pattern, this page now uses
                  a cleaner flow with distinct visual moments and more functional UI.
                </p>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-5 rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.84)] p-6 shadow-[0_14px_30px_rgba(76,50,38,0.06)] sm:grid-cols-[90px_1fr]"
                  >
                    <div className="font-heading text-3xl font-semibold leading-none text-[var(--accent-strong)]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.35rem] font-semibold text-[var(--cocoa-1)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Customer notes
              </p>
              <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[2.9rem]">
                Loved for flavour, texture, and presentation.
              </h2>

              <div className="mt-8 grid gap-5">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,251,246,0.84)] p-6 shadow-[0_12px_28px_rgba(76,50,38,0.06)] transition hover:-translate-y-0.5"
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

            <div>
              <div className="overflow-hidden rounded-[34px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-3 shadow-[0_28px_60px_rgba(76,50,38,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1400&q=80"
                  alt="Brownies styled on a tray for a premium bakery website"
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

                <h2 className="font-heading mt-3 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[3rem]">
                  Browse the menu and find your next favourite bake.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--cocoa-2)]/80">
                  From classic dark chocolate squares to seasonal flavours and
                  gift-ready boxes, Velvet Crumb is designed to feel like a brand
                  people want to copy for their own business.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] transition hover:-translate-y-0.5"
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
                  src="https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1400&q=80"
                  alt="Chocolate brownies arranged for a premium bakery brand"
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
              <h3 className="font-heading mt-3 text-[1.65rem] font-semibold tracking-[-0.02em] text-[var(--cocoa-1)]">
                Premium brownie bakery
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
                A refined small-business bakery concept focused on handcrafted
                brownies, elegant presentation, and a visual identity that feels
                warm, modern, and confidently premium.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--cocoa-1)]"
              >
                Back to Clean Websites →
              </Link>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cocoa-1)]">
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
