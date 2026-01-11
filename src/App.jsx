"use strict";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScanEntry from "./pages/ScanEntry";
import ScanFood from "./pages/ScanFood";
import ScanStay from "./pages/ScanStay";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan/entry" element={<ScanEntry />} />
        <Route path="/scan/food" element={<ScanFood />} />
        <Route path="/scan/stay" element={<ScanStay />} />
      </Routes>
    </BrowserRouter>
      <p className="read-the-docs">
        This is development mode scanner app. Kindly forgo any short comings.
      </p>
    </>
  )
}

export default App;







