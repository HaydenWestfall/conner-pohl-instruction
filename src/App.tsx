import { useState } from "react";
import reactLogo from "./assets/icons/react.svg";
import arrow from "./assets/icons/arrow.svg";
import image from "./assets/images/logo.png";
import Navbar from "./navbar/Navbar";
import CpiButton from "./cpiButton/CpiButton";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  const testFunc = () => {
    window.alert("works");
  };

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
