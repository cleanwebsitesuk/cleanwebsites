"use client";

export default function Page() {
  const services = [
    {
      name: "Skin Fade",
      price: "£24",
      icon: "✂️",
      description:
        "Sharp, clean blending with a modern finish tailored to your head shape and style.",
    },
    {
      name: "Beard Trim",
      price: "£16",
      icon: "🧔",
      description:
        "Detailed beard shaping, tidy edges, and balanced line work for a cleaner look.",
    },
    {
      name: "Haircut & Style",
      price: "£28",
      icon: "💈",
      description:
        "A precision cut with texture, shape, and styling designed around your routine.",
    },
    {
      name: "Full Service",
      price: "£38",
      icon: "⭐",
      description:
        "Haircut, beard work, finishing, and styling in one complete appointment.",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
      alt: "Skin fade haircut detail",
    },
    {
      src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
      alt: "Beard trim detail",
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern barber chair and mirror",
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
      alt: "Barber clipper detail",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
      alt: "Fresh textured haircut",
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium barber studio interior",
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=80",
      alt: "Fade blend close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
      alt: "Barber tools and station",
    },
  ];

  const reviews = [
    {
      quote: "Best fade in Manchester. Clean studio and great atmosphere.",
      name: "A. Malik",
    },
    {
      quote:
        "Sharp haircut every time. Easy booking, relaxed vibe, and real attention to detail.",
      name: "Jordan R.",
    },
    {
      quote:
        "The beard work is top tier. Everything feels polished, professional, and welcoming.",
      name: "Sam T.",
    },
    {
      quote:
        "Modern space, no rush, and a consistently clean finish. Exactly what you want from a local barber.",
      name: "Lewis H.",
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
            <a href="#home" className="brand">
              North Studio
            </a>

            <nav className="mainNav" aria-label="Main navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#book">Contact / Booking</a>
            </nav>

            <a href="#book" className="headerCta">
              Book now
            </a>
          </div>
        </header>

        <section className="hero" id="home">
          <img
            className="heroImage"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=80"
            alt="Modern barber studio interior"
          />
          <div className="heroOverlay" />

          <div className="container heroContent">
            <div className="heroTopRow">
              <span className="badge">Manchester</span>
              <span className="badge subtle">Open today · 9:00 AM – 7:00 PM</span>
            </div>

            <div className="heroGrid">
              <div className="heroCopy">
                <h1>North Studio</h1>
                <p className="heroText">
                  Modern barbering in Manchester. Precision cuts, skin fades,
                  and beard work in a clean, relaxed studio built around detail,
                  consistency, and a premium experience.
                </p>

                <div className="heroActions">
                  <a href="#book" className="btn btnPrimary">
                    Book an appointment
                  </a>
                  <a href="#services" className="btn btnSecondary">
                    View services
                  </a>
                </div>
              </div>

              <div className="heroCard">
                <div className="heroCardItem">
                  <span className="label">Studio</span>
                  <strong>Premium barbering</strong>
                  <p>Clean finishes, calm atmosphere, and modern styling.</p>
                </div>

                <div className="heroCardItem">
                  <span className="label">Most booked</span>
                  <strong>Skin Fade</strong>
                  <p>Precision blending and sharp finishing for an easy grow-out.</p>
                </div>

                <div className="heroCardItem">
                  <span className="label">Location</span>
                  <strong>Deansgate, Manchester</strong>
                  <p>Convenient city-centre location with a modern studio feel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Services</span>
              <h2>Barbering services designed around clean, consistent results</h2>
              <p>
                Straightforward pricing, modern cuts, and attention to detail in
                every appointment.
              </p>
            </div>

            <div className="servicesGrid">
              {services.map((service) => (
                <article className="card serviceCard" key={service.name}>
                  <div className="serviceHeader">
                    <span className="serviceIcon">{service.icon}</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="gallery">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Recent work</span>
              <h2>Recent Work</h2>
              <p>
                Fresh fades, detailed beard trims, clean finishing, and a studio
                environment that feels calm and premium.
              </p>
            </div>

            <div className="galleryGrid">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`galleryItem ${index === 0 || index === 5 ? "large" : ""}`}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Reviews</span>
              <h2>What clients say</h2>
              <p>
                Built on consistency, word of mouth, and a studio experience
                clients genuinely enjoy coming back to.
              </p>
            </div>

            <div className="reviewsGrid">
              {reviews.map((review) => (
                <article className="card reviewCard" key={review.name}>
                  <div className="stars">★★★★★</div>
                  <p className="reviewQuote">“{review.quote}”</p>
                  <span className="reviewName">{review.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="about">
          <div className="container aboutGrid">
            <div className="aboutImageWrap card">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
                alt="Barber portrait placeholder"
              />
            </div>

            <div className="aboutContent">
              <span className="eyebrow">About North Studio</span>
              <h2>Modern barbering with precision, detail, and a relaxed studio feel</h2>
              <p>
                North Studio is built around precision cuts, attention to
                detail, and a calm studio atmosphere. The goal is simple:
                modern barbering done properly, with clean finishes, thoughtful
                consultation, and a polished experience from start to finish.
              </p>

              <div className="aboutPoints">
                <div className="miniCard">
                  <strong>Precision-first</strong>
                  <span>Clean blends, sharp edges, and consistent finishes.</span>
                </div>
                <div className="miniCard">
                  <strong>Relaxed atmosphere</strong>
                  <span>A modern studio that feels easy, professional, and calm.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="book">
          <div className="container">
            <div className="sectionIntro centeredIntro">
              <span className="eyebrow">Booking</span>
              <h2>Book your appointment</h2>
              <p>
                Quick, simple booking for your next haircut, beard trim, or
                full service.
              </p>
            </div>

            <div className="bookingShell">
              <div className="card bookingCard">
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
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="location">
          <div className="container locationGrid">
            <div className="locationContent">
              <span className="eyebrow">Visit the studio</span>
              <h2>Visit the studio</h2>

              <div className="card locationCard">
                <p className="addressTitle">North Studio</p>
                <p>123 Deansgate</p>
                <p>Manchester</p>
                <p>M3 2BY</p>

                <div className="locationMeta">
                  <div>
                    <span className="metaLabel">Phone</span>
                    <a href="tel:01615550192">0161 555 0192</a>
                  </div>
                  <div>
                    <span className="metaLabel">Instagram</span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @northstudiomcr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mapPlaceholder" aria-label="Google Maps placeholder">
              <div className="mapInner">
                <span className="mapBadge">📍</span>
                <h3>Google Maps Embed Placeholder</h3>
                <p>123 Deansgate, Manchester</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerGrid">
            <div>
              <div className="footerLogo">North Studio</div>
              <p className="footerText">
                Premium barbering in Manchester with a focus on detail,
                consistency, and a clean studio experience.
              </p>
            </div>

            <div>
              <h4>Links</h4>
              <nav className="footerLinks">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#book">Contact / Booking</a>
              </nav>
            </div>

            <div>
              <h4>Contact</h4>
              <div className="footerLinks">
                <a href="tel:01615550192">0161 555 0192</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4>Opening hours</h4>
              <div className="footerHours">
                <p>Mon–Fri: 9:00 AM – 7:00 PM</p>
                <p>Saturday: 9:00 AM – 6:00 PM</p>
                <p>Sunday: 11:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #0b0b0c;
          color: #f5f1ea;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
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
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }

        .backButton:hover {
          transform: translateY(-2px);
          border-color: rgba(198, 169, 114, 0.4);
          background: rgba(24, 24, 27, 0.95);
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
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          pointer-events: auto;
        }

        .brand {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
          color: #f5f1ea;
          white-space: nowrap;
        }

        .mainNav {
          display: none;
          align-items: center;
          gap: 28px;
        }

        .mainNav a {
          color: rgba(245, 241, 234, 0.78);
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .mainNav a:hover {
          color: #f5f1ea;
        }

        .headerCta {
          display: none;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 999px;
          background: #c6a972;
          color: #0b0b0c;
          font-weight: 600;
          border: 1px solid #c6a972;
          transition: transform 0.2s ease, background 0.2s ease,
            border-color 0.2s ease;
        }

        .headerCta:hover {
          transform: translateY(-2px);
          background: #d4b784;
          border-color: #d4b784;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding: 140px 0 72px;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.33) saturate(0.75);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8, 8, 9, 0.28) 0%, rgba(8, 8, 9, 0.62) 50%, #0b0b0c 100%),
            linear-gradient(90deg, rgba(11, 11, 12, 0.82) 0%, rgba(11, 11, 12, 0.36) 100%);
        }

        .heroContent {
          position: relative;
          z-index: 2;
        }

        .heroTopRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(198, 169, 114, 0.14);
          border: 1px solid rgba(198, 169, 114, 0.22);
          color: #eadfc7;
          font-size: 0.93rem;
          backdrop-filter: blur(8px);
        }

        .badge.subtle {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.1);
          color: rgba(245, 241, 234, 0.82);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: end;
        }

        .heroCopy {
          max-width: 760px;
        }

        h1,
        h2,
        h3,
        .footerLogo {
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.03em;
        }

        h1 {
          margin: 0;
          font-size: clamp(3.8rem, 9vw, 7rem);
          line-height: 0.94;
        }

        .heroText {
          max-width: 680px;
          margin: 24px 0 0;
          font-size: clamp(1.05rem, 2.2vw, 1.22rem);
          line-height: 1.85;
          color: rgba(245, 241, 234, 0.78);
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .heroCard {
          display: grid;
          gap: 14px;
        }

        .heroCardItem {
          padding: 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.16);
        }

        .heroCardItem strong {
          display: block;
          margin: 0 0 8px;
          font-size: 1.05rem;
          color: #f5f1ea;
        }

        .heroCardItem p {
          margin: 0;
          color: rgba(245, 241, 234, 0.68);
          line-height: 1.7;
          font-size: 0.96rem;
        }

        .label {
          display: inline-block;
          margin-bottom: 10px;
          color: #c6a972;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 600;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnPrimary {
          background: #c6a972;
          color: #0b0b0c;
          border: 1px solid #c6a972;
          box-shadow: 0 14px 36px rgba(198, 169, 114, 0.22);
        }

        .btnPrimary:hover {
          background: #d4b784;
          border-color: #d4b784;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.06);
          color: #f5f1ea;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .btnSecondary:hover {
          border-color: rgba(198, 169, 114, 0.35);
          background: rgba(255, 255, 255, 0.08);
        }

        .section {
          padding: 104px 0;
        }

        .sectionAlt {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.015),
            rgba(255, 255, 255, 0)
          );
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 40px;
        }

        .centeredIntro {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
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

        h2 {
          margin: 0;
          font-size: clamp(2.3rem, 5vw, 4rem);
          line-height: 1.03;
        }

        .sectionIntro p,
        .aboutContent p,
        .footerText,
        .reviewQuote,
        .locationCard p,
        .mapPlaceholder p {
          color: rgba(245, 241, 234, 0.72);
          line-height: 1.85;
          font-size: 1rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
          backdrop-filter: blur(12px);
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .serviceCard,
        .reviewCard,
        .locationCard,
        .aboutImageWrap,
        .mapPlaceholder,
        .bookingCard {
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .serviceCard:hover,
        .reviewCard:hover,
        .locationCard:hover,
        .aboutImageWrap:hover,
        .mapPlaceholder:hover,
        .bookingCard:hover {
          transform: translateY(-3px);
          border-color: rgba(198, 169, 114, 0.28);
          background: rgba(255, 255, 255, 0.05);
        }

        .serviceCard {
          padding: 28px;
        }

        .serviceHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .serviceIcon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(198, 169, 114, 0.14);
          font-size: 1.2rem;
        }

        .price {
          color: #e7d6b2;
          font-weight: 700;
          font-size: 1rem;
        }

        .serviceCard h3,
        .mapPlaceholder h3 {
          margin: 0 0 10px;
          font-size: 1.5rem;
        }

        .serviceCard p {
          margin: 0;
          color: rgba(245, 241, 234, 0.72);
          line-height: 1.8;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .galleryItem {
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          min-height: 190px;
          background: rgba(255, 255, 255, 0.03);
        }

        .galleryItem img {
          width: 100%;
          height: 100%;
          min-height: 190px;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .galleryItem:hover img {
          transform: scale(1.03);
        }

        .reviewsGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .reviewCard {
          padding: 28px;
        }

        .stars {
          color: #c6a972;
          letter-spacing: 0.14em;
          margin-bottom: 16px;
          font-size: 0.98rem;
        }

        .reviewQuote {
          margin: 0 0 18px;
          font-size: 1.02rem;
        }

        .reviewName {
          color: #f5f1ea;
          font-weight: 600;
          font-size: 0.96rem;
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }

        .aboutImageWrap {
          overflow: hidden;
          min-height: 460px;
        }

        .aboutImageWrap img {
          width: 100%;
          height: 100%;
          min-height: 460px;
          object-fit: cover;
        }

        .aboutContent h2 {
          margin-bottom: 18px;
        }

        .aboutPoints {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .miniCard {
          padding: 18px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .miniCard strong {
          display: block;
          margin-bottom: 8px;
          color: #f5f1ea;
        }

        .miniCard span {
          color: rgba(245, 241, 234, 0.7);
          line-height: 1.7;
          font-size: 0.96rem;
        }

        .bookingShell {
          display: flex;
          justify-content: center;
        }

        .bookingCard {
          width: 100%;
          max-width: 980px;
          padding: 30px;
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
          font-size: 0.94rem;
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
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .field input::placeholder {
          color: rgba(245, 241, 234, 0.42);
        }

        .field input:focus,
        .field select:focus {
          border-color: rgba(198, 169, 114, 0.55);
          background: rgba(255, 255, 255, 0.05);
        }

        .bookButton {
          width: 100%;
          margin-top: 20px;
        }

        .locationGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .locationCard {
          padding: 28px;
        }

        .addressTitle {
          color: #f5f1ea !important;
          font-weight: 700;
          margin-bottom: 8px !important;
        }

        .locationMeta {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 24px;
        }

        .metaLabel {
          display: block;
          margin-bottom: 8px;
          color: #c6a972;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .mapPlaceholder {
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 28px;
          background:
            linear-gradient(135deg, rgba(198, 169, 114, 0.1), rgba(255, 255, 255, 0.025)),
            rgba(255, 255, 255, 0.035);
        }

        .mapInner {
          max-width: 320px;
        }

        .mapBadge {
          display: inline-flex;
          width: 64px;
          height: 64px;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(198, 169, 114, 0.14);
          margin-bottom: 18px;
          font-size: 1.7rem;
        }

        .footer {
          padding: 48px 0 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .footerLogo {
          font-size: 1.9rem;
          margin-bottom: 12px;
        }

        .footer h4 {
          margin: 0 0 12px;
          color: #f5f1ea;
          font-size: 1rem;
        }

        .footerLinks,
        .footerHours {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footerLinks a,
        .footerHours p {
          margin: 0;
          color: rgba(245, 241, 234, 0.7);
        }

        .footerLinks a:hover {
          color: #f5f1ea;
        }

        @media (min-width: 700px) {
          .container {
            width: min(1180px, calc(100% - 48px));
          }

          .mainNav {
            display: flex;
          }

          .headerCta {
            display: inline-flex;
          }

          .heroCard {
            grid-template-columns: repeat(3, 1fr);
          }

          .servicesGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviewsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .formGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .locationMeta {
            grid-template-columns: repeat(2, 1fr);
          }

          .footerGrid {
            grid-template-columns: 1.3fr 0.8fr 0.8fr 1fr;
          }
        }

        @media (min-width: 980px) {
          .heroGrid {
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, 420px);
            gap: 36px;
          }

          .galleryGrid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 220px;
          }

          .galleryItem.large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .aboutGrid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }

          .locationGrid {
            grid-template-columns: 1fr 1.1fr;
          }
        }

        @media (max-width: 699px) {
          .headerInner {
            justify-content: space-between;
          }

          .brand {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}
