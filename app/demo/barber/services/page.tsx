"use client";

export default function Page() {
  const services = [
    {
      name: "Skin Fade",
      price: "£24",
      time: "45 min",
      description:
        "Sharp, clean blending with a modern finish tailored to your head shape and style.",
    },
    {
      name: "Beard Trim",
      price: "£16",
      time: "25 min",
      description:
        "Detailed beard shaping, tidy edges, and balanced line work for a cleaner look.",
    },
    {
      name: "Haircut & Style",
      price: "£28",
      time: "50 min",
      description:
        "A precision cut with texture, shape, and styling designed around your routine.",
    },
    {
      name: "Full Service",
      price: "£38",
      time: "60 min",
      description:
        "Haircut, beard work, finishing, and styling in one complete appointment.",
    },
  ];

  return (
    <>
      <main className="page">
        <a
          href="https://cleanwebsites.co.uk"
          target="_blank"
          rel="noreferrer"
          className="backButton"
        >
          ← Back to Clean Websites
        </a>

        <header className="siteHeader">
          <div className="container headerInner">
            <a href="/demo/barber" className="brand">
              North Studio
            </a>

            <nav className="mainNav" aria-label="Main navigation">
              <a href="/demo/barber">Home</a>
              <a href="/demo/barber/about">About</a>
              <a href="/demo/barber/services" className="active">
                Services
              </a>
              <a href="/demo/barber/contact-booking">Contact / Booking</a>
            </nav>

            <a href="/demo/barber/contact-booking" className="headerCta">
              Book now
            </a>
          </div>
        </header>

        <section className="hero smallHero">
          <div className="heroOverlay" />
          <img
            className="heroImage"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=80"
            alt="Barber tools and workspace"
          />

          <div className="container heroContent">
            <span className="eyebrow">Services</span>
            <h1>Modern barbering services with clean pricing.</h1>
            <p className="heroText">
              Straightforward services, premium standards, and a focus on clean,
              consistent results in every appointment.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="servicesGrid">
              {services.map((service) => (
                <article className="card serviceCard" key={service.name}>
                  <div className="topRow">
                    <h2>{service.name}</h2>
                    <span className="price">{service.price}</span>
                  </div>
                  <div className="time">{service.time}</div>
                  <p>{service.description}</p>
                  <a href="/demo/barber/contact-booking" className="btn btnPrimary">
                    Book this service
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionAlt">
          <div className="container infoGrid">
            <div className="card infoCard">
              <h3>What to expect</h3>
              <p>
                Every appointment is built around consultation, precision, and a
                finish that suits your look and routine.
              </p>
            </div>

            <div className="card infoCard">
              <h3>Studio atmosphere</h3>
              <p>
                North Studio offers a relaxed, modern environment with a clean
                and premium feel throughout.
              </p>
            </div>

            <div className="card infoCard">
              <h3>Booking</h3>
              <p>
                Appointments can be requested through the contact and booking
                page with your preferred service and time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(html) { scroll-behavior: smooth; }
        :global(body) {
          margin: 0;
          background: #0b0b0c;
          color: #f5f1ea;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        :global(*) { box-sizing: border-box; }
        :global(a) { color: inherit; text-decoration: none; }
        :global(img) { display: block; max-width: 100%; }

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

        .backButton {
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 60;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(18, 18, 20, 0.78);
          backdrop-filter: blur(12px);
          color: #f5f1ea;
          font-size: 0.92rem;
        }

        .siteHeader {
          position: fixed;
          top: 16px;
          left: 0;
          width: 100%;
          z-index: 50;
          pointer-events: none;
        }

        .headerInner {
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
          pointer-events: auto;
        }

        .brand,
        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.03em;
        }

        .brand { font-size: 1.25rem; }

        .mainNav { display: none; gap: 28px; }
        .mainNav a { color: rgba(245, 241, 234, 0.78); }
        .mainNav a.active,
        .mainNav a:hover { color: #f5f1ea; }

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

        .headerCta { display: none; }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 160px 0 90px;
        }

        .smallHero {
          min-height: 70vh;
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
          margin: 0;
          font-size: 1.8rem;
          line-height: 1.04;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.4rem;
        }

        .heroText,
        p {
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

        .servicesGrid,
        .infoGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
        }

        .serviceCard,
        .infoCard {
          padding: 28px;
        }

        .topRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          margin-bottom: 10px;
        }

        .price {
          color: #e7d6b2;
          font-weight: 700;
          font-size: 1rem;
        }

        .time {
          color: #c6a972;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .serviceCard .btn {
          margin-top: 18px;
        }

        @media (min-width: 700px) {
          .container {
            width: min(1180px, calc(100% - 48px));
          }
          .mainNav { display: flex; }
          .headerCta { display: inline-flex; }
          .servicesGrid,
          .infoGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 980px) {
          .servicesGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .infoGrid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
