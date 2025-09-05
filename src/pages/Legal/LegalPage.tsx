import { useLocation } from "react-router-dom";
import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { CancellationPolicySection } from "./components/CancellationPolicy/CancellationPolicySection";
import { PrivacyPolicySection } from "./components/PrivacyPolicy/PrivacyPolicySection";
import { TermsOfServiceSection } from "./components/TermsOfService/TermsOfServiceSection";

export const LegalPage = () => {
  const location = useLocation();
  // Extract the last part of the path, e.g. "/legal/privacyPolicy" => "privacyPolicy"

  type LegalRouteKey = "cancellationPolicy" | "privacyPolicy" | "terms";
  const routeKey = (location.pathname.split("/").pop() as LegalRouteKey) || "cancellationPolicy";

  const routeKeyHeaderMap: Record<LegalRouteKey, string> = {
    cancellationPolicy: "Cancellation Policy",
    privacyPolicy: "Privacy Policy",
    terms: "Terms and Conditions",
  };

  const dynamicHeader = (
    <div className="legal-header">
      <div className="chip">Effective Date: Sept 2025</div>
      <h1>{routeKeyHeaderMap[routeKey]}</h1>
      <span className="breadcrumb">Legal Information &nbsp;/ &nbsp;{routeKeyHeaderMap[routeKey]}</span>
    </div>
  );

  const legalContent: Record<LegalRouteKey, { header: React.ReactNode; Section: React.ComponentType }> = {
    cancellationPolicy: {
      header: dynamicHeader,
      Section: CancellationPolicySection,
    },
    privacyPolicy: {
      header: dynamicHeader,
      Section: PrivacyPolicySection,
    },
    terms: {
      header: dynamicHeader,
      Section: TermsOfServiceSection,
    },
  };

  const { header, Section } = legalContent[routeKey] || legalContent.cancellationPolicy;

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader children={header} />
        <Section />
      </div>
      <Footer />
    </main>
  );
};
