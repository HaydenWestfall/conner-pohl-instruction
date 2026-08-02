/**
 * Outbound URLs, read from the environment in exactly one place.
 *
 * These were previously re-declared as `import.meta.env.VITE_*` in eight
 * components, which made it easy to add a new surface that silently pointed at
 * an undefined variable. Import from here instead.
 *
 * Browser-only: `src/seo/site.ts` holds the equivalent build-time constants,
 * because the Vite plugin cannot read `import.meta.env`.
 */

export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL;
export const GOOGLE_MAPS_URL = import.meta.env.VITE_GOOGLE_MAPS_URL;
export const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL;

export const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL;
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL;
export const TIKTOK_URL = import.meta.env.VITE_TIKTOK_URL;

export interface ExternalLink {
  label: string;
  href: string;
}

/** Social profiles, in the order they appear in the navigation menus. */
export const SOCIAL_LINKS: ExternalLink[] = [
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "TikTok", href: TIKTOK_URL },
];
