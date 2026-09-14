// Single source of truth for site-wide identity, NAP, and canonical description.
// Reused verbatim across meta tags, JSON-LD, the homepage answer box, and llms.txt
// so every surface states who DataQube Analytics is in exactly the same words (GEO consistency).
module.exports = {
  name: "DataQube Analytics",
  url: "https://dataqubeanalytics.ca",
  locale: "en_CA",

  // One canonical description, reused everywhere. Keep it factual, not marketing fluff.
  description:
    "DataQube Analytics is a Canadian data analytics consulting firm that helps organizations in finance, healthcare, retail, manufacturing, technology, government, and media turn raw data into decisions through data management, advanced analytics, business intelligence, data visualization, and data consulting services.",

  tagline: "Empowering data-driven success with advanced analytics.",

  nap: {
    // PLACEHOLDER — real email not yet provided, replace before launch.
    email: "info@dataqubeanalytics.ca",
    phone: "1-800-430-4730",
    streetAddress: "1000 - 10 Four Seasons Place",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M9B 6H7",
    addressCountry: "CA",
  },

  social: {
    // PLACEHOLDER — add real profile URLs before launch.
    linkedin: "https://www.linkedin.com/company/dataqube-analytics",
  },

  nav: [
    { label: "Services", url: "/services/" },
    { label: "About", url: "/about/" },
    { label: "FAQ", url: "/faq/" },
    { label: "Blog", url: "/blog/" },
    { label: "Case Studies", url: "/case-studies/" },
    { label: "Contact", url: "/contact/" },
  ],

  footerLegal: [
    { label: "Privacy Policy", url: "/privacy-policy/" },
    { label: "Terms of Service", url: "/terms-of-service/" },
    { label: "GDPR Policy", url: "/gdpr-policy/" },
  ],

  defaultOgImage: "/assets/img/og/default-og.png",
};
