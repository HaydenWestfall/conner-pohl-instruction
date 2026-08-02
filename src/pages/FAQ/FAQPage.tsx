import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { FAQSection } from "./components/FAQSection";

export const FAQPage = () => (
  <main>
    <div className="route-wrapper">
      <ActionHeader>
        <h1>BASEBALL LESSON FAQS</h1>
      </ActionHeader>
      <FAQSection />
    </div>
    <Footer />
  </main>
);
