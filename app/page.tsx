import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D4ED8] text-white font-semibold">
            Cw
          </div>
          <span className="text-sm font-semibold tracking-tight">
            CleanWebsites
          </span>
          <span className="ml-2 rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600">
            UK • 24h builds
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a className="hover:text-zinc-900" href="#work">
            Demos
          </a>
          <a className="hover:text-zinc-900" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-zinc-900" href="#process">
            Process
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#work"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 md:inline-flex"
          >
            View demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30"
          >
            Start my 24h build
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1CC3D9]" />
              Live in 24 hours (from content received)
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
              Clean, high-performance websites for UK local businesses.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
              Look established online — fast. Minimal, mobile-first design with a
              clear structure that turns visitors into enquiries.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1D4ED8] px-6 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30"
              >
                Get your website live
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
              >
                View demos
              </a>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 text-sm text-zinc-600 sm:grid-cols-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-zinc-900 font-semibold">Mobile-first</div>
                <div className="mt-1">Responsive UI</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-zinc-900 font-semibold">Fast</div>
                <div className="mt-1">Optimised build</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-zinc-900 font-semibold">SEO-ready</div>
                <div className="mt-1">Clean structure</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-zinc-900 font-semibold">Simple</div>
                <div className="mt-1">No nonsense</div>
              </div>
            </div>
          </div>

          {/* Preview card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-[#1D4ED8]/10 to-[#1CC3D9]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="text-xs font-medium text-zinc-600">
                  Demo preview
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#1D4ED8]/10 ring-1 ring-[#1D4ED8]/15" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Your Business Name
                      </div>
                      <div className="text-xs text-zinc-600">
                        Birmingham • Local services
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#1CC3D9]/10 px-3 py-1 text-xs font-semibold text-[#0E7490] ring-1 ring-[#1CC3D9]/20">
                    Enquiries ready
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="h-28 rounded-2xl bg-zinc-100" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-2xl bg-zinc-100" />
                    <div className="h-20 rounded-2xl bg-zinc-100" />
                    <div className="h-20 rounded-2xl bg-zinc-100" />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-sm font-semibold text-zinc-900">
                    Quick contact
                  </div>
                  <div className="mt-3 grid gap-2">
                    <div className="h-10 rounded-xl bg-zinc-100" />
                    <div className="h-10 rounded-xl bg-zinc-100" />
                    <div className="mt-2 h-10 rounded-xl bg-[#1D4ED8] opacity-90" />
                  </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-zinc-500">
                  You get a clean layout like this, fully responsive, with your
                  branding, pages, and enquiry flow — deployed and ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="mt-14 rounded-[28px] border border-zinc-200 bg-zinc-50 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-semibold text-zinc-900">
                Built to load fast
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Clean structure and modern hosting so your site feels instant.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-semibold text-zinc-900">
                Designed for trust
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Minimal, professional layouts that make your business look
                established.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-semibold text-zinc-900">
                Easy handover
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                You get a live site link and simple instructions for future
                updates.
              </p>
            </div>
          </div>
        </section>

        {/* Work / Demos */}
        <section id="work" className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Demos
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                Same clean foundation — tailored per business. These can be
                deployed as live demos.
              </p>
            </div>
            <div className="hidden text-sm text-zinc-500 md:block">
              Want yours to look like this?{" "}
              <a
                className="font-semibold text-[#1D4ED8] hover:underline"
                href="#contact"
              >
                Start now
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Barber / Salon", tag: "Gallery + booking link" },
              { title: "Trades", tag: "Services + quote form" },
              { title: "Food / Takeaway", tag: "Menu + directions" },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="h-36 rounded-2xl bg-zinc-100" />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-zinc-900">
                    {card.title}
                  </div>
                  <span className="rounded-full bg-[#1CC3D9]/10 px-2.5 py-1 text-xs font-semibold text-[#0E7490] ring-1 ring-[#1CC3D9]/20">
                    Demo
                  </span>
                </div>
                <div className="mt-2 text-sm text-zinc-600">{card.tag}</div>
                <div className="mt-4 text-sm font-semibold text-[#1D4ED8]">
                  View demo →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Pricing
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Simple, clear pricing. No retainers. No fluff.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Launch Package
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Perfect for most local businesses.
                  </div>
                </div>
                <span className="rounded-full bg-[#1CC3D9]/10 px-3 py-1 text-xs font-semibold text-[#0E7490] ring-1 ring-[#1CC3D9]/20">
                  Most popular
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <div className="text-4xl font-semibold tracking-tight text-zinc-900">
                  £595
                </div>
                <div className="text-sm text-zinc-600">one-time</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {[
                  "3–5 pages (Home, About, Services, Gallery, Contact)",
                  "Mobile-first design",
                  "Contact / enquiry form",
                  "Google Maps embed",
                  "SEO-ready page structure",
                  "Live in 24 hours (from content received)",
                  "1 revision included",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#1D4ED8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#1D4ED8] px-6 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30"
              >
                Start my 24h build
              </a>

              <p className="mt-3 text-xs leading-5 text-zinc-500">
                Tip: if you have content ready (logo, services, address, photos),
                you’ll get the fastest turnaround.
              </p>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-7">
              <div className="text-sm font-semibold text-zinc-900">
                Optional add-ons
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Keep the base clean. Add what you actually need.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  { name: "Extra page", price: "£100" },
                  { name: "Booking integration", price: "£150" },
                  { name: "SEO optimisation", price: "£250" },
                  { name: "Copy polish (tight + professional)", price: "£150" },
                  { name: "Ongoing edits plan", price: "£49/mo" },
                ].map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4"
                  >
                    <div className="text-sm font-medium text-zinc-900">
                      {a.name}
                    </div>
                    <div className="text-sm font-semibold text-zinc-700">
                      {a.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="text-sm font-semibold text-zinc-900">
                  Good to know
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  This is about speed + credibility. If you need something
                  complex (custom systems, heavy SEO campaigns), that’s a
                  separate scope.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Process
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Simple. Fast. Minimal back-and-forth.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Send your details",
                desc: "Logo, address, services, photos, social links.",
              },
              {
                step: "2",
                title: "We build in 24 hours",
                desc: "Clean layout, pages, and enquiry flow.",
              },
              {
                step: "3",
                title: "Quick review",
                desc: "One revision included to tighten it up.",
              },
              {
                step: "4",
                title: "Go live",
                desc: "Deployed and ready to share everywhere.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1D4ED8]/10 text-sm font-semibold text-[#1D4ED8] ring-1 ring-[#1D4ED8]/15">
                    {s.step}
                  </div>
                  <div className="text-sm font-semibold text-zinc-900">
                    {s.title}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-20 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Get your website live in 24 hours.
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Send your details and I’ll reply with next steps. No long calls,
                no fluff.
              </p>

              <form className="mt-6 grid gap-3">
                <input
                  className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
                  placeholder="Business name"
                />
                <input
                  className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
                  placeholder="Email"
                />
                <input
                  className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
                  placeholder="City (e.g. Birmingham)"
                />
                <textarea
                  className="min-h-[110px] rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1CC3D9]/25"
                  placeholder="What do you do, and what pages do you need? (Home / Services / Gallery / Contact etc.)"
                />
                <button
                  type="button"
                  className="mt-1 inline-flex h-12 items-center justify-center rounded-xl bg-[#1D4ED8] px-6 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30"
                >
                  Send enquiry
                </button>
                <p className="text-xs leading-5 text-zinc-500">
                  Note: this form is currently UI-only. You can wire it to email,
                  Supabase, or a form provider next.
                </p>
              </form>
            </div>

            <div className="relative bg-zinc-50 p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/10 to-[#1CC3D9]/10" />
              <div className="relative rounded-[28px] border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  What you’ll send
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  {[
                    "Logo (or business name)",
                    "Services + prices (if you have them)",
                    "Address + phone number",
                    "A few photos (or I can use clean placeholders)",
                    "Social links (Instagram, TikTok, etc.)",
                  ].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1CC3D9]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="text-sm font-semibold text-zinc-900">
                    Delivery promise
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    24 hours starts once content is received. You get a live link
                    to review, then we do one tidy revision before launch.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5">
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">
                      Support
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Email-based, quick replies.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#1D4ED8]/10 px-3 py-2 text-sm font-semibold text-[#1D4ED8] ring-1 ring-[#1D4ED8]/15">
                    Clean
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 py-10 text-sm text-zinc-600 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">CleanWebsites</span>
            <span className="text-zinc-400">•</span>
            <span>UK</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-zinc-900" href="#work">
              Demos
            </a>
            <a className="hover:text-zinc-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-zinc-900" href="#process">
              Process
            </a>
            <a className="font-semibold text-[#1D4ED8] hover:underline" href="#contact">
              Start
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
