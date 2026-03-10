"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const values = [
  {
    title: "Fresh daily ingredients",
    text: "We focus on quality produce, properly seasoned chicken, fresh salad, and buns that hold up to every stack.",
  },
  {
    title: "Signature sauces",
    text: "From burger sauce to spicy mayo and house-made drizzles, flavour is built into every layer.",
  },
  {
    title: "Fast takeaway service",
    text: "Designed for lunch rushes, dinner orders, and late-night cravings without losing consistency.",
  },
];

export default function BurgerAboutPage() {
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
            <Link href="/demo/burger/menu" className="orderButton">
              Order now
            </Link>

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
                Contact / Booking
              </Link>
            </nav>

            <Link
              href="/demo/burger/menu"
              className="mobileOrderButton"
              onClick={() => setMenuOpen(false)}
            >
              Order now
            </Link>
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

      <section className="aboutHero">
        <div className="aboutHeroOverlay" />
        <div className="container aboutHeroContent">
          <div className="aboutHeroText">
            <div className="eyebrow">About Stack & Grill</div>
            <h1>Comfort food made with energy, flavour, and proper care.</h1>
            <p>
              Stack & Grill was created for people who love bold, satisfying
              comfort food. From smashed burgers to crispy fried chicken,
              everything we serve is cooked fresh and packed with flavour.
            </p>

            <div className="heroActions">
              <Link href="/demo/burger/menu" className="textLink textLinkLight">
                View menu
              </Link>
              <Link href="/demo/burger/contact" className="heroBtn heroBtnPrimary">
                Visit / order
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container storyGrid">
          <div className="storyCopy">
            <span className="sectionLabel">Our story</span>
            <h2>Built around burgers, late nights, and quality ingredients.</h2>
            <p>
              Stack & Grill started with a simple idea: make takeaway food feel
              exciting again. The focus was never on being complicated. It was
              about serving food people genuinely crave — juicy smashed burgers,
              crispy fried chicken, loaded fries, and sides that feel generous,
              satisfying, and full of flavour.
            </p>
            <p>
              Inspired by Birmingham’s fast-moving food scene, the concept came
              together around late-night comfort food done properly. The menu was
              shaped by the kind of meals people come back for: bold sauces,
              crisp textures, soft buns, seasoned chicken, and fresh ingredients
              cooked to order.
            </p>
            <p>
              Today, Stack & Grill is positioned as a modern local favourite —
              the sort of burger and fried chicken spot that feels polished,
              dependable, and built for real repeat customers.
            </p>
          </div>

          <div className="storyImageCard">
            <div
              className="storyImage"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1400&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <div className="sectionHeading centered">
            <span className="sectionLabel">What makes us different</span>
            <h2>Simple idea. Better execution.</h2>
            <p>
              We keep the concept focused: fresh food, signature flavour, and a
              takeaway experience that feels fast, clean, and consistent.
            </p>
          </div>

          <div className="valuesGrid">
            {values.map((value) => (
              <article className="valueCard" key={value.title}>
                <div className="valueIcon">✦</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container showcaseGrid">
          <div className="showcaseText">
            <span className="sectionLabel">The experience</span>
            <h2>Designed to feel like a real modern takeaway brand.</h2>
            <p>
              Everything about Stack & Grill is built to feel clean, energetic,
              and easy to trust — from the visual identity to the menu structure
              and the way the food is presented.
            </p>
            <p>
              It is the kind of burger restaurant brand that works equally well
              for walk-ins, delivery orders, and repeat local customers looking
              for a reliable favourite in Birmingham.
            </p>
          </div>

          <div className="showcaseImages">
            <div
              className="showcaseLarge"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80")',
              }}
            />
            <div
              className="showcaseSmall"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=1200&q=80")',
              }}
            />
            <div
              className="showcaseSmall"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaInner">
          <div>
            <span className="sectionLabel light">Next step</span>
            <h2>Ready to see the full menu?</h2>
            <p>
              Explore the burgers, chicken, loaded fries, and sides that define
              the Stack & Grill brand.
            </p>
          </div>

          <div className="ctaActions">
            <Link href="/demo/burger/menu" className="textLink textLinkWhite">
              View full menu
            </Link>
            <Link href="/demo/burger/contact" className="ctaDarkBtn">
              Contact / booking
            </Link>
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
                <Link href="/demo/burger/contact">Contact / Booking</Link>
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
          border-top: 1px solid rgba(31, 41, 55, 0.08);
          background: rgba(255, 255, 255, 0.98);
        }

        .mobilePanel.show {
          display: block;
        }

        .mobilePanelInner {
          padding: 14px 0 16px;
        }

        .mobileNav {
          display: grid;
          gap: 10px;
        }

        .mobileNav a {
          padding: 0.9rem 1rem;
          border-radius: 14px;
          text-decoration: none;
          color: #1f2937;
          background: #f8fafc;
          border: 1px solid rgba(31, 41, 55, 0.06);
          font-weight: 700;
        }

        .mobileOrderButton {
          width: 100%;
          margin-top: 12px;
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

        .aboutHero {
          position: relative;
          min-height: 72vh;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .aboutHeroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(15, 23, 42, 0.58) 42%,
            rgba(15, 23, 42, 0.2) 100%
          );
        }

        .aboutHeroContent {
          position: relative;
          z-index: 1;
          padding: 112px 0 82px;
        }

        .aboutHeroText {
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

        .aboutHero h1 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 900;
          max-width: 12ch;
        }

        .aboutHero p {
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
          max-width: 700px;
        }

        .sectionHeading.centered {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
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
        .storyCopy h2,
        .showcaseText h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHeading p,
        .storyCopy p,
        .showcaseText p {
          color: #4b5563;
          line-height: 1.75;
          font-size: 1.02rem;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: center;
        }

        .storyCopy p {
          margin: 1rem 0 0;
        }

        .storyImageCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 28px;
          padding: 12px;
          box-shadow: 0 18px 40px rgba(31, 41, 55, 0.06);
        }

        .storyImage {
          min-height: 520px;
          border-radius: 22px;
          background-size: cover;
          background-position: center;
        }

        .valuesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .valueCard {
          background: #ffffff;
          border-radius: 24px;
          padding: 1.5rem;
          border: 1px solid rgba(31, 41, 55, 0.08);
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .valueIcon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(244, 162, 97, 0.16);
          color: #e63946;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .valueCard h3 {
          margin: 0 0 0.6rem;
          font-size: 1.15rem;
        }

        .valueCard p {
          margin: 0;
          color: #4b5563;
          line-height: 1.7;
        }

        .showcaseGrid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 2rem;
          align-items: center;
        }

        .showcaseText p {
          margin: 1rem 0 0;
        }

        .showcaseImages {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1rem;
        }

        .showcaseLarge {
          min-height: 480px;
          border-radius: 26px;
          background-size: cover;
          background-position: center;
          grid-row: 1 / 3;
        }

        .showcaseSmall {
          min-height: 232px;
          border-radius: 24px;
          background-size: cover;
          background-position: center;
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

          .storyGrid,
          .showcaseGrid {
            grid-template-columns: 1fr;
          }

          .valuesGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .showcaseImages {
            grid-template-columns: 1fr 1fr;
          }

          .showcaseLarge {
            grid-row: auto;
            min-height: 320px;
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
            display: none;
          }

          .menuToggle {
            display: inline-flex;
          }

          .cleanWebsitesButton {
            top: 74px;
          }

          .aboutHero {
            min-height: auto;
          }

          .aboutHeroContent {
            padding: 104px 0 64px;
          }

          .ctaInner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 20px, 1180px);
          }

          .headerRow {
            min-height: 60px;
          }

          .logoMark {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            font-size: 0.7rem;
            margin-right: 10px;
          }

          .logoMain {
            font-size: 0.98rem;
          }

          .menuToggle {
            width: 40px;
            height: 40px;
          }

          .cleanWebsitesButton {
            top: 70px;
            left: 10px;
            min-height: 36px;
            padding: 0 0.8rem;
            font-size: 0.78rem;
          }

          .aboutHeroContent {
            padding: 92px 0 56px;
          }

          .aboutHero h1 {
            font-size: clamp(2.1rem, 9vw, 3rem);
            max-width: 100%;
          }

          .aboutHero p {
            font-size: 1rem;
          }

          .heroActions {
            gap: 0.9rem;
          }

          .section {
            padding: 64px 0;
          }

          .valuesGrid,
          .footerGrid,
          .showcaseImages {
            grid-template-columns: 1fr;
          }

          .storyImage {
            min-height: 340px;
          }

          .showcaseLarge,
          .showcaseSmall {
            min-height: 220px;
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
            align-items: flex-start;
          }

          .textLink,
          .heroBtnPrimary {
            width: 100%;
            justify-content: flex-start;
          }

          .mobileNav a {
            padding: 0.85rem 0.95rem;
          }
        }
      `}</style>
    </main>
  );
}
