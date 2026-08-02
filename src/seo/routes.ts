/**
 * Per-route SEO metadata — the single source of truth shared by:
 *   - the runtime `<Seo>` component (client-side navigation)
 *   - the build-time plugin that bakes meta into static HTML per route
 *   - the generated sitemap.xml
 *
 * Paths MUST match `src/routes/AllRoutes.tsx` exactly. A route listed here but
 * missing from the router produces a sitemap entry that soft-404s.
 *
 * Titles are written in full (no automatic brand suffix) so each one can be
 * held under ~60 characters, the point where Google truncates in results.
 * Descriptions target 150-160 characters.
 */

export interface RouteMeta {
  /** Router path, leading slash, no trailing slash (except root). */
  path: string;
  title: string;
  description: string;
  /** Short label used for breadcrumb structured data. */
  breadcrumb: string;
  /** Override the default social image. Site-root-relative. */
  ogImage?: string;
  /** Keep out of the index and out of the sitemap. */
  noindex?: boolean;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Baseball Lessons in Troy, OH | Conner Pohl Instruction",
    description:
      "Private baseball hitting and fielding instruction in Troy, Ohio. Conner Pohl works one-on-one with players of every age to build a repeatable, confident swing.",
    breadcrumb: "Home",
    changefreq: "monthly",
    priority: 1.0,
  },
  {
    path: "/about",
    title: "About Our Coaches | Conner Pohl Instruction",
    description:
      "Meet Conner Pohl and the coaching staff behind CPI. Former collegiate players and coaches teaching hitting mechanics to athletes across the Miami Valley.",
    breadcrumb: "About",
    ogImage: "/about_header.webp",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/testimonies",
    title: "Player & Parent Reviews | Conner Pohl Instruction",
    description:
      "Read what players, parents, and coaches say about training with Conner Pohl Instruction in Troy, Ohio — from youth travel ball through the college level.",
    breadcrumb: "Testimonies",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/book",
    title: "Book a Baseball Lesson | Conner Pohl Instruction",
    description:
      "Schedule a private or small-group baseball lesson in Troy, Ohio. Pick a time that works for you and start building a better swing with Conner Pohl Instruction.",
    breadcrumb: "Book",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/contact",
    title: "Contact Us | Conner Pohl Instruction",
    description:
      "Questions about lessons, pricing, or availability? Reach Conner Pohl Instruction in Troy, Ohio by message, email, or phone — we reply to every inquiry.",
    breadcrumb: "Contact",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    path: "/faq",
    title: "Baseball Lesson FAQs | Conner Pohl Instruction",
    description:
      "Answers to common questions about baseball lessons at CPI: what to bring, how long sessions run, pricing, age ranges, scheduling, and our Troy, OH location.",
    breadcrumb: "FAQ",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/cancellationPolicy",
    title: "Cancellation Policy | Conner Pohl Instruction",
    description:
      "How cancellations, rescheduling, late arrivals, and refunds work for baseball lessons booked with Conner Pohl Instruction in Troy, Ohio.",
    breadcrumb: "Cancellation Policy",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/privacyPolicy",
    title: "Privacy Policy | Conner Pohl Instruction",
    description:
      "What information Conner Pohl Instruction collects, how it is used and shared, how it is protected, and how to contact us about your data.",
    breadcrumb: "Privacy Policy",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Terms of Service | Conner Pohl Instruction",
    description:
      "The terms governing baseball lessons and use of the Conner Pohl Instruction website, including booking, payment, liability, and client responsibilities.",
    breadcrumb: "Terms of Service",
    changefreq: "yearly",
    priority: 0.3,
  },
];

/** Metadata used when the URL matches no route — always kept out of the index. */
export const NOT_FOUND_META: RouteMeta = {
  path: "/404",
  title: "Page Not Found | Conner Pohl Instruction",
  description: "The page you were looking for does not exist.",
  breadcrumb: "Not Found",
  noindex: true,
  changefreq: "never",
  priority: 0.0,
};

/** Routes that belong in sitemap.xml and in the static prerender pass. */
export const INDEXABLE_ROUTES = ROUTES.filter((route) => !route.noindex);

export const getRouteMeta = (pathname: string): RouteMeta => {
  // Tolerate a trailing slash so "/about/" and "/about" resolve identically.
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTES.find((route) => route.path === normalized) ?? NOT_FOUND_META;
};
