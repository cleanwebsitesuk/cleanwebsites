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

const contactHighlights = [
  "Custom flavour requests welcome",
  "Gift-ready boxes & event orders",
  "Collection & selected local delivery",
];

const flavourOptions = [
  "Sea Salt Dark",
  "Hazelnut Praline",
  "Espresso Fudge",
  "Salted Caramel Swirl",
  "Milk Chocolate Crunch",
  "Seasonal Special",
  "Brown Butter Blondie",
  "White Chocolate Raspberry",
  "Pistachio Vanilla Bar",
];

const boxOptions = [
  "Four-Piece Selection Box",
  "Six-Piece Selection Box",
  "Twelve-Piece Event Box",
];

const quickOrderCards = [
  {
    title: "Brownies",
    text: "Choose signature flavours, bestselling favourites, or a mixed selection.",
    tag: "Individual bakes",
    defaultMessage:
      "Hi Velvet Crumb, I’d love to enquire about brownies. I’m interested in a few flavour options and would like to know availability and next steps.",
  },
  {
    title: "Selection Boxes",
    text: "Gift-ready boxes for thank-yous, birthdays, and beautifully packaged treats.",
    tag: "Gift-ready",
    defaultMessage:
      "Hi Velvet Crumb, I’d like to order a selection box and would love help choosing the best option for gifting.",
  },
  {
    title: "Events & Larger Orders",
    text: "Elegant dessert table orders and polished boxed bakes for gatherings.",
    tag: "Events",
    defaultMessage:
      "Hi Velvet Crumb, I’m planning an event and would like to enquire about a larger order, pricing, and availability.",
  },
];

const serviceDetails = [
  {
    title: "Freshly baked to order",
    text: "Every tray is prepared in short runs for the richest texture, clean finish, and best presentation.",
  },
  {
    title: "Collection and delivery",
    text: "Collection is available as standard, with selected local delivery depending on order size, date, and location.",
  },
  {
    title: "Tailored recommendations",
    text: "Not sure what to choose? The enquiry form is designed for custom boxes, gifting, seasonal requests, and mixed selections.",
  },
];

const bakeryDetails = [
  { label: "Address", value: "27 Albion Lane, Leeds, LS1 4BT" },
  { label: "Email", value: "hello@velvetcrumb.co.uk" },
  { label: "Phone", value: "0113 555 0187" },
];

const openingHours = [
  "Tue–Fri: 10:00 – 6:00",
  "Sat: 10:00 – 5:00",
  "Sun–Mon: Closed",
];

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  fulfilment: string;
  preferredDate: string;
  portions: string;
  selectedItems: string[];
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "Custom Order",
  fulfilment: "Collection",
  preferredDate: "",
  portions: "",
  selectedItems: [],
  message: "",
};

