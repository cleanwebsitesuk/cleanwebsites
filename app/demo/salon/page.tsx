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
    description: "Smooth, glossy styling perfect for everyday confidence or events.",
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
    name: "Amina R.",
    quote:
      "Absolutely love my colour. The team at Luna Studio are amazing.",
  },
  {
    name: "Chloe M.",
    quote:
      "Best salon experience I’ve had in Birmingham. Beautiful space and lovely stylists.",
  },
  {
    name: "Sara H.",
    quote:
      "Everything felt calm, premium, and professional from the moment I walked in.",
  },
  {
    name: "Emily T.",
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
    text: "A bright, relaxing salon designed to make every appointment feel special.",
  },
  {
    title: "Central Birmingham location",
    text: "Conveniently placed for easy visits, whether it’s your routine refresh or a special occasion.",
  },
];

export default function SalonLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fcf8f5] text-[#2f2a28]">
      <header className="sticky top-0 z-50 border-b border-[#eadfd8] bg-[rgba(252,248,245,0.92)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/demo/salon"
            className="text-xl font-semibold tracking-[0.18em] text-[#2f2a28] uppercase"
          >
            Luna Studio
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/demo/salon"
              className="text-sm font-medium text-[#3c3532] transition hover:text-[#b67c87]"
            >
              Home
            </Link>
            <Link
              href="/demo/salon/about"
              className="text-sm font-medium text-[#3c3532] transition hover:text-[#b67c87]"
            >
              About
            </Link>
            <Link
              href="/demo/salon/services"
              className="text-sm font-medium text-[#3c3532] transition hover:text-[#b67c87]"
            >
              Services
            </Link>
            <Link
              href="/demo/salon/contact"
              className="text-sm font-medium text-[#3c3532] transition hover:text-[#b67c87]"
            >
              Contact
            </Link>
            <Link
              href="/demo/salon/contact"
              className="rounded-full bg-[#b67c87] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#a86b77]"
            >
              Book Appointment
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-[#dfd1c8] p-3 text-[#2f2a28] md:hidden"
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
          <div className="border-t border-[#eadfd8] bg-[#fcf8f5] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              <Link
                href="/demo/salon"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#3c3532] hover:bg-[#f5ece7]"
              >
                Home
              </Link>
              <Link
                href="/demo/salon/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#3c3532] hover:bg-[#f5ece7]"
              >
                About
              </Link>
              <Link
                href="/demo/salon/services"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#3c3532] hover:bg-[#f5ece7]"
              >
                Services
              </Link>
              <Link
                href="/demo/salon/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#3c3532] hover:bg-[#f5ece7]"
              >
                Contact
              </Link>
              <Link
                href="/demo/salon/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-[#b67c87] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,248,245,0.92)_0%,rgba(252,248,245,0.78)_45%,rgba(252,248,245,0.42)_100%)]" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#e7d8d3] bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#8e6d67]">
              Modern Hair & Beauty Salon
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-[#2f2a28] sm:text-5xl lg:text-6xl">
              Beautiful hair, crafted with care.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5c5450] sm:text-lg">
              Luna Studio offers modern cuts, colour treatments, and beauty
              services in the heart of Birmingham.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo/salon/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#b67c87] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#a86b77]"
              >
                Book Appointment
              </Link>
              <Link
                href="/demo/salon/services"
                className="inline-flex items-center justify-center rounded-full border border-[#d9c6bd] bg-white/80 px-6 py-3.5 text-sm font-medium text-[#2f2a28] transition hover:bg-white"
              >
                View Services
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 rounded-3xl border border-white/60 bg-white/65 p-5 shadow-[0_12px_40px_rgba(111,85,80,0.08)] backdrop-blur-sm">
              <div>
                <p className="text-2xl font-semibold">10+</p>
                <p className="mt-1 text-sm text-[#6f6662]">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">4.9/5</p>
                <p className="mt-1 text-sm text-[#6f6662]">Client rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">Birmingham</p>
                <p className="mt-1 text-sm text-[#6f6662]">City centre salon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b67c87]">
              Featured Services
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a28] sm:text-4xl">
              Tailored beauty services with a polished, modern finish
            </h2>
          </div>
          <Link
            href="/demo/salon/services"
            className="text-sm font-medium text-[#8e6d67] transition hover:text-[#b67c87]"
          >
            Explore all services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[28px] border border-[#eee2db] bg-white shadow-[0_14px_40px_rgba(120,94,87,0.08)] transition hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#2f2a28]">
                    {service.title}
                  </h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-[#b67c87]">
                    {service.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#6a625e]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f1ed]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b67c87]">
              Gallery Preview
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a28] sm:text-4xl">
              A bright, elegant space made for beautiful results
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.alt}
                className={`overflow-hidden rounded-[24px] ${
                  index === 0 || index === 3 ? "md:translate-y-6" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover sm:h-72"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b67c87]">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a28] sm:text-4xl">
              Premium care, calming interiors, and stylists who listen
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#665d59]">
              Every appointment at Luna Studio is designed to feel personal,
              relaxed, and beautifully considered.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#eee2db] bg-white p-6 shadow-[0_10px_30px_rgba(120,94,87,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#2f2a28]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6a625e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b67c87]">
              Customer Reviews
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2a28] sm:text-4xl">
              Trusted by clients across Birmingham
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[28px] border border-[#eee2db] bg-[#fffdfc] p-6 shadow-[0_12px_30px_rgba(120,94,87,0.05)]"
              >
                <p className="text-lg tracking-wide text-[#b67c87]">
                  ⭐️⭐️⭐️⭐️⭐️
                </p>
                <p className="mt-4 text-sm leading-7 text-[#5f5753]">
                  “{review.quote}”
                </p>
                <p className="mt-5 text-sm font-semibold text-[#2f2a28]">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[36px] bg-[#f2e6e3]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-14">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b67c87]">
                Ready to Visit?
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f2a28] sm:text-4xl">
                Book your next salon appointment with Luna Studio
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#665d59]">
                Whether you’re after a fresh cut, a colour transformation, or a
                beauty top-up, our team is here to help you leave feeling your
                very best.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/salon/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#b67c87] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#a86b77]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/demo/salon/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7bfc0] bg-white px-6 py-3.5 text-sm font-medium text-[#2f2a28] transition hover:bg-[#fff8f7]"
                >
                  Discover Luna Studio
                </Link>
              </div>
            </div>

            <div className="min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant salon styling session"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eadfd8] bg-[#f8f1ed]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-xl font-semibold tracking-[0.16em] uppercase text-[#2f2a28]">
              Luna Studio
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#665d59]">
              A modern Birmingham salon offering refined hair styling, colour
              treatments, and beauty services in a calming boutique setting.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a28]">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#665d59]">
              <Link href="/demo/salon" className="hover:text-[#b67c87]">
                Home
              </Link>
              <Link href="/demo/salon/about" className="hover:text-[#b67c87]">
                About
              </Link>
              <Link
                href="/demo/salon/services"
                className="hover:text-[#b67c87]"
              >
                Services
              </Link>
              <Link href="/demo/salon/contact" className="hover:text-[#b67c87]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a28]">
              Address
            </h4>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[#665d59]">
              <p>24 St Paul’s Square</p>
              <p>Birmingham</p>
              <p>B3 1RB</p>
              <a href="#" className="inline-block pt-2 hover:text-[#b67c87]">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a28]">
              Opening Hours
            </h4>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[#665d59]">
              <p>Mon–Fri: 9:00 – 6:00</p>
              <p>Sat: 9:00 – 5:00</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
