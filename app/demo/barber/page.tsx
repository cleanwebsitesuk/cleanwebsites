"use client";

export default function Page() {
  const services = [
    {
      name: "Skin Fade",
      price: "£24",
      icon: "✂️",
      description:
        "Clean, sharp fades blended with precision for a modern finish that grows out well.",
    },
    {
      name: "Beard Trim",
      price: "£16",
      icon: "🧔",
      description:
        "Detailed beard shaping, line work, and tidy finishing to keep everything looking sharp.",
    },
    {
      name: "Haircut & Style",
      price: "£28",
      icon: "💈",
      description:
        "Tailored haircut with texture, shape, and styling suited to your routine and look.",
    },
    {
      name: "Full Service",
      price: "£38",
      icon: "⭐",
      description:
        "Haircut, skin fade detailing, beard work, and styling in one complete appointment.",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
      alt: "Barber finishing a precise skin fade",
    },
    {
      src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
      alt: "Beard trim and line-up detail",
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      alt: "Modern barber studio chair and mirror",
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
      alt: "Close-up of barber clipper work",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh haircut with textured styling",
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
      alt: "Studio interior with premium barber setup",
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80",
      alt: "Detailed fade blending work",
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      alt: "Barber tools arranged in a clean studio",
    },
  ];

  const reviews = [
    {
      quote:
        "Best fade in Manchester. Clean studio and great atmosphere.",
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

        <section className="hero" id="home">
          <div className="heroOverlay" />
          <img
            className="heroImage"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80"
            alt="Modern barber shop interior"
          />

          <div className="container heroContent">
            <div className="heroTop">
              <span className="badge">Manchester</span>
              <span className="hoursSnippet">Open today · 9:00 AM – 7:00 PM</span>
            </div>

            <h1>North Studio</h1>
            <p className="heroText">
              Modern barbering in Manchester. Precision cuts, skin fades, and
              beard work in a clean, relaxed studio.
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
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Services</span>
              <h2>Services</h2>
              <p>
                Straightforward pricing, clean finishes, and modern barbering
                tailored to how you want to wear your hair.
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

        <section className="section" id="gallery">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Recent work</span>
              <h2>Recent Work</h2>
              <p>
                A look at fresh fades, detailed beard trims, and the clean
                studio environment clients come back for.
              </p>
            </div>

            <div className="galleryGrid">
              {galleryImages.map((image, index) => (
                <div
                  className={`galleryItem ${index === 0 || index === 4 ? "large" : ""}`}
                  key={image.src}
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
              <span className="eyebrow">Client feedback</span>
              <h2>What clients say</h2>
              <p>
                Built through consistency, attention to detail, and a studio
                experience that feels easy from start to finish.
              </p>
            </div>

            <div className="reviewsGrid">
              {reviews.map((review) => (
                <article className="card reviewCard" key={review.name}>
                  <div className="stars" aria-label="5 star rating">
                    ★★★★★
                  </div>
                  <p className="reviewQuote">“{review.quote}”</p>
                  <span className="reviewName">{review.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container splitSection">
            <div>
              <div className="sectionIntro leftAligned">
                <span className="eyebrow">About</span>
                <h2>About North Studio</h2>
              </div>
              <p className="aboutText">
                North Studio is built around precision cuts, attention to
                detail, and a relaxed studio atmosphere. The focus is simple:
                modern barbering done properly, with clean finishes, strong
                consultation, and a space that feels calm, polished, and easy to
                come back to.
              </p>
            </div>

            <div className="card barberCard">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80"
                alt="Barber portrait placeholder"
              />
            </div>
          </div>
        </section>

        <section className="section" id="book">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">Booking</span>
              <h2>Book your appointment</h2>
              <p>
                Quick and simple booking for your next haircut, beard trim, or
                full service.
              </p>
            </div>

            <div className="bookingWrap">
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

        <section className="section" id="location">
          <div className="container splitSection">
            <div>
              <div className="sectionIntro leftAligned">
                <span className="eyebrow">Visit</span>
                <h2>Visit the studio</h2>
              </div>

              <div className="locationCard card">
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

            <div className="mapPlaceholder card" aria-label="Google Maps placeholder">
              <div className="mapInner">
                <span className="mapPin">📍</span>
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
                Premium barbering in Manchester with a focus on precision,
                consistency, and a clean studio experience.
              </p>
            </div>

            <div>
              <h4>Links</h4>
              <nav className="footerLinks">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#book">Book</a>
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
          background: #06080d;
          color: #f5f7fb;
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
          background:
            radial-gradient(circle at top, rgba(29, 78, 216, 0.12), transparent 30%),
            linear-gradient(180deg, #071019 0%, #06080d 100%);
          min-height: 100vh;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .backButton {
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 50;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(8, 12, 20, 0.78);
          backdrop-filter: blur(14px);
          color: #ffffff;
          font-size: 0.92rem;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
        }

        .backButton:hover {
          transform: translateY(-2px);
          border-color: rgba(29, 78, 216, 0.6);
          background: rgba(12, 18, 30, 0.95);
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding: 112px 0 56px;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.85) brightness(0.4);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(5, 8, 14, 0.35) 0%, rgba(5, 8, 14, 0.7) 45%, #06080d 100%),
            linear-gradient(90deg, rgba(6, 8, 13, 0.78) 0%, rgba(6, 8, 13, 0.35) 100%);
          z-index: 1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
        }

        .heroTop {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .badge,
        .hoursSnippet {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #dbe7ff;
          backdrop-filter: blur(10px);
          font-size: 0.94rem;
        }

        h1,
        h2,
        h3,
        .footerLogo {
          font-family: Georgia, "Times New Roman", Times, serif;
          letter-spacing: -0.03em;
        }

        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(3.4rem, 9vw, 6.8rem);
          line-height: 0.95;
        }

        .heroText {
          max-width: 700px;
          margin: 22px 0 0;
          font-size: clamp(1.05rem, 2.5vw, 1.28rem);
          line-height: 1.8;
          color: rgba(245, 247, 251, 0.82);
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 20px;
          border-radius: 999px;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            border-color 0.2s ease, background 0.2s ease;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnPrimary {
          background: #1d4ed8;
          color: #ffffff;
          border: 1px solid #1d4ed8;
          box-shadow: 0 14px 40px rgba(29, 78, 216, 0.28);
        }

        .btnPrimary:hover {
          background: #2563eb;
          border-color: #2563eb;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.06);
          color: #f8fafc;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }

        .btnSecondary:hover {
          border-color: rgba(29, 78, 216, 0.55);
          background: rgba(255, 255, 255, 0.09);
        }

        .section {
          padding: 88px 0;
        }

        .sectionIntro {
          max-width: 720px;
          margin-bottom: 32px;
        }

        .sectionIntro.leftAligned {
          margin-bottom: 18px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 12px;
          color: #7ea7ff;
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        h2 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.6rem);
          line-height: 1.02;
        }

        .sectionIntro p,
        .aboutText,
        .footerText,
        .reviewQuote,
        .locationCard p,
        .mapPlaceholder p {
          color: rgba(245, 247, 251, 0.72);
          line-height: 1.8;
          font-size: 1rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(12px);
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .serviceCard {
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .serviceCard:hover,
        .reviewCard:hover,
        .bookingCard:hover,
        .locationCard:hover,
        .barberCard:hover,
        .mapPlaceholder:hover {
          transform: translateY(-3px);
          border-color: rgba(29, 78, 216, 0.35);
          background: rgba(255, 255, 255, 0.055);
        }

        .serviceHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .serviceIcon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(29, 78, 216, 0.14);
          font-size: 1.2rem;
        }

        .price {
          color: #dbe7ff;
          font-weight: 700;
          font-size: 1rem;
        }

        .serviceCard h3,
        .reviewCard h3,
        .mapPlaceholder h3 {
          margin: 0 0 10px;
          font-size: 1.45rem;
        }

        .serviceCard p {
          margin: 0;
          color: rgba(245, 247, 251, 0.72);
          line-height: 1.75;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .galleryItem {
          overflow: hidden;
          border-radius: 22px;
          min-height: 180px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.03);
        }

        .galleryItem img {
          width: 100%;
          height: 100%;
          min-height: 180px;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .galleryItem:hover img {
          transform: scale(1.03);
        }

        .reviewsGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .reviewCard {
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .stars {
          color: #7ea7ff;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
          font-size: 1rem;
        }

        .reviewQuote {
          margin: 0 0 18px;
          font-size: 1.03rem;
        }

        .reviewName {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.96rem;
        }

        .splitSection {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          align-items: center;
        }

        .barberCard {
          overflow: hidden;
          min-height: 420px;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .barberCard img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .bookingWrap {
          display: flex;
          justify-content: center;
        }

        .bookingCard {
          width: 100%;
          max-width: 920px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field label {
          font-size: 0.95rem;
          color: #dbe7ff;
          font-weight: 600;
        }

        .field input,
        .field select {
          width: 100%;
          min-height: 54px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          padding: 0 16px;
          outline: none;
          font-size: 1rem;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .field input::placeholder {
          color: rgba(245, 247, 251, 0.45);
        }

        .field input:focus,
        .field select:focus {
          border-color: rgba(29, 78, 216, 0.75);
          background: rgba(255, 255, 255, 0.055);
        }

        .bookButton {
          margin-top: 20px;
          width: 100%;
        }

        .locationCard {
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        }

        .addressTitle {
          color: #ffffff !important;
          font-weight: 700;
          margin-bottom: 8px !important;
        }

        .locationMeta {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 22px;
        }

        .metaLabel {
          display: block;
          margin-bottom: 8px;
          color: #7ea7ff;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .locationMeta a {
          color: #f5f7fb;
        }

        .mapPlaceholder {
          min-height: 320px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
          background:
            linear-gradient(135deg, rgba(29, 78, 216, 0.12), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.04);
        }

        .mapInner {
          max-width: 320px;
        }

        .mapPin {
          display: inline-flex;
          width: 64px;
          height: 64px;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(29, 78, 216, 0.16);
          font-size: 1.8rem;
          margin-bottom: 18px;
        }

        .footer {
          padding: 40px 0 56px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        .footerLogo {
          font-size: 1.8rem;
          margin-bottom: 12px;
        }

        .footer h4 {
          margin: 0 0 12px;
          color: #ffffff;
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
          color: rgba(245, 247, 251, 0.72);
          margin: 0;
        }

        .footerLinks a:hover {
          color: #ffffff;
        }

        @media (min-width: 700px) {
          .container {
            width: min(1120px, calc(100% - 48px));
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
            grid-template-columns: 1.4fr 0.8fr 0.8fr 1fr;
          }
        }

        @media (min-width: 920px) {
          .section {
            padding: 108px 0;
          }

          .galleryGrid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 220px;
          }

          .galleryItem.large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .splitSection {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </>
  );
}
