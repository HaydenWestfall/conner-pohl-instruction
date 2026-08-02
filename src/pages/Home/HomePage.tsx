import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { useIsMobile } from "../../hooks/useIsMobile";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { MobilePackages } from "./components/MobilePackages/MobilePackages";
import { Packages } from "./components/Packages/Packages";
import { Testimonials } from "./components/Testimonials/Testimonials";

/**
 * The pinned horizontal-scroll Packages layout needs room to work, so it is
 * swapped for the swipeable card list below this width. Matches the 1200px
 * breakpoint `src/index.scss` uses to drop the route padding.
 */
const PACKAGES_BREAKPOINT = 1200;

export const HomePage = () => {
  const isMobile = useIsMobile(PACKAGES_BREAKPOINT);

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
