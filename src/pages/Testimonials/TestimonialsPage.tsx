import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { TestimonialsHeader } from "./components/TestimonialsHeader/TestimonialsHeader";
import { TestimoniesSection } from "./components/TestimoniesSection/TestimoniesSection";
import { TestimoniesSectionMobile } from "./components/TestimoniesSectionMobile/TestimoniesSectionMobile";

export const TestimonialsPage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <TestimonialsHeader />
        <TestimoniesSectionMobile />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};
