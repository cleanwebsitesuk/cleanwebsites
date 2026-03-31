import Link from "next/link";

const principles = [
  {
    title: "Material clarity",
    text: "Precious metals and diamond-led pieces are presented with a focus on finish, proportion, and long-term wearability.",
  },
  {
    title: "Appointment-led service",
    text: "From bridal consultations to bespoke commissions, the experience is designed to feel calm, personal, and well guided.",
  },
  {
    title: "Balanced design",
    text: "The collection is shaped around refined lines, practical comfort, and a quieter expression of luxury.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "The house is established",
    text: "Maison Valeur begins with a small collection of rings, pendants, and bracelets designed around restrained elegance and everyday wear.",
  },
  {
    year: "2019",
    title: "Bespoke consultations introduced",
    text: "Private commissions become a core part of the house, expanding the offer for bridal clients and one-off personal pieces.",
  },
  {
    year: "2023",
    title: "The showroom experience evolves",
    text: "A more considered appointment-led model is introduced, bringing together product guidance, care support, and a stronger retail presence.",
  },
];

const craftsmanship = [
  {
    heading: "Designed for wear",
    body: "Each piece is imagined not only for appearance, but for how it sits on the hand, wrist, neck, or ear. Comfort, balance, and daily usability remain central to the design process.",
  },
  {
    heading: "Finished with restraint",
    body: "Luxury is expressed through proportion, polish, and material confidence rather than excess. The visual language is refined, precise, and intentionally understated.",
  },
  {
    heading: "Guided by service",
    body: "A jewellery purchase should feel supported from the first enquiry onward. The house places equal value on consultation, sizing, aftercare, and presentation.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              About the House
            </p>
            <h1 className="mt-4 max-w-[18ch] font-serif text-[2.4rem] leading-[1.05] tracking-[-0.035em] sm:text-[3.2rem] lg:text-[4.4rem]">
              A contemporary jewellery house shaped by clarity and restraint.
            </h1>
            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-black/66 sm:text-[15px]">
              Maison Valeur brings together fine materials, balanced design, and
              a more considered retail experience. The house is built around
              jewellery that feels polished, wearable, and quietly distinctive.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Our perspective
            </p>
            <h2 className="mt-4 max-w-[14ch] font-serif text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.5rem]">
              Fine jewellery designed to feel personal from first glance to daily wear.
            </h2>
          </div>

          <div className="space-y-5 text-[14px] leading-7 text-black/66 sm:text-[15px]">
            <p>
              The house was conceived around the idea that luxury jewellery
              should feel composed rather than excessive. Pieces are designed to
              hold presence through proportion, material finish, and wearability
              instead of relying on ornament alone.
            </p>
            <p>
              That point of view carries through every part of the experience:
              engagement guidance, bespoke commissions, giftable fine jewellery,
              and appointment-led service all sit within the same calm, polished
              retail language.
            </p>
            <p>
              Maison Valeur is presented as a modern London jeweller with a
              strong emphasis on trust, clarity, and product confidence — a
              house that values how jewellery is worn just as much as how it is
              admired.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="border border-black/10 bg-white p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Principle
              </div>
              <h3 className="mt-4 font-serif text-[1.4rem] leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/64">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="overflow-hidden border border-black/10">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
              alt="Jewellery craftsmanship"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Craftsmanship
            </p>
            <h2 className="mt-4 max-w-[14ch] font-serif text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.5rem]">
              Crafted with a strong sense of proportion and finish.
            </h2>
            <div className="mt-6 space-y-5 text-[14px] leading-7 text-black/66 sm:text-[15px]">
              <p>
                The design language centres on clean lines, precious metals,
                balanced stone placement, and a more restrained interpretation of
                luxury. The result is jewellery that feels refined on the body
                and credible in the hand.
              </p>
              <p>
                Each category is approached through the same lens: rings should
                feel poised and comfortable, bracelets should move with ease,
                necklaces should layer cleanly, and earrings should hold light
                without appearing overworked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-black/50">
            House development
          </p>
          <h2 className="mt-5 font-serif text-[2.1rem] leading-[1.08] tracking-[-0.035em] sm:text-[2.8rem] lg:text-[3.4rem]">
            A gradual evolution from collection to consultation-led house.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {milestones.map((item) => (
            <div key={item.year} className="border border-black/10 bg-white p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                {item.year}
              </div>
              <h3 className="mt-4 font-serif text-[1.4rem] leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/64">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efede8]">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
                What defines the house
              </p>
              <h2 className="mt-4 max-w-[14ch] font-serif text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.5rem]">
                A quieter expression of luxury, supported by stronger service.
              </h2>
            </div>

            <div className="grid gap-5">
              {craftsmanship.map((item) => (
                <div key={item.heading} className="border border-black/10 bg-white p-6">
                  <h3 className="font-serif text-[1.35rem] leading-tight">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/64">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl">
                Discover the collection or arrange a private consultation.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Explore signature pieces, enquire about bespoke work, or visit
                the showroom for a more personal introduction to the house.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo/jeweller/collections"
                className="border border-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                View Collections
              </Link>
              <Link
                href="/demo/jeweller/contact"
                className="border border-white/40 px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Contact the House
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
      <div className="font-serif text-lg tracking-[0.1em]">Maison Valeur</div>

      <nav className="hidden gap-6 text-[11px] uppercase tracking-[0.18em] text-black/70 md:flex">
        <Link href="/demo/jeweller">Home</Link>
        <Link href="/demo/jeweller/collections">Collections</Link>
        <Link href="/demo/jeweller/about">About</Link>
        <Link href="/demo/jeweller/contact">Contact</Link>
      </nav>

      <Link
        href="/demo/jeweller/contact"
        className="border px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
      >
        Appointment
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto grid max-w-[1300px] gap-8 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-lg">Maison Valeur</div>
          <p className="mt-4 text-sm leading-6 text-white/60">
            A contemporary jewellery house offering fine pieces, bespoke
            commissions, and appointment-led service.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <div>Collections</div>
          <div>About</div>
          <div>Contact</div>
          <div>Appointments</div>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <div>Example Street</div>
          <div>Example District</div>
          <div>London</div>
          <div>By appointment</div>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <div>020 0000 0000</div>
          <div>appointments@example-jeweller.com</div>
        </div>
      </div>
    </footer>
  );
}
