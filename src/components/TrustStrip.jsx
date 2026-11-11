import Reveal from "./Reveal";
import { SITE } from "../config/site";

const items = [
  { t: "Free site visit", d: "Measurement & advice at no cost", i: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" },
  { t: "Fixed, itemised quote", d: "No hidden charges later", i: "M9 7h6m-6 4h6m-7 8h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { t: "On-time handover", d: "Dated schedule in writing", i: "M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { t: `${SITE.stats.warranty}-year workmanship warranty`, d: "Backed by manufacturer warranties", i: "M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4" },
];

/** Four quick trust points directly under the hero / stats. */
const TrustStrip = () => (
  <section className="container-px -mt-2 py-10 md:py-14">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
      {items.map((x, i) => (
        <Reveal key={x.t} delay={i * 90}>
          <div className="group h-full bg-white border border-line rounded-2xl p-4 md:p-6 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber transition-all duration-300">
            <span className="w-11 h-11 rounded-xl bg-amber/15 text-ink flex items-center justify-center group-hover:bg-amber group-hover:rotate-6 transition-all duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={x.i} /></svg>
            </span>
            <h3 className="font-display font-bold text-base md:text-lg mt-4 leading-snug">{x.t}</h3>
            <p className="text-stone text-xs md:text-sm mt-1">{x.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
export default TrustStrip;
