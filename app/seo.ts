export const siteUrl = "https://immobilienmakler-bergisch-gladbach.de";
export const businessId = `${siteUrl}/#immobilienmakler`;
export const defaultImage = "https://images.ctfassets.net/if6f7uzjzqut/1JeuSYJErKOHJUm9Ojx7LE/0ce8fa4b065d01703dd781a78c71b173/bergisch_gladbach_key_visual.jpg?f=top&fit=fill&fm=jpg&q=82&w=1568&h=1003";

export const businessSchema = {
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": businessId,
  name: "Stark & Hoffmann Immobilien GmbH",
  alternateName: "Stark & Hoffmann Immobilien Bergisch Gladbach",
  url: `${siteUrl}/`,
  image: defaultImage,
  telephone: "+49 2204 914 7881",
  email: "bergischgladbach@evernest.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Schloßstraße 41",
    postalCode: "51429",
    addressLocality: "Bergisch Gladbach",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Bergisch Gladbach" },
    { "@type": "AdministrativeArea", name: "Rheinisch-Bergischer Kreis" },
    { "@type": "AdministrativeArea", name: "Oberbergischer Kreis" },
  ],
  sameAs: [
    "https://www.evernest.com/de/unsere-makler/bergisch-gladbach/",
    "https://www.google.com/maps/place/Evernest+Bergisch+Gladbach+-+Stark+%26+Hoffmann+Immobilien+GmbH/",
    "https://www.instagram.com/evernest.bergischgladbach/",
  ],
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (items: Array<[string, string] | { question: string; answer: string }>) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => {
    const [question, answer] = Array.isArray(item) ? item : [item.question, item.answer];
    return { "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } };
  }),
});

export const graphSchema = (...items: Array<object | object[]>) => ({
  "@context": "https://schema.org",
  "@graph": items.flat(),
});
