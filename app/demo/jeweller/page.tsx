import Link from "next/link";

type FeaturedPiece = {
  name: string;
  category: string;
  price: string;
  description: string;
};

type Collection = {
  name: string;
  title: string;
  description: string;
};

type Note = {
  title: string;
  body: string;
};

const featuredPieces: FeaturedPiece[] = [
  {
    name: "Aveline Halo Ring",
    category: "Fine Ring",
    price: "£2,480",
    description:
      "A softly elevated silhouette with a luminous centre stone, balanced by a delicate halo and fine polished shoulders.",
  },
  {
    name: "Serein Line Bracelet",
    category: "Bracelet",
    price: "£3,120",
    description:
      "Fluid, sculptural, and quietly brilliant, designed to sit close to the wrist with measured radiance.",
  },
  {
    name: "Orée Drop Earrings",
    category: "Earrings",
    price: "£2,760",
    description:
      "A lengthening profile with clean movement and a restrained evening glow.",
  },
];

const collections: Collection[] = [
  {
    name: "Solenne",
    title: "Modern gold essentials",
    description:
      "Daily signatures in warm polished tones, reduced to their most elegant form.",
  },
  {
    name: "Nocturne",
    title: "Evening sculptural pieces",
    description:
      "Sharper silhouettes, deeper contrast, and statement jewellery designed for after-dark dressing.",
  },
  {
    name: "Aureline",
    title: "Soft heirloom light",
    description:
      "Refined stones, lifted settings, and silhouettes intended to feel timeless without feeling conventional.",
  },
];

const notes: Note[] = [
  {
    title: "Crafted with restraint",
    body:
      "Every piece is imagined through proportion, comfort, finish, and light performance rather than excess ornament.",
  },
  {
    title: "Private showroom service",
    body:
      "An appointment-led experience for bridal selection, milestone gifting, and bespoke enquiries.",
  },
  {
    title: "Presented like a luxury object",
    body:
      "Signature cases, tactile materials, and calm, considered presentation from first impression to unboxing.",
  },
];

