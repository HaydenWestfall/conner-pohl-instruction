import Navbar from "./shared/navbar/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import { ReactLenis, useLenis } from "lenis/react";
import useSafariIos from "./hooks/SafariDetectionHook";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  useLenis(() => {});
  useSafariIos();

  return (
    <ReactLenis root>
      <Navbar />
      <AllRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </ReactLenis>
  );
}

export default App;
