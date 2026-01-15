// Helper to format prices (Turkish lira).
const formatPrice = (price: number) => `₺${price}`;

// Menu data grouped by category.
const menu = [
  {
    category: "Sandwiches",
    items: [
      { name: "Chicken Shawarma", price: 185, desc: "Garlic sauce, pickles, fresh lavash." },
      { name: "Beef Shawarma", price: 210, desc: "Slow-roasted beef, tahini, tomatoes." },
      { name: "Doner", price: 195, desc: "Classic döner with sumac onions and tomato." },
      { name: "Falafel", price: 165, desc: "Crispy chickpea fritters with tahini." },
    ],
  },
  {
    category: "Plates",
    items: [
      { name: "Iskender", price: 275, desc: "Döner over toasted bread, tomato butter, yogurt." },
      { name: "Adana", price: 255, desc: "Spiced minced lamb skewer with lavash." },
      { name: "Mixed Grill", price: 325, desc: "Lamb, chicken, köfte, and veggies." },
      { name: "Chicken Shish", price: 235, desc: "Marinated chicken cubes over charcoal." },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", price: 70, desc: "Crispy, lightly salted." },
      { name: "Rice", price: 70, desc: "Fluffy pilaf with butter." },
      { name: "Hummus", price: 95, desc: "Creamy chickpeas, tahini, olive oil." },
      { name: "Salad", price: 85, desc: "Fresh greens, lemon, olive oil." },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Ayran", price: 55, desc: "Cold yogurt drink." },
      { name: "Turkish Tea", price: 35, desc: "Traditional black tea." },
      { name: "Cola", price: 45, desc: "Chilled, bottled." },
      { name: "Water", price: 30, desc: "Still water." },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* Menu page intro */}
      <header className="space-y-3">
        <div className="pill w-fit">Menu</div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Fresh off the grill, ready to enjoy.
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Shawarma, kebabs, mezze, and sides prepared daily. Prices in Turkish lira.
        </p>
      </header>

      {/* Menu cards by category */}
      <div className="grid gap-6 md:grid-cols-2">
        {menu.map((section) => (
          <div
            key={section.category}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-6 space-y-3 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">{section.category}</p>
              <span className="text-xs uppercase tracking-wide text-brand-700 font-semibold">
                Popular
              </span>
            </div>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                  <p className="text-sm font-semibold text-brand-700 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


