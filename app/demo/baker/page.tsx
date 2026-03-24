"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const featuredBrownies = [
  {
    name: "Sea Salt Dark",
    price: "£4.80",
    description:
      "Deep cocoa brownie finished with hand-flaked sea salt for a rich, balanced bite.",
    tag: "Best seller",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Brown Butter Blondie",
    price: "£4.60",
    description:
      "Golden, chewy blondie with brown butter notes and a delicate vanilla finish.",
    tag: "Small batch",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hazelnut Praline",
    price: "£5.20",
    description:
      "Fudgy chocolate base layered with toasted hazelnut praline and soft crunch.",
    tag: "Signature",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
  },
];

const highlights = [
  {
    title: "Baked fresh in small batches",
    text: "Each tray is made with care for texture, depth, and consistency worth coming back for.",
  },
  {
    title: "Proper chocolate, not shortcuts",
    text: "We use high-quality cocoa, dark chocolate, real butter, and thoughtfully sourced ingredients.",
  },
  {
    title: "Elegant gifting and everyday treats",
    text: "Perfect for coffee runs, dinner parties, thank-you boxes, and indulgent weekend moments.",
  },
];

const stats = [
  { value: "4.9/5", label: "Local customer rating" },
  { value: "48hr", label: "Fresh-bake window" },
  { value: "12+", label: "Signature flavours" },
];

const testimonials = [
  {
    quote:
      "The Sea Salt Dark brownie is genuinely one of the best I’ve had. Rich, soft, and beautifully balanced.",
    author: "Amelia R.",
  },
  {
    quote:
      "Everything feels considered, from the packaging to the flavour. It feels like a proper premium local brand.",
    author: "Daniel M.",
  },
  {
    quote:
      "Not overly sweet, not heavy, just incredibly well made. Velvet Crumb has become my go-to gift box order.",
    author: "Priya S.",
  },
];

