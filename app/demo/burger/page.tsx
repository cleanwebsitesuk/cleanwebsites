import Link from "next/link";

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
  return (
    <main className="page">
      <a
        href="https://cleanwebsites.co.uk"
        target="_blank"
        rel="noreferrer"
        className="clean-websites-button"
      >
        Back to Clean Websites
      </a>

      <header className="siteHeader">
        <div className="container navWrap">
          <Link href="/demo/burger" className="logo">
            Stack & Grill
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link href="/demo/burger">Home</Link>
            <Link href="/demo/burger/about">About</Link>
            <Link href="/demo/burger/menu">Menu</Link>
            <Link href="/demo/burger/contact">Contact / Booking</Link>
          </nav>

          <a href="#featured-menu" className="orderButton">
            Order now
          </a>
        </div>
      </header>

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
              <Link href="/demo/burger/menu" className="primaryBtn">
                View menu
              </Link>
              <a href="#featured-menu" className="secondaryBtn">
                Order now
              </a>
            </div>

            <div className="badges">
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
            <Link href="/demo/burger/menu" className="ctaLightBtn">
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
          background: #ffffff;
          color: #1f2937;
          min-height: 100vh;
        }

        .container {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .clean-websites-button {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 1000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.95rem 1.1rem;
          border-radius: 999px;
          background: #1f2937;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 12px 30px rgba(31, 41, 55, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .clean-websites-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(31, 41, 55, 0.22);
        }

        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(31, 41, 55, 0.08);
        }

        .navWrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 78px;
        }

        .logo {
          font-size: 1.35rem;
          font-weight: 800;
          color: #1f2937;
          text-decoration: none;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav a {
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.96rem;
        }

        .nav a:hover {
          color: #e63946;
        }

        .orderButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e63946;
          color: white;
          text-decoration: none;
          padding: 0.85rem 1.15rem;
          border-radius: 999px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 12px 24px rgba(230, 57, 70, 0.2);
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
            rgba(15, 23, 42, 0.2) 100%
          );
        }

        .heroContent {
          position: relative;
          z-index: 1;
          padding: 5.5rem 0;
        }

        .heroText {
          max-width: 720px;
          color: #ffffff;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.8rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2.6rem, 6vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 900;
        }

        .hero p {
          margin: 1.2rem 0 0;
          max-width: 640px;
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
        }

        .heroActions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 1.8rem;
        }

        .primaryBtn,
        .secondaryBtn,
        .ctaLightBtn,
        .ctaDarkBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.95rem 1.25rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .primaryBtn:hover,
        .secondaryBtn:hover,
        .ctaLightBtn:hover,
        .ctaDarkBtn:hover {
          transform: translateY(-2px);
        }

        .primaryBtn {
          background: #e63946;
          color: #ffffff;
          box-shadow: 0 12px 24px rgba(230, 57, 70, 0.22);
        }

        .secondaryBtn {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }

        .badges span {
          display: inline-flex;
          align-items: center;
          padding: 0.65rem 0.9rem;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .section {
          padding: 5rem 0;
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

        .reviewCard strong {
          color: #111827;
        }

        .ctaSection {
          padding: 5rem 0;
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
          gap: 0.9rem;
          flex-wrap: wrap;
        }

        .ctaLightBtn {
          background: #ffffff;
          color: #111827;
        }

        .ctaDarkBtn {
          background: rgba(17, 24, 39, 0.22);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
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

        .footer a:hover {
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .cardGrid,
          .reviewGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .navWrap {
            min-height: auto;
            padding: 1rem 0;
            flex-direction: column;
            align-items: flex-start;
          }

          .nav {
            gap: 1rem;
          }

          .featureGrid {
            grid-template-columns: 1fr;
          }

          .galleryGrid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 220px 220px 220px;
          }

          .galleryItem1 {
            grid-column: 1 / 3;
            grid-row: auto;
          }

          .ctaInner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 1.25rem, 1180px);
          }

          .hero {
            min-height: 78vh;
          }

          .cardGrid,
          .reviewGrid,
          .footerGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryItem1 {
            grid-column: auto;
          }

          .nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .orderButton {
            width: 100%;
          }

          .heroActions,
          .ctaActions {
            width: 100%;
          }

          .primaryBtn,
          .secondaryBtn,
          .ctaLightBtn,
          .ctaDarkBtn {
            width: 100%;
          }

          .clean-websites-button {
            right: 12px;
            left: 12px;
            bottom: 12px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
