import Navbar from "./shared/navbar/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import useSafariIos from "./hooks/SafariDetectionHook";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  useSafariIos();

  return (
    <div>
      <Navbar />
      <AllRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
