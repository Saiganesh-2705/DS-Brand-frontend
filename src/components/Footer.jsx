import { Link } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";
import useInView from "../hooks/useInView";
import { SITE, waLink, telLink, mapsSearch } from "../config/site";
import { WaIcon } from "./FloatingWhatsApp";

const explore = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

// Rooftop skyline: x, width, wall height, roof rise, delay
const houses = [
  [10, 90, 50, 34, 0.0], [120, 70, 78, 30, 0.15], [210, 110, 44, 40, 0.3], [340, 80, 96, 34, 0.1],
  [440, 100, 60, 38, 0.4], [560, 70, 110, 28, 0.2], [650, 120, 52, 42, 0.5], [790, 84, 84, 32, 0.35],
  [890, 96, 66, 36, 0.25], [1000, 76, 100, 30, 0.45], [1096, 94, 56, 36, 0.05],
];

const Skyline = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const ground = 230;
  return (
    <div ref={ref} className={`sky ${inView ? "in" : ""} relative`} aria-hidden>
      <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMax slice" className="w-full block aspect-[5/1] min-h-[170px]">
        {houses.map(([x, w, h, rise, d], i) => (
          <g key={i} className="sky-b" style={{ "--d": `${d}s` }}>
            <rect x={x} y={ground - h} width={w} height={h} fill="#232323" />
            {/* roof */}
            <polygon points={`${x - 6},${ground - h} ${x + w / 2},${ground - h - rise} ${x + w + 6},${ground - h}`} fill="#2e2e2e" stroke="#F5B400" strokeWidth="1.5" />
            {Array.from({ length: Math.max(2, Math.floor(w / 18)) }).map((_, k) => {
              const rx = x - 6 + ((k + 1) * (w + 12)) / (Math.max(2, Math.floor(w / 18)) + 1);
              return <line key={k} x1={rx} y1={ground - h} x2={x + w / 2 + (rx - (x + w / 2)) * 0.1} y2={ground - h - rise + 3} stroke="#F5B400" strokeOpacity="0.35" strokeWidth="1" />;
            })}
            {Array.from({ length: Math.max(0, Math.floor(h / 28)) }).map((_, r) =>
              [0, 1].map((c) => (
                <rect key={`${r}-${c}`} className="sky-w" x={x + 12 + c * (w / 2 - 6)} y={ground - h + 12 + r * 26} width="10" height="12" fill="#F5B400" style={{ "--d": `${(i * 0.7 + r * 0.9 + c * 1.3) % 5}s` }} />
              ))
            )}
          </g>
        ))}
        <rect x="0" y={ground} width="1200" height="3" fill="#F5B400" />
      </svg>
    </div>
  );
};

const Footer = () => {
  const { openQuote } = useQuote();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#141414] text-white/70 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative container-px pt-20 pb-14 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
        <div>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl leading-[1.02] max-w-2xl">
            Dreaming of a new look
            <br />
            or a leak-proof roof?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={openQuote} className="btn-primary btn-shine !px-8 !py-4">
              Get a free quote <span aria-hidden>&rarr;</span>
            </button>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md text-sm font-semibold hover:brightness-110 transition">
              <WaIcon size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <p className="text-white/60 max-w-sm lg:ml-auto leading-relaxed">
          Share your space or roof size, budget and timeline. We reply within one working day with a clear scope and an itemised estimate.
        </p>
      </div>

      <div className="relative container-px grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-t border-white/10 pt-12">
        <div>
          <p className="text-white font-display text-lg">{SITE.name} - Visit us</p>
          <address className="not-italic text-sm mt-3 leading-relaxed">
            {SITE.address.map((l) => (<span key={l} className="block">{l}</span>))}
          </address>
          <a href={mapsSearch()} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-amber hover:underline">Get directions &rarr;</a>
        </div>

        <div>
          <p className="text-white font-display text-lg">Talk to us</p>
          <ul className="text-sm mt-3 space-y-2">
            {SITE.phones.map((p) => (
              <li key={p}><a href={telLink(p)} className="hover:text-amber transition-colors">{p}</a></li>
            ))}
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">WhatsApp: +{SITE.whatsapp.replace(/^(\d{2})(\d{5})(\d+)$/, "$1 $2 $3")}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-amber transition-colors">{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-display text-lg">Working hours</p>
          <ul className="text-sm mt-3 space-y-2">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 max-w-[240px]"><span>{h.days}</span><span className="text-white/90">{h.time}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-display text-lg">Explore</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-3 max-w-[260px]">
            {explore.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span className="w-0 group-hover:w-3 h-px bg-amber transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Skyline />

      <div className="relative bg-[#0c0c0c] container-px py-5 pb-24 md:pb-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-5">
          <p>&copy; {year} {SITE.name}. All rights reserved.</p>
          {Object.entries(SITE.social).filter(([, v]) => v).map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noreferrer" className="capitalize hover:text-white transition-colors">{k}</a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link to="/admin/login" className="hover:text-white transition-colors">Admin login</Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 hover:text-amber transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center group-hover:-translate-y-1 group-hover:border-amber transition-all duration-300">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
