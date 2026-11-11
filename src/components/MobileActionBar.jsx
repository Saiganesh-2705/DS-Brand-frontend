import { useLocation } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";
import { waLink, telLink } from "../config/site";
import { WaIcon } from "./FloatingWhatsApp";

/** Sticky Call / WhatsApp / Quote bar shown on phones only - where most local leads come from. */
const MobileActionBar = () => {
  const { pathname } = useLocation();
  const { openQuote } = useQuote();
  if (pathname.startsWith("/admin")) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-ink text-white text-xs font-semibold shadow-[0_-6px_24px_rgba(0,0,0,0.25)] pb-[env(safe-area-inset-bottom)]">
      <a href={telLink()} className="flex flex-col items-center gap-1 py-3 active:bg-white/10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 5a2 2 0 012-2h3.3a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6z" /></svg>
        Call
      </a>
      <a href={waLink()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 bg-[#25D366] text-white">
        <WaIcon size={20} /> WhatsApp
      </a>
      <button onClick={openQuote} className="flex flex-col items-center gap-1 py-3 bg-amber text-ink">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 7h6m-6 4h6m-7 8h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        Free Quote
      </button>
    </div>
  );
};

export default MobileActionBar;
