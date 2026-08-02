import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { Plugin } from "vite";

import { INDEXABLE_ROUTES, NOT_FOUND_META, ROUTES, type RouteMeta } from "../src/seo/routes";
import { buildSchemaGraph, type SocialLinks } from "../src/seo/schema";
import { OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "../src/seo/site";

/**
 * Bakes per-route SEO metadata into static HTML at build time.
 *
 * Why this exists: this is a client-rendered SPA, so every route would
 * otherwise ship the exact same `index.html`. Google can execute JS and would
 * eventually see the runtime-injected tags, but two things never would:
 *
 *   1. Social crawlers (Facebook, iMessage, LinkedIn, Slack, X) do not run JS.
 *      Without this, every shared link previews as the home page.
 *   2. Any crawler that indexes the raw HTML sees one title and one
 *      description for nine distinct pages — textbook duplicate metadata.
 *
 * The plugin writes `dist/<route>/index.html` for each indexable route, with
 * the head block between the SEO markers replaced by that route's tags. React
 * still hydrates and renders the body exactly as before; only the head differs.
 *
 * Also generates `sitemap.xml` and `robots.txt` from the same route table, so
 * they cannot drift out of sync with the router the way hand-written copies did.
 */

const MARKER_START = "<!--seo:start-->";
const MARKER_END = "<!--seo:end-->";

const escapeAttr = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeHtml = (value: string): string => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** `<` inside a JSON-LD payload would otherwise be able to close the script tag early. */
const escapeJsonLd = (value: string): string => value.replace(/</g, "\\u003c");

const buildHeadBlock = (route: RouteMeta, socials: SocialLinks): string => {
  const canonical = absoluteUrl(route.path);
  const image = absoluteUrl(route.ogImage ?? OG_IMAGE.path);
  const schema = escapeJsonLd(JSON.stringify(buildSchemaGraph(route, socials)));

  return [
    MARKER_START,
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeAttr(route.description)}" />`,
    `    <meta name="robots" content="${route.noindex ? "noindex, follow" : "index, follow"}" />`,
    // A canonical on a noindex page would point at a URL that does not exist
    // (/404), which is a conflicting signal. Indexable pages only.
    ...(route.noindex ? [] : [`    <link rel="canonical" href="${escapeAttr(canonical)}" />`]),
    ``,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `    <meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `    <meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `    <meta property="og:image" content="${escapeAttr(image)}" />`,
    `    <meta property="og:image:alt" content="${escapeAttr(OG_IMAGE.alt)}" />`,
    `    <meta property="og:locale" content="en_US" />`,
    ``,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `    <meta name="twitter:image" content="${escapeAttr(image)}" />`,
    ``,
    `    <script type="application/ld+json" data-seo="route">${schema}</script>`,
    `    ${MARKER_END}`,
  ].join("\n");
};

const buildSitemap = (lastmod: string): string => {
  const entries = INDEXABLE_ROUTES.map((route) =>
    [
      `  <url>`,
      `    <loc>${escapeHtml(absoluteUrl(route.path))}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      `  </url>`,
    ].join("\n")
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
};

// No Crawl-delay: Google ignores it outright, and on Bing it throttles crawling
// of a small site for no benefit.
const buildRobots = (): string =>
  ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n");

export const seoStatic = (env: Record<string, string>): Plugin => {
  let outDir = "dist";

  return {
    name: "cpi:seo-static",
    apply: "build",

    configResolved(config) {
      outDir = config.build.outDir;
    },

    async closeBundle() {
      const socials: SocialLinks = {
        facebook: env.VITE_FACEBOOK_URL,
        instagram: env.VITE_INSTAGRAM_URL,
        tiktok: env.VITE_TIKTOK_URL,
      };

      const templatePath = join(outDir, "index.html");
      const template = await readFile(templatePath, "utf8");

      const startIndex = template.indexOf(MARKER_START);
      const endIndex = template.indexOf(MARKER_END);
      if (startIndex === -1 || endIndex === -1) {
        this.error(
          `index.html is missing the ${MARKER_START} / ${MARKER_END} markers; per-route SEO metadata cannot be injected.`
        );
        return;
      }

      const render = (route: RouteMeta): string =>
        template.slice(0, startIndex) + buildHeadBlock(route, socials) + template.slice(endIndex + MARKER_END.length);

      // Home overwrites dist/index.html; every other route gets its own
      // directory so Apache can serve it directly (see .htaccess).
      for (const route of ROUTES) {
        const target = route.path === "/" ? templatePath : join(outDir, route.path, "index.html");
        await mkdir(dirname(target), { recursive: true });
        await writeFile(target, render(route), "utf8");
      }

      // Served by Apache's ErrorDocument for unknown paths, so a bad URL
      // returns a real 404 with noindex instead of a 200 soft-404.
      await writeFile(join(outDir, "404.html"), render(NOT_FOUND_META), "utf8");

      const lastmod = new Date().toISOString().slice(0, 10);
      await writeFile(join(outDir, "sitemap.xml"), buildSitemap(lastmod), "utf8");
      await writeFile(join(outDir, "robots.txt"), buildRobots(), "utf8");

      this.info(`SEO: ${ROUTES.length} route pages, sitemap (${INDEXABLE_ROUTES.length} urls), robots.txt`);
    },
  };
};
