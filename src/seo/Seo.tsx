import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from "../config/links";
import { getRouteMeta } from "./routes";
import { buildSchemaGraph } from "./schema";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "./site";

/**
 * Keeps the document head in sync with the current route.
 *
 * On a cold load the head is already correct — the build plugin bakes the same
 * tags into each route's static HTML, which is what social crawlers and any
 * non-JS crawler read. This component exists for client-side navigation, where
 * no new document is fetched and the head would otherwise keep showing the
 * landing page's metadata for the rest of the session.
 *
 * Mounted once in `App`, so every route (including unmatched ones) is covered
 * without pages having to opt in.
 */

const SEO_MARKER = "data-seo";

/** Finds an existing head tag or creates it, so tags baked into index.html are reused. */
const upsertTag = (selector: string, create: () => HTMLElement): HTMLElement => {
  const existing = document.head.querySelector<HTMLElement>(selector);
  if (existing) return existing;

  const created = create();
  created.setAttribute(SEO_MARKER, "route");
  document.head.appendChild(created);
  return created;
};

const setMetaByName = (name: string, content: string) => {
  const tag = upsertTag(`meta[name="${name}"]`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", name);
    return meta;
  });
  tag.setAttribute("content", content);
};

const setMetaByProperty = (property: string, content: string) => {
  const tag = upsertTag(`meta[property="${property}"]`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", property);
    return meta;
  });
  tag.setAttribute("content", content);
};

/** Passing `null` drops the tag — a noindex page should not claim a canonical. */
const setCanonical = (href: string | null) => {
  const existing = document.head.querySelector('link[rel="canonical"]');

  if (href === null) {
    existing?.remove();
    return;
  }

  const tag =
    existing ??
    (() => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute(SEO_MARKER, "route");
      document.head.appendChild(link);
      return link;
    })();

  tag.setAttribute("href", href);
};

const setSchema = (json: string) => {
  const tag = upsertTag(`script[type="application/ld+json"][${SEO_MARKER}="route"]`, () => {
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    return script;
  });
  tag.textContent = json;
};

const SOCIALS = {
  facebook: FACEBOOK_URL,
  instagram: INSTAGRAM_URL,
  tiktok: TIKTOK_URL,
};

export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getRouteMeta(pathname);
    const canonical = absoluteUrl(route.path);
    const image = absoluteUrl(route.ogImage ?? OG_IMAGE.path);

    document.title = route.title;
    setMetaByName("description", route.description);
    setMetaByName("robots", route.noindex ? "noindex, follow" : "index, follow");
    setCanonical(route.noindex ? null : canonical);

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:title", route.title);
    setMetaByProperty("og:description", route.description);
    setMetaByProperty("og:url", canonical);
    setMetaByProperty("og:image", image);
    setMetaByProperty("og:image:alt", OG_IMAGE.alt);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", route.title);
    setMetaByName("twitter:description", route.description);
    setMetaByName("twitter:image", image);

    setSchema(JSON.stringify(buildSchemaGraph(route, SOCIALS)));
  }, [pathname]);

  return null;
};
