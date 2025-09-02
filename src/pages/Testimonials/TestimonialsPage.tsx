import { useEffect, useState } from "react";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { TestimonialsHeader } from "./components/TestimonialsHeader/TestimonialsHeader";
import { TestimoniesSection } from "./components/TestimoniesSection/TestimoniesSection";
import { TestimoniesSectionMobile } from "./components/TestimoniesSectionMobile/TestimoniesSectionMobile";

export const TestimonialsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  useEffect(() => {
    const handleResize = () => {
      console.log("tracking");
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
