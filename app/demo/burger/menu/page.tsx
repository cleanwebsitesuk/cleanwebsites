"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuSections = [
  {
    title: "Burgers",
    items: [
      {
        name: "Classic Smash Burger",
        description:
          "Two smashed beef patties, American cheese, pickles, onions, and house burger sauce.",
        price: "£8.95",
      },
      {
        name: "Double Cheese Burger",
        description:
          "Double beef patties, double cheese, shredded lettuce, pickles, onions, and signature sauce.",
        price: "£10.45",
      },
      {
        name: "Spicy Chicken Burger",
        description:
          "Buttermilk fried chicken, spicy mayo, pickles, lettuce, and toasted brioche bun.",
        price: "£9.45",
      },
      {
        name: "BBQ Burger",
        description:
          "Beef patty, cheddar, crispy onions, and smoky BBQ sauce.",
        price: "£10.95",
      },
    ],
  },
  {
    title: "Chicken",
    items: [
      {
        name: "Crispy Chicken Tenders",
        description:
          "Golden fried tenders served with your choice of dip.",
        price: "£6.95",
      },
      {
        name: "Hot Wings",
        description:
          "Crispy wings tossed in Stack hot sauce with a punchy finish.",
        price: "£6.45",
      },
      {
        name: "Chicken Strips",
        description:
          "Tender chicken strips with seasoned coating and garlic mayo on the side.",
        price: "£6.75",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Loaded Fries",
        description:
          "Seasoned fries topped with cheese sauce, jalapeños, spring onions, and sauce drizzle.",
        price: "£5.95",
      },
      {
        name: "Seasoned Fries",
        description:
          "Crispy fries finished with our house seasoning blend.",
        price: "£3.75",
      },
      {
        name: "Mozzarella Sticks",
        description:
          "Golden fried mozzarella sticks served with a tomato dip.",
        price: "£4.95",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Soft Drinks",
        description:
          "Coke, Diet Coke, Fanta, Sprite, or bottled water.",
        price: "£1.95",
      },
      {
        name: "Milkshakes",
        description:
          "Vanilla, chocolate, strawberry, or Oreo.",
        price: "£4.95",
      },
    ],
  },
];

