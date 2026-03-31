import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-[1300px] px-5 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-14 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
          {/* TEXT */}
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-black/50">
              London Jewellery House
            </p>

            <h1 className="mt-5 font-serif text-[2rem] leading-[1.2] tracking-[-0.03em] sm:text-[2.8rem] sm:leading-[1.1] lg:text-[4.2rem]">
              Refined jewellery,
              <span className="block">designed with intent.</span>
            </h1>

            <p className="mt-5 max-w-md text-[14px] sm:text-[15px] leading-7 text-black/65">
              Maison Valeur is a contemporary fine jeweller specialising in
              gold, diamonds, and bespoke commissions.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/demo/jeweller/collections"
                className="bg-black text-white px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-center"
              >
                Shop Jewellery
              </Link>

              <Link
                href="/demo/jeweller/contact"
                className="border border-black px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-center"
              >
                Book Appointment
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-black/55">
              <span>Hatton Garden</span>
              <span>18k Gold</span>
              <span>Private Consultations</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="border border-black/10 bg-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop"
              className="w-full aspect-[4/5] object-cover lg:h-[460px] lg:aspect-auto"
              alt="Diamond ring"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-4 flex flex-wrap justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-black/60">
          {["Rings", "Necklaces", "Bracelets", "Earrings", "Engagement"].map(
            (item) => (
              <span key={item}>{item}</span>
            )
          )}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 py-14 lg:py-20">
        <div className="mb-8 flex justify-between items-end">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Featured Pieces
          </h2>

          <Link
            href="/demo/jeweller/collections"
            className="text-[11px] uppercase tracking-[0.18em] text-black/60"
          >
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
      <section className="mx-auto max-w-[1300px] px-5 sm:px-6 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Solenne", "Nocturne", "Aureline"].map((c) => (
            <div key={c} className="border border-black/10 bg-white">
              <div className="aspect-[4/3] bg-[#e9e6df]" />
              <div className="p-4 sm:p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#8a7a5c]">
                  Collection
                </div>
                <div className="mt-2 font-serif text-lg">{c}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="bg-white border-y border-black/10">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 py-14 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop"
            className="w-full aspect-[4/3] object-cover border border-black/10"
          />

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">
              Engagement & Bridal
            </h2>

            <p className="mt-4 text-[14px] sm:text-[15px] leading-7 text-black/65">
              Discover engagement rings designed with precision and clarity.
            </p>

            <Link
              href="/demo/jeweller/collections"
              className="mt-5 inline-block text-[11px] uppercase tracking-[0.18em]"
            >
              Explore →
            </Link>
          </div>
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
      <div className="font-serif text-lg tracking-[0.1em]">
        Maison Valeur
      </div>

      <nav className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.18em] text-black/70">
        <Link href="/demo/jeweller">Home</Link>
        <Link href="/demo/jeweller/collections">Collections</Link>
        <Link href="/demo/jeweller/about">About</Link>
        <Link href="/demo/jeweller/contact">Contact</Link>
      </nav>

      <Link
        href="/demo/jeweller/contact"
        className="border px-3 py-2 text-[11px] uppercase tracking-[0.18em]"
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
        className="w-full aspect-[4/5] object-cover"
      />

      <div className="p-4 sm:p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">
          Ring
        </div>

        <div className="mt-2 font-serif text-base sm:text-lg">
          Aveline Halo Ring
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white mt-16">
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
