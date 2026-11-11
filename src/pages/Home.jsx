import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import QualitySplit from "../components/QualitySplit";
import BigImageBanner from "../components/BigImageBanner";
import AboutTeaser from "../components/AboutTeaser";
import Features from "../components/Features";
import Services from "../components/Services";
import ProjectGallery from "../components/ProjectGallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ExpandingGallery from "../components/ExpandingGallery";
import BuildJourney from "../components/BuildJourney";
import WordBand from "../components/WordBand";
import ImageMarquee from "../components/ImageMarquee";
import CostEstimator from "../components/CostEstimator";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import MapSection from "../components/MapSection";
import TrustStrip from "../components/TrustStrip";
import MaterialsBand from "../components/MaterialsBand";
import QuickContact from "../components/QuickContact";
import FAQ from "../components/FAQ";
import { useQuote } from "../context/QuoteContext";
import { waLink } from "../config/site";
import { WaIcon } from "../components/FloatingWhatsApp";

const Home = () => {
  const { openQuote } = useQuote();
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />

      <TrustStrip />
      <QualitySplit />

      <Features />

      <BigImageBanner />

      <AboutTeaser />

      <WordBand />

      <Services limit={4} />

      <ExpandingGallery />

      <ImageMarquee />

      <MaterialsBand />

      <BuildJourney />

      <CostEstimator />

      <BeforeAfterSlider />

      <ProjectGallery />

      <Testimonials />

      <FAQ />

      <QuickContact />

      <section className="bg-amber py-16 overflow-hidden">
        <Reveal className="container-px flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-ink max-w-xl">
            Ready to transform your space?
          </h2>
          <div className="flex flex-wrap gap-3">
            <button onClick={openQuote} className="btn-dark animate-soft-pulse">
              Get a free quote <span aria-hidden>&rarr;</span>
            </button>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md text-sm font-semibold hover:brightness-110 transition">
              <WaIcon size={18} /> WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>

      <MapSection />

      <Footer />
    </>
  );
};

export default Home;
