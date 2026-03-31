import Link from "next/link";

type Product = {
  name: string;
  category: string;
  image: string;
};

type Collection = {
  name: string;
  image: string;
  desc: string;
};

const featured: Product[] = [
  {
    name: "Aveline Halo Ring",
    category: "Ring",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Solstice Tennis Bracelet",
    category: "Bracelet",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Lune Drop Earrings",
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop",
  },
];

const secondary: Product[] = [
  {
    name: "Serein Pendant",
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Orée Necklace",
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Aurea Chain",
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Celeste Pendant",
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
  },
];

const collections: Collection[] = [
  {
    name: "Solenne",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
    desc: "Warm gold essentials designed for daily wear, subtle layering, and clean, polished styling.",
  },
  {
    name: "Nocturne",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop",
    desc: "Diamond-led silhouettes with stronger contrast, evening presence, and a more sculptural finish.",
  },
  {
    name: "Aureline",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop",
    desc: "Refined pieces built around softness, light balance, and understated heirloom character.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      <section className="mx-auto flex min-h-[82vh] max-w-[1300px] items-center px-5 pb-12 pt-6 sm:px-6 lg:min-h-[88vh] lg:px-8 lg:pt-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
              London Jewellery House
            </p>

            <h1 className="mt-5 font-serif text-[2.25rem] leading-[1.15] tracking-[-0.03em] sm:text-[3rem] lg:text-[4.7rem]">
              Refined jewellery,
              <span className="block">designed with intent.</span>
            </h1>

            <p className="mt-5 max-w-md text-[14px] leading-7 text-black/65 sm:text-[15px]">
              Maison Valeur is a contemporary jeweller specialising in gold,
              diamonds, and bespoke commissions crafted for everyday wear,
              meaningful gifting, and modern bridal.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo/jeweller/collections"
                className="bg-black px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-white"
              >
                Shop Jewellery
              </Link>

              <Link
                href="/demo/jeweller/contact"
                className="border border-black px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em]"
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

          <div className="overflow-hidden border border-black/10 bg-white">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop"
              className="h-[380px] w-full object-cover sm:h-[430px] lg:h-[540px]"
              alt="Diamond ring"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1300px] flex-wrap justify-between gap-4 px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-black/60 sm:px-6">
          {["Rings", "Necklaces", "Bracelets", "Earrings", "Engagement"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              The House
            </p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
              Contemporary jewellery with a considered retail experience.
            </h2>
          </div>

          <div className="space-y-5 text-[14px] leading-7 text-black/66 sm:text-[15px]">
            <p>
              Maison Valeur is imagined as a modern London jeweller combining
              refined design, practical wearability, and appointment-led service.
              The intention is not theatrical luxury, but confidence through
              finish, proportion, and clarity.
            </p>
            <p>
              From engagement rings to giftable fine jewellery and bespoke
              commissions, the house is positioned around trust, material
              integrity, and a quieter, more polished expression of premium
              retail.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-8 sm:px-6 lg:py-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            eyebrow="Materials"
            title="18k gold & platinum"
            text="Designed in precious metals chosen for lasting wear, clean finish, and everyday confidence."
          />
          <InfoCard
            eyebrow="Diamonds"
            title="Quality-led selection"
            text="Stones are framed with clarity, balance, and grading language that supports informed purchase."
          />
          <InfoCard
            eyebrow="Bespoke"
            title="Private commissions"
            text="Consultation-led design for engagement, gifting, anniversaries, and one-off personal pieces."
          />
          <InfoCard
            eyebrow="Service"
            title="Aftercare & guidance"
            text="Sizing, care, and showroom support help the experience feel credible before and after purchase."
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-2xl sm:text-3xl">Featured Pieces</h2>
          <Link
            href="/demo/jeweller/collections"
            className="text-[11px] uppercase tracking-[0.18em] text-black/60"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 pb-16 sm:px-6">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">
            Collections
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
            Explore the house signatures
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-7 text-black/65 sm:text-[15px]">
            The collections are structured to make browsing feel intentional:
            everyday gold essentials, stronger diamond statements, and softer
            heirloom-inspired pieces with a more delicate presence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <CollectionCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop"
            className="aspect-[4/3] w-full border border-black/10 object-cover"
            alt="Engagement rings"
          />

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Bridal
            </p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
              Engagement & Bridal
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-black/65 sm:text-[15px]">
              Discover engagement rings designed with clarity and precision,
              from classic solitaires to bespoke designs. The bridal offering is
              presented as a consultation-led service with a stronger focus on
              guidance, fit, and lasting significance.
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

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Service & Trust
            </p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
              Built to feel credible before the first appointment.
            </h2>
            <p className="mt-5 max-w-xl text-[14px] leading-7 text-black/65 sm:text-[15px]">
              A strong jewellery site needs more than beautiful product imagery.
              It needs clear service language, a sense of place, and the kinds
              of practical details that make a client feel comfortable enquiring,
              booking, or buying.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MiniTrustItem
                title="Appointment-led showroom"
                text="Private consultations for engagement, gifting, and bespoke commissions."
              />
              <MiniTrustItem
                title="Sizing support"
                text="Ring sizing and care guidance positioned as part of the service experience."
              />
              <MiniTrustItem
                title="Insured delivery"
                text="Presentation and dispatch language that supports a premium purchase journey."
              />
              <MiniTrustItem
                title="Aftercare"
                text="Cleaning, maintenance, and long-term wear guidance for continued confidence."
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {secondary.map((item) => (
              <ProductCard key={item.name} item={item} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efede8]">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
                Showroom
              </p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
                Visit by appointment
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-7 text-black/66 sm:text-[15px]">
                For bridal consultations, bespoke design enquiries, and private
                viewings, clients are welcomed into a calm, appointment-led
                showroom environment with focused guidance and discreet service.
              </p>

              <div className="mt-8 space-y-4 text-[14px] leading-7 text-black/68">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Address
                  </div>
                  <div className="mt-1">Example Street, Example District, London</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Contact
                  </div>
                  <div className="mt-1">020 0000 0000</div>
                  <div>appointments@example-jeweller.com</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Opening
                  </div>
                  <div className="mt-1">Monday – Saturday · By appointment</div>
                </div>
              </div>

              <Link
                href="/demo/jeweller/contact"
                className="mt-8 inline-block border border-black px-6 py-3 text-[11px] uppercase tracking-[0.18em]"
              >
                Contact the Showroom
              </Link>
            </div>

            <MapPlaceholder />
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl">
                Visit our showroom or arrange a private appointment
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Maison Valeur is a fictional jeweller demo, but the structure is
                designed to feel like a complete premium retail experience with
                product depth, trust signals, and a believable point of contact.
              </p>
            </div>

            <Link
              href="/demo/jeweller/contact"
              className="border border-white px-6 py-3 text-[11px] uppercase tracking-[0.18em]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-5 sm:px-6">
      <div className="font-serif text-lg tracking-[0.1em]">Maison Valeur</div>

      <nav className="hidden gap-6 text-[11px] uppercase tracking-[0.18em] text-black/70 md:flex">
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

function ProductCard({
  item,
  compact = false,
}: {
  item: Product;
  compact?: boolean;
}) {
  return (
    <div className="border border-black/10 bg-white">
      <img
        src={item.image}
        className={compact ? "aspect-[4/3] w-full object-cover" : "aspect-[4/5] w-full object-cover"}
        alt={item.name}
      />
      <div className="p-4">
        <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">
          {item.category}
        </div>
        <div className="mt-2 font-serif text-base">{item.name}</div>
      </div>
    </div>
  );
}

function CollectionCard({ item }: { item: Collection }) {
  return (
    <Link
      href="/demo/jeweller/collections"
      className="block border border-black/10 bg-white transition hover:-translate-y-0.5"
    >
      <img
        src={item.image}
        className="h-[260px] w-full object-cover"
        alt={item.name}
      />
      <div className="p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-black/50">
          Collection
        </div>
        <div className="mt-2 font-serif text-lg">{item.name}</div>
        <p className="mt-3 text-sm leading-6 text-black/65">{item.desc}</p>
      </div>
    </Link>
  );
}

function InfoCard({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-black/10 bg-white p-5">
      <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
        {eyebrow}
      </div>
      <h3 className="mt-3 font-serif text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/64">{text}</p>
    </div>
  );
}

function MiniTrustItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border border-black/10 bg-white p-4">
      <div className="font-medium text-[#111]">{title}</div>
      <p className="mt-2 text-sm leading-6 text-black/62">{text}</p>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="overflow-hidden border border-black/10 bg-white">
      <div className="relative h-[420px] w-full bg-[linear-gradient(180deg,#f6f4ef_0%,#ece7dc_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-black/25" />
        <div className="absolute left-[42%] top-[16%] h-2 w-2 rounded-full bg-black/20" />
        <div className="absolute left-[68%] top-[44%] h-2 w-2 rounded-full bg-black/20" />
        <div className="absolute left-[28%] top-[58%] h-2 w-2 rounded-full bg-black/20" />

        <div className="absolute left-[50%] top-[48%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black text-xs text-white">
            MV
          </div>
        </div>

        <div className="absolute bottom-5 left-5 border border-black/10 bg-white/90 px-4 py-3 backdrop-blur">
          <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
            Map Placeholder
          </div>
          <div className="mt-1 text-sm text-black/70">
            Example Street · London
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto grid max-w-[1300px] gap-8 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="font-serif text-lg">Maison Valeur</div>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Fictional jewellery house demo designed to feel like a complete,
            premium retail site.
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
