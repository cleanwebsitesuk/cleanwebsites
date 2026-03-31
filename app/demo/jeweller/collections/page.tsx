import Link from "next/link";

type Product = {
  name: string;
  category: string;
  collection: string;
  metal: string;
  image: string;
  blurb: string;
};

type Collection = {
  name: string;
  image: string;
  desc: string;
};

const products: Product[] = [
  {
    name: "Aveline Halo Ring",
    category: "Ring",
    collection: "Aureline",
    metal: "18k Yellow Gold",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "A softly elevated silhouette with a balanced halo and clean, polished finish.",
  },
  {
    name: "Solstice Tennis Bracelet",
    category: "Bracelet",
    collection: "Nocturne",
    metal: "18k White Gold",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "A diamond-led line bracelet shaped for clarity, movement, and evening presence.",
  },
  {
    name: "Lune Drop Earrings",
    category: "Earrings",
    collection: "Aureline",
    metal: "18k White Gold",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "Lengthening proportions and restrained brilliance for more formal dressing.",
  },
  {
    name: "Serein Pendant",
    category: "Necklace",
    collection: "Solenne",
    metal: "18k Yellow Gold",
    image:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "An everyday pendant designed for layering, warmth, and clean wearability.",
  },
  {
    name: "Orée Necklace",
    category: "Necklace",
    collection: "Solenne",
    metal: "18k Yellow Gold",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "Fine lines and polished gold surfaces designed for quiet statement dressing.",
  },
  {
    name: "Celeste Pendant",
    category: "Necklace",
    collection: "Aureline",
    metal: "18k Rose Gold",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "A softer pendant profile with light-focused detail and an heirloom sensibility.",
  },
  {
    name: "Nocturne Signet Ring",
    category: "Ring",
    collection: "Nocturne",
    metal: "18k Yellow Gold",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "A bolder gold form with sharper lines and stronger visual weight on the hand.",
  },
  {
    name: "Aurea Chain Bracelet",
    category: "Bracelet",
    collection: "Solenne",
    metal: "18k Yellow Gold",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    blurb:
      "An elegant chain silhouette for daily wear, layering, and understated finish.",
  },
];

const collections: Collection[] = [
  {
    name: "Solenne",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    desc: "Warm gold essentials designed for daily wear, subtle layering, and polished simplicity.",
  },
  {
    name: "Nocturne",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop",
    desc: "Diamond-led silhouettes with stronger contrast, evening presence, and sculptural finish.",
  },
  {
    name: "Aureline",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    desc: "Refined pieces shaped around softness, light balance, and understated heirloom character.",
  },
];

export default function CollectionsPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Collections
            </p>
            <h1 className="mt-4 font-serif text-[2.3rem] leading-[1.08] tracking-[-0.03em] sm:text-[3rem] lg:text-[4rem]">
              Jewellery designed with clarity,
              <span className="block">balance, and everyday presence.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-black/66 sm:text-[15px]">
              Explore signature rings, necklaces, earrings, and bracelets across
              the house collections. Each piece is presented with a focus on
              proportion, wearability, and refined material finish.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", "Rings", "Necklaces", "Bracelets", "Earrings", "Engagement"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] ${
                    item === "All"
                      ? "bg-black text-white"
                      : "border border-black/10 bg-white text-black/70"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-black/70"
            >
              Collection
            </button>
            <button
              type="button"
              className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-black/70"
            >
              Metal
            </button>
            <button
              type="button"
              className="border border-black/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-black/70"
            >
              Sort
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit border border-black/10 bg-white">
            <div className="border-b border-black/10 px-5 py-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-black/60">
                Refine selection
              </div>
            </div>

            <div className="space-y-8 p-5">
              <FilterGroup
                title="Category"
                items={["Rings", "Necklaces", "Bracelets", "Earrings"]}
              />
              <FilterGroup
                title="Collection"
                items={["Solenne", "Nocturne", "Aureline"]}
              />
              <FilterGroup
                title="Metal"
                items={["18k Yellow Gold", "18k White Gold", "18k Rose Gold", "Platinum"]}
              />
              <FilterGroup
                title="Service"
                items={["Bespoke", "Engagement", "Giftable pieces"]}
              />
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                  Selected edit
                </p>
                <h2 className="mt-2 font-serif text-2xl">All Jewellery</h2>
              </div>
              <p className="text-sm text-black/55">{products.length} pieces</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 border border-black/10 bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Shopping guidance
            </p>
            <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.4rem]">
              Choosing the right piece should feel clear and considered.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <SupportCard
              title="Engagement guidance"
              text="Consultation-led support for ring styles, settings, proportions, and bespoke adjustments."
            />
            <SupportCard
              title="Sizing & fit"
              text="Advice around ring sizing, bracelet fit, necklace lengths, and day-to-day wearability."
            />
            <SupportCard
              title="Bespoke commissions"
              text="A private process for one-off jewellery, personal milestones, and modern heirloom pieces."
            />
            <SupportCard
              title="Appointments"
              text="Book a showroom visit for bridal, gifting, or a closer look at the collection."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#efede8]">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
                Collection overview
              </p>
              <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem]">
                Three signatures,
                <span className="block">one considered point of view.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[14px] leading-7 text-black/66 sm:text-[15px]">
                Solenne centres on polished gold essentials, Nocturne introduces
                stronger contrast and evening presence, while Aureline softens the
                silhouette through light balance and more delicate proportion.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {collections.map((collection) => (
                <div key={collection.name} className="border border-black/10 bg-white">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-[180px] w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-black/45">
                      Collection
                    </div>
                    <h3 className="mt-2 font-serif text-lg">{collection.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/62">
                      {collection.desc}
                    </p>
                  </div>
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
                Need help narrowing the selection?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Arrange a private appointment for bridal guidance, bespoke
                enquiries, or help choosing a piece for gifting or everyday wear.
              </p>
            </div>

            <Link
              href="/demo/jeweller/contact"
              className="border border-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
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

function FilterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
        {title}
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-3 text-sm text-black/70">
            <input type="checkbox" className="h-4 w-4 rounded-none border-black/20" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="/demo/jeweller/product/aveline-halo-ring"
      className="block border border-black/10 bg-white transition hover:-translate-y-0.5"
    >
      <img
        src={product.image}
        alt={product.name}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-black/45">
          <span>{product.category}</span>
          <span>{product.collection}</span>
        </div>
        <h3 className="mt-3 font-serif text-[1.35rem] leading-tight">{product.name}</h3>
        <p className="mt-2 text-sm text-black/55">{product.metal}</p>
        <p className="mt-4 text-sm leading-6 text-black/64">{product.blurb}</p>
        <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-black/70">
          View piece →
        </div>
      </div>
    </Link>
  );
}

function SupportCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-black/10 bg-[#f8f8fa] p-5">
      <h3 className="font-serif text-[1.2rem] leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/64">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto grid max-w-[1300px] gap-8 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-lg">Maison Valeur</div>
          <p className="mt-4 text-sm leading-6 text-white/60">
            A contemporary jewellery house offering fine pieces, bespoke commissions,
            and appointment-led service.
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
