"use client";

import Link from "next/link";

const values = [
  {
    title: "The salon story",
    text: "Luna Studio was created to offer a more personal salon experience — one that feels warm, modern, and genuinely attentive. We believe great hair starts with listening, thoughtful advice, and a calm environment where every client feels looked after from the moment they arrive.",
  },
  {
    title: "Professional stylists",
    text: "Our team of experienced stylists is passionate about modern cuts, colour work, and tailored finishes that suit your features, lifestyle, and goals. Every appointment is approached with care, precision, and a commitment to helping you leave feeling your best.",
  },
  {
    title: "Quality products",
    text: "We use professional salon-quality products chosen for performance, shine, and hair health. From colour services to finishing products, every formula we use is selected to help deliver beautiful results while supporting long-term condition and manageability.",
  },
  {
    title: "Relaxing salon environment",
    text: "Luna Studio is designed to feel elegant, calming, and comfortable. Soft tones, bright interiors, and a boutique atmosphere make each visit feel like time well spent — whether you’re in for a quick refresh or a full transformation.",
  },
];

export default function SalonAboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff2fb_0%,#fdf6fc_35%,#f8eff8_100%)] text-[#332633]">
      <section className="relative isolate overflow-hidden pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,253,0.93)_0%,rgba(255,245,252,0.82)_42%,rgba(143,72,215,0.16)_100%)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f0a7df]/20 blur-3xl" />
        <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-[#b695ff]/12 blur-3xl" />

        <div className="relative mx-auto grid min-h-[60vh] max-w-7xl items-center px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#ead6e5] bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#95518c] shadow-[0_8px_20px_rgba(121,60,112,0.08)] backdrop-blur-sm">
              About Luna Studio
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-[#34162f] sm:text-5xl lg:text-6xl">
              Our passion is helping you feel confident.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5e495d] sm:text-lg">
              We combine thoughtful service, skilled styling, and a calm boutique
              setting to create a salon experience that feels personal from start
              to finish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo/salon/contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(161,70,160,0.28)] transition hover:scale-[1.02]"
              >
                Book Appointment
              </Link>
              <Link
                href="/demo/salon/services"
                className="inline-flex items-center justify-center rounded-full border border-[#e4d6e1] bg-white/95 px-6 py-3.5 text-sm font-medium text-[#432640] shadow-[0_8px_24px_rgba(86,47,88,0.05)] transition hover:bg-white hover:shadow-md"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
              Inside Luna Studio
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
              A modern salon experience designed around comfort and quality
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#695766]">
              From the products on our shelves to the atmosphere in the salon,
              every detail is chosen to make your visit feel relaxed, elevated,
              and beautifully considered.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-[0_20px_50px_rgba(96,51,97,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1400&q=80"
              alt="Luna Studio salon interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff3fb_0%,#f8ecf9_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#b23592]">
              What We’re About
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
              A boutique salon built on care, skill, and beautiful results
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#efd9ea] bg-white/90 p-7 shadow-[0_16px_40px_rgba(140,63,124,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(140,63,124,0.12)]"
              >
                <h3 className="text-xl font-semibold text-[#3e1f3b]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#6e5a6b]">
                  {item.text}
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
                Visit Us
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-[#3e1f3b] sm:text-4xl">
                Ready for a salon experience that feels personal?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#634f62]">
                Whether you’re booking a fresh cut, colour appointment, or
                styling session, our team is here to help you feel confident,
                refreshed, and looked after.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/salon/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#d14ca5_0%,#8d48d7_100%)] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/demo/salon/services"
                  className="inline-flex items-center justify-center rounded-full border border-[#ddb7d6] bg-white px-6 py-3.5 text-sm font-medium text-[#3e1f3b] transition hover:bg-[#fff8fd]"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=80"
                alt="Salon styling and interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
