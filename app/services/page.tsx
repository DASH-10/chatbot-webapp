// Service list used to render the cards.
const services = [
  {
    title: "Strategy & positioning",
    description:
      "Clarify your value props, ICP, and messaging before you ship campaigns.",
    deliverables: ["Messaging guide", "ICP profiles", "Landing copy draft"],
  },
  {
    title: "Site build & launch",
    description:
      "We set up your Next.js marketing site, Tailwind styling, and deployment pipeline.",
    deliverables: ["Pages & routing", "Analytics wiring", "SEO basics"],
  },
  {
    title: "AI concierge setup",
    description:
      "We connect a local Llama model via /api/chat and tailor the prompt to your product.",
    deliverables: ["Prompt crafting", "Safety checks", "Test scenarios"],
  },
  {
    title: "Ongoing iteration",
    description:
      "Ship improvements weekly, refine the chatbot answers, and run experiments.",
    deliverables: ["A/B ideas", "Content refresh", "Performance tuning"],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page header */}
      <header className="space-y-3">
        <p className="pill text-xs text-slate-200 bg-white/5 w-fit">
          Services
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Everything you need to launch fast—and keep improving.
        </h1>
        <p className="text-slate-300 max-w-3xl">
          We start with clarity, ship a clean site, plug in the AI concierge, and
          keep iterating with you. The stack is modern, maintainable, and
          production-ready.
        </p>
      </header>

      {/* Service cards */}
      <div className="section-grid">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass rounded-2xl border border-white/10 px-5 py-6 space-y-3"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">{service.title}</p>
              <span className="pill text-[11px] text-slate-200 bg-white/5">
                Included
              </span>
            </div>
            <p className="text-slate-300">{service.description}</p>
            <ul className="space-y-2 text-sm text-slate-200">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
