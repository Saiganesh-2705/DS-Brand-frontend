// ONE place for brand + contact details. Edit here and the navbar, footer,
// contact page, WhatsApp buttons, quote popup, map and SEO data all update.
//
// >>> Replace every value marked CHANGE-ME with DS Brand's real details. <<<
export const SITE = {
  name: "DS Brand",
  fullName: "DS Brand Interior & Roofing Works",
  tagline: "Interior & Roofing Works",
  description:
    "DS Brand delivers modular interiors, false ceilings, wardrobes, kitchens and complete roofing works - metal sheet roofs, trusses, polycarbonate and waterproofing - with fixed quotes and on-time handover.",
  url: import.meta.env.VITE_SITE_URL || "https://dsbrand.vercel.app", // CHANGE-ME once you have your domain

  // Phone numbers shown on the site (first one is used for the call button)
  phones: ["+91 81227 65052"],
  // WhatsApp number: country code + number, digits only (no + or spaces)
  whatsapp: "918122765052",
  email: "hello@dsbrand.in", // CHANGE-ME

  shortLocation: "Kanchipuram, Tamil Nadu",
  address: ["25A, Veerakaliyamman Kovil Street", "Pillaiyarpalayam, Kanchipuram", "Tamil Nadu 631501"],
  postalCode: "631501",
  // Google Maps: open your business on Google Maps > Share > "Embed a map" > copy the src URL.
  // Until then the map is built from the address text above.
  mapEmbed: "",
  mapLink: "", // optional: your Google Maps "Share" link; falls back to a search on the address
  googleReviews: "", // optional: your Google review page link

  // Headline numbers shown on the home page. CHANGE-ME to your real figures.
  stats: { years: 10, projects: 300, clients: 250, warranty: 5 },

  serviceAreas: ["Kanchipuram", "Pillaiyarpalayam", "Sriperumbudur", "Walajabad", "Uthiramerur", "Chengalpattu", "Chennai"], // adjust to the areas you really serve

  social: {
    instagram: "", // e.g. https://instagram.com/dsbrand
    facebook: "",
    youtube: "",
  },

  hours: [{ days: "Monday - Sunday", time: "Open 24 hours" }],
  // Used by the "open now" badge. 0 = Sunday ... 6 = Saturday, hours in 24h IST.
  openHours: { 0: [0, 24], 1: [0, 24], 2: [0, 24], 3: [0, 24], 4: [0, 24], 5: [0, 24], 6: [0, 24] },

  // Indicative rates (Rs per sq ft) used by the cost estimator. Edit to your real rates.
  rates: {
    interior: { Basic: 1100, Standard: 1500, Premium: 2200 },
    roofing: { Basic: 180, Standard: 320, Premium: 520 },
  },
};

export const waLink = (text = "Hi DS Brand, I would like a quote for my project.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (p = SITE.phones[0]) => `tel:${p.replace(/[^\d+]/g, "")}`;

export const mapsSearch = () =>
  SITE.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name} ${SITE.address.join(", ")}`)}`;

export const mapsEmbedSrc = () =>
  SITE.mapEmbed || `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.join(", "))}&output=embed`;

// Is the office open right now (India time)?
export const isOpenNow = () => {
  const ist = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const h = ist.getHours() + ist.getMinutes() / 60;
  const [from, to] = SITE.openHours[ist.getDay()] || [0, 0];
  return h >= from && h < to;
};
