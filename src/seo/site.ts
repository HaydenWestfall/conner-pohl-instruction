/**
 * Single source of truth for site-wide identity and NAP (name / address / phone).
 *
 * Imported by both the React app and `vite.config.ts`, so it must stay free of
 * DOM and `import.meta.env` references — the build-time consumers run in Node.
 */

/** Canonical origin. No trailing slash. Every absolute URL is built from this. */
export const SITE_URL = "https://connerpohlinstruction.com";

export const SITE_NAME = "Conner Pohl Instruction";

/** Appended to every page title. Kept short so titles survive SERP truncation. */
export const TITLE_SUFFIX = "Conner Pohl Instruction";

export const BUSINESS = {
  legalName: "Conner Pohl Instruction",
  email: "cpohl@connerpohlinstruction.com",
  telephone: "+1-937-417-1114",
  street: "2326 OH-718",
  city: "Troy",
  region: "OH",
  postalCode: "45373",
  country: "US",
  latitude: 40.0325337,
  longitude: -84.2462159,
  priceRange: "$$",
  sport: "Baseball",
  /** Towns within realistic driving distance — feeds LocalBusiness areaServed. */
  areaServed: ["Troy, OH", "Piqua, OH", "Tipp City, OH", "Sidney, OH", "Dayton, OH", "Miami County, OH"],
} as const;

/** Default social preview image. Must exist in `public/` and be referenced absolutely. */
export const OG_IMAGE = {
  path: "/hero_header.webp",
  width: 1920,
  height: 931,
  alt: "A player training at Conner Pohl Instruction in Troy, Ohio",
} as const;

/** Builds an absolute URL from a site-root-relative path. */
export const absoluteUrl = (path: string): string => {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
