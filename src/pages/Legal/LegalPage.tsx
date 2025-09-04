import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { LegalSection } from "./components/LegalSection";

export const LegalPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader />
        <LegalSection />
      </div>
      <Footer />
    </main>
  );
};
