import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { LegalSection } from "./components/LegalSection";

export const LegalPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  const legalHeader = (
    <div className="legal-header">
      <div className="chip">Last updated: Sept 2025</div>
      <h1>Cancellation Policy</h1>
      <span className="breadcrumb">Legal Information / Cancellation Policy</span>
    </div>
  );

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader children={legalHeader} />
        <LegalSection />
      </div>
      <Footer />
    </main>
  );
};
