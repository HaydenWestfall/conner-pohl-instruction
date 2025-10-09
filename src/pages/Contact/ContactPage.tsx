import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { ContactForm } from "./components/ContactForm";
import { useTitle } from "../../hooks/useTitle";

export const ContactPage = () => {
  useTitle("Contact CPI Baseball | Get In Touch About Training & Lessons in Troy, OH");

  return (
    <main>
      <div className="route-wrapper">
        <ActionHeader children={<h1>YOUR JOURNEY BEGINS TODAY</h1>} />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};
