"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response for urgent plumbing issues including burst pipes, major leaks, and unexpected breakdowns.",
    icon: "🚨",
  },
  {
    title: "Leak Repairs",
    description:
      "Quick diagnosis and repair of leaking taps, toilets, pipe joints, and hidden water damage issues.",
    icon: "💧",
  },
  {
    title: "Boiler Repairs",
    description:
      "Reliable boiler troubleshooting and repair work to restore heating and hot water as soon as possible.",
    icon: "🔥",
  },
  {
    title: "Bathroom Installations",
    description:
      "Complete bathroom plumbing for refurbishments, upgrades, replacements, and new installations.",
    icon: "🛁",
  },
  {
    title: "Pipe Replacement",
    description:
      "Replacement of damaged, ageing, or corroded pipework to improve safety, performance, and reliability.",
    icon: "🔧",
  },
  {
    title: "Drain Unblocking",
    description:
      "Effective clearing of blocked sinks, toilets, and drains with practical solutions that last.",
    icon: "🌀",
  },
];

const features = [
  {
    title: "Fast response times",
    description:
      "Prompt callouts and dependable communication so customers know exactly what to expect.",
  },
  {
    title: "Fully qualified plumbers",
    description:
      "Skilled, professional tradespeople carrying out work safely and to a high standard.",
  },
  {
    title: "Transparent pricing",
    description:
      "Clear quotes and honest advice with no confusing jargon or unnecessary upselling.",
  },
  {
    title: "Local Bristol business",
    description:
      "A practical local service focused on homes and businesses across Bristol and nearby areas.",
  },
];

const testimonials = [
  {
    quote:
      "Arrived quickly and fixed the issue straight away. Very easy to deal with from start to finish.",
  },
  {
    quote:
      "Very professional service. Highly recommend. Clear communication and fair pricing.",
  },
  {
    quote:
      "Turned up on time, explained the problem properly, and had everything sorted the same day.",
  },
  {
    quote:
      "We used Bestflow for a leak repair and were really impressed with how efficient and tidy they were.",
  },
  {
    quote:
      "Excellent service from first call to completion. Helpful, polite, and clearly knew what they were doing.",
  },
  {
    quote:
      "Had an emergency issue in the evening and they responded much faster than expected.",
  },
  {
    quote:
      "The quote was clear, the work was completed neatly, and there were no surprises.",
  },
  {
    quote:
      "Reliable local plumber that actually answers the phone and turns up when they say they will.",
  },
  {
    quote:
      "Great experience with a bathroom plumbing job. Professional throughout and the finish was excellent.",
  },
  {
    quote:
      "Friendly, straightforward, and trustworthy. Would definitely use again for future plumbing work.",
  },
];

