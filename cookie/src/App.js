import React from "react";
import "./App.css";

import MakerHome from "./pages/MakerHome.js";
import AudIntro from "./pages/AudIntro";
import MakerIntro from "./pages/MakerIntro";
import KukiBoxHomePage from "./pages/KukiBoxHomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MakerHome />} />
          <Route path="/audintro" element={<AudIntro />} />
          <Route path="/makerintro" element={<MakerIntro />} />
          <Route path="/kukibox/:boxId" element={<KukiBoxHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