export default function BakerHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackButton(window.scrollY < 440);
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
            box-shadow: 0 0 0 rgba(106, 72, 52, 0.1);
          }
          50% {
            box-shadow: 0 12px 30px rgba(106, 72, 52, 0.16);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.82s ease-out both;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.82s ease-out 0.12s both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.82s ease-out 0.24s both;
        }

        .animate-fade-up-delay-3 {
          animation: fadeUp 0.82s ease-out 0.36s both;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float-soft {
          animation: floatSoft 6.5s ease-in-out infinite;
        }

        .animate-glow-soft {
          animation: shimmerGlow 3.6s ease-in-out infinite;
        }
      `}</style>

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f1e8_0%,#f5ede3_32%,#f1e8dc_100%)] text-[#2f211a]">
        <div className="fixed inset-x-0 top-0 z-[90] border-b border-[#8f6d58]/20 bg-[linear-gradient(90deg,#5c3b2b_0%,#7a5338_52%,#9b6d45_100%)] px-4 py-3 text-center text-sm font-medium text-[#fff8f2] shadow-[0_10px_30px_rgba(74,45,28,0.25)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-[#fff8f2]/80 underline-offset-4 transition hover:text-white"
          >
            Clean Websites
          </Link>
        </div>

        <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-[#d9c6b5] bg-[rgba(248,241,232,0.82)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/demo/baker"
              className="text-xl font-semibold uppercase tracking-[0.22em] text-[#4a3024]"
            >
              Velvet Crumb
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/demo/baker"
                className="text-sm font-medium text-[#5d4639] transition hover:text-[#8d5e3b]"
              >
                Home
              </Link>
              <Link
                href="/demo/baker/about"
                className="text-sm font-medium text-[#5d4639] transition hover:text-[#8d5e3b]"
              >
                About
              </Link>
              <Link
                href="/demo/baker/menu"
                className="text-sm font-medium text-[#5d4639] transition hover:text-[#8d5e3b]"
              >
                Menu
              </Link>
              <Link
                href="/demo/baker/contact"
                className="text-sm font-medium text-[#5d4639] transition hover:text-[#8d5e3b]"
              >
                Contact
              </Link>
              <Link
                href="/demo/baker/menu"
                className="rounded-full bg-[linear-gradient(90deg,#6a4834_0%,#9a6a45_100%)] px-5 py-3 text-sm font-medium text-[#fff9f4] shadow-[0_12px_30px_rgba(90,57,39,0.24)] transition hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(90,57,39,0.3)]"
              >
                Order Brownies
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-[#dcc9ba] bg-[#fffaf5]/90 p-3 text-[#4a3024] shadow-sm transition hover:bg-white md:hidden"
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
          className={`animate-glow-soft fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-[#d7c1b0] bg-[rgba(255,250,245,0.94)] px-4 py-2 text-sm font-semibold text-[#7b5238] shadow-[0_10px_24px_rgba(104,71,51,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
          ${
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
              className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-[rgba(35,22,16,0.52)] transition-opacity duration-200 md:hidden"
            />
            <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(73,47,34,0.98)_0%,rgba(45,29,21,0.98)_100%)] p-4 shadow-[0_22px_60px_rgba(28,18,13,0.42)] transition-all duration-200 ease-out animate-[menuIn_0.2s_ease-out] md:hidden">
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
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6a4834_0%,#9a6a45_100%)] px-5 py-3.5 text-center text-sm font-semibold text-[#fff9f4] shadow-[0_12px_30px_rgba(90,57,39,0.24)] transition hover:scale-[1.01]"
                >
                  Order Brownies
                </Link>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[180px] md:pt-[130px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,170,129,0.20),transparent_32%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#b98b63]/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#8b5e3c]/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[#d8c3b1] bg-[rgba(255,250,245,0.9)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5e3f] shadow-[0_8px_20px_rgba(79,53,37,0.06)] backdrop-blur-sm">
                Artisanal Brownie Bakery
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#2f211a] sm:text-5xl lg:text-6xl">
                Handcrafted brownies with a richer, more refined finish.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#654d40] sm:text-lg">
                Velvet Crumb is a modern brownie bakery creating deeply fudgy,
                small-batch bakes with premium ingredients, elegant presentation,
                and just the right amount of indulgence.
              </p>

              <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6a4834_0%,#9a6a45_100%)] px-6 py-3.5 text-sm font-medium text-[#fffaf5] shadow-[0_12px_30px_rgba(90,57,39,0.22)] transition hover:scale-[1.02]"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/demo/baker/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#dcc7b8] bg-[rgba(255,250,245,0.9)] px-6 py-3.5 text-sm font-medium text-[#473328] shadow-[0_8px_24px_rgba(86,61,47,0.05)] transition hover:bg-white hover:shadow-md"
                >
                  Our Story
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-[30px] border border-white/70 bg-[rgba(255,249,243,0.84)] p-5 shadow-[0_20px_50px_rgba(80,56,39,0.10)] backdrop-blur-md">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-[#2f211a]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[#756355]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="relative mx-auto max-w-[620px]">
                <div className="absolute -left-6 -top-6 hidden rounded-[24px] border border-[#e5d4c4] bg-[rgba(255,248,241,0.84)] px-5 py-4 shadow-[0_20px_40px_rgba(82,57,40,0.12)] backdrop-blur-md sm:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5e3f]">
                    This week’s favourite
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#2f211a]">
                    Sea Salt Dark
                  </p>
                </div>

                <div className="overflow-hidden rounded-[34px] border border-[#ead8ca] bg-[linear-gradient(180deg,#fff9f3_0%,#f7eee4_100%)] p-3 shadow-[0_30px_80px_rgba(77,52,36,0.16)]">
                  <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="overflow-hidden rounded-[28px]">
                      <img
                        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=80"
                        alt="Premium chocolate brownies stacked on a tray"
                        className="h-full min-h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="overflow-hidden rounded-[24px]">
                        <img
                          src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80"
                          alt="Brownie gift box with premium presentation"
                          className="h-40 w-full object-cover transition duration-700 hover:scale-105 sm:h-[47%]"
                        />
                      </div>
                      <div className="rounded-[24px] bg-[#4b3125] p-6 text-[#fff7f1] shadow-[0_18px_36px_rgba(61,39,28,0.22)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ddc2a9]">
                          Crafted for gifting
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold">
                          Fudgy centres, crisp edges, elegant finishing.
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[#e8d8ca]">
                          Designed to feel special whether you’re picking up one
                          square or ordering a full dessert box.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-float-soft absolute -bottom-6 right-2 rounded-[24px] border border-[#e6d3c2] bg-[rgba(255,248,241,0.9)] px-5 py-4 shadow-[0_20px_40px_rgba(82,57,40,0.12)] backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5e3f]">
                    Handmade daily
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#2f211a]">
                    Premium local bakery demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a5e3f]">
                Featured Brownies
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f211a] sm:text-4xl">
                Signature bakes made to feel generous, rich, and memorable
              </h2>
            </div>
            <Link
              href="/demo/baker/menu"
              className="text-sm font-medium text-[#775b4a] transition hover:text-[#8d5e3b]"
            >
              View full menu →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredBrownies.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[28px] border border-[#e6d4c6] bg-[rgba(255,250,245,0.92)] shadow-[0_16px_40px_rgba(89,61,43,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(89,61,43,0.14)]"
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
                      <p className="mb-2 inline-flex rounded-full border border-[#e4cfbf] bg-[#f9f0e7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a5e3f]">
                        {item.tag}
                      </p>
                      <h3 className="text-xl font-semibold text-[#2f211a]">
                        {item.name}
                      </h3>
                    </div>
                    <span className="whitespace-nowrap text-sm font-semibold text-[#8d5e3b]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#695548]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f3e8dc_0%,#f6eee5_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a5e3f]">
                  Why Velvet Crumb
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f211a] sm:text-4xl">
                  A bakery feel that’s warm and approachable, with a finish that
                  feels unmistakably premium
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#675244]">
                  We focus on fewer products done properly: deep flavour, careful
                  texture, elegant presentation, and a calm visual identity that
                  reflects the quality of the bake.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[#e4d1c1] bg-[rgba(255,250,245,0.88)] p-6 shadow-[0_12px_30px_rgba(89,61,43,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(89,61,43,0.12)]"
                  >
                    <h3 className="text-lg font-semibold text-[#2f211a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#675244]">
                      {item.text}
                    </p>
                  </div>
                ))}
                <div className="rounded-[24px] border border-[#7a5338]/10 bg-[linear-gradient(135deg,#5d3c2c_0%,#7a5338_100%)] p-6 text-[#fff7f1] shadow-[0_18px_36px_rgba(61,39,28,0.16)] sm:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9bca4]">
                    Premium promise
                  </p>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[#f3e4d8]">
                    Every brownie is made to feel like a thoughtful purchase,
                    not an afterthought at the till.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[32px] border border-[#e3cfbf] bg-[rgba(255,250,245,0.88)] shadow-[0_24px_50px_rgba(89,61,43,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1400&q=80"
                alt="Chocolate brownie squares styled for a premium bakery brand"
                className="h-full min-h-[360px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a5e3f]">
                Customer Notes
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f211a] sm:text-4xl">
                Loved for depth of flavour, texture, and presentation
              </h2>

              <div className="mt-8 grid gap-5">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-[24px] border border-[#e6d4c6] bg-[rgba(255,250,245,0.9)] p-6 shadow-[0_12px_28px_rgba(89,61,43,0.06)]"
                  >
                    <p className="text-sm leading-7 text-[#5f4b3e]">
                      “{item.quote}”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#8a5e3f]">
                      {item.author}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#ead6c4_0%,#f4e8dc_45%,#d7b89b_100%)] shadow-[0_20px_60px_rgba(89,61,43,0.12)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#7e5538]">
                  Ready to order?
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f211a] sm:text-4xl">
                  Browse the menu and find your next favourite tray bake
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#664f41]">
                  From classic dark chocolate squares to seasonal flavours and
                  gift-ready boxes, Velvet Crumb is designed to feel like a
                  premium local bakery worth bookmarking.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#6a4834_0%,#9a6a45_100%)] px-6 py-3.5 text-sm font-medium text-[#fffaf5] transition hover:scale-[1.02]"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/demo/baker/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#cfae93] bg-[rgba(255,252,248,0.88)] px-6 py-3.5 text-sm font-medium text-[#3f2d23] transition hover:bg-white"
                  >
                    Visit Contact Page
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium dessert table with chocolate bakes"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#decbbb] bg-[linear-gradient(180deg,#f7efe6_0%,#f1e7dc_100%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.15fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <h3 className="text-xl font-semibold uppercase tracking-[0.16em] text-[#3b281f]">
                Velvet Crumb
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#665346]">
                A premium brownie bakery concept focused on handcrafted bakes,
                quality ingredients, and elegant small-business presentation.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3b281f]">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#665346]">
                <Link
                  href="/demo/baker"
                  className="transition hover:text-[#8d5e3b]"
                >
                  Home
                </Link>
                <Link
                  href="/demo/baker/about"
                  className="transition hover:text-[#8d5e3b]"
                >
                  About
                </Link>
                <Link
                  href="/demo/baker/menu"
                  className="transition hover:text-[#8d5e3b]"
                >
                  Menu
                </Link>
                <Link
                  href="/demo/baker/contact"
                  className="transition hover:text-[#8d5e3b]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3b281f]">
                Bakery Details
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[#665346]">
                <p>27 Albion Lane</p>
                <p>Leeds</p>
                <p>LS1 4BT</p>
                <a
                  href="#"
                  className="inline-block pt-2 transition hover:text-[#8d5e3b]"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3b281f]">
                Opening Hours
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[#665346]">
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
