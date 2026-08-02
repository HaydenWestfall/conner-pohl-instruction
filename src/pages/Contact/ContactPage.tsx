import { ActionHeader } from "../../shared/ActionHeader/ActionHeader";
import { Footer } from "../../shared/Footer/Footer";
import { ContactForm } from "./components/ContactForm";

export const ContactPage = () => (
  <main>
    <div className="route-wrapper">
      {/* Was "YOUR JOURNEY BEGINS TODAY" — the identical h1 the FAQ page used.
          Each page needs one h1 that describes that page specifically. */}
      <ActionHeader>
        <h1>CONTACT CPI BASEBALL</h1>
      </ActionHeader>
      <ContactForm />
    </div>
    <Footer />
  </main>
);
