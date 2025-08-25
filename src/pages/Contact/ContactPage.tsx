import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { ContactForm } from "./components/ContactForm";

export const ContactPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};
