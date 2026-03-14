"use client";

import Link from "next/link";
import { useState } from "react";

const featuredServices = [
  {
    title: "Haircut & Styling",
    price: "£35",
    description: "Precision cuts and polished styling tailored to your look.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Balayage Colour",
    price: "£95",
    description: "Soft, dimensional colour for a luminous, effortless finish.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Blow Dry",
    price: "£25",
    description:
      "Smooth, glossy styling perfect for everyday confidence or special events.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Full Colour",
    price: "£70",
    description: "Rich, even colour using professional salon-quality products.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    alt: "Styled hair in salon",
  },
  {
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
    alt: "Stylist working with client",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair colour treatment close-up",
  },
];

const reviews = [
  {
    quote:
      "Absolutely love my colour. The team at Luna Studio are amazing.",
  },
  {
    quote:
      "Best salon experience I’ve had in Leeds. Beautiful space and lovely stylists.",
  },
  {
    quote:
      "Everything felt calm, premium, and professional from the moment I walked in.",
  },
  {
    quote:
      "My cut and blow dry were perfect. I left feeling confident and refreshed.",
  },
];

const reasons = [
  {
    title: "Expert stylists",
    text: "A talented team focused on modern cuts, colour work, and personalised care.",
  },
  {
    title: "Premium products",
    text: "We use high-quality professional formulas that protect shine, health, and finish.",
  },
  {
    title: "Boutique atmosphere",
    text: "A warm, elegant salon designed to make every appointment feel special.",
  },
  {
    title: "Central Leeds location",
    text: "Conveniently placed for easy visits, whether it’s your routine refresh or a special occasion.",
  },
];

