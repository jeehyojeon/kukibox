import React from "react";
import "./App.css";

import MakerHomePage from "./pages/MakerHomePage.js";
import MakerIntroPage from "./pages/MakerIntroPage";
import MakerPublishPage from "./pages/MakerPublishPage";
import KukiBoxHomePage from "./pages/KukiBoxHomePage";
import KukiIntroPage from "./pages/KukiIntroPage";
import KukiBoxMakePage from "./pages/KukiBoxMakePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthProvider from "./context/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/:boxId" element={<AuthPage />} />
            <Route path="/maker/intro" element={<MakerIntroPage />} />
            <Route path="/maker/" element={<MakerHomePage />} />
            <Route
              path="/maker/publish/:boxId"
              element={<MakerPublishPage />}
            />
            <Route path="/kukibox/:boxId/intro" element={<KukiIntroPage />} />
            <Route path="/kukibox/:boxId" element={<KukiBoxHomePage />} />
            <Route path="/kukibox/:boxId/make" element={<KukiBoxMakePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
