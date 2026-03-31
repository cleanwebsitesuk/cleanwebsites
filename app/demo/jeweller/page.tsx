import Link from "next/link";

const collections = [
  {
    name: "Obsidian Veil",
    subtitle: "Evening architecture",
    description:
      "Dark-polished silhouettes cut with precise light, designed for after-hours presence.",
  },
  {
    name: "Pale Orbit",
    subtitle: "Modern heirlooms",
    description:
      "Soft brilliance, restrained proportions, and sculptural lines intended to outlast trend cycles.",
  },
  {
    name: "Atelier 9",
    subtitle: "Private commissions",
    description:
      "Rare pieces conceived through intimate consultation, balance studies, and couture-level finishing.",
  },
];

const products = [
  {
    name: "The Seraph Collar",
    price: "£5,800",
    type: "Necklace",
  },
  {
    name: "Lune Frame Ring",
    price: "£2,940",
    type: "Ring",
  },
  {
    name: "Noir Axis Cuff",
    price: "£3,100",
    type: "Bracelet",
  },
  {
    name: "Halide Drop Earrings",
    price: "£2,760",
    type: "Earrings",
  },
];

const testimonials = [
  {
    quote:
      "It feels less like shopping and more like entering a private fashion object world.",
    author: "Nadia El-Hariri",
    role: "Showroom Guest",
  },
  {
    quote:
      "The visual language is disciplined, luxurious, and genuinely memorable.",
    author: "Iris V.",
    role: "Creative Director",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f1ea]">
      <div className="relative overflow-hidden">
        <Noise />
        <AmbientLines />
        <Header />

        <section className="relative border-b border-white/10">
          <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 px-5 pt-24 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div className="flex flex-col justify-between pb-8 lg:pb-10">
              <div className="max-w-[900px]">
                <div className="mb-6 inline-flex items-center gap-3 border border-white/12 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70">
                  Fictional jewellery house · demo brand
                </div>

                <h1 className="max-w-[1000px] font-serif text-[4.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-[#f3efe8] sm:text-[5.6rem] md:text-[7rem] lg:text-[8.8rem] xl:text-[10.5rem]">
                  Jewellery
                  <br />
                  for the
                  <br />
                  <span className="text-white/38">unmistakable.</span>
                </h1>

                <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                    <span className="text-white">AURELITH</span> is a fictional
                    luxury jewellery house built around shadow, light, and
                    deliberate restraint—pieces conceived with the emotional
                    intensity of couture and the discipline of modern object
                    design.
                  </p>

                  <div className="flex gap-3">
                    <Link
                      href="/demo/jeweller/collections"
                      className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition hover:bg-transparent hover:text-white"
                    >
                      View Collections
                    </Link>
                    <Link
                      href="/demo/jeweller/about"
                      className="inline-flex items-center justify-center border border-white/15 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 transition hover:border-white/40 hover:text-white"
                    >
                      Brand Story
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-14 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-3">
                <Metric value="01" label="Private showroom model" />
                <Metric value="18k" label="Recycled gold narrative" />
                <Metric value="4 pages" label="Tight luxury site architecture" />
              </div>
            </div>

            <div className="relative mt-10 min-h-[620px] border-l-0 border-white/10 lg:mt-0 lg:border-l">
              <HeroArt />
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Positioning
              </p>
              <h2 className="mt-4 max-w-md font-serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#f3efe8] sm:text-4xl">
                Not decorative.
                <br />
                Directional.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-8 text-white/64">
                The brand language rejects obvious opulence in favour of tension,
                proportion, surface, and stillness. This is jewellery styled as
                an object of power rather than sentimentality.
              </p>
              <p className="text-sm leading-8 text-white/64">
                The homepage is structured more like an editorial launch than a
                standard ecommerce landing page: cinematic introduction, concise
                identity system, selective product framing, and high-trust
                service cues.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-10 lg:py-24">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Collections
                </p>
                <h2 className="mt-4 font-serif text-3xl uppercase tracking-[-0.04em] text-[#f3efe8] sm:text-5xl">
                  Three worlds. One signature.
                </h2>
              </div>
              <Link
                href="/demo/jeweller/collections"
                className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
              >
                Explore all
              </Link>
            </div>

            <div className="grid gap-px bg-white/10 lg:grid-cols-3">
              {collections.map((item, index) => (
                <article
                  key={item.name}
                  className="group relative min-h-[420px] overflow-hidden bg-[#0b0b0d]"
                >
                  <div
                    className={`absolute inset-0 opacity-80 transition duration-700 group-hover:scale-[1.03] ${
                      index === 0
                        ? "bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,#18181b_0%,#08080a_100%)]"
                        : index === 1
                          ? "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_18%),linear-gradient(180deg,#d8d0c4_0%,#9d9181_42%,#151518_100%)]"
                          : "bg-[radial-gradient(circle_at_60%_25%,rgba(214,185,124,0.14),transparent_18%),linear-gradient(180deg,#2b241c_0%,#0b0b0d_100%)]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] opacity-0 transition duration-700 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                        {item.subtitle}
                      </span>
                      <span className="text-white/30 transition group-hover:text-white/70">
                        ↗
                      </span>
                    </div>

                    <div>
                      <h3 className="max-w-xs font-serif text-4xl uppercase leading-none tracking-[-0.05em] text-[#f6f2eb] sm:text-5xl">
                        {item.name}
                      </h3>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-px bg-white/10 px-5 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
            <div className="bg-[#111114] p-8 sm:p-10 lg:p-14">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Craft
              </p>
              <h2 className="mt-5 max-w-lg font-serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#f3efe8] sm:text-5xl">
                Built with the discipline of a fashion atelier.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-white/66">
                AURELITH is imagined as a house where every decision—metal tone,
                stone calibration, polish level, comfort curve, clasp weight,
                and final presentation—exists to support a singular emotional
                impression: controlled intensity.
              </p>

              <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                <InfoBlock
                  title="Material language"
                  text="18k recycled gold, platinum-toned settings, and conflict-conscious fictional sourcing narrative."
                />
                <InfoBlock
                  title="Finish standard"
                  text="Mirror, brushed, and shadow-polished treatments selected for how they hold light in motion."
                />
                <InfoBlock
                  title="Service posture"
                  text="Private appointment-led consultation for bridal, gifting, collectors, and bespoke enquiries."
                />
                <InfoBlock
                  title="Presentation"
                  text="Architectural packaging, restrained wrapping, and tactile details that elevate receipt into ritual."
                />
              </div>
            </div>

            <div className="relative min-h-[620px] bg-[#09090b]">
              <EditorialShowcase />
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-10 lg:py-24">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Featured pieces
                </p>
                <h2 className="mt-4 font-serif text-3xl uppercase tracking-[-0.04em] text-[#f3efe8] sm:text-5xl">
                  Signature forms
                </h2>
              </div>
              <Link
                href="/demo/jeweller/collections"
                className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
              >
                Shop the edit
              </Link>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className="group bg-[#0d0d10] transition hover:bg-[#111115]"
                >
                  <div className="p-4">
                    <div
                      className={`relative aspect-[0.9/1] overflow-hidden border border-white/10 ${
                        index === 0
                          ? "bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,#151518_0%,#050507_100%)]"
                          : index === 1
                            ? "bg-[radial-gradient(circle_at_55%_20%,rgba(255,255,255,0.12),transparent_15%),linear-gradient(180deg,#cabfad_0%,#8f8273_40%,#111114_100%)]"
                            : index === 2
                              ? "bg-[radial-gradient(circle_at_60%_25%,rgba(214,185,124,0.12),transparent_18%),linear-gradient(180deg,#2a241d_0%,#070709_100%)]"
                              : "bg-[radial-gradient(circle_at_40%_18%,rgba(255,255,255,0.12),transparent_17%),linear-gradient(180deg,#d9d5cf_0%,#938778_45%,#0d0d10_100%)]"
                      }`}
                    >
                      <div className="absolute inset-[15%_18%_20%_18%] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
                      <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.06)_50%,transparent_65%)] opacity-0 transition duration-700 group-hover:opacity-100" />
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <div className="text-[10px] uppercase tracking-[0.32em] text-white/38">
                      {product.type}
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="max-w-[12rem] font-serif text-2xl uppercase leading-tight tracking-[-0.04em] text-[#f4f0e9]">
                        {product.name}
                      </h3>
                      <span className="pt-1 text-sm text-white/72">
                        {product.price}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <Link
                        href="/demo/jeweller/product/seraph-collar"
                        className="text-[11px] uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                      >
                        View piece
                      </Link>
                      <button
                        className="text-[11px] uppercase tracking-[0.28em] text-white/45 transition hover:text-white"
                        type="button"
                      >
                        Add to bag
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-px bg-white/10 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
            <div className="bg-[#0d0d10] p-8 sm:p-10 lg:p-14">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Social proof
              </p>
              <h2 className="mt-5 max-w-xl font-serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#f3efe8] sm:text-5xl">
                Credibility, without shouting.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-white/66">
                The brand is fictional, but the experience is designed to feel
                credible: emotionally precise copy, luxury pacing, service cues,
                and a visual system that suggests confidence rather than excess.
              </p>

              <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
                {testimonials.map((item) => (
                  <blockquote key={item.author} className="bg-black p-6">
                    <p className="text-lg leading-8 text-[#f3efe8]">
                      “{item.quote}”
                    </p>
                    <footer className="mt-8">
                      <div className="text-sm text-white/80">{item.author}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/40">
                        {item.role}
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#141418] p-8 sm:p-10 lg:p-14">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Appointment
                </p>
                <h3 className="mt-5 max-w-md font-serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#f3efe8] sm:text-4xl">
                  Enter the showroom by invitation.
                </h3>
                <p className="mt-6 max-w-md text-sm leading-8 text-white/66">
                  For private viewing, bridal selection, gifting, or bespoke
                  enquiries, the house offers an appointment-led experience with
                  refined guidance and discreet presentation.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/demo/jeweller/contact"
                  className="inline-flex items-center justify-center border border-white bg-white px-6 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition hover:bg-transparent hover:text-white"
                >
                  Book appointment
                </Link>
                <Link
                  href="/demo/jeweller/contact"
                  className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  Bespoke enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#08080a]">
          <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr] lg:px-10 lg:py-16">
            <div>
              <div className="font-serif text-3xl uppercase tracking-[0.18em] text-[#f3efe8]">
                AURELITH
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                A fictional luxury jewellery house created for an elevated,
                agency-grade demo experience.
              </p>
            </div>

            <FooterNav
              title="Navigate"
              items={[
                ["Home", "/demo/jeweller"],
                ["Collections", "/demo/jeweller/collections"],
                ["About", "/demo/jeweller/about"],
                ["Contact", "/demo/jeweller/contact"],
              ]}
            />

            <FooterNav
              title="Services"
              items={[
                ["Private appointments", "/demo/jeweller/contact"],
                ["Bespoke", "/demo/jeweller/contact"],
                ["Bridal guidance", "/demo/jeweller/contact"],
                ["Care", "/demo/jeweller/contact"],
              ]}
            />

            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Showroom
              </div>
              <p className="mt-5 text-sm leading-7 text-white/55">
                19 Sable Court
                <br />
                Mayfair, London
                <br />
                By private appointment
              </p>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-4 text-[10px] uppercase tracking-[0.28em] text-white/30 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <span>Demo brand only</span>
              <span>Original fictional identity</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <Link
          href="/demo/jeweller"
          className="font-serif text-xl uppercase tracking-[0.22em] text-[#f3efe8]"
        >
          AURELITH
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/demo/jeweller/collections"
            className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
          >
            Collections
          </Link>
          <Link
            href="/demo/jeweller/about"
            className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/demo/jeweller/contact"
            className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/demo/jeweller/contact"
          className="border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-white/80 transition hover:border-white/35 hover:text-white"
        >
          Appointment
        </Link>
      </div>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="relative h-full min-h-[620px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_22%,rgba(255,255,255,0.12),transparent_15%),radial-gradient(circle_at_52%_48%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,#111114_0%,#08080a_100%)]" />

      <div className="absolute left-[10%] top-[8%] h-[78%] w-[58%] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <div className="absolute right-[8%] top-[18%] h-[64%] w-[34%] border border-white/10 bg-black/30 backdrop-blur-[2px]" />

      <div className="absolute left-[18%] top-[16%] h-[58%] w-[46%] rounded-[48%_48%_38%_38%/20%_20%_30%_30%] border border-white/10 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.18),transparent_12%),linear-gradient(180deg,#2a2a2f_0%,#0a0a0c_100%)] shadow-[0_0_80px_rgba(255,255,255,0.03)]" />

      <div className="absolute left-[31%] top-[24%] h-[15%] w-[21%] rounded-full border border-[#d7c7a0]/20 bg-[radial-gradient(circle,rgba(255,255,255,0.45),rgba(212,190,140,0.18)_42%,transparent_70%)] blur-[1px]" />

      <div className="absolute bottom-[12%] left-[8%] max-w-[15rem] border-l border-white/15 pl-4">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
          Campaign note
        </p>
        <p className="mt-3 text-sm leading-7 text-white/58">
          A silhouette-led hero composition designed to suggest couture styling,
          not stock ecommerce photography.
        </p>
      </div>
    </div>
  );
}

function EditorialShowcase() {
  return (
    <div className="relative h-full min-h-[620px] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0d_0%,#111115_100%)]" />
      <div className="absolute left-[10%] top-[10%] h-[38%] w-[32%] border border-white/10 bg-[linear-gradient(180deg,#1a1a1f_0%,#0a0a0d_100%)]" />
      <div className="absolute left-[46%] top-[10%] h-[60%] w-[42%] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.1),transparent_16%),linear-gradient(180deg,#d9d0c3_0%,#918372_38%,#111115_100%)]" />
      <div className="absolute left-[14%] top-[54%] h-[28%] w-[28%] border border-white/10 bg-[linear-gradient(180deg,#1f1b17_0%,#0b0b0d_100%)]" />
      <div className="absolute left-[46%] top-[74%] w-[38%]">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/38">
          Atelier language
        </p>
        <p className="mt-3 text-sm leading-7 text-white/58">
          Strong geometry, negative space, and measured reflection create a more
          recognisable identity than generic luxury gradients and soft cards.
        </p>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl tracking-[-0.04em] text-[#f3efe8]">
        {value}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-white/40">
        {label}
      </div>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-black p-6">
      <div className="text-sm uppercase tracking-[0.18em] text-[#f1ede6]">
        {title}
      </div>
      <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function FooterNav({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
        {title}
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {items.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="text-sm text-white/55 transition hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Noise() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='8' cy='12' r='1'/%3E%3Ccircle cx='42' cy='90' r='1'/%3E%3Ccircle cx='88' cy='34' r='1'/%3E%3Ccircle cx='121' cy='71' r='1'/%3E%3Ccircle cx='67' cy='121' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
    />
  );
}

function AmbientLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-[7%] top-0 h-full w-px bg-white/6" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
      <div className="absolute right-[8%] top-0 h-full w-px bg-white/6" />
      <div className="absolute top-[22%] h-px w-full bg-white/5" />
      <div className="absolute bottom-[18%] h-px w-full bg-white/5" />
    </div>
  );
}