const testimonials = [
  {
    quote:
      "The site feels composed in the same way the jewellery does — refined, calm, and very expensive.",
    name: "Layla M.",
    role: "Private Client",
  },
  {
    quote:
      "It avoids the usual fake-luxury clichés and instead feels genuinely editorial and persuasive.",
    name: "Anaïs V.",
    role: "Brand Consultant",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#1c1815]">
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[linear-gradient(180deg,#f1e8db_0%,#f6f1ea_65%,#f6f1ea_100%)]" />
      <div className="relative">
        <Header />

        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="flex flex-col justify-center pt-8 lg:pt-14">
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-black/60 backdrop-blur">
                Fictional luxury jewellery house · demo brand
              </div>

              <h1 className="mt-8 max-w-[12ch] font-serif text-[3.4rem] leading-[0.94] tracking-[-0.05em] text-[#1a1512] sm:text-[4.5rem] lg:text-[6.2rem]">
                Quiet luxury,
                <span className="block text-[#8c6a42]">made luminous.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-black/65 sm:text-lg">
                <span className="font-medium text-[#1a1512]">Maison Valeur</span> is a fictional
                fine jewellery house devoted to sculptural clarity, warm gold tones, and modern
                heirloom design — created to feel elevated, intimate, and enduring.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo/jeweller/collections"
                  className="inline-flex items-center justify-center rounded-full bg-[#1a1512] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Shop Collections
                </Link>
                <Link
                  href="/demo/jeweller/about"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#1a1512] transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white"
                >
                  Discover the House
                </Link>
              </div>

              <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
                <Stat value="18k" label="Recycled gold tone" />
                <Stat value="Private" label="Showroom model" />
                <Stat value="Made to feel" label="Like modern heirlooms" />
              </dl>
            </div>

            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-white/70 backdrop-blur">
          <div className="mx-auto grid max-w-[1440px] gap-4 px-6 py-5 text-[11px] uppercase tracking-[0.26em] text-black/40 sm:px-8 md:grid-cols-4 lg:px-12">
            <span>Imagined press mention</span>
            <span>Maison Notes</span>
            <span>Lustre Review</span>
            <span>The Fine Objects Journal</span>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionLabel>Brand perspective</SectionLabel>
              <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                Jewellery with presence, not noise.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-8 text-black/65 sm:text-[15px]">
                The house is positioned around restraint, polish, and controlled radiance. Pieces
                are designed to feel intentional on the body — elegant from a distance, exceptional
                up close.
              </p>
              <p className="text-sm leading-8 text-black/65 sm:text-[15px]">
                Rather than chasing ornament for its own sake, Maison Valeur is imagined as a
                jewellery brand where craftsmanship, silhouette, and atmosphere carry the luxury
                story.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Featured collections</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                Three signatures of the house.
              </h2>
            </div>

            <Link
              href="/demo/jeweller/collections"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8c6a42] transition hover:text-[#6f512f]"
            >
              View all collections
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <CollectionCard key={collection.name} collection={collection} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-black/8 bg-[#1b1714] p-8 text-white shadow-[0_30px_100px_rgba(26,21,18,0.12)] sm:p-10 lg:p-12">
              <SectionLabel dark>Craftsmanship</SectionLabel>
              <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                Built with the discipline of a private atelier.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/72 sm:text-[15px]">
                Every imagined piece begins with line, balance, and wearability. Stone proportion,
                polish, setting clarity, and comfort are treated as luxuries in themselves.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {notes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <h3 className="text-sm font-medium text-white">{note.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">{note.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <CraftPanel />
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Featured pieces</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                Designed to anchor the story.
              </h2>
            </div>

            <Link
              href="/demo/jeweller/collections"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8c6a42] transition hover:text-[#6f512f]"
            >
              Shop the edit
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredPieces.map((piece, index) => (
              <ProductCard key={piece.name} piece={piece} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_20px_70px_rgba(26,21,18,0.06)] sm:p-10">
              <SectionLabel>Why it works</SectionLabel>
              <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                Luxury should feel composed, not performative.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-8 text-black/65 sm:text-[15px]">
                This homepage is structured to create desire through pacing, credibility, product
                focus, and atmosphere — not through oversized gimmicks.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-black/8 bg-[#eee4d7] p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(26,21,18,0.08)]"
                >
                  <div className="text-3xl text-[#8c6a42]">“</div>
                  <p className="mt-4 text-sm leading-8 text-black/70">{item.quote}</p>
                  <div className="mt-8 border-t border-black/10 pt-4">
                    <div className="text-sm font-medium text-[#1a1512]">{item.name}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-black/45">
                      {item.role}
                    </div>
                  </div>
                </article>
              ))}

              <div className="rounded-[1.75rem] border border-black/8 bg-[#d9c2a0] p-6 text-[#1a1512] md:col-span-2">
                <div className="text-[11px] uppercase tracking-[0.24em] text-black/50">
                  Private appointment
                </div>
                <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h3 className="font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
                      Arrange a showroom consultation or bespoke enquiry.
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-8 text-black/68">
                      Designed for high-intent browsing, gifting, bridal selection, and
                      appointment-led service.
                    </p>
                  </div>
                  <Link
                    href="/demo/jeweller/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#1a1512] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-black"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/8 bg-[#1a1512] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr] lg:px-12 lg:py-16">
            <div>
              <div className="font-serif text-2xl tracking-[0.08em]">Maison Valeur</div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
                A fictional jewellery house created for a luxury demo experience with strong visual
                positioning and believable editorial commerce.
              </p>
            </div>

            <FooterColumn
              title="Navigate"
              links={[
                { label: "Home", href: "/demo/jeweller" },
                { label: "Collections", href: "/demo/jeweller/collections" },
                { label: "About", href: "/demo/jeweller/about" },
                { label: "Contact", href: "/demo/jeweller/contact" },
              ]}
            />

            <FooterColumn
              title="Services"
              links={[
                { label: "Private Appointments", href: "/demo/jeweller/contact" },
                { label: "Bespoke Enquiries", href: "/demo/jeweller/contact" },
                { label: "Bridal Guidance", href: "/demo/jeweller/contact" },
                { label: "Care & Sizing", href: "/demo/jeweller/contact" },
              ]}
            />

            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Showroom</div>
              <p className="mt-4 text-sm leading-7 text-white/58">
                24 Albemarle Street
                <br />
                Mayfair, London
                <br />
                By private appointment
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-[1440px] px-6 py-6 sm:px-8 lg:px-12 lg:py-8">
      <div className="flex items-center justify-between">
        <Link href="/demo/jeweller" className="font-serif text-[1.6rem] tracking-[0.12em] text-[#1a1512]">
          Maison Valeur
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/demo/jeweller/collections"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/65 transition hover:text-black"
          >
            Collections
          </Link>
          <Link
            href="/demo/jeweller/about"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/65 transition hover:text-black"
          >
            About
          </Link>
          <Link
            href="/demo/jeweller/contact"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/65 transition hover:text-black"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/demo/jeweller/contact"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/75 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#1a1512] transition hover:border-black/20 hover:bg-white"
        >
          Appointment
        </Link>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full min-h-[720px]">
      <div className="absolute inset-0 rounded-[2.4rem] border border-black/8 bg-white shadow-[0_40px_120px_rgba(26,21,18,0.08)]" />

      <div className="absolute left-6 right-6 top-6 rounded-[1.9rem] border border-black/8 bg-[linear-gradient(180deg,#efe4d4_0%,#e5d4bd_42%,#d1b895_100%)] p-4 sm:left-8 sm:right-8 sm:top-8 sm:p-5">
        <div className="relative aspect-[0.95/1.08] overflow-hidden rounded-[1.55rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.72),transparent_14%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(180deg,#4f3f2f_0%,#241c15_100%)]">
          <div className="absolute inset-x-[21%] bottom-[9%] top-[14%] rounded-[45%_45%_42%_42%/18%_18%_30%_30%] border border-[#d8c09b]/20 bg-[radial-gradient(circle_at_50%_17%,rgba(255,240,214,0.4),transparent_15%),linear-gradient(180deg,rgba(79,64,46,0.88),rgba(24,19,15,0.96))]" />
          <div className="absolute inset-x-[30%] top-[28%] h-[16%] rounded-full border border-[#ead9b7]/30 bg-[radial-gradient(circle,rgba(255,245,222,0.75),rgba(207,175,124,0.24)_46%,transparent_72%)] blur-[0.6px]" />
          <div className="absolute left-[10%] top-[11%] text-[10px] uppercase tracking-[0.3em] text-white/55">
            Signature piece
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 grid gap-5 md:grid-cols-[1fr_1fr]">
        <div className="rounded-[1.5rem] border border-black/8 bg-[#f3ece3] p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-black/45">Refined silhouette</div>
          <p className="mt-3 text-sm leading-7 text-black/65">
            A hero composition that actually resembles a luxury product presentation instead of an
            abstract poster.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-black/45">Editorial framing</div>
          <p className="mt-3 text-sm leading-7 text-black/65">
            Balanced scale, warmer tone, better visual weight, and far more believable premium
            positioning.
          </p>
        </div>
      </div>
    </div>
  );
}

function CraftPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#ece2d6] p-8 shadow-[0_25px_80px_rgba(26,21,18,0.07)] sm:p-10">
      <div className="absolute right-[-3rem] top-[-2rem] h-48 w-48 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute bottom-[-2rem] left-[-2rem] h-40 w-40 rounded-full bg-[#c8aa7b]/20 blur-3xl" />

      <div className="relative">
        <SectionLabel>House values</SectionLabel>
        <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
          Polished, intimate, and confidently understated.
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-8 text-black/65 sm:text-[15px]">
          The visual system is deliberately restrained: warm neutrals, precise spacing, elegant type
          hierarchy, and product framing that feels premium rather than theatrical.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-[1.35rem] border border-black/8 bg-white/70 p-5">
            <div className="text-sm font-medium text-[#1a1512]">Believable luxury tone</div>
            <p className="mt-2 text-sm leading-7 text-black/62">
              The copy speaks like a high-end house, not a parody of one.
            </p>
          </div>
          <div className="rounded-[1.35rem] border border-black/8 bg-white/70 p-5">
            <div className="text-sm font-medium text-[#1a1512]">Commerce-ready layout</div>
            <p className="mt-2 text-sm leading-7 text-black/62">
              Clear paths to collections, product discovery, and appointment-led conversion.
            </p>
          </div>
          <div className="rounded-[1.35rem] border border-black/8 bg-white/70 p-5">
            <div className="text-sm font-medium text-[#1a1512]">More desire, less gimmick</div>
            <p className="mt-2 text-sm leading-7 text-black/62">
              It feels expensive because it is controlled, not because it is shouting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionCard({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) {
  const backgrounds = [
    "bg-[linear-gradient(180deg,#f1e5d7_0%,#e4cfb1_100%)]",
    "bg-[linear-gradient(180deg,#221d1a_0%,#514030_100%)]",
    "bg-[linear-gradient(180deg,#efe9df_0%,#d9c5a4_100%)]",
  ];

  const dark = index === 1;

  return (
    <Link
      href="/demo/jeweller/collections"
      className="group overflow-hidden rounded-[1.9rem] border border-black/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(26,21,18,0.08)]"
    >
      <div className="p-4">
        <div
          className={`relative min-h-[24rem] overflow-hidden rounded-[1.5rem] ${backgrounds[index]}`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_45%)]" />
          <div
            className={`absolute right-[-8%] top-[10%] h-[78%] w-[58%] rounded-[48%_48%_42%_42%/18%_18%_28%_28%] border ${
              dark ? "border-white/12" : "border-black/8"
            } bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.3),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(0,0,0,0.08))]`}
          />
          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] uppercase tracking-[0.24em] ${
                  dark ? "text-white/55" : "text-black/42"
                }`}
              >
                Collection
              </span>
              <span className={dark ? "text-white/35" : "text-black/30"}>↗</span>
            </div>

            <div className={dark ? "text-white" : "text-[#1a1512]"}>
              <h3 className="font-serif text-3xl tracking-[-0.04em]">{collection.name}</h3>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] opacity-60">
                {collection.title}
              </div>
              <p className="mt-4 max-w-xs text-sm leading-7 opacity-72">{collection.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({
  piece,
  index,
}: {
  piece: FeaturedPiece;
  index: number;
}) {
  const visuals = [
    "bg-[linear-gradient(180deg,#dbc4a1_0%,#9f7b4d_48%,#2a2119_100%)]",
    "bg-[linear-gradient(180deg,#f1e7da_0%,#d8c1a1_48%,#47382c_100%)]",
    "bg-[linear-gradient(180deg,#eadcc9_0%,#c8a97a_44%,#32271f_100%)]",
  ];

  return (
    <article className="overflow-hidden rounded-[1.9rem] border border-black/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(26,21,18,0.08)]">
      <div className="p-4">
        <div className={`relative aspect-[0.95/1] overflow-hidden rounded-[1.5rem] ${visuals[index]}`}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="absolute inset-x-[22%] bottom-[12%] top-[16%] rounded-[46%_46%_42%_42%/18%_18%_28%_28%] border border-white/15 bg-[radial-gradient(circle_at_50%_18%,rgba(255,244,226,0.4),transparent_14%),linear-gradient(180deg,rgba(79,64,47,0.72),rgba(24,19,15,0.92))]" />
        </div>
      </div>

      <div className="px-5 pb-5 pt-1">
        <div className="text-[10px] uppercase tracking-[0.22em] text-black/42">{piece.category}</div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-[1.5rem] leading-tight tracking-[-0.04em] text-[#1a1512]">
            {piece.name}
          </h3>
          <span className="pt-1 text-sm font-medium text-[#8c6a42]">{piece.price}</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-black/62">{piece.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-black/8 pt-4">
          <Link
            href="/demo/jeweller/product/aveline-halo-ring"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1512] transition hover:text-[#8c6a42]"
          >
            View piece
          </Link>
          <button
            type="button"
            className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a1512] transition hover:border-black/20 hover:bg-[#f8f3ec]"
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">{title}</div>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-sm text-white/62 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.22em] text-black/42">{label}</dt>
      <dd className="mt-2 font-serif text-2xl tracking-[-0.04em] text-[#1a1512]">{value}</dd>
    </div>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "text-[11px] uppercase tracking-[0.24em] text-[#d7b684]" : "text-[11px] uppercase tracking-[0.24em] text-[#8c6a42]"}>
      {children}
    </div>
  );
}