export default function SalonLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            box-shadow: 0 0 0 rgba(196, 92, 171, 0.16);
          }
          50% {
            box-shadow: 0 10px 30px rgba(196, 92, 171, 0.22);
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

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff0fa_0%,#fdf4fb_35%,#f8ecf8_100%)] text-[#332633]">
        <div className="fixed inset-x-0 top-0 z-[80] border-b border-[#efcfe8] bg-[linear-gradient(90deg,#a4377f_0%,#7e3fb2_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_rgba(126,63,178,0.22)]">
          This is a demo website created by{" "}
          <Link
            href="/"
            className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-white"
          >
            Clean Websites
          </Link>
        </div>

<Link
  href="/"
  className="animate-glow-soft fixed left-4 top-[7.25rem] z-[90] inline-flex items-center rounded-full border border-[#efc7e4] bg-white/95 px-4 py-2 text-sm font-semibold text-[#8d2d78] shadow-[0_10px_24px_rgba(141,45,120,0.18)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]"
>
  ← Back to Clean Websites
</Link>

        <header className="fixed inset-x-0 top-[46px] z-[70] border-b border-[#edd7ea] bg-[rgba(255,245,252,0.9)] backdrop-blur-xl">
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
              className="inline-flex items-center justify-center rounded-full border border-[#e8cce1] bg-white/80 p-3 text-[#4a2344] md:hidden"
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

          {menuOpen && (
            <div className="border-t border-[#edd7ea] bg-[#fff7fc]/95 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                <Link
                  href="/demo/salon"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#5a3957] transition hover:bg-[#fae8f6]"
                >
                  Home
                </Link>
                <Link
                  href="/demo/salon/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#5a3957] transition hover:bg-[#fae8f6]"
                >
                  About
                </Link>
                <Link
                  href="/demo/salon/services"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#5a3957] transition hover:bg-[#fae8f6]"
                >
                  Services
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#5a3957] transition hover:bg-[#fae8f6]"
                >
                  Contact
                </Link>
                <Link
                  href="/demo/salon/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </header>

        <section className="relative isolate overflow-hidden pt-[180px] md:pt-[130px]">
          <div
            className="absolute inset-0 animate-fade-in bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,245,252,0.94)_0%,rgba(255,240,250,0.84)_42%,rgba(143,72,215,0.18)_100%)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f0a7df]/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#b695ff]/20 blur-3xl" />

          <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[#efcfe8] bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#98508d] shadow-sm backdrop-blur-sm">
                Modern Hair & Beauty Salon
              </span>

              <h1 className="animate-fade-up-delay-1 mt-6 max-w-xl text-4xl font-semibold leading-tight text-[#3e1f3b] sm:text-5xl lg:text-6xl">
                Feel polished, confident, and beautifully looked after.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-8 text-[#684f66] sm:text-lg">
                Luna Studio offers modern cuts, colour treatments, and beauty
                services in the heart of Leeds, with a premium boutique feel and
                a booking experience designed to convert.
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
                  className="inline-flex items-center justify-center rounded-full border border-[#e5cbe0] bg-white/85 px-6 py-3.5 text-sm font-medium text-[#44253f] transition hover:bg-white hover:shadow-md"
                >
                  View Services
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-10 grid max-w-lg grid-cols-3 gap-4 rounded-[30px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(126,63,178,0.12)] backdrop-blur-md">
                <div>
                  <p className="text-2xl font-semibold text-[#3e1f3b]">10+</p>
                  <p className="mt-1 text-sm text-[#7b6878]">Years experience</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#3e1f3b]">4.9/5</p>
                  <p className="mt-1 text-sm text-[#7b6878]">Client rating</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#3e1f3b]">Leeds</p>
                  <p className="mt-1 text-sm text-[#7b6878]">City centre salon</p>
                </div>
              </div>
            </div>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Featured Services
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Tailored beauty services with a polished, modern finish
              </h2>
            </div>
            <Link
              href="/demo/salon/services"
              className="text-sm font-medium text-[#8a5c84] transition hover:text-[#b23592]"
            >
              Explore all services →
            </Link>
          </div>
        </section>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[28px] border border-[#efd9ea] bg-white/90 shadow-[0_16px_40px_rgba(140,63,124,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(140,63,124,0.16)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[#3e1f3b]">
                      {service.title}
                    </h3>
                    <span className="whitespace-nowrap text-sm font-semibold text-[#b23592]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#6e5a6b]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff3fb_0%,#f8ecf9_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Gallery Preview
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                A bright, elegant space made for beautiful results
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`group overflow-hidden rounded-[24px] shadow-[0_14px_34px_rgba(140,63,124,0.10)] transition duration-300 hover:-translate-y-1 ${
                    index === 0 || index === 3 ? "md:translate-y-6" : ""
                  } ${index % 2 === 0 ? "animate-float-soft" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Premium care, calming interiors, and stylists who listen
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#695766]">
                Every appointment at Luna Studio is designed to feel personal,
                relaxed, and beautifully considered.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[#efd9ea] bg-white/90 p-6 shadow-[0_12px_30px_rgba(140,63,124,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(140,63,124,0.14)]"
                >
                  <h3 className="text-lg font-semibold text-[#3e1f3b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6e5a6b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/70">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
                Customer Reviews
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Trusted by clients across Leeds
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review, index) => (
                <article
                  key={index}
                  className="rounded-[28px] border border-[#efd9ea] bg-[linear-gradient(180deg,#fff8fd_0%,#fff2fb_100%)] p-6 shadow-[0_12px_30px_rgba(140,63,124,0.07)] transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-lg tracking-wide text-[#c046a0]">
                    ⭐️⭐️⭐️⭐️⭐️
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5f4d5d]">
                    “{review.quote}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f6d4eb_0%,#e8cff8_100%)] shadow-[0_20px_60px_rgba(140,63,124,0.14)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#9d2b82]">
                  Ready to Visit?
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                  Book your next salon appointment with Luna Studio
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#634f62]">
                  Whether you’re after a fresh cut, a colour transformation, or a
                  beauty top-up, our team is here to help you leave feeling your
                  very best.
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
                    Discover Luna Studio
                  </Link>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80"
                  alt="Elegant salon styling session"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#edd7ea] bg-[linear-gradient(180deg,#fff3fb_0%,#f7edf8_100%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <h3 className="text-xl font-semibold uppercase tracking-[0.16em] text-[#3e1f3b]">
                Luna Studio
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#665365]">
                A modern Leeds salon offering refined hair styling, colour
                treatments, and beauty services in a calming boutique setting.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3e1f3b]">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#665365]">
                <Link href="/demo/salon" className="transition hover:text-[#b23592]">
                  Home
                </Link>
                <Link href="/demo/salon/about" className="transition hover:text-[#b23592]">
                  About
                </Link>
                <Link
                  href="/demo/salon/services"
                  className="transition hover:text-[#b23592]"
                >
                  Services
                </Link>
                <Link
                  href="/demo/salon/contact"
                  className="transition hover:text-[#b23592]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3e1f3b]">
                Address
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[#665365]">
                <p>97 Example Street</p>
                <p>Leeds</p>
                <p>LS1 0XX</p>
                <a href="#" className="inline-block pt-2 transition hover:text-[#b23592]">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3e1f3b]">
                Opening Hours
              </h4>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[#665365]">
                <p>Mon–Fri: 9:00 – 6:00</p>
                <p>Sat: 9:00 – 5:00</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
