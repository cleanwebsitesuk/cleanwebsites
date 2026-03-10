"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const featuredItems = [
  {
    name: "Classic Smash Burger",
    description:
      "Two smashed beef patties, American cheese, pickles, onions, and house burger sauce.",
    price: "£8.95",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crispy Chicken Burger",
    description:
      "Buttermilk fried chicken, shredded lettuce, pickles, and spicy mayo in a toasted brioche bun.",
    price: "£9.45",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Loaded Fries",
    description:
      "Seasoned fries topped with cheese sauce, jalapeños, spring onions, and burger sauce drizzle.",
    price: "£5.95",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chicken Tenders",
    description:
      "Golden crispy chicken tenders served with garlic mayo and Stack hot sauce.",
    price: "£6.95",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
  },
];

const features = [
  {
    title: "Fresh ingredients",
    text: "Quality produce, fresh buns, seasoned chicken, and made-to-order burgers every day.",
  },
  {
    title: "Bold flavour combinations",
    text: "From signature sauces to crispy coatings and loaded toppings, every bite is built to stand out.",
  },
  {
    title: "Fast takeaway service",
    text: "Quick turnaround for lunch, dinner, and late-night cravings without compromising quality.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
];

const reviews = [
  {
    quote: "Best burgers in Birmingham. Always fresh and packed with flavour.",
    name: "Amira K.",
  },
  {
    quote: "Crispy chicken is unreal. Perfect takeaway spot.",
    name: "Jordan M.",
  },
  {
    quote: "Loaded fries are ridiculous in the best way. Proper comfort food.",
    name: "Tariq S.",
  },
  {
    quote: "Clean branding, great service, and the food actually lives up to the hype.",
    name: "Nathan R.",
  },
];

export default function BurgerDemoPage() {
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
            <a href="#featured-menu" className="orderButton">
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
                Contact / Booking
              </Link>
            </nav>

            <a
              href="#featured-menu"
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

      <section className="hero">
        <div className="heroOverlay" />
        <div className="container heroContent">
          <div className="heroText">
            <div className="eyebrow">Birmingham, UK</div>

            <h1>Burgers, fried chicken, and bold flavour.</h1>

            <p>
              Stack & Grill serves handcrafted burgers, crispy fried chicken,
              loaded fries, and late-night takeaway favourites in the heart of
              Birmingham.
            </p>

            <div className="heroActions">
              <Link href="/demo/burger/menu" className="textLink textLinkLight">
                View menu
              </Link>

              <a href="#featured-menu" className="heroBtn heroBtnPrimary">
                Order now
              </a>
            </div>

            <div className="heroMeta">
              <span>📍 Birmingham</span>
              <span>⭐ 4.8 rating</span>
              <span>🔥 Freshly cooked</span>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-menu" className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="sectionLabel">Featured Menu</span>
            <h2>Popular favourites</h2>
            <p>
              A crowd-pleasing mix of smashed burgers, crispy chicken, loaded
              fries, and takeaway classics.
            </p>
          </div>

          <div className="cardGrid">
            {featuredItems.map((item) => (
              <article className="foodCard" key={item.name}>
                <div
                  className="foodImage"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="foodCardBody">
                  <div className="foodCardTop">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <div className="sectionHeading centered">
            <span className="sectionLabel">Why people love us</span>
            <h2>Made for proper comfort food cravings</h2>
          </div>

          <div className="featureGrid">
            {features.map((feature) => (
              <article className="featureCard" key={feature.title}>
                <div className="featureIcon">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <span className="sectionLabel">Gallery</span>
            <h2>A look inside Stack & Grill</h2>
            <p>
              Bold burgers, crispy fried chicken, loaded fries, and a clean,
              modern takeaway vibe.
            </p>
          </div>

          <div className="galleryGrid">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`galleryItem galleryItem${index + 1}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <div className="sectionHeading">
            <span className="sectionLabel">Reviews</span>
            <h2>What customers say</h2>
          </div>

          <div className="reviewGrid">
            {reviews.map((review) => (
              <article className="reviewCard" key={review.name}>
                <div className="stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaInner">
          <div>
            <span className="sectionLabel light">Ready when you are</span>
            <h2>Hungry yet?</h2>
            <p>
              Explore the full menu or place your next takeaway order with Stack
              & Grill.
            </p>
          </div>

          <div className="ctaActions">
            <Link href="/demo/burger/menu" className="textLink textLinkWhite">
              View full menu
            </Link>
            <a href="#featured-menu" className="ctaDarkBtn">
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
  margin-right: 18px;
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

        .hero {
          position: relative;
          min-height: 84vh;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.78) 0%,
            rgba(15, 23, 42, 0.58) 40%,
            rgba(15, 23, 42, 0.22) 100%
          );
        }

        .heroContent {
          position: relative;
          z-index: 1;
          padding: 112px 0 88px;
        }

        .heroText {
          max-width: 720px;
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

        .hero h1 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 900;
          max-width: 11ch;
        }

        .hero p {
          margin: 1.15rem 0 0;
          max-width: 640px;
          font-size: 1.06rem;
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

        .textLinkLight::after {
          background: rgba(255, 255, 255, 0.95);
        }

        .textLinkWhite {
          color: #ffffff;
          font-size: 1rem;
        }

        .textLinkWhite::after {
          background: rgba(255, 255, 255, 0.95);
        }

        .heroMeta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .heroMeta span {
          display: inline-flex;
          align-items: center;
          min-height: 42px;
          padding: 0 0.95rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 0.96rem;
          font-weight: 700;
          color: #ffffff;
          backdrop-filter: blur(6px);
        }

        .section {
          padding: 80px 0;
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

        .sectionHeading h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHeading p {
          margin: 0.9rem 0 0;
          color: #4b5563;
          line-height: 1.7;
          font-size: 1.02rem;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .foodCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(31, 41, 55, 0.06);
        }

        .foodImage {
          aspect-ratio: 1.1 / 0.9;
          background-size: cover;
          background-position: center;
        }

        .foodCardBody {
          padding: 1.2rem;
        }

        .foodCardTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }

        .foodCardTop h3 {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.2;
        }

        .foodCardTop span {
          color: #e63946;
          font-weight: 800;
          white-space: nowrap;
        }

        .foodCard p {
          margin: 0;
          color: #4b5563;
          line-height: 1.65;
          font-size: 0.96rem;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .featureCard {
          background: #ffffff;
          border-radius: 24px;
          padding: 1.5rem;
          border: 1px solid rgba(31, 41, 55, 0.08);
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .featureIcon {
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

        .featureCard h3 {
          margin: 0 0 0.6rem;
          font-size: 1.15rem;
        }

        .featureCard p {
          margin: 0;
          color: #4b5563;
          line-height: 1.7;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 1rem;
        }

        .galleryItem {
          border-radius: 24px;
          background-size: cover;
          background-position: center;
          min-height: 220px;
        }

        .galleryItem1 {
          grid-row: 1 / 3;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .reviewCard {
          background: #ffffff;
          border: 1px solid rgba(31, 41, 55, 0.08);
          border-radius: 24px;
          padding: 1.4rem;
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.05);
        }

        .stars {
          color: #f4a261;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .reviewCard p {
          margin: 0 0 1rem;
          line-height: 1.75;
          color: #374151;
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
          .cardGrid,
          .reviewGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .galleryGrid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 250px 250px;
          }

          .galleryItem1 {
            grid-column: 1 / 3;
            grid-row: auto;
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

          .hero {
            min-height: auto;
          }

          .heroContent {
            padding: 104px 0 64px;
          }

          .featureGrid {
            grid-template-columns: 1fr;
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

          .logo {
            gap: 12px;
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

          .heroContent {
            padding: 92px 0 56px;
          }

          .hero h1 {
            font-size: clamp(2.1rem, 9vw, 3rem);
            max-width: 100%;
          }

          .hero p {
            font-size: 1rem;
          }

          .heroActions {
            gap: 0.9rem;
          }

          .heroMeta {
            gap: 0.6rem;
          }

          .heroMeta span {
            min-height: 38px;
            padding: 0 0.85rem;
            font-size: 0.88rem;
          }

          .section {
            padding: 64px 0;
          }

          .cardGrid,
          .reviewGrid,
          .footerGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryGrid {
            grid-template-rows: none;
          }

          .galleryItem,
          .galleryItem1 {
            grid-column: auto;
            grid-row: auto;
            min-height: 220px;
          }

          .foodCardTop {
            flex-direction: column;
            gap: 0.35rem;
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

          .heroMeta span {
            width: fit-content;
            max-width: 100%;
          }

          .mobileNav a {
            padding: 0.85rem 0.95rem;
          }
        }
      `}</style>
    </main>
  );
}
