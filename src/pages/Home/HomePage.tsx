import { ContactSection } from "../../shared/ContactSection/ContactSection";
import { Footer } from "../../shared/Footer/Footer";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Packages2 } from "./components/Packages2/Packages2";
import { Testimonials } from "./components/Testimonials/Testimonials";

export const HomePage = () => {
  //   useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main>
      <div className="route-wrapper">
        <Hero />
        <About />
        <Packages2 />
        <Testimonials />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};
