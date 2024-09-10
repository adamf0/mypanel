import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Login from "./Login.jsx";
import ModulePanel from "./ModulePanel.jsx";
import ConectToApp from "./ConectToApp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/panel" element={<ModulePanel />} />
          <Route path="/connect/:toApp" element={<ConectToApp />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
