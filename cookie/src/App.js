import React from "react";
import "./App.css";

import MakerHomePage from "./pages/MakerHomePage.js";
import MakerIntroPage from "./pages/MakerIntroPage";
import MakerPublishPage from "./pages/MakerPublishPage1";
import KukiBoxHomePage from "./pages/KukiBoxHomePage";
import KukiIntroPage from "./pages/KukiIntroPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/maker/" element={<MakerHomePage />} />
          <Route path="/maker/intro" element={<MakerIntroPage />} />
          <Route path="/maker/publish" element={<MakerPublishPage />} />
          <Route path="/kukibox/intro" element={<KukiIntroPage />} />
          <Route path="/kukibox/:boxId" element={<KukiBoxHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