export default function BurgerMenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowBackButton(window.scrollY < 220);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="page">
      <header className="siteHeader">
        <div className="container headerRow">
          <Link
            href="/demo/burger"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logoMark">S&G</span>
            <span className="logoMain">Stack & Grill</span>
          </Link>

          <nav className="desktopNav" aria-label="Primary">
            <Link href="/demo/burger">Home</Link>
            <Link href="/demo/burger/about">About</Link>
            <Link href="/demo/burger/menu">Menu</Link>
            <Link href="/demo/burger/contact">Contact</Link>
          </nav>

          <div className="headerActions">
            <a href="#menu-sections" className="orderButton">
              Order now
            </a>

            <button
              type="button"
              className={`menuToggle ${menuOpen ? "open" : ""}`}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobilePanel ${menuOpen ? "show" : ""}`}>
          <div className="container mobilePanelInner">
            <nav className="mobileNav" aria-label="Mobile Navigation">
              <Link href="/demo/burger" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/demo/burger/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link href="/demo/burger/menu" onClick={() => setMenuOpen(false)}>
                Menu
              </Link>
              <Link
                href="/demo/burger/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <a
              href="#menu-sections"
              className="mobileOrderButton"
              onClick={() => setMenuOpen(false)}
            >
              Order now
            </a>
          </div>
        </div>
      </header>

      <a
        href="https://cleanwebsites.co.uk"
        target="_blank"
        rel="noreferrer"
        className={`cleanWebsitesButton ${showBackButton ? "visible" : "hidden"}`}
      >
        Back to Clean Websites
      </a>

      <section className="menuHero">
        <div className="menuHeroOverlay" />
        <div className="container menuHeroContent">
          <div className="menuHeroText">
            <div className="eyebrow">Our menu</div>
            <h1>Burgers, chicken, loaded fries, and sides made fresh to order.</h1>
            <p>
              Built around craveable comfort food, bold sauces, crispy textures,
              and proper takeaway favourites made for Birmingham.
            </p>

            <div className="heroActions">
              <a href="#menu-sections" className="heroBtn heroBtnPrimary">
                Browse menu
              </a>
              <Link href="/demo/burger/contact" className="textLink textLinkLight">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="menu-sections" className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="sectionLabel">Full menu</span>
            <h2>Fresh comfort food, done properly.</h2>
            <p>
              From stacked burgers and crispy chicken to loaded fries and shakes,
              every item is designed to feel generous, punchy, and easy to order.
            </p>
          </div>

          <div className="menuLayout">
            {menuSections.map((section) => (
              <section className="menuSection" key={section.title}>
                <div className="menuSectionHeader">
                  <h3>{section.title}</h3>
                </div>

                <div className="menuCards">
                  {section.items.map((item) => (
                    <article className="menuCard" key={item.name}>
                      <div className="menuCardTop">
                        <h4>{item.name}</h4>
                        <span>{item.price}</span>
                      </div>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container extrasGrid">
          <div className="extrasCard">
            <span className="sectionLabel">Popular choice</span>
            <h3>Classic Smash + Loaded Fries</h3>
            <p>
              One of the strongest combinations on the menu — juicy smashed beef,
              house sauce, and fries with proper flavour and texture.
            </p>
          </div>

          <div className="extrasCard">
            <span className="sectionLabel">Something lighter</span>
            <h3>Chicken Strips + Soft Drink</h3>
            <p>
              A simple, easy order that still feels satisfying and full of
              flavour.
            </p>
          </div>

          <div className="extrasCard">
            <span className="sectionLabel">Go all in</span>
            <h3>BBQ Burger + Shake</h3>
            <p>
              Smoky, rich, and ideal when you want something bigger and more
              indulgent.
            </p>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaInner">
          <div>
            <span className="sectionLabel light">Ready when you are</span>
            <h2>Hungry yet?</h2>
            <p>
              Place an order, get in touch, or carry on exploring the Stack &
              Grill brand.
            </p>
          </div>

          <div className="ctaActions">
            <Link href="/demo/burger/contact" className="textLink textLinkWhite">
              Contact
            </Link>
            <a href="#menu-sections" className="ctaDarkBtn">
              Order now
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <h3>Stack & Grill</h3>
            <p>
              Handcrafted burgers, crispy fried chicken, loaded fries, and
              takeaway favourites served fresh in Birmingham.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/demo/burger">Home</Link>
              </li>
              <li>
                <Link href="/demo/burger/about">About</Link>
              </li>
              <li>
                <Link href="/demo/burger/menu">Menu</Link>
              </li>
              <li>
                <Link href="/demo/burger/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Address</h4>
            <ul>
              <li>45 Example St</li>
              <li>Birmingham</li>
              <li>B5 0XX</li>
              <li>0121 XXX XXXX</li>
            </ul>
          </div>

          <div>
            <h4>Opening hours</h4>
            <ul>
              <li>Mon–Thu: 12:00 – 10:00</li>
              <li>Fri–Sat: 12:00 – 11:30</li>
              <li>Sun: 12:00 – 9:00</li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #ffffff;
          color: #1f2937;
          overflow-x: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 120;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(31, 41, 55, 0.08);
        }

        .headerRow {
          min-height: 72px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 32px;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          min-width: 0;
          white-space: nowrap;
        }

        .logoMark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e63946, #f4a261);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.82rem;
          letter-spacing: 0.03em;
          flex-shrink: 0;
          box-shadow: 0 8px 18px rgba(230, 57, 70, 0.18);
          margin-right: 16px;
        }

        .logoMain {
          color: #111827;
          font-size: 1.1rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          min-width: 0;
        }

        .desktopNav a {
          position: relative;
          color: #374151;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .desktopNav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          background: #e63946;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.22s ease;
        }

        .desktopNav a:hover {
          color: #111827;
          transform: translateY(-1px);
        }

        .desktopNav a:hover::after {
          transform: scaleX(1);
        }

        .headerActions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .orderButton,
        .mobileOrderButton,
        .heroBtnPrimary,
        .ctaDarkBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 1.2rem;
          border-radius: 999px;
          background: #e63946;
          color: #ffffff;
          text-decoration: none;
          font-weight: 800;
          white-space: nowrap;
          box-shadow: 0 12px 24px rgba(230, 57, 70, 0.18);
          transition: transform 0.22s ease, box-shadow 0.22s ease,
            filter 0.22s ease;
        }

        .orderButton:hover,
        .mobileOrderButton:hover,
        .heroBtnPrimary:hover,
        .ctaDarkBtn:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 16px 28px rgba(230, 57, 70, 0.24);
          filter: brightness(1.03);
        }

        .menuToggle {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          background: #ffffff;
          padding: 0;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
        }

        .menuToggle span {
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #111827;
          transition: 0.2s ease;
        }

        .menuToggle.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .menuToggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menuToggle.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .mobilePanel {
          display: none;
          background: rgba(255, 255, 255, 0.98);
          border-top: 1px solid rgba(31, 41, 55, 0.08);
        }

        .mobilePanel.show {
          display: block;
        }

        .mobilePanelInner {
          padding: 12px 0 16px;
        }

        .mobileNav {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .mobileNav a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 14px;
          border-radius: 999px;
          text-decoration: none;
          color: #111827;
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.1);
          box-shadow: 0 6px 18px rgba(31, 41, 55, 0.05);
          font-weight: 800;
          font-size: 0.94rem;
          line-height: 1;
          transition: transform 0.18s ease, background 0.18s ease,
            box-shadow 0.18s ease;
        }

        .mobileNav a:hover {
          transform: translateY(-1px);
          background: #f9fafb;
          box-shadow: 0 10px 22px rgba(31, 41, 55, 0.08);
        }

        .mobileOrderButton {
          width: 100%;
          margin-top: 12px;
          min-height: 50px;
          border-radius: 14px;
        }

        .cleanWebsitesButton {
          position: fixed;
          top: 84px;
          left: 16px;
          z-index: 115;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 0 0.95rem;
          border-radius: 999px;
          background: #0f172a;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }

        .cleanWebsitesButton.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .cleanWebsitesButton.hidden {
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
        }

        .menuHero {
          position: relative;
          min-height: 72vh;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .menuHeroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(15, 23, 42, 0.58) 42%,
            rgba(15, 23, 42, 0.2) 100%
          );
        }

        .menuHeroContent {
          position: relative;
          z-index: 1;
          padding: 112px 0 82px;
        }

        .menuHeroText {
          max-width: 760px;
          color: #ffffff;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .menuHero h1 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 900;
          max-width: 13ch;
        }

        .menuHero p {
          margin: 1.2rem 0 0;
          max-width: 700px;
          font-size: 1.08rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .heroActions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.6rem;
        }

        .textLink {
          position: relative;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-weight: 800;
          line-height: 1;
          transition: transform 0.22s ease, opacity 0.22s ease;
        }

        .textLink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 0.24s ease;
        }

        .textLink:hover {
          transform: translateY(-1px);
        }

        .textLink:hover::after {
          transform: scaleX(0.55);
        }

        .textLinkLight {
          color: #ffffff;
          font-size: 1rem;
        }

        .textLinkLight::after,
        .textLinkWhite::after {
          background: rgba(255, 255, 255, 0.95);
        }

        .textLinkWhite {
          color: #ffffff;
          font-size: 1rem;
        }

        .section {
          padding: 84px 0;
        }

        .altSection {
          background: #fafafa;
        }

        .sectionHeading {
          margin-bottom: 2rem;
          max-width: 720px;
        }

        .sectionLabel {
          display: inline-block;
          margin-bottom: 0.7rem;
          color: #e63946;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 0.82rem;
        }

        .sectionLabel.light {
          color: rgba(255, 255, 255, 0.82);
        }

        .sectionHeading h2,
        .menuSectionHeader h3 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHeading p {
          color: #4b5563;
          line-height: 1.75;
          font-size: 1.02rem;
          margin: 0.9rem 0 0;
        }

        .menuLayout {
          display: grid;
          gap: 2rem;
        }

        .menuSection {
          display: grid;
          gap: 1rem;
        }

        .menuSectionHeader h3 {
          font-size: 1.8rem;
        }

        .menuCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .menuCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 24px;
          padding: 1.3rem;
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .menuCardTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.65rem;
        }

        .menuCardTop h4 {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.2;
        }

        .menuCardTop span {
          color: #e63946;
          font-weight: 900;
          white-space: nowrap;
        }

        .menuCard p {
          margin: 0;
          color: #4b5563;
          line-height: 1.7;
          font-size: 0.97rem;
        }

        .extrasGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .extrasCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 24px;
          padding: 1.4rem;
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .extrasCard h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .extrasCard p {
          margin: 0.9rem 0 0;
          color: #4b5563;
          line-height: 1.7;
        }

        .ctaSection {
          padding: 80px 0;
          background: linear-gradient(135deg, #e63946, #f4a261);
          color: #ffffff;
        }

        .ctaInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .ctaInner h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .ctaInner p {
          margin: 0.9rem 0 0;
          max-width: 620px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
        }

        .ctaActions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ctaDarkBtn {
          background: rgba(17, 24, 39, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: none;
        }

        .footer {
          background: #111827;
          color: rgba(255, 255, 255, 0.82);
          padding: 4rem 0 2.5rem;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 2rem;
        }

        .footer h3,
        .footer h4 {
          margin-top: 0;
          color: #ffffff;
        }

        .footer p {
          line-height: 1.7;
          margin: 0;
        }

        .footer ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.6rem;
        }

        .footer a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
        }

        @media (max-width: 1040px) {
          .footerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .menuCards,
          .extrasGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 920px) {
          .headerRow {
            grid-template-columns: 1fr auto;
            min-height: 64px;
            gap: 12px;
          }

          .desktopNav,
          .orderButton {
            display: none !important;
          }

          .menuToggle {
            display: inline-flex;
          }

          .cleanWebsitesButton {
            top: 74px;
          }

          .menuHero {
            min-height: auto;
          }

          .menuHeroContent {
            padding: 96px 0 60px;
          }

          .ctaInner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(1180px, calc(100% - 40px));
          }

          .headerRow {
            min-height: 64px;
            grid-template-columns: 1fr auto;
            gap: 10px;
          }

          .logo {
            min-width: 0;
          }

          .logoMark {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            font-size: 0.7rem;
            margin-right: 10px;
          }

          .logoMain {
            font-size: 0.96rem;
            line-height: 1;
          }

          .menuToggle {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }

          .cleanWebsitesButton {
            top: 72px;
            left: 10px;
            min-height: 36px;
            padding: 0 0.8rem;
            font-size: 0.78rem;
          }

          .mobileNav a {
            min-height: 44px;
            padding: 0 12px;
            border-radius: 999px;
            font-size: 0.9rem;
          }

          .mobileOrderButton {
            min-height: 48px;
            border-radius: 14px;
          }

          .menuHeroContent {
            padding: 84px 0 52px;
          }

          .menuHeroText {
            max-width: 100%;
          }

          .menuHero h1 {
            font-size: clamp(2rem, 8.5vw, 2.8rem);
            max-width: 100%;
          }

          .menuHero p {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .heroActions {
            gap: 0.85rem;
          }

          .section {
            padding: 56px 0;
          }

          .sectionHeading {
            margin-bottom: 1.5rem;
          }

          .sectionHeading h2,
          .menuSectionHeader h3 {
            font-size: 1.9rem;
          }

          .menuCard {
            padding: 1.1rem;
            border-radius: 20px;
          }

          .menuCardTop {
            flex-direction: column;
            gap: 0.3rem;
          }

          .extrasCard {
            padding: 1.2rem;
            border-radius: 20px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
          }

          .ctaSection {
            padding: 56px 0;
          }

          .ctaInner {
            gap: 1.2rem;
          }

          .ctaActions {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
          }

          .ctaDarkBtn {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .heroActions {
            flex-direction: column;
            align-items: stretch;
          }

          .textLink,
          .heroBtnPrimary {
            width: 100%;
            justify-content: flex-start;
          }

          .mobileNav {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
