/**
 * JSON-LD (schema.org) builders.
 *
 * Everything is emitted as one `@graph` per page with stable `@id` values, so
 * Google resolves the business, the site, and the current page as a single
 * connected entity instead of three unrelated blobs.
 *
 * Deliberately NOT emitted: Review / AggregateRating. Several testimonials on
 * this site are placeholder copy rather than real customer reviews, and marking
 * up fabricated reviews is a Google structured-data violation that risks a
 * manual action. Add review markup only once every testimonial is genuine and
 * attributable.
 *
 * Node-safe: imported by `vite.config.ts`, so no DOM or `import.meta.env`.
 */

import { FAQS } from "../data/faqs";
import { BUSINESS, OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "./site";
import type { RouteMeta } from "./routes";

/** Stable node identifiers, so `@graph` entries can reference each other. */
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

const buildBusinessNode = (socials: SocialLinks) => {
  const sameAs = [socials.facebook, socials.instagram, socials.tiktok].filter(
    (url): url is string => Boolean(url) && url!.startsWith("http")
  );

  return {
    "@type": "SportsActivityLocation",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    url: `${SITE_URL}/`,
    description:
      "Private baseball hitting, pitching, and fielding instruction in Troy, Ohio for players of every age and skill level.",
    image: absoluteUrl(OG_IMAGE.path),
    logo: absoluteUrl("/android-chrome-512x512.png"),
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    sport: BUSINESS.sport,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    founder: {
      "@type": "Person",
      name: "Conner Pohl",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
};

const buildWebSiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-US",
});

const buildWebPageNode = (route: RouteMeta) => {
  const url = absoluteUrl(route.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: absoluteUrl(route.ogImage ?? OG_IMAGE.path),
    inLanguage: "en-US",
  };
};

/** Home is its own breadcrumb root, so it gets no trail of its own. */
const buildBreadcrumbNode = (route: RouteMeta) => {
  if (route.path === "/") return null;

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(route.path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: route.breadcrumb, item: absoluteUrl(route.path) },
    ],
  };
};

const buildFaqNode = () => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/faq")}#faq`,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.join(" "),
    },
  })),
});

/**
 * Builds the complete JSON-LD graph for one route. Returns a plain object ready
 * for `JSON.stringify` — used identically at build time and at runtime.
 */
export const buildSchemaGraph = (route: RouteMeta, socials: SocialLinks = {}) => {
  const graph: Record<string, unknown>[] = [
    buildBusinessNode(socials),
    buildWebSiteNode(),
    buildWebPageNode(route),
  ];

  const breadcrumb = buildBreadcrumbNode(route);
  if (breadcrumb) graph.push(breadcrumb);

  if (route.path === "/faq") graph.push(buildFaqNode());

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
