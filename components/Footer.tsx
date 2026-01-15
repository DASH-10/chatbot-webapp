export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main footer content with three columns */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold text-slate-900">Omar&apos;s Kebab House</p>
          <p className="text-slate-600 mt-2">
            Authentic kebab and shawarma served fresh daily with warm hospitality.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Visit</p>
          <p className="text-slate-600">123 Spice Street, Istanbul</p>
          <p className="text-slate-600">Open daily 11:00 – 23:30</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Contact</p>
          <p className="text-slate-600">Phone: +90 555 123 4567</p>
          <p className="text-slate-600">WhatsApp: +90 555 123 4567</p>
        </div>
      </div>
      {/* Tiny copyright line */}
      <div className="text-center text-xs text-slate-500 pb-6">
        © {new Date().getFullYear()} Omar&apos;s Kebab House. All rights reserved.
      </div>
    </footer>
  );
}