export default function TradesHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [activeReview, setActiveReview] = useState(0);
  const testimonialTrackRef = useRef<HTMLDivElement | null>(null);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 420;
      setShowBackButton(window.scrollY < triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const startAutoRotate = () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);

      autoRotateRef.current = setInterval(() => {
        setActiveReview((prev) => (prev + 1) % totalTestimonials);
      }, 5000);
    };

    startAutoRotate();

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [totalTestimonials]);

  const scrollToTestimonial = (index: number) => {
    const container = testimonialTrackRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = testimonialTrackRef.current;
    if (!container) return;

    let ticking = false;

    const updateActiveFromScroll = () => {
      const children = Array.from(container.children) as HTMLElement[];
      if (!children.length) return;

      const scrollLeft = container.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const distance = Math.abs(child.offsetLeft - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveReview((prev) => (prev !== closestIndex ? closestIndex : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveFromScroll);
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveFromScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const restartAutoRotate = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);

    autoRotateRef.current = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % totalTestimonials);
    }, 5000);
  };

  const nextTestimonial = () => {
    const nextIndex = (activeReview + 1) % totalTestimonials;
    setActiveReview(nextIndex);
    scrollToTestimonial(nextIndex);
    restartAutoRotate();
  };

  const prevTestimonial = () => {
    const prevIndex = (activeReview - 1 + totalTestimonials) % totalTestimonials;
    setActiveReview(prevIndex);
    scrollToTestimonial(prevIndex);
    restartAutoRotate();
  };

  const goToTestimonial = (index: number) => {
    setActiveReview(index);
    scrollToTestimonial(index);
    restartAutoRotate();
  };

  const testimonialDots = useMemo(() => testimonials.map((_, i) => i), []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-[#0F172A]">
      <div className="fixed inset-x-0 top-0 z-[90] border-b border-blue-300/40 bg-[linear-gradient(90deg,#2563EB_0%,#1D4ED8_100%)] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,99,235,0.22)]">
        This is a demo website created by{" "}
        <Link
          href="/"
          className="font-semibold underline decoration-white/80 underline-offset-4 transition hover:text-blue-100"
        >
          Clean Websites
        </Link>
      </div>

      <header className="fixed inset-x-0 top-[46px] z-[80] border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/demo/trades"
            className="group flex items-center gap-3 text-lg font-bold tracking-[0.08em] text-[#0F172A] sm:text-xl"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition duration-300 group-hover:-translate-y-0.5">
              💧
            </span>
            <span>BESTFLOW PLUMBING</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/demo/trades"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              Home
            </Link>
            <Link
              href="/demo/trades/about"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              About
            </Link>
            <Link
              href="/demo/trades/services"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              Services
            </Link>
            <Link
              href="/demo/trades/contact"
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#2563EB]"
            >
              Contact
            </Link>
            <Link
              href="/demo/trades/contact"
              className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-[#0F172A] shadow-sm transition duration-200 hover:bg-slate-50 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <Link
        href="/"
        className={`fixed left-4 top-[8rem] z-[90] inline-flex items-center rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:top-[4.1rem]
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
            className="fixed inset-x-0 bottom-0 top-[7.15rem] z-[60] bg-slate-950/45 md:hidden"
          />

          <div className="fixed inset-x-4 top-[8.65rem] z-[70] origin-top rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:hidden animate-[fadeIn_.2s_ease-out]">
            <div className="flex flex-col gap-2">
              <Link
                href="/demo/trades"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/demo/trades/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/demo/trades/services"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Services
              </Link>
              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Contact
              </Link>
              <Link
                href="/demo/trades/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="pt-[122px]">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 scale-[1.02] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.84)_0%,rgba(15,23,42,0.66)_42%,rgba(15,23,42,0.45)_100%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-28">
            <div className="max-w-2xl animate-[fadeUp_.7s_ease-out]">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
                Trusted local plumbers in Bristol
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable plumbing services in Bristol
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                Bestflow Plumbing provides fast, professional plumbing and
                emergency repairs for homes and businesses across Bristol.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo/trades/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:01170000000"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                    Call now
                  </p>
                  <a
                    href="tel:01170000000"
                    className="mt-2 inline-block text-2xl font-bold text-white"
                  >
                    0117 000 0000
                  </a>
                  <p className="mt-2 text-sm text-slate-200">
                    Fast response for repairs and urgent callouts.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                    Service area
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    Bristol & nearby
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Domestic and commercial plumbing support.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="hidden w-full max-w-md animate-[fadeUp_.9s_ease-out] rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-sm shadow-[0_24px_80px_rgba(15,23,42,0.28)] md:block">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-100">
                  Why customers choose us
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    "Emergency callouts available",
                    "Transparent, clear pricing",
                    "Qualified local tradespeople",
                    "Work completed neatly and professionally",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:bg-white/10"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-sm text-white">
                        ✓
                      </span>
                      <p className="text-sm leading-6 text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl animate-[fadeUp_.65s_ease-out]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Practical plumbing services for homes and businesses
            </h2>
            <p className="mt-4 text-slate-600">
              Built around the work local customers actually need, from urgent
              callouts to repairs, maintenance, and installation projects.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                style={{
                  animation: `fadeUp .55s ease-out ${index * 0.06}s both`,
                }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition duration-300 group-hover:scale-105 group-hover:bg-blue-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href="/demo/trades/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition duration-200 hover:gap-3"
                >
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-center md:grid-cols-3 md:px-8 md:text-left">
            {[
              "Fast response across Bristol",
              "Trusted local plumbing service",
              "Clear quotes and dependable workmanship",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl bg-[#F8FAFC] px-5 py-5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5"
                style={{
                  animation: `fadeUp .55s ease-out ${index * 0.08}s both`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="animate-[fadeUp_.7s_ease-out]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Straightforward service that feels professional from the first call
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Bestflow Plumbing is designed around clarity, speed, and trust.
                The focus is simple: respond quickly, explain the work clearly,
                and complete every job properly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Domestic work
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Commercial work
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Emergency callouts
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,235,0.10)]"
                  style={{
                    animation: `fadeUp .55s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-[0_10px_20px_rgba(37,99,235,0.20)]">
                    ✓
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl animate-[fadeUp_.65s_ease-out]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                  Customer Reviews
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  Trusted by local customers across Bristol
                </h2>
                <p className="mt-4 text-slate-600">
                  A rotating selection of customer feedback to show the kind of
                  clear, reliable service local trades clients want.
                </p>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#2563EB]"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#2563EB]"
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative mt-10">
              <div
                ref={testimonialTrackRef}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {testimonials.map((testimonial, index) => (
                  <article
                    key={index}
                    className={`w-[88%] shrink-0 snap-start rounded-[28px] border p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 sm:w-[70%] lg:w-[48%] xl:w-[38%] ${
                      activeReview === index
                        ? "border-blue-200 bg-blue-50/50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="text-xl text-amber-400">★★★★★</div>
                    <p className="mt-5 text-lg leading-8 text-slate-800">
                      “{testimonial.quote}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white">
                        B
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Verified local customer
                        </p>
                        <p className="text-sm text-slate-500">
                          Bristol plumbing service
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {testimonialDots.map((index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition duration-200 ${
                    activeReview === index
                      ? "scale-110 bg-[#2563EB]"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18)_0%,rgba(255,255,255,0.04)_100%)] p-8 shadow-[0_24px_80px_rgba(2,6,23,0.28)] md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                    Need a plumber?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Get fast, dependable help from a local Bristol team
                  </h2>
                  <p className="mt-4 text-slate-300">
                    For urgent repairs, planned work, or a clear written quote,
                    get in touch and we’ll respond as quickly as possible.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Link
                    href="/demo/trades/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href="tel:01170000000"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                Bestflow Plumbing
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Professional plumbing services for homes and businesses across
                Bristol, with a focus on reliability, clear communication, and
                practical workmanship.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/demo/trades" className="transition hover:text-[#2563EB]">
                  Home
                </Link>
                <Link href="/demo/trades/about" className="transition hover:text-[#2563EB]">
                  About
                </Link>
                <Link
                  href="/demo/trades/services"
                  className="transition hover:text-[#2563EB]"
                >
                  Services
                </Link>
                <Link
                  href="/demo/trades/contact"
                  className="transition hover:text-[#2563EB]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Contact Info
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>21 Example Drive</p>
                <p>Bristol</p>
                <p>BS8 0XX</p>
                <p>
                  <a href="tel:01170000000" className="transition hover:text-[#2563EB]">
                    0117 000 0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:demo@bestflowplumbing.co.uk"
                    className="transition hover:text-[#2563EB]"
                  >
                    demo@bestflowplumbing.co.uk
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                Service Area
              </h4>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Serving Bristol and surrounding areas with emergency plumbing,
                repairs, installations, and general maintenance support.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
