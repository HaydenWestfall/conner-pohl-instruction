import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { FAQSection } from "./components/FAQSection";

export const FAQPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
};
