import { useState } from "react";
import reactLogo from "./assets/icons/react.svg";
import arrow from "./assets/icons/arrow.svg";
import image from "./assets/images/logo.png";
import Navbar from "./navbar/Navbar";
import CpiButton from "./cpiButton/CpiButton";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const testFunc = () => {
    window.alert("works");
  };

  return (
    <>
      <Navbar />

      <CpiButton label="Book now" onClick={testFunc} className="cpi-button" />

      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <img src={image} />

      <h2 style={{ fontFamily: "Libre Franklin", fontWeight: 500 }}>Test text</h2>
      <h2 style={{ fontFamily: "Bebas Neue", fontWeight: 500 }}>Test text</h2>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
