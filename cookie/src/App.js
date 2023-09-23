import React from "react";
import "./App.css";

import MakerHomePage from "./pages/MakerHomePage.js";
import MakerIntroPage from "./pages/MakerIntroPage";
import MakerPublishPage from "./pages/MakerPublishPage";
import KukiBoxHomePage from "./pages/KukiBoxHomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MakerHome />} />
          <Route path="/" element={<MakerHomePage />} />
          <Route path="/makerintro" element={<MakerIntroPage />} />
          <Route path="/makerpublish" element={<MakerPublishPage />} />
          <Route path="/kukibox/:boxId" element={<KukiBoxHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
