import Link from "next/link";

type Collection = {
  name: string;
  description: string;
  accent: string;
  href: string;
};

type Product = {
  name: string;
  category: string;
  price: string;
  description: string;
  accent: string;
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const collections: Collection[] = [
  {
    name: "Nocturne",
    description:
      "Architectural evening pieces with sculptural lines, deep contrast, and a cinematic glow.",
    accent: "from-stone-950 via-zinc-900 to-amber-950/70",
    href: "/demo/jeweller/collections/nocturne",
  },
  {
    name: "Solenne",
    description:
      "Warm gold essentials refined to their purest expression, designed for modern ritual and daily luxury.",
    accent: "from-[#6f5327] via-[#9c7b43] to-[#d6bb87]",
    href: "/demo/jeweller/collections/solenne",
  },
  {
    name: "Aureline",
    description:
      "Softly luminous heirloom silhouettes inspired by light on silk, skin, and brushed metal.",
    accent: "from-[#d8c8b3] via-[#f3ede4] to-[#c7a978]",
    href: "/demo/jeweller/collections/aureline",
  },
];

const featuredProducts: Product[] = [
  {
    name: "Celeste Arc Diamond Collar",
    category: "Signature Necklace",
    price: "£4,900",
    description:
      "A sweeping collar silhouette with graduated brilliance and a fluid, couture-inspired line.",
    accent: "from-zinc-900 via-zinc-800 to-stone-950",
  },
  {
    name: "Solstice Pavé Cuff",
    category: "Statement Bracelet",
    price: "£3,200",
    description:
      "A polished open cuff with restrained sparkle and mirror-finished edges for clean impact.",
    accent: "from-[#5d4928] via-[#8c6d3c] to-[#b69562]",
  },
  {
    name: "Lune Halo Ring",
    category: "Fine Ring",
    price: "£2,480",
    description:
      "A poised central stone framed by delicate radiance, balanced for elegance from every angle.",
    accent: "from-[#c6b49c] via-[#efe7dc] to-[#9e7c4b]",
  },
  {
    name: "Étoile Drop Earrings",
    category: "Evening Earrings",
    price: "£2,950",
    description:
      "Lengthening lines and suspended brilliance create movement, light, and an unmistakably refined finish.",
    accent: "from-zinc-950 via-zinc-700 to-[#7d653e]",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The presentation feels like couture translated into jewellery. Every detail feels intentional, quiet, and impossibly elevated.",
    name: "Mariam K.",
    title: "Private Client",
  },
  {
    quote:
      "A rare balance of restraint and presence. It feels luxurious before you even touch the piece.",
    name: "Elena V.",
    title: "Creative Consultant",
  },
  {
    quote:
      "Editorial in spirit, precise in execution, and deeply wearable. The whole experience feels considered.",
    name: "Sofia R.",
    title: "Showroom Appointment Guest",
  },
];

const pressLogos = ["Atelier Review", "The Modern Ledger", "Maison Notes", "Lustre Quarterly"];

export default function JewellerHomepage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#171412] selection:bg-[#b08a57]/20">
      <div className="relative isolate overflow-hidden">
        <BackgroundTexture />
        <SiteHeader />

        <section className="relative">
          <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 gap-10 px-6 pb-14 pt-28 sm:px-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pt-32">
            <div className="flex max-w-2xl flex-col justify-center">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-black/70 backdrop-blur">
                Fictional luxury jewellery house
              </span>

              <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#171412] sm:text-6xl md:text-7xl lg:text-[6.1rem]">
                Jewellery composed
                <span className="block text-[#8a6a3d]">with quiet grandeur.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-black/65 sm:text-lg">
                Welcome to <span className="font-semibold text-black">Maison Aurelienne</span>, a
                fictional fine jewellery house shaped by sculptural restraint, warm luminosity, and
                modern heirloom design. Crafted for the woman who prefers presence over noise.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo/jeweller/collections"
                  className="group inline-flex items-center justify-center rounded-full bg-[#171412] px-7 py-4 text-sm font-medium tracking-[0.18em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Explore Collections
                  <span className="ml-3 transition group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/demo/jeweller/about"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#171412] backdrop-blur transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white"
                >
                  Our Story
                </Link>
              </div>

              <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
                <Stat value="18k" label="Recycled gold" />
                <Stat value="By hand" label="Finishing approach" />
                <Stat value="Private" label="Showroom appointments" />
              </dl>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <HeroComposition />
            </div>
          </div>
        </section>
      </div>

      <PressStrip />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionEyebrow>Brand introduction</SectionEyebrow>
            <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight tracking-[-0.03em] text-[#171412] sm:text-4xl">
              Designed like modern heirlooms. Presented like editorial objects.
            </h2>
          </div>

          <div className="grid gap-8 text-black/68 md:grid-cols-2">
            <p className="text-base leading-8">
              Maison Aurelienne is an imagined Paris-and-London-inspired jewellery house devoted to
              pieces that feel intimate, architectural, and enduring. The aesthetic is refined
              rather than ornate: soft metal curves, calibrated sparkle, and silhouettes that sit
              beautifully against skin.
            </p>
            <p className="text-base leading-8">
              Each collection is framed as a study in light, texture, and ritual dressing—from
              daylit essentials to evening statements. The result is a luxury experience built on
              confidence, calm, and extraordinary finish.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Featured collections</SectionEyebrow>
            <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[#171412] sm:text-4xl">
              A study in contrast, glow, and proportion.
            </h2>
          </div>

          <Link
            href="/demo/jeweller/collections"
            className="hidden text-sm font-medium uppercase tracking-[0.18em] text-[#8a6a3d] transition hover:text-[#5f4724] md:inline-flex"
          >
            View all collections
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.name} collection={collection} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-7 rounded-[2rem] border border-black/8 bg-[#171412] p-6 text-white sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#2a241f] to-black p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,163,104,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />
            <div className="relative">
              <SectionEyebrow dark>Craftsmanship</SectionEyebrow>
              <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                Precision made to feel effortless.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/72 sm:text-base">
                Every imagined Maison Aurelienne piece is developed through a luxury design
                process—stone balance, setting clarity, comfort on the body, and polished finish are
                considered as carefully as visual impact.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <FeatureTile
                  title="Material integrity"
                  text="18k recycled gold tones, ethically framed sourcing language, and enduring wearability."
                />
                <FeatureTile
                  title="Sculptural comfort"
                  text="Pieces are shaped to sit with softness on the body, never feeling harsh or overworked."
                />
                <FeatureTile
                  title="Quiet distinction"
                  text="Luxury signaled through finish, silhouette, and restraint rather than excessive embellishment."
                />
                <FeatureTile
                  title="Gift-worthy presentation"
                  text="Signature cases, appointment wrapping, and tactile detail elevate every unboxing moment."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <EditorialPanel
              title="Private consultations"
              body="A showroom-led approach for bridal, anniversary, and bespoke commissions—calm, attentive, and highly personal."
              kicker="Service"
            />
            <EditorialPanel
              title="Signature finishing"
              body="Mirror polish, soft-brushed texture, and hand-inspected settings designed to reflect light with control."
              kicker="Atelier"
            />
            <EditorialPanel
              title="Modern heirloom philosophy"
              body="Created to feel relevant now and meaningful years from now, with a silhouette-first design language."
              kicker="Design"
            />
            <EditorialPanel
              title="Luxury with clarity"
              body="Transparent care guidance, considered sizing support, and a service standard that builds confidence."
              kicker="Experience"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Featured pieces</SectionEyebrow>
            <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[#171412] sm:text-4xl">
              Selected to anchor the collection story.
            </h2>
          </div>

          <Link
            href="/demo/jeweller/collections"
            className="hidden text-sm font-medium uppercase tracking-[0.18em] text-[#8a6a3d] transition hover:text-[#5f4724] md:inline-flex"
          >
            Shop the edit
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_20px_80px_rgba(17,12,8,0.06)]">
            <SectionEyebrow>Client impressions</SectionEyebrow>
            <h2 className="mt-4 max-w-md font-serif text-3xl tracking-[-0.03em] text-[#171412] sm:text-4xl">
              Luxury that feels felt, not announced.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-black/65">
              Even in demo form, the brand experience is built to communicate trust, refinement, and
              an unmistakable point of view.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group rounded-[1.75rem] border border-black/8 bg-[#efe7dc] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(29,20,14,0.08)]"
              >
                <div className="text-3xl text-[#8a6a3d]">“</div>
                <p className="mt-4 text-sm leading-7 text-black/72">{item.quote}</p>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <div className="text-sm font-medium text-[#171412]">{item.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-black/45">
                    {item.title}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-black/8 bg-gradient-to-br from-[#efe5d7] via-white to-[#e1d0b6]">
          <div className="grid gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-14">
            <div>
              <SectionEyebrow>Luxury CTA</SectionEyebrow>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-[-0.03em] text-[#171412] sm:text-4xl lg:text-[2.8rem]">
                Discover the collection or arrange a private showroom appointment.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">
                Explore sculptural signatures, bridal-inspired silhouettes, and quiet statement
                pieces through a premium editorial shopping experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/demo/jeweller/collections"
                className="inline-flex items-center justify-center rounded-full bg-[#171412] px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                Shop Collections
              </Link>
              <Link
                href="/demo/jeweller/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/8 bg-[#171412] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] lg:px-12 lg:py-16">
          <div>
            <div className="font-serif text-2xl tracking-[0.08em]">Maison Aurelienne</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
              A fictional luxury jewellery house created for premium demo presentation, editorial
              storytelling, and elevated ecommerce design.
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
              { label: "Bridal Consultation", href: "/demo/jeweller/contact" },
              { label: "Care Guidance", href: "/demo/jeweller/contact" },
            ]}
          />

          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Showroom</div>
            <p className="mt-4 text-sm leading-7 text-white/68">
              18 Rue des Lumières
              <br />
              Mayfair House
              <br />
              London, W1
            </p>
            <p className="mt-5 text-sm text-white/68">By private appointment only</p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs uppercase tracking-[0.16em] text-white/38 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <span>Demo brand only · Fictional jewellery house</span>
            <span>Designed for luxury showcase presentation</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/demo/jeweller" className="group inline-flex items-center">
          <span className="font-serif text-[1.45rem] tracking-[0.12em] text-[#171412] transition group-hover:text-[#8a6a3d]">
            Maison Aurelienne
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Collections", href: "/demo/jeweller/collections" },
            { label: "About", href: "/demo/jeweller/about" },
            { label: "Contact", href: "/demo/jeweller/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-black/68 transition hover:text-[#171412]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demo/jeweller/contact"
          className="hidden rounded-full border border-black/10 bg-white/70 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#171412] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white md:inline-flex"
        >
          Appointment
        </Link>
      </div>
    </header>
  );
}

function HeroComposition() {
  return (
    <div className="relative w-full max-w-[620px]">
      <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#d3bc93]/30 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-[#8a6a3d]/20 blur-3xl" />

      <div className="relative grid gap-4 sm:grid-cols-[0.82fr_1fr]">
        <div className="order-2 flex flex-col gap-4 sm:order-1 sm:pt-16">
          <VisualTile variant="dark" label="Evening line" />
          <VisualTile variant="light" label="Private salon" tall />
        </div>

        <div className="order-1 sm:order-2">
          <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#16120f] p-3 shadow-[0_35px_120px_rgba(17,12,8,0.18)]">
            <div className="relative aspect-[0.8/1] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(235,220,192,0.26),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(173,133,72,0.2),transparent_20%),linear-gradient(180deg,#2a241f_0%,#0f0c0a_100%)]">
              <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_10%,rgba(255,255,255,0.08)_40%,transparent_60%)] opacity-60" />
              <div className="absolute inset-x-[16%] bottom-[12%] top-[14%] rounded-[45%_45%_40%_40%/20%_20%_30%_30%] border border-[#d7bf8f]/25 bg-[radial-gradient(circle_at_50%_20%,rgba(244,233,214,0.25),transparent_20%),linear-gradient(180deg,rgba(60,47,31,0.8),rgba(23,18,15,0.96))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
              <div className="absolute inset-x-[29%] top-[27%] h-[18%] rounded-full border border-[#e5d3ac]/35 bg-[radial-gradient(circle,rgba(255,241,214,0.55),rgba(173,135,77,0.22)_48%,transparent_70%)] blur-[1px]" />
              <div className="absolute inset-x-[22%] bottom-[17%] h-[22%] rounded-[50%] border border-[#d3ba87]/20 bg-[radial-gradient(circle_at_50%_40%,rgba(236,223,197,0.12),transparent_50%)]" />
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_70%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualTile({
  variant,
  label,
  tall = false,
}: {
  variant: "light" | "dark";
  label: string;
  tall?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[1.75rem] border p-3 transition duration-500 hover:-translate-y-1",
        tall ? "aspect-[0.95/1.1]" : "aspect-[1/0.78]",
        isDark
          ? "border-black/10 bg-[#171412] shadow-[0_20px_80px_rgba(17,12,8,0.18)]"
          : "border-black/8 bg-white shadow-[0_18px_60px_rgba(17,12,8,0.06)]",
      ].join(" ")}
    >
      <div
        className={[
          "relative h-full rounded-[1.35rem]",
          isDark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(230,210,170,0.12),transparent_24%),linear-gradient(180deg,#28211c_0%,#0d0a08_100%)]"
            : "bg-[radial-gradient(circle_at_70%_20%,rgba(192,151,89,0.18),transparent_20%),linear-gradient(180deg,#f7f1ea_0%,#e9dccd_100%)]",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.12)_48%,transparent_75%)] opacity-0 transition duration-700 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/75 backdrop-blur">
          {label}
        </div>
      </div>
    </div>
  );
}

function PressStrip() {
  return (
    <section className="border-y border-black/8 bg-white/55 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="text-xs uppercase tracking-[0.24em] text-black/42">Imagined press mentions</div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10">
          {pressLogos.map((logo) => (
            <div
              key={logo}
              className="text-sm font-medium tracking-[0.12em] text-black/55 transition hover:text-black/80"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={collection.href}
      className="group relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(23,18,15,0.08)]"
    >
      <div
        className={`relative flex min-h-[27rem] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${collection.accent} p-6 text-white`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_40%,rgba(255,255,255,0.03))]" />
        <div className="relative flex items-start justify-between">
          <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Collection
          </span>
          <span className="text-xl transition group-hover:translate-x-1">↗</span>
        </div>

        <div className="relative">
          <h3 className="font-serif text-3xl tracking-[-0.03em]">{collection.name}</h3>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/78">{collection.description}</p>
          <div className="mt-7 inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-white/88">
            Explore story
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-black/8 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(17,12,8,0.08)]">
      <div className="p-3">
        <div
          className={`relative aspect-[0.92/1] overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${product.accent}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(130deg,transparent_15%,rgba(255,255,255,0.1)_48%,transparent_75%)] opacity-80" />
          <div className="absolute inset-x-[22%] bottom-[18%] top-[16%] rounded-[46%_46%_42%_42%/18%_18%_28%_28%] border border-white/12 bg-[radial-gradient(circle_at_50%_15%,rgba(255,244,228,0.18),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.1))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
          <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_72%)]" />
        </div>
      </div>

      <div className="px-5 pb-5 pt-1">
        <div className="text-[11px] uppercase tracking-[0.22em] text-black/42">{product.category}</div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-[1.45rem] leading-tight tracking-[-0.03em] text-[#171412]">
            {product.name}
          </h3>
          <span className="pt-1 text-sm font-medium text-[#8a6a3d]">{product.price}</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-black/62">{product.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-black/8 pt-4">
          <Link
            href="/demo/jeweller/product/celeste-arc-diamond-collar"
            className="text-xs font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:text-[#8a6a3d]"
          >
            View piece
          </Link>
          <button
            type="button"
            className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#171412] transition hover:border-black/20 hover:bg-[#f8f4ef]"
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}

function EditorialPanel({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6 backdrop-blur">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[#d0b07a]">{kicker}</div>
      <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/68">{body}</p>
    </div>
  );
}

function FeatureTile({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-sm font-medium text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
    </div>
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
      <div className="text-xs uppercase tracking-[0.24em] text-white/45">{title}</div>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-white/68 transition hover:text-white"
          >
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
      <dd className="mt-2 font-serif text-2xl tracking-[-0.03em] text-[#171412]">{value}</dd>
    </div>
  );
}

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "text-[11px] uppercase tracking-[0.24em]",
        dark ? "text-[#d0b07a]" : "text-[#8a6a3d]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function BackgroundTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,162,110,0.16),transparent_24%),radial-gradient(circle_at_85%_16%,rgba(107,85,54,0.09),transparent_16%),linear-gradient(180deg,#f7f3ee_0%,#f3ede5_100%)]" />
      <div className="absolute left-[-10%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[#e5d5b7]/25 blur-3xl" />
      <div className="absolute right-[-8%] top-[14%] h-[22rem] w-[22rem] rounded-full bg-[#cab085]/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[24%] h-[18rem] w-[18rem] rounded-full bg-[#c4a06e]/10 blur-3xl" />
    </div>
  );
}
