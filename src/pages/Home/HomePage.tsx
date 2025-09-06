import { useEffect, useState } from "react";
import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { MobilePackages } from "./components/MobilePackages/MobilePackages";
import { Packages } from "./components/Packages/Packages";
export const HomePage = () => {
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
        <Hero />
        <About />
        {isMobile ? <MobilePackages /> : <Packages />}
        <Testimonials />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};
