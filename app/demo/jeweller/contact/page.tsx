import Link from "next/link";

const contactMethods = [
  {
    title: "Appointments",
    text: "Private consultations for bridal, bespoke commissions, and in-person viewing.",
  },
  {
    title: "General enquiries",
    text: "Questions about availability, gifting, sizing, delivery, and collection guidance.",
  },
  {
    title: "Bespoke requests",
    text: "A tailored process for engagement rings, milestone pieces, and one-off commissions.",
  },
];

const serviceNotes = [
  "Private showroom consultations",
  "Engagement & bridal guidance",
  "Bespoke design enquiries",
  "Sizing and aftercare support",
];

export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#111]">
      <Header />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1300px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
              Contact
            </p>
            <h1 className="mt-4 max-w-[18ch] font-serif text-[2.4rem] leading-[1.05] tracking-[-0.035em] sm:text-[3.2rem] lg:text-[4.3rem]">
              Arrange an appointment or contact the showroom.
            </h1>
            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-black/66 sm:text-[15px]">
              For bridal consultations, bespoke commissions, gifting guidance,
              or general jewellery enquiries, the house offers an appointment-led
              service designed to feel calm, direct, and well considered.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-6">
            <div className="border border-black/10 bg-white p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Showroom
              </p>
              <h2 className="mt-4 font-serif text-[1.8rem] leading-tight">
                Visit by appointment
              </h2>
              <div className="mt-5 space-y-4 text-[14px] leading-7 text-black/66 sm:text-[15px]">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Address
                  </div>
                  <div className="mt-1">Example Street</div>
                  <div>Example District</div>
                  <div>London</div>
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
                  <div className="mt-1">Monday – Saturday</div>
                  <div>By appointment only</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {contactMethods.map((item) => (
                <div key={item.title} className="border border-black/10 bg-white p-5">
                  <h3 className="font-serif text-[1.25rem] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/64">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
              Enquiry form
            </p>
            <h2 className="mt-4 font-serif text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.4rem]">
              Tell us what you’re looking for.
            </h2>
            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-black/66 sm:text-[15px]">
              Share details about the piece, occasion, timeline, or service you
              need and the showroom will respond with the most suitable next step.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name">
                  <input
                    type="text"
                    className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30"
                    placeholder="First name"
                  />
                </Field>

                <Field label="Last name">
                  <input
                    type="text"
                    className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30"
                    placeholder="Last name"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    type="email"
                    className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30"
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Phone">
                  <input
                    type="tel"
                    className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30"
                    placeholder="020 0000 0000"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Enquiry type">
                  <select className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30">
                    <option>General enquiry</option>
                    <option>Appointment request</option>
                    <option>Engagement & bridal</option>
                    <option>Bespoke commission</option>
                    <option>Aftercare</option>
                  </select>
                </Field>

                <Field label="Preferred contact">
                  <select className="w-full border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30">
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  rows={6}
                  className="w-full resize-none border border-black/10 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-black/30"
                  placeholder="Tell us about the piece, occasion, or appointment you would like to arrange."
                />
              </Field>

              <div className="flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-xs leading-6 text-black/50">
                  By submitting this form you are requesting contact from the
                  showroom regarding your enquiry or appointment.
                </p>

                <button
                  type="submit"
                  className="border border-black bg-black px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition hover:bg-black/90"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#efede8]">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/50">
                Visiting the showroom
              </p>
              <h2 className="mt-4 max-w-[15ch] font-serif text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.5rem]">
                A quieter setting for a more considered appointment.
              </h2>
              <p className="mt-5 max-w-lg text-[14px] leading-7 text-black/66 sm:text-[15px]">
                The showroom is designed for focused consultations, whether you
                are choosing an engagement ring, discussing a bespoke piece, or
                exploring the collection in person.
              </p>

              <div className="mt-8 grid gap-3">
                {serviceNotes.map((item) => (
                  <div
                    key={item}
                    className="border border-black/10 bg-white px-4 py-3 text-sm text-black/68"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <MapPlaceholder />
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl">
                Prefer to start with the collection?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Browse rings, necklaces, bracelets, and earrings before arranging
                a visit or sending a more detailed enquiry.
              </p>
            </div>

            <Link
              href="/demo/jeweller/collections"
              className="border border-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
            >
              View Collections
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-black/45">
        {label}
      </span>
      {children}
    </label>
  );
}

function MapPlaceholder() {
  return (
    <div className="overflow-hidden border border-black/10 bg-white">
      <div className="relative h-[440px] w-full bg-[linear-gradient(180deg,#f6f4ef_0%,#ece7dc_100%)]">
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
