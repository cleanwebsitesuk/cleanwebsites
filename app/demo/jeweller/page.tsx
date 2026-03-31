import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-[1300px] px-6 pt-10 pb-16 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">
              London Jewellery House
            </p>

            <h1 className="mt-6 font-serif text-[3.2rem] leading-[1.08] tracking-[-0.04em] sm:text-[4.2rem]">
              Refined jewellery,
              <span className="block">designed with intent.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-black/65">
              Maison Valeur is a contemporary fine jeweller specialising in
              gold, diamonds, and bespoke commissions. Designed for clarity,
              proportion, and everyday luxury.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/demo/jeweller/collections"
                className="bg-black text-white px-6 py-3 text-[12px] uppercase tracking-[0.2em]"
              >
                Shop Jewellery
              </Link>

              <Link
                href="/demo/jeweller/contact"
                className="border border-black px-6 py-3 text-[12px] uppercase tracking-[0.2em]"
              >
                Book Appointment
              </Link>
            </div>

            <div className="mt-10 flex gap-6 text-[12px] text-black/55">
              <span>Hatton Garden</span>
              <span>18k Gold & Platinum</span>
              <span>Private Consultations</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="border border-black/10 bg-white">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop"
              className="w-full h-[460px] object-cover"
              alt="Diamond ring"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-6 py-4 flex justify-between text-[12px] uppercase tracking-[0.2em] text-black/60">
          <span>Rings</span>
          <span>Necklaces</span>
          <span>Bracelets</span>
          <span>Earrings</span>
          <span>Engagement</span>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="mx-auto max-w-[1300px] px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">
              Featured pieces
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em]">
              Signature designs
            </h2>
          </div>

          <Link
            href="/demo/jeweller/collections"
            className="text-[12px] uppercase tracking-[0.2em] text-black/60"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>

      {/* ENGAGEMENT SECTION */}
      <section className="bg-white border-y border-black/10">
        <div className="mx-auto max-w-[1300px] px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-[420px] object-cover border border-black/10"
          />

          <div>
            <h2 className="font-serif text-3xl">
              Engagement & Bridal
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-black/65">
              Discover engagement rings designed with precision and clarity.
              From classic solitaires to bespoke designs, each piece is crafted
              to hold significance beyond the moment.
            </p>

            <Link
              href="/demo/jeweller/collections"
              className="mt-6 inline-block text-[12px] uppercase tracking-[0.2em]"
            >
              Explore Engagement →
            </Link>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section className="mx-auto max-w-[1300px] px-6 py-16 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">
            Craftsmanship
          </p>

          <h2 className="mt-4 font-serif text-3xl">
            Built with precision and restraint.
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-black/65">
            Each piece is imagined through proportion, comfort, and material
            clarity. From diamond selection to final polish, every detail is
            considered to create jewellery that feels effortless to wear.
          </p>

          <div className="mt-8 space-y-3 text-[14px] text-black/70">
            <div>• Bespoke commissions available</div>
            <div>• Carefully sourced stones</div>
            <div>• Lifetime care guidance</div>
            <div>• Private showroom appointments</div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
          className="w-full h-[420px] object-cover border border-black/10"
        />
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1300px] px-6 py-16 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-serif text-2xl">
              Visit our Hatton Garden showroom
            </h3>
            <p className="mt-2 text-sm text-white/70">
              By private appointment only
            </p>
          </div>

          <Link
            href="/demo/jeweller/contact"
            className="border border-white px-6 py-3 text-[12px] uppercase tracking-[0.2em]"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Header() {
  return (
    <header className="mx-auto max-w-[1300px] px-6 py-6 flex justify-between items-center">
      <div className="font-serif text-lg tracking-[0.1em]">
        Maison Valeur
      </div>

      <nav className="hidden md:flex gap-8 text-[12px] uppercase tracking-[0.2em] text-black/70">
        <Link href="/demo/jeweller">Home</Link>
        <Link href="/demo/jeweller/collections">Collections</Link>
        <Link href="/demo/jeweller/about">About</Link>
        <Link href="/demo/jeweller/contact">Contact</Link>
      </nav>

      <Link
        href="/demo/jeweller/contact"
        className="border px-4 py-2 text-[12px] uppercase tracking-[0.2em]"
      >
        Appointment
      </Link>
    </header>
  );
}

function ProductCard() {
  return (
    <div className="bg-white border border-black/10">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
        className="w-full h-[260px] object-cover"
      />

      <div className="p-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-black/50">
          Ring
        </div>

        <div className="mt-2 font-serif text-lg">
          Aveline Halo Ring
        </div>

        <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-black/60">
          View Piece →
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto max-w-[1300px] px-6 py-12 grid lg:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-lg">Maison Valeur</div>
          <p className="mt-4 text-sm text-white/60">
            A fictional London jewellery house created for premium demo
            presentation.
          </p>
        </div>

        <div className="text-sm text-white/60 space-y-2">
          <div>Collections</div>
          <div>About</div>
          <div>Contact</div>
        </div>

        <div className="text-sm text-white/60 space-y-2">
          <div>Bespoke</div>
          <div>Appointments</div>
          <div>Care</div>
        </div>

        <div className="text-sm text-white/60">
          Hatton Garden, London
          <br />
          By appointment only
        </div>
      </div>
    </footer>
  );
}
