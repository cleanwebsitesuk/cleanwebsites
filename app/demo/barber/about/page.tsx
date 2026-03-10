"use client";

import { useState } from "react";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <main className="page">
        <header className="siteHeader">
          <div className="container headerWrap">
            <div className="headerBar">
              <a href="/demo/barber" className="brand">
                North Studio
              </a>

              <nav className="mainNav" aria-label="Main navigation">
                <a href="/demo/barber">Home</a>
                <a href="/demo/barber/about" className="active">
                  About
                </a>
                <a href="/demo/barber/services">Services</a>
                <a href="/demo/barber/contact-booking">Contact / Booking</a>
              </nav>

              <a href="/demo/barber/contact-booking" className="headerCta">
                Book now
              </a>

              <button
                type="button"
                className={`mobileMenuButton ${mobileMenuOpen ? "open" : ""}`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="mobileMenu" role="dialog" aria-label="Mobile navigation">
                <nav className="mobileNav">
                  <a href="/demo/barber" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="/demo/barber/about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                  <a href="/demo/barber/services" onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </a>
                  <a
                    href="/demo/barber/contact-booking"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact / Booking
                  </a>
                  <a
                    href="/demo/barber/contact-booking"
                    className="mobileMenuCta"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book now
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        <a
          href="https://cleanwebsites.co.uk"
          target="_blank"
          rel="noreferrer"
          className="backButton"
        >
          ← Back to Clean Websites
        </a>

        <section className="hero smallHero">
          <div className="heroOverlay" />
          <img
            className="heroImage"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1800&q=80"
            alt="Barber portrait"
          />

          <div className="container heroContent">
            <span className="eyebrow">About North Studio</span>
            <h1>Modern barbering, built around detail and consistency.</h1>
            <p className="heroText">
              North Studio is a premium barber shop in Manchester focused on
              precision cuts, clean fades, beard work, and a studio atmosphere
              that feels calm, polished, and easy to return to.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container aboutGrid">
            <div className="card imageCard">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80"
                alt="Modern barber studio interior"
              />
            </div>

            <div>
              <span className="eyebrow">Our philosophy</span>
              <h2>A clean, modern studio with a precision-first approach.</h2>
              <p className="bodyText">
                At North Studio, the focus is simple: quality barbering done
                properly. Every service is built around strong consultation,
                clean execution, and attention to the details that make a cut
                last well and feel right day to day.
              </p>
              <p className="bodyText">
                The studio itself is designed to feel relaxed and professional,
                combining a premium atmosphere with straightforward service,
                consistent standards, and modern barbering that suits real life.
              </p>
            </div>
          </div>
        </section>

        <section className="section sectionAlt">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">What matters here</span>
              <h2>Why clients come back</h2>
            </div>

            <div className="featureGrid">
              <div className="card featureCard">
                <h3>Precision cuts</h3>
                <p>
                  Clean fades, strong shape, and balanced finishing tailored to
                  your style and head shape.
                </p>
              </div>

              <div className="card featureCard">
                <h3>Relaxed atmosphere</h3>
                <p>
                  A studio environment that feels calm, modern, and easy from
                  the moment you walk in.
                </p>
              </div>

              <div className="card featureCard">
                <h3>Consistent results</h3>
                <p>
                  Reliable quality, thoughtful service, and a polished finish on
                  every appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container ctaBox card">
            <span className="eyebrow">Ready to book?</span>
            <h2>Visit the studio or book your next appointment.</h2>
            <p className="bodyText">
              North Studio is based on Deansgate in Manchester and offers
              modern barbering with a premium, detail-focused approach.
            </p>
            <div className="heroActions">
              <a href="/demo/barber/contact-booking" className="btn btnPrimary">
                Contact / Booking
              </a>
              <a href="/demo/barber/services" className="btn btnSecondary">
                View services
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #0b0b0c;
          color: #f5f1ea;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        :global(img) {
          display: block;
          max-width: 100%;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(198, 169, 114, 0.08), transparent 30%),
            linear-gradient(180deg, #111214 0%, #0b0b0c 100%);
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .siteHeader {
          position: fixed;
          top: 16px;
          left: 0;
          width: 100%;
          z-index: 80;
          pointer-events: none;
        }

        .headerWrap {
          pointer-events: none;
        }

        .headerBar,
        .mobileMenu,
        .backButton {
          pointer-events: auto;
        }

        .headerBar {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 18px;
          border-radius: 24px;
          background: rgba(15, 15, 17, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        .brand,
        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.03em;
        }

        .brand {
          font-size: 1.15rem;
          white-space: nowrap;
        }

        .mainNav {
          display: none;
          gap: 28px;
          align-items: center;
        }

        .mainNav a {
          color: rgba(245, 241, 234, 0.78);
          transition: color 0.2s ease;
        }

        .mainNav a.active,
        .mainNav a:hover {
          color: #f5f1ea;
        }

        .headerCta,
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 999px;
          font-weight: 600;
        }

        .headerCta,
        .btnPrimary {
          background: #c6a972;
          color: #0b0b0c;
          border: 1px solid #c6a972;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.06);
          color: #f5f1ea;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .headerCta {
          display: none;
        }

        .mobileMenuButton {
          width: 46px;
          height: 46px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #f5f1ea;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }

        .mobileMenuButton span {
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #f5f1ea;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .mobileMenuButton.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobileMenuButton.open span:nth-child(2) {
          opacity: 0;
        }

        .mobileMenuButton.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobileMenu {
          margin-top: 12px;
          padding: 10px;
          border-radius: 24px;
          background: rgba(15, 15, 17, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        .mobileNav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobileNav a {
          padding: 14px 16px;
          border-radius: 16px;
          color: rgba(245, 241, 234, 0.88);
          font-size: 0.98rem;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .mobileNav a:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #f5f1ea;
        }

        .mobileMenuCta {
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          background: #c6a972;
          color: #0b0b0c !important;
          font-weight: 700;
          border: 1px solid #c6a972;
        }

        .backButton {
          position: fixed;
          top: 104px;
          left: 16px;
          z-index: 70;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(18, 18, 20, 0.78);
          backdrop-filter: blur(12px);
          color: #f5f1ea;
          font-size: 0.92rem;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 190px 0 90px;
        }

        .smallHero {
          min-height: 72vh;
          display: flex;
          align-items: flex-end;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.3) saturate(0.8);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8, 8, 9, 0.28) 0%, rgba(8, 8, 9, 0.65) 50%, #0b0b0c 100%),
            linear-gradient(90deg, rgba(11, 11, 12, 0.82) 0%, rgba(11, 11, 12, 0.4) 100%);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 860px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          color: #c6a972;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(3rem, 8vw, 5.6rem);
          line-height: 0.96;
        }

        h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 5vw, 3.6rem);
          line-height: 1.04;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.4rem;
        }

        .heroText,
        .bodyText,
        .featureCard p {
          color: rgba(245, 241, 234, 0.74);
          line-height: 1.85;
          font-size: 1rem;
        }

        .heroText {
          max-width: 700px;
          font-size: 1.12rem;
          margin-top: 20px;
        }

        .section {
          padding: 104px 0;
        }

        .sectionAlt {
          background: linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0));
        }

        .aboutGrid,
        .featureGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
        }

        .imageCard {
          overflow: hidden;
          min-height: 420px;
        }

        .imageCard img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .featureCard,
        .ctaBox {
          padding: 28px;
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 36px;
        }

        .ctaBox {
          text-align: center;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
          justify-content: center;
        }

        @media (max-width: 699px) {
          .backButton {
            top: 104px;
            left: 16px;
            right: 16px;
            width: calc(100% - 32px);
            text-align: left;
          }

          .hero {
            padding: 190px 0 90px;
          }

          .brand {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 700px) {
          .container {
            width: min(1180px, calc(100% - 48px));
          }

          .backButton {
            top: 16px;
            left: 16px;
            z-index: 90;
          }

          .hero {
            padding: 160px 0 90px;
          }

          .mainNav {
            display: flex;
          }

          .headerCta {
            display: inline-flex;
          }

          .mobileMenuButton,
          .mobileMenu {
            display: none;
          }

          .brand {
            font-size: 1.25rem;
          }

          .featureGrid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 980px) {
          .aboutGrid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
