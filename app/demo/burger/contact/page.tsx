"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BurgerContactPage() {
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
<a href="/demo/burger/menu" className="orderButton">
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

      <section className="contactHero">
        <div className="contactHeroOverlay" />
        <div className="container contactHeroContent">
          <div className="contactHeroText">
            <div className="eyebrow">Visit or order from Stack & Grill</div>
            <h1>Find us in Birmingham or place an order for takeaway.</h1>
            <p>
              Visit us in the city, get in touch about an order, or send an
              enquiry using the contact form below.
            </p>

            <div className="heroActions">
              <Link href="/demo/burger/menu" className="heroBtn heroBtnPrimary">
                View menu
              </Link>
              <a href="#contact-form" className="textLink textLinkLight">
                Send enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contactGrid">
          <div className="contactInfoCard">
            <span className="sectionLabel">Contact information</span>
            <h2>Everything you need to find us.</h2>

            <div className="infoList">
              <div className="infoItem">
                <h3>Address</h3>
                <p>
                  45 Example St
                  <br />
                  Birmingham
                  <br />
                  B5 0XX
                </p>
              </div>

              <div className="infoItem">
                <h3>Phone</h3>
                <p>0121 XXX XXXX</p>
              </div>

              <div className="infoItem">
                <h3>Opening hours</h3>
                <p>
                  Mon–Thu: 12:00 – 10:00
                  <br />
                  Fri–Sat: 12:00 – 11:30
                  <br />
                  Sun: 12:00 – 9:00
                </p>
              </div>
            </div>
          </div>

          <div id="contact-form" className="formCard">
            <span className="sectionLabel">Order / contact form</span>
            <h2>Send an enquiry</h2>
            <p>
              Ask about takeaway, opening times, or general information and
              we’ll be happy to help.
            </p>

            <form className="contactForm">
              <div className="fieldGroup">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>

              <div className="fieldGroup">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your enquiry"
                />
              </div>

              <button type="submit" className="submitButton">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <div className="sectionHeading">
            <span className="sectionLabel">Map</span>
            <h2>Find Stack & Grill in Birmingham</h2>
            <p>
              This demo uses a styled map placeholder to represent the restaurant
              location.
            </p>
          </div>

          <div className="mapCard">
            <div className="mapPlaceholder">
              <div className="mapPin">📍</div>
              <div className="mapCopy">
                <strong>Stack & Grill</strong>
                <span>45 Example St, Birmingham, B5 0XX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaInner">
          <div>
            <span className="sectionLabel light">Still browsing?</span>
            <h2>See what’s on the menu.</h2>
            <p>
              Explore burgers, fried chicken, loaded fries, sides, and drinks
              from the full Stack & Grill menu.
            </p>
          </div>

          <div className="ctaActions">
            <Link href="/demo/burger/menu" className="textLink textLinkWhite">
              View full menu
            </Link>
            <Link href="/demo/burger/about" className="ctaDarkBtn">
              About us
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
        .ctaDarkBtn,
        .submitButton {
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
          border: none;
          box-shadow: 0 12px 24px rgba(230, 57, 70, 0.18);
          transition: transform 0.22s ease, box-shadow 0.22s ease,
            filter 0.22s ease;
          cursor: pointer;
        }

        .orderButton:hover,
        .mobileOrderButton:hover,
        .heroBtnPrimary:hover,
        .ctaDarkBtn:hover,
        .submitButton:hover {
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

        .contactHero {
          position: relative;
          min-height: 72vh;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .contactHeroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(15, 23, 42, 0.58) 42%,
            rgba(15, 23, 42, 0.2) 100%
          );
        }

        .contactHeroContent {
          position: relative;
          z-index: 1;
          padding: 112px 0 82px;
        }

        .contactHeroText {
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

        .contactHero h1 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 900;
          max-width: 12ch;
        }

        .contactHero p {
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
        .contactInfoCard h2,
        .formCard h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHeading p,
        .formCard p {
          color: #4b5563;
          line-height: 1.75;
          font-size: 1.02rem;
          margin: 0.9rem 0 0;
        }

        .contactGrid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .contactInfoCard,
        .formCard,
        .mapCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 28px;
          padding: 1.5rem;
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .infoList {
          display: grid;
          gap: 1.2rem;
          margin-top: 1.4rem;
        }

        .infoItem h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
        }

        .infoItem p {
          margin: 0;
          color: #4b5563;
          line-height: 1.7;
        }

        .contactForm {
          display: grid;
          gap: 1rem;
          margin-top: 1.4rem;
        }

        .fieldGroup {
          display: grid;
          gap: 0.45rem;
        }

        .fieldGroup label {
          font-weight: 700;
          font-size: 0.95rem;
          color: #111827;
        }

        .fieldGroup input,
        .fieldGroup textarea {
          width: 100%;
          border: 1px solid rgba(31, 41, 55, 0.12);
          border-radius: 16px;
          padding: 0.95rem 1rem;
          font: inherit;
          color: #111827;
          background: #ffffff;
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .fieldGroup input:focus,
        .fieldGroup textarea:focus {
          border-color: rgba(230, 57, 70, 0.55);
          box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.08);
        }

        .fieldGroup textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submitButton {
          width: fit-content;
          margin-top: 0.25rem;
        }

        .mapCard {
          padding: 12px;
        }

        .mapPlaceholder {
          min-height: 420px;
          border-radius: 22px;
          background:
            linear-gradient(
              90deg,
              rgba(31, 41, 55, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              rgba(31, 41, 55, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(135deg, #f8fafc, #eef2f7);
          background-size: 36px 36px, 36px 36px, auto;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .mapPin {
          font-size: 2rem;
          margin-bottom: 0.65rem;
        }

        .mapCopy {
          display: grid;
          gap: 0.35rem;
          color: #111827;
        }

        .mapCopy strong {
          font-size: 1.15rem;
        }

        .mapCopy span {
          color: #4b5563;
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

          .contactGrid {
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

          .contactHero {
            min-height: auto;
          }

          .contactHeroContent {
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

          .contactHeroContent {
            padding: 84px 0 52px;
          }

          .contactHeroText {
            max-width: 100%;
          }

          .contactHero h1 {
            font-size: clamp(2rem, 8.5vw, 2.8rem);
            max-width: 100%;
          }

          .contactHero p {
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
          .contactInfoCard h2,
          .formCard h2 {
            font-size: 1.9rem;
          }

          .contactInfoCard,
          .formCard {
            padding: 1.2rem;
            border-radius: 22px;
          }

          .mapCard {
            padding: 10px;
            border-radius: 22px;
          }

          .mapPlaceholder {
            min-height: 280px;
            border-radius: 18px;
          }

          .submitButton {
            width: 100%;
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
