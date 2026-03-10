"use client";

export default function Page() {
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
              <a href="/demo/barber/services">Services</a>
              <a href="/demo/barber/contact-booking" className="active">
                Contact / Booking
              </a>
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
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=80"
            alt="Barber shop interior"
          />

          <div className="container heroContent">
            <span className="eyebrow">Contact / Booking</span>
            <h1>Book your appointment or get in touch with the studio.</h1>
            <p className="heroText">
              North Studio is based in Manchester and offers precision cuts,
              modern barbering, and a clean studio experience.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contactGrid">
            <div className="card bookingCard">
              <span className="eyebrow">Booking form</span>
              <h2>Book your appointment</h2>

              <div className="formGrid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" placeholder="07123 456789" />
                </div>

                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Skin Fade</option>
                    <option>Beard Trim</option>
                    <option>Haircut &amp; Style</option>
                    <option>Full Service</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="time">Preferred time</label>
                  <input id="time" type="text" placeholder="e.g. Friday, 3:30 PM" />
                </div>
              </div>

              <button className="btn btnPrimary bookButton">Book now</button>
            </div>

            <div className="sideStack">
              <div className="card infoCard">
                <span className="eyebrow">Visit the studio</span>
                <h3>North Studio</h3>
                <p>123 Deansgate</p>
                <p>Manchester</p>
                <p>M3 2BY</p>
              </div>

              <div className="card infoCard">
                <span className="eyebrow">Contact</span>
                <p>
                  <strong>Phone</strong>
                  <br />
                  <a href="tel:01615550192">0161 555 0192</a>
                </p>
                <p>
                  <strong>Instagram</strong>
                  <br />
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    @northstudiomcr
                  </a>
                </p>
              </div>

              <div className="card infoCard">
                <span className="eyebrow">Opening hours</span>
                <p>Mon–Fri: 9:00 AM – 7:00 PM</p>
                <p>Saturday: 9:00 AM – 6:00 PM</p>
                <p>Sunday: 11:00 AM – 4:00 PM</p>
              </div>
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
          min-height: 68vh;
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
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.04;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.4rem;
        }

        .heroText,
        p,
        label {
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

        .contactGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .sideStack {
          display: grid;
          gap: 22px;
        }

        .card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
        }

        .bookingCard,
        .infoCard {
          padding: 28px;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field label {
          color: #eadfc7;
          font-weight: 600;
        }

        .field input,
        .field select {
          width: 100%;
          min-height: 56px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: #f5f1ea;
          padding: 0 16px;
          outline: none;
          font-size: 1rem;
        }

        .field input::placeholder {
          color: rgba(245, 241, 234, 0.42);
        }

        .bookButton {
          width: 100%;
          margin-top: 20px;
        }

        @media (min-width: 700px) {
          .container {
            width: min(1180px, calc(100% - 48px));
          }
          .mainNav { display: flex; }
          .headerCta { display: inline-flex; }
          .formGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 980px) {
          .contactGrid {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: start;
          }
        }
      `}</style>
    </>
  );
}
