// Computed data available to every page and layout in the cascade — this is how
// layouts/base.njk gets access to `service`, `faqItems`, `serviceListItems`, and `article`
// for JSON-LD, without every page having to repeat lookup logic.
module.exports = {
  service: (data) => {
    if (!data.serviceSlug) return undefined;
    return (data.services || []).find((s) => s.slug === data.serviceSlug);
  },
  faqItems: (data) => {
    if (data.service && data.service.faqs && data.service.faqs.length) {
      return data.service.faqs;
    }
    if (data.useGlobalFaq) return data.faq;
    return undefined;
  },
  serviceListItems: (data) => {
    return data.showServiceList ? data.services : undefined;
  },
  article: (data) => {
    if (data.tags && data.tags.includes && data.tags.includes("posts")) {
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        updated: data.updated,
      };
    }
    return undefined;
  },
};
