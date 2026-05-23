import { site, whatsappUrl } from "./site-data";

export function nutritionBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/Nutritionist",
    name: `${site.name} — Nutricionista`,
    description: site.seo.description,
    url: "https://nutri-eddlym.vercel.app",
    telephone: `+${site.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: [site.instagram],
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${site.whatsapp}`,
      url: whatsappUrl(),
      availableLanguage: "Portuguese",
    },
  };
}