export default function BakerContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);

  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalPanelRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!modalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedPanel = modalPanelRef.current?.contains(target);
      if (!clickedPanel) setModalOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [modalOpen]);

  const headerClasses = useMemo(
    () =>
      headerSolid
        ? "border-[rgba(66,44,34,0.12)] bg-[rgba(250,244,237,0.94)] shadow-[0_12px_34px_rgba(51,33,25,0.08)]"
        : "border-transparent bg-[rgba(250,244,237,0.72)]",
    [headerSolid],
  );

  const allSelectableItems = [...flavourOptions, ...boxOptions];

  const toggleSelectedItem = (item: string) => {
    setFormState((prev) => {
      const exists = prev.selectedItems.includes(item);

      return {
        ...prev,
        selectedItems: exists
          ? prev.selectedItems.filter((entry) => entry !== item)
          : [...prev.selectedItems, item],
      };
    });
  };

  const openModalWithPreset = (preset?: {
    enquiryType?: string;
    message?: string;
    selectedItems?: string[];
  }) => {
    setFormState((prev) => ({
      ...prev,
      enquiryType: preset?.enquiryType ?? prev.enquiryType,
      message: preset?.message ?? prev.message,
      selectedItems: preset?.selectedItems ?? prev.selectedItems,
    }));
    setModalOpen(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
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

        .animate-modal-in {
          animation: modalIn 0.24s ease-out both;
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
                const isActive = item.href === "/demo/baker/contact";

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

              <button
                type="button"
                onClick={() => openModalWithPreset()}
                className="rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-5 py-3 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(78,51,38,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(78,51,38,0.28)]"
              >
                Start Enquiry
              </button>
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
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openModalWithPreset();
                  }}
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#6f4d3d_0%,#b9865e_100%)] px-5 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_12px_30px_rgba(80,53,39,0.24)]"
                >
                  Start Enquiry
                </button>
              </div>
            </div>
          </>
        )}

        <section className="relative isolate overflow-hidden pt-[104px] sm:pt-[112px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,142,0.22),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,58,45,0.10),transparent_24%)]" />
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c79d74]/14 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7a5338]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-5 sm:py-14 md:px-8 lg:min-h-[82vh] lg:grid-cols-[0.96fr_1.04fr] lg:gap-14 lg:py-24">
            <div className="max-w-2xl">
              <span className="animate-fade-up inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] shadow-[0_8px_18px_rgba(74,52,38,0.05)] backdrop-blur-sm sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
                Contact Velvet Crumb
              </span>

              <h1 className="font-heading animate-fade-up-delay-1 mt-5 max-w-[11ch] text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--cocoa-1)] sm:mt-6 sm:text-[3.7rem] md:max-w-xl md:text-6xl lg:max-w-[11ch] lg:text-[5rem]">
                Order beautifully baked brownies and boxes.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Enquire about signature brownies, blondies, gift-ready boxes, and larger
                event orders. The contact form is built for custom requests, mixed selections,
                gifting, and polished bakery orders.
              </p>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-2.5 sm:mt-8">
                {contactHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.8)] px-4 text-[12px] font-medium text-[var(--cocoa-2)] shadow-[0_8px_18px_rgba(73,49,37,0.04)] sm:text-[13px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="animate-fade-up-delay-2 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openModalWithPreset()}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                >
                  Open Contact Form
                </button>
                <Link
                  href="/demo/baker/menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] shadow-[0_8px_24px_rgba(73,49,37,0.05)] transition hover:bg-white"
                >
                  View Full Menu
                </Link>
              </div>

              <div className="animate-fade-up-delay-3 mt-8 grid gap-3 rounded-[24px] border border-white/50 bg-[rgba(255,251,246,0.76)] p-4 shadow-[0_24px_60px_rgba(79,52,39,0.08)] backdrop-blur-md sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:rounded-[30px] sm:p-5">
                {bakeryDetails.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--cocoa-1)] sm:text-[15px]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="relative mx-auto max-w-[760px]">
                <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(180deg,rgba(255,251,246,0.9)_0%,rgba(244,234,223,0.78)_100%)] p-2.5 shadow-[0_26px_70px_rgba(73,48,36,0.14)] sm:rounded-[34px] sm:p-3 lg:rounded-[38px]">
                  <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.02fr_0.98fr]">
                    <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[30px]">
                      <img
                        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=80"
                        alt="A premium stack of rich chocolate brownies"
                        className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[410px] lg:h-[560px]"
                      />
                    </div>

                    <div className="grid gap-2.5 sm:gap-3">
                      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[26px]">
                        <img
                          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80"
                          alt="Elegant brownie and dessert table styling"
                          className="h-36 w-full object-cover transition duration-700 hover:scale-105 sm:h-44 lg:h-[220px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between rounded-[20px] bg-[linear-gradient(180deg,#3a271f_0%,#2d1d17_100%)] p-5 text-[#fff8f2] shadow-[0_20px_40px_rgba(56,36,27,0.24)] sm:rounded-[24px] sm:p-6 lg:rounded-[26px] lg:p-7">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0a6] sm:text-[11px] sm:tracking-[0.24em]">
                            Order beautifully
                          </p>
                          <h2 className="font-heading mt-2.5 text-[1.4rem] font-semibold leading-[1.05] sm:mt-3 sm:text-[1.7rem] lg:text-[2rem]">
                            Tell us what you’d love.
                          </h2>
                        </div>

                        <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#ead9ca] sm:mt-5 sm:text-sm sm:leading-7">
                          Pick flavours, boxes, collection or delivery, preferred date,
                          portions, and event notes in one clean enquiry.
                        </p>

                        <button
                          type="button"
                          onClick={() => openModalWithPreset()}
                          className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-[#f0d6bf] transition hover:text-white"
                        >
                          Start your enquiry →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 top-3 rounded-[16px] border border-white/30 bg-[rgba(255,250,244,0.82)] px-3.5 py-3 shadow-[0_14px_32px_rgba(80,53,39,0.08)] backdrop-blur-md sm:left-4 sm:top-4 sm:rounded-[18px] sm:px-4 sm:py-3.5 lg:-left-4 lg:top-8 lg:rounded-[22px] lg:px-5 lg:py-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.22em] lg:text-[11px] lg:tracking-[0.24em]">
                    Enquiries open
                  </p>
                  <p className="font-heading mt-1.5 text-[13px] font-semibold text-[var(--cocoa-1)] sm:text-[15px] lg:mt-2 lg:text-lg">
                    Custom orders welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-5 sm:pb-22 md:px-8 md:pb-24">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {quickOrderCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-5 shadow-[0_20px_44px_rgba(76,50,38,0.08)] sm:rounded-[32px] sm:p-6"
              >
                <span className="inline-flex rounded-full border border-[#ead9c8] bg-[#f8eee4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {card.tag}
                </span>

                <h2 className="font-heading mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--cocoa-1)] sm:text-[2rem]">
                  {card.title}
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] sm:text-[15px]">
                  {card.text}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    openModalWithPreset({
                      enquiryType: card.title === "Events & Larger Orders" ? "Event Order" : "Custom Order",
                      message: card.defaultMessage,
                    })
                  }
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[rgba(56,36,27,0.06)] px-5 text-sm font-semibold text-[var(--cocoa-2)] transition hover:bg-[rgba(56,36,27,0.1)]"
                >
                  Enquire about {card.title}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4eadf_0%,#efe3d5_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
              <div className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.86)] p-5 shadow-[0_20px_44px_rgba(76,50,38,0.06)] sm:rounded-[32px] sm:p-6 lg:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.28em]">
                      Popular picks
                    </p>
                    <h2 className="font-heading mt-3 text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-[2.3rem]">
                      What customers usually enquire about
                    </h2>
                  </div>
                  <p className="text-sm text-[var(--muted)]">Tap to preselect</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cocoa-2)]">
                    Signature flavours
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {flavourOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          openModalWithPreset({
                            enquiryType: "Custom Order",
                            selectedItems: [item],
                            message: `Hi Velvet Crumb, I’d love to enquire about ${item}. Please let me know availability and ordering details.`,
                          })
                        }
                        className="inline-flex items-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.95)] px-4 py-3 text-[13px] font-medium text-[var(--cocoa-2)] shadow-[0_8px_20px_rgba(73,49,37,0.04)] transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cocoa-2)]">
                    Selection boxes
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {boxOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          openModalWithPreset({
                            enquiryType: "Gift Box",
                            selectedItems: [item],
                            message: `Hi Velvet Crumb, I’d like to enquire about the ${item}. Please share availability and ordering details.`,
                          })
                        }
                        className="inline-flex items-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.95)] px-4 py-3 text-[13px] font-medium text-[var(--cocoa-2)] shadow-[0_8px_20px_rgba(73,49,37,0.04)] transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] p-5 shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:rounded-[32px] sm:p-6 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2] sm:text-[11px] sm:tracking-[0.28em]">
                  Ordering made easy
                </p>
                <h2 className="font-heading mt-3 text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.2rem]">
                  Tell the bakery exactly what you need.
                </h2>

                <div className="mt-7 grid gap-4">
                  {serviceDetails.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <h3 className="font-heading text-[1.12rem] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-[#e8d9cd] sm:text-sm sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openModalWithPreset({
                      enquiryType: "Event Order",
                      message:
                        "Hi Velvet Crumb, I’m looking to place a larger order and would love a tailored recommendation based on date, quantity, and presentation.",
                    })
                  }
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#c79b76_0%,#e3c2aa_100%)] px-6 py-3.5 text-sm font-semibold text-[#2d1d17] transition hover:-translate-y-0.5"
                >
                  Plan an Event Order
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-5 sm:py-22 md:px-8 md:py-24">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#2f1f19_0%,#412b22_42%,#6a4838_100%)] shadow-[0_28px_70px_rgba(49,31,24,0.22)] sm:rounded-[34px] lg:rounded-[38px]">
            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="p-6 sm:p-8 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2] sm:text-[11px] sm:tracking-[0.28em]">
                  Opening hours
                </p>
                <h2 className="font-heading mt-3 max-w-lg text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                  Reach out for gifting, gatherings, and your next favourite bake.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#e7d8cc] sm:mt-6 sm:text-base sm:leading-8">
                  Whether you already know the flavours you want or need help deciding,
                  the contact experience is designed to make ordering feel warm, premium,
                  and effortless.
                </p>

                <div className="mt-8 grid gap-3 sm:mt-10">
                  {openingHours.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f4e6db] backdrop-blur-sm sm:text-[15px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openModalWithPreset()}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#c79b76_0%,#e3c2aa_100%)] px-6 py-3.5 text-sm font-semibold text-[#2d1d17] transition hover:-translate-y-0.5"
                  >
                    Start Enquiry
                  </button>
                  <Link
                    href="/demo/baker/menu"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/12"
                  >
                    Browse Menu
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1600&q=80"
                  alt="Chocolate brownies arranged for a premium bakery brand"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,9,0.14)_0%,rgba(20,12,9,0.54)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:pb-7 lg:p-8">
                  <div className="max-w-sm rounded-[20px] border border-white/10 bg-[rgba(255,248,241,0.14)] p-4 backdrop-blur-sm sm:rounded-[22px] sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ecd0b7] sm:text-[11px] sm:tracking-[0.24em]">
                      Best for mixed boxes
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white sm:text-base sm:leading-7">
                      Ask for a curated box with best sellers, signature flavours,
                      softer blondies, or a combination that suits the occasion.
                    </p>
                  </div>
                </div>
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
                {openingHours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {modalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-4 sm:px-4">
            <div className="absolute inset-0 bg-[rgba(24,15,11,0.65)] backdrop-blur-[4px]" />

            <div
              ref={modalPanelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-form-title"
              className="animate-modal-in relative z-[1] max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.18)] bg-[linear-gradient(180deg,rgba(255,251,246,0.98)_0%,rgba(244,234,223,0.96)_100%)] shadow-[0_32px_90px_rgba(28,18,13,0.42)]"
            >
              <div className="grid max-h-[92vh] lg:grid-cols-[0.88fr_1.12fr]">
                <div className="hidden border-r border-[var(--line)] bg-[linear-gradient(180deg,#3a271f_0%,#2d1d17_100%)] p-8 text-[#fff8f2] lg:block">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bca2]">
                    Velvet Crumb enquiry
                  </p>
                  <h2
                    id="contact-form-title"
                    className="font-heading mt-4 text-[2rem] font-semibold leading-[1.05]"
                  >
                    Tell us what you’d love baked.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#ead9ca]">
                    Choose flavours, boxes, fulfilment, date, and quantity. This form is
                    designed for everything from a single box to a polished event order.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Signature brownies and blondies",
                      "Gift-ready mixed selection boxes",
                      "Event and celebration orders",
                      "Collection or selected local delivery",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f3e6db]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[22px] border border-white/10 bg-white/6 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0a6]">
                      Popular menu items
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {allSelectableItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/7 px-3 py-2 text-[12px] text-[#f8ebe0]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="max-h-[92vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-[11px]">
                        Contact form
                      </p>
                      <h2 className="font-heading mt-2 text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--cocoa-1)] sm:text-[2.15rem] lg:hidden">
                        Tell us what you’d love baked.
                      </h2>
                    </div>

                    <button
                      type="button"
                      aria-label="Close contact form"
                      onClick={() => setModalOpen(false)}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 text-[var(--cocoa-1)] transition hover:bg-white"
                    >
                      <span className="text-xl leading-none">×</span>
                    </button>
                  </div>

                  <form className="mt-6 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Name
                        </span>
                        <input
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition placeholder:text-[#9a8779] focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Email
                        </span>
                        <input
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition placeholder:text-[#9a8779] focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Phone
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="Optional"
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition placeholder:text-[#9a8779] focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Enquiry type
                        </span>
                        <select
                          name="enquiryType"
                          value={formState.enquiryType}
                          onChange={handleInputChange}
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        >
                          <option>Custom Order</option>
                          <option>Gift Box</option>
                          <option>Event Order</option>
                          <option>Mixed Selection</option>
                          <option>Seasonal Enquiry</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Collection or delivery
                        </span>
                        <select
                          name="fulfilment"
                          value={formState.fulfilment}
                          onChange={handleInputChange}
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        >
                          <option>Collection</option>
                          <option>Local Delivery</option>
                          <option>Not Sure Yet</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                          Preferred date
                        </span>
                        <input
                          name="preferredDate"
                          type="date"
                          value={formState.preferredDate}
                          onChange={handleInputChange}
                          className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                        Quantity or portions
                      </span>
                      <input
                        name="portions"
                        type="text"
                        value={formState.portions}
                        onChange={handleInputChange}
                        placeholder="e.g. 6 brownies, 1 gift box, 24 pieces for an event"
                        className="min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 text-sm text-[var(--cocoa-1)] outline-none transition placeholder:text-[#9a8779] focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                      />
                    </label>

                    <div>
                      <span className="mb-3 block text-sm font-semibold text-[var(--cocoa-2)]">
                        Select menu items
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {allSelectableItems.map((item) => {
                          const selected = formState.selectedItems.includes(item);

                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => toggleSelectedItem(item)}
                              className={`inline-flex items-center rounded-full border px-4 py-2.5 text-[13px] font-medium transition ${
                                selected
                                  ? "border-[rgba(156,103,68,0.28)] bg-[linear-gradient(90deg,#6f4d3d_0%,#b9865e_100%)] text-[#fffaf5] shadow-[0_10px_22px_rgba(80,53,39,0.18)]"
                                  : "border-[var(--line)] bg-[rgba(255,251,246,0.9)] text-[var(--cocoa-2)] hover:bg-white"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[var(--cocoa-2)]">
                        Tell us what you have in mind
                      </span>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Share flavours, gifting notes, event details, dietary preferences, delivery questions, or anything else that helps the bakery tailor your order."
                        className="w-full rounded-[22px] border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 py-3.5 text-sm leading-7 text-[var(--cocoa-1)] outline-none transition placeholder:text-[#9a8779] focus:border-[rgba(156,103,68,0.44)] focus:bg-white"
                      />
                    </label>

                    <div className="rounded-[22px] border border-[var(--line)] bg-[rgba(247,240,231,0.7)] p-4 sm:p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                        Perfect for enquiries like
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          "A mixed box with best sellers and blondies",
                          "A gift-ready six-piece box for a birthday",
                          "An event tray with multiple brownie flavours",
                          "A custom order for collection later this week",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[16px] border border-[rgba(69,43,31,0.08)] bg-white/55 px-4 py-3 text-sm text-[var(--cocoa-2)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-5 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#59392d_0%,#8a6147_100%)] px-6 py-3.5 text-sm font-semibold text-[#fffaf5] shadow-[0_14px_32px_rgba(80,53,39,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(80,53,39,0.28)]"
                      >
                        Send Enquiry
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormState(initialFormState);
                        }}
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.92)] px-6 py-3.5 text-sm font-semibold text-[var(--cocoa-2)] transition hover:bg-white"
                      >
                        Reset Form
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
