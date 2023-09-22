import React from "react";
import "./App.css";

import MakerHome from "./pages/MakerHome.js";
import AudIntro from "./pages/AudIntro";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AudIntro />} /> */}
          <Route path="/" element={<MakerHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
