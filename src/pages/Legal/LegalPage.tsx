import { useLocation } from "react-router-dom";

import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { CancellationPolicySection } from "./components/CancellationPolicy/CancellationPolicySection";
import { PrivacyPolicySection } from "./components/PrivacyPolicy/PrivacyPolicySection";
import { TermsOfServiceSection } from "./components/TermsOfService/TermsOfServiceSection";

type LegalRouteKey = "cancellationPolicy" | "privacyPolicy" | "terms";

const DEFAULT_ROUTE: LegalRouteKey = "cancellationPolicy";

/**
 * One page backs three routes; only the heading and the body section differ.
 * Titles, descriptions, and canonicals for these routes live in
 * `src/seo/routes.ts`.
 */
const LEGAL_SECTIONS: Record<LegalRouteKey, { heading: string; Section: React.ComponentType }> = {
  cancellationPolicy: { heading: "Cancellation Policy", Section: CancellationPolicySection },
  privacyPolicy: { heading: "Privacy Policy", Section: PrivacyPolicySection },
  terms: { heading: "Terms and Conditions", Section: TermsOfServiceSection },
};

const EFFECTIVE_DATE = "Sept 2025";

const isLegalRouteKey = (value: string): value is LegalRouteKey => value in LEGAL_SECTIONS;

export const LegalPage = () => {
  const { pathname } = useLocation();

  // e.g. "/privacyPolicy" -> "privacyPolicy"
  const segment = pathname.split("/").pop() ?? "";
  const routeKey = isLegalRouteKey(segment) ? segment : DEFAULT_ROUTE;
  const { heading, Section } = LEGAL_SECTIONS[routeKey];

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader>
          <div className="legal-header">
            <div className="chip">Effective Date: {EFFECTIVE_DATE}</div>
            <h1>{heading}</h1>
            <span className="breadcrumb">Legal Information &nbsp;/ &nbsp;{heading}</span>
          </div>
        </ActionHeader>
        <Section />
      </div>
      <Footer />
    </main>
  );
};
