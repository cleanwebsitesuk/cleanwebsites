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

  const gallery = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  ];

  const reviews = [
    "Best fade in Manchester. Clean studio and great atmosphere.",
    "Sharp haircut every time. Easy booking and great attention to detail.",
    "The beard trims are unreal. Easily my go-to barber in the city.",
    "Relaxed studio and always a perfect finish.",
  ];

  return (
    <>
      <main>

        <a
          href="https://cleanwebsites.co.uk"
          target="_blank"
          className="back"
        >
          ← Back to Clean Websites
        </a>

        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80"
            className="heroImg"
          />

          <div className="heroContent container">
            <span className="badge">Manchester</span>

            <h1>North Studio</h1>

            <p>
              Modern barbering in Manchester. Precision cuts, skin fades, and
              beard work in a clean, relaxed studio.
            </p>

            <div className="heroBtns">
              <a className="btnPrimary">Book an appointment</a>
              <a className="btnGhost">View services</a>
            </div>
          </div>
        </section>

        <section className="section container">
          <h2>Services</h2>

          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.name}>
                <div className="serviceHead">
                  <span>{s.icon}</span>
                  <strong>{s.price}</strong>
                </div>

                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Recent Work</h2>

          <div className="gallery">
            {gallery.map((img) => (
              <img src={img} key={img} />
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>What clients say</h2>

          <div className="grid">
            {reviews.map((r, i) => (
              <div className="card" key={i}>
                <div className="stars">★★★★★</div>
                <p>"{r}"</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container about">
          <div>
            <h2>About North Studio</h2>

            <p>
              North Studio focuses on precision cuts, attention to detail,
              and a relaxed studio atmosphere. The aim is simple: modern
              barbering done properly, with consistent results and a
              professional space clients feel comfortable returning to.
            </p>
          </div>

          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80" />
        </section>

        <section className="section container booking">
          <h2>Book your appointment</h2>

          <div className="card bookingCard">

            <input placeholder="Name" />
            <input placeholder="Phone" />

            <select>
              <option>Skin Fade</option>
              <option>Beard Trim</option>
              <option>Haircut & Style</option>
              <option>Full Service</option>
            </select>

            <input placeholder="Preferred time" />

            <button className="btnPrimary">Book now</button>
          </div>
        </section>

        <section className="section container location">
          <h2>Visit the studio</h2>

          <div className="locationGrid">
            <div>
              <p>North Studio</p>
              <p>123 Deansgate</p>
              <p>Manchester</p>
            </div>

            <div className="map">
              Google Maps Embed Placeholder
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerGrid">

            <div>
              <h3>North Studio</h3>
              <p>Premium barbering in Manchester.</p>
            </div>

            <div>
              <p>Home</p>
              <p>Services</p>
              <p>Gallery</p>
              <p>Book</p>
            </div>

            <div>
              <p>0161 555 0192</p>
              <p>Instagram</p>
            </div>

          </div>
        </footer>
      </main>

      <style jsx>{`

        body {
          background:#0b0b0c;
          color:#f5f1ea;
          font-family:Inter,system-ui;
        }

        h1,h2,h3{
          font-family:Georgia,serif;
        }

        .container{
          width:min(1100px,90%);
          margin:auto;
        }

        .section{
          padding:90px 0;
        }

        .back{
          position:fixed;
          top:16px;
          left:16px;
          background:#141416;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.08);
          z-index:20;
        }

        .hero{
          position:relative;
          min-height:100vh;
          display:flex;
          align-items:center;
        }

        .heroImg{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          filter:brightness(.4);
        }

        .heroContent{
          position:relative;
          z-index:2;
        }

        h1{
          font-size:clamp(3rem,8vw,6rem);
        }

        .badge{
          background:rgba(198,169,114,.15);
          padding:6px 14px;
          border-radius:999px;
          font-size:.85rem;
        }

        .heroBtns{
          margin-top:25px;
          display:flex;
          gap:12px;
        }

        .btnPrimary{
          background:#c6a972;
          color:#0b0b0c;
          padding:12px 20px;
          border-radius:999px;
          font-weight:600;
        }

        .btnGhost{
          border:1px solid rgba(255,255,255,.15);
          padding:12px 20px;
          border-radius:999px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:20px;
        }

        .card{
          background:#141416;
          border:1px solid rgba(255,255,255,.08);
          padding:24px;
          border-radius:20px;
        }

        .serviceHead{
          display:flex;
          justify-content:space-between;
          margin-bottom:12px;
        }

        .gallery{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:12px;
        }

        .gallery img{
          width:100%;
          border-radius:16px;
        }

        .stars{
          color:#c6a972;
          margin-bottom:10px;
        }

        .about{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;
        }

        .about img{
          border-radius:20px;
          width:100%;
        }

        .bookingCard{
          display:grid;
          gap:12px;
        }

        input,select{
          background:#1a1a1d;
          border:1px solid rgba(255,255,255,.08);
          padding:14px;
          border-radius:12px;
          color:white;
        }

        .locationGrid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .map{
          background:#141416;
          border-radius:20px;
          padding:40px;
          border:1px solid rgba(255,255,255,.08);
        }

        .footer{
          border-top:1px solid rgba(255,255,255,.08);
          padding:40px 0;
        }

        .footerGrid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
        }

      `}</style>
    </>
  );
}
