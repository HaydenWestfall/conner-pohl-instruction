import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { FAQSection } from "./components/FAQSection";
import { useTitle } from "../../hooks/useTitle";

export const FAQPage = () => {
  useTitle("Frequently Asked Questions | CPI Baseball Training Info & Answers");

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader children={<h1>YOUR JOURNEY BEGINS TODAY</h1>} />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
};
