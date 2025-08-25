import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { TestimonialsHeader } from "./components/TestimonialsHeader/TestimonialsHeader";
import { TestimoniesSection } from "./components/TestimoniesSection/TestimoniesSection";

export const TestimonialsPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <TestimonialsHeader />
        <TestimoniesSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};
