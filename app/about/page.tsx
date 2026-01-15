// Short highlight cards used on the about page.
const highlights = [
  { title: "Family owned", body: "Our recipes come from generations of family kitchens." },
  { title: "Charcoal grilled", body: "We grill over real charcoal for authentic flavor." },
  { title: "Halal & fresh", body: "Halal meats, fresh produce, and house-made sauces." },
  { title: "Hospitality first", body: "Friendly service and comfortable seating for everyone." },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      {/* Page intro */}
      <header className="space-y-3">
        <div className="pill w-fit">About</div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          The heart of Omar&apos;s Kebab House
        </h1>
        <p className="text-slate-600 max-w-3xl">
          We bring the flavors of Turkey to your table with kebabs, shawarma, mezze, and warm hospitality.
          Every plate is grilled to order and served with care.
        </p>
      </header>

      {/* Story + details columns */}
      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-3 shadow-sm">
          <p className="text-lg font-semibold text-slate-900">Our story</p>
          <p className="text-slate-600">
            Omar&apos;s Kebab House started as a small family spot. Today we serve the community with
            tender meats, vibrant salads, and handmade breads. We keep it simple: fresh ingredients,
            great grills, and friendly service.
          </p>
          <p className="text-slate-600">
            Whether you crave a quick shawarma, a hearty Adana, or a mixed grill to share, our kitchen
            is ready from lunch to late evening.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white px-5 py-6 space-y-3">
          <p className="text-lg font-semibold text-slate-900">Taste the details</p>
          <ul className="space-y-2 text-slate-700">
            <li>• House-made marinades and sauces</li>
            <li>• Charcoal grilling for smoky flavor</li>
            <li>• Freshly baked bread and salads daily</li>
            <li>• Family-friendly seating and takeaway</li>
          </ul>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="section-grid">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-5 space-y-2 shadow-sm"
          >
            <p className="text-base font-semibold text-slate-900">{item.title}</p>
            <p className="text-slate-600">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
