import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { useIsMobile } from "../../hooks/useIsMobile";
import { TestimonialsHeader } from "./components/TestimonialsHeader/TestimonialsHeader";
import { TestimoniesSection } from "./components/TestimoniesSection/TestimoniesSection";
import { TestimoniesSectionMobile } from "./components/TestimoniesSectionMobile/TestimoniesSectionMobile";

/** Below this width the pinned horizontal-scroll section is swapped for the card list. */
const TESTIMONIES_BREAKPOINT = 1200;

export const TestimonialsPage = () => {
  const isMobile = useIsMobile(TESTIMONIES_BREAKPOINT);

  return (
    <main>
      <div className="route-wrapper">
        <TestimonialsHeader />
        {isMobile ? <TestimoniesSectionMobile /> : <TestimoniesSection />}
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};
