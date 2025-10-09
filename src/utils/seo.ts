export const generateReviewSchema = (testimonials: any[]) => {
  const reviews = testimonials.map((testimonial) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: testimonial.review,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conner Pohl Instruction",
    review: reviews,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
  };
};

export const injectSchema = (schema: object) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
  return script;
};
