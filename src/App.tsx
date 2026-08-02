import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ToastContainer } from "react-toastify";

import { useSafariIos } from "./hooks/useSafariIos";
import { AllRoutes } from "./routes/AllRoutes";
import { Seo } from "./seo/Seo";
import Navbar from "./shared/Navbar/Navbar";

// Registered once at the app root; components then just import gsap directly.
// Imported from "gsap/ScrollTrigger" rather than "gsap/all" so the bundler is
// not asked to reason about every plugin in the package.
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useSafariIos();

  return (
    <>
      <Seo />
      <Navbar />
      <AllRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
