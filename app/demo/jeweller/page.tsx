import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
              London Jewellery House
            </p>

            <h1 className="mt-5 font-serif text-[2.2rem] leading-[1.2] tracking-[-0.03em] sm:text-[3rem] lg:text-[4.2rem]">
              Refined jewellery,
              <span className="block">designed with intent.</span>
            </h1>

            <p className="mt-5 max-w-md text-[14px] sm:text-[15px] leading-7 text-black/65">
              Maison Valeur is a contemporary jeweller specialising in gold,
              diamonds, and bespoke commissions crafted for everyday wear.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/demo/jeweller/collections" className="bg-black text-white px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-center">
                Shop Jewellery
              </Link>
              <Link href="/demo/jeweller/contact" className="border border-black px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-center">
                Book Appointment
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-black/55">
              <span>Hatton Garden</span>
              <span>18k Gold</span>
              <span>Private Consultations</span>
            </div>
          </div>

          <div className="border border-black/10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop"
              className="w-full aspect-[4/5] object-cover lg:h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-4 flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-black/60">
          {["Rings", "Necklaces", "Bracelets", "Earrings", "Engagement"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl">Featured Pieces</h2>
          <Link href="/demo/jeweller/collections" className="text-[11px] uppercase tracking-[0.18em] text-black/60">
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Solenne", "Nocturne", "Aureline"].map((c) => (
            <div key={c} className="border border-black/10 bg-white">
              <div className="aspect-[4/3] bg-[#eae7df]" />
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">Collection</div>
                <div className="mt-2 font-serif text-lg">{c}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="bg-white border-y border-black/10">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop"
            className="w-full aspect-[4/3] object-cover border border-black/10"
          />

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">Engagement & Bridal</h2>
            <p className="mt-4 text-[14px] sm:text-[15px] leading-7 text-black/65">
              Discover engagement rings designed with clarity and precision,
              from classic solitaires to bespoke designs.
            </p>
            <Link href="/demo/jeweller/collections" className="mt-5 inline-block text-[11px] uppercase tracking-[0.18em]">
              Explore →
            </Link>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">Craftsmanship</p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl">Built with precision.</h2>
          <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-black/65">
            Every piece is created with attention to proportion, comfort, and finish.
          </p>

          <ul className="mt-6 space-y-2 text-[14px] text-black/70">
            <li>• Bespoke commissions</li>
            <li>• Carefully sourced stones</li>
            <li>• Lifetime care guidance</li>
            <li>• Private consultations</li>
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
          className="w-full aspect-[4/3] object-cover border border-black/10"
        />
      </section>

      {/* SECOND PRODUCT ROW */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-black/10 bg-white">
              <div className="aspect-[4/3] bg-[#eceae4]" />
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">Necklace</div>
                <div className="mt-2 font-serif text-base">Serein Pendant</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-16 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl">
              Visit our Hatton Garden showroom
            </h3>
            <p className="mt-2 text-sm text-white/70">
              By private appointment only
            </p>
          </div>

          <Link
            href="/demo/jeweller/contact"
            className="border border-white px-6 py-3 text-[11px] uppercase tracking-[0.18em]"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* COMPONENTS */

function Header() {
  return (
    <header className="mx-auto max-w-[1300px] px-5 sm:px-6 py-5 flex justify-between items-center">
      <div className="font-serif text-lg tracking-[0.1em]">Maison Valeur</div>

      <nav className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.18em] text-black/70">
        <Link href="/demo/jeweller">Home</Link>
        <Link href="/demo/jeweller/collections">Collections</Link>
        <Link href="/demo/jeweller/about">About</Link>
        <Link href="/demo/jeweller/contact">Contact</Link>
      </nav>

      <Link href="/demo/jeweller/contact" className="border px-3 py-2 text-[11px] uppercase tracking-[0.18em]">
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
        className="w-full aspect-[4/5] object-cover"
      />
      <div className="p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">
          Ring
        </div>
        <div className="mt-2 font-serif text-lg">
          Aveline Halo Ring
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-lg">Maison Valeur</div>
          <p className="mt-4 text-sm text-white/60">
            Fictional jewellery house demo.
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
        </div>

        <div className="text-sm text-white/60">
          Hatton Garden, London
        </div>
      </div>
    </footer>
  );
}
