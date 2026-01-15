import Link from "next/link";

// Content data for the homepage sections.

const specials = [
  { title: "Chicken Shawarma Plate", description: "Marinated chicken, garlic sauce, salad, and fluffy rice." },
  { title: "Adana Kebab", description: "Spiced minced lamb grilled over charcoal, served with lavash." },
  { title: "Iskender Kebab", description: "Tender döner over toasted bread with tomato butter and yogurt." },
];

// Short reasons used in the "Why us" list.
const whyUs = [
  "Fresh ingredients daily",
  "Halal options always",
  "Fast, friendly service",
  "Comfortable family seating",
];

// Sample guest reviews shown on the landing page.
const reviews = [
  { name: "Elif", text: "Best shawarma in town! The meat is juicy and the sauces are amazing." },
  { name: "Ahmet", text: "Adana was perfectly spiced. Quick service and warm hospitality." },
  { name: "Meryem", text: "Love the family seating and fresh salads. Great place to bring friends." },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Hero section */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <div className="pill w-fit">Omar&apos;s Kebab House</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Authentic Kebab & Shawarma
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            Grilled over charcoal, served with fresh salads and warm bread. Enjoy the flavors of Turkey in a bright, family-friendly space.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 transition"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 hover:border-brand-400 hover:text-brand-800 transition"
            >
              Reserve / Call
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-xl">
            {[
              { label: "Shawarma", value: "Signature marinades" },
              { label: "Halal", value: "Always available" },
              { label: "Service", value: "Fast & friendly" },
              { label: "Seating", value: "Family ready" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
              >
                <p className="text-xs text-slate-500">{stat.label}</p>
                <p className="text-sm font-semibold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder visual card */}
        <div className="glass p-6">
          <div className="h-full rounded-xl bg-gradient-to-br from-rose-100 via-white to-rose-50 border border-rose-100 flex items-center justify-center text-center px-6 py-10">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-brand-700 font-semibold">
                Fresh off the grill
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                Kebabs, shawarma, and mezze made with love.
              </p>
              <p className="text-slate-600 text-sm">
                Placeholder visual — replace with mouthwatering photos when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specials grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="pill mb-3">Specials</p>
            <h2 className="text-3xl font-semibold text-slate-900">Today&apos;s favorites</h2>
            <p className="text-slate-600 mt-2 max-w-3xl">
              Charcoal-grilled kebabs, slow-roasted shawarma, and plates to share.
            </p>
          </div>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            View full menu →
          </Link>
        </div>
        <div className="section-grid">
          {specials.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-2 shadow-sm"
            >
              <div className="h-28 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-100 mb-3" />
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us list */}
      <section className="space-y-6">
        <p className="pill w-fit">Why us</p>
        <h2 className="text-3xl font-semibold text-slate-900">A bright, welcoming kebab house</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {whyUs.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
            >
              <span className="h-3 w-3 rounded-full bg-brand-600" />
              <p className="text-slate-800 font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="space-y-6">
        <p className="pill w-fit">Reviews</p>
        <h2 className="text-3xl font-semibold text-slate-900">Guests love our flavors</h2>
        <div className="section-grid">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-100 text-brand-700 flex items-center justify-center font-semibold">
                  {review.name[0]}
                </div>
                <p className="font-semibold text-slate-900">{review.name}</p>
              </div>
              <p className="text-slate-600">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="glass px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between border border-rose-100">
        <div className="space-y-3">
          <p className="pill w-fit">Visit us</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Warm hospitality, fresh grills, every day.
          </h3>
          <p className="text-slate-600 max-w-2xl">
            Stop by for a quick shawarma, a family dinner, or a mixed grill platter to share.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:bg-brand-700 transition"
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 hover:border-brand-400 hover:text-brand-800 transition"
          >
            Reserve / Call
          </Link>
        </div>
      </section>
    </div>
  );
}

