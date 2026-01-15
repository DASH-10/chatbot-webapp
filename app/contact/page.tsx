export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* Page heading */}
      <header className="space-y-3">
        <div className="pill w-fit">Contact</div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Reserve, call, or drop by.
        </h1>
        <p className="text-slate-600 max-w-3xl">
          We&apos;re open daily for lunch and dinner. Call ahead or send a quick reservation request.
        </p>
      </header>

      {/* Two-column layout: form + contact info */}
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-4 shadow-sm">
          <p className="text-lg font-semibold text-slate-900">Reservation request</p>
          {/* This is a demo form; it does not submit yet */}
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-slate-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="+90 555 ..."
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm text-slate-700" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-700" htmlFor="time">
                  Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-700" htmlFor="guests">
                  Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="2"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 transition"
            >
              Send request
            </button>
            <p className="text-xs text-slate-500">
              This demo form doesn&apos;t submit yet. Call or WhatsApp for instant confirmation.
            </p>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-3 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Visit us</p>
            <p className="text-slate-700">123 Spice Street, Istanbul</p>
            <p className="text-slate-700">Open daily 11:00 – 23:30</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 transition"
                href="tel:+905551234567"
              >
                Call us
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:border-brand-400 hover:text-brand-800 transition"
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-2 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Map</p>
            <div className="h-48 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-100 flex items-center justify-center text-slate-600 text-sm">
              Map placeholder — embed Google Maps iframe here when ready.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
