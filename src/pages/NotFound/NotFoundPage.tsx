import CpiLink from "../../components/CpiButton/CpiLink";
import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import "./NotFoundPage.scss";

/**
 * Catch-all for unmatched URLs. Without this the router rendered nothing at
 * all, so a mistyped or stale link returned a blank page with a 200 status —
 * a soft 404 that search engines will happily index. The route is marked
 * noindex in src/seo/routes.ts and Apache serves 404.html with a real 404
 * status for direct hits.
 */
export const NotFoundPage = () => (
  <main>
    <div className="route-wrapper">
      <ActionHeader>
        <div className="not-found-header">
          <h1>PAGE NOT FOUND</h1>
          <span className="breadcrumb">We couldn&rsquo;t find the page you were looking for.</span>
        </div>
      </ActionHeader>
      <div className="not-found-body">
        <h2>Let&rsquo;s get you back on track</h2>
        <p>
          The page may have moved or the link may be out of date. Head back to the home page, or jump straight to
          booking a lesson.
        </p>
        <div className="not-found-links">
          <CpiLink label="Back to home" href="/" className="cpi-button light" />
          <CpiLink label="Contact us" href="/contact" className="cpi-button light" />
        </div>
      </div>
    </div>
    <Footer />
  </main>
);
