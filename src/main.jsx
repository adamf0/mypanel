import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Login from "./Login.jsx";
import ModulePanel from "./ModulePanel.jsx";
import ConectToApp from "./ConectToApp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import PenelitianInternal from "./PenelitianInternal/PenelitianInternal.jsx";
import PenelitianNasionalList from "./PenelitianNasional/PenelitianNasionalList.jsx";
import PKMInternalList from "./PKMInternal/PKMInternalList.jsx";
import PKMNasionalList from "./PKMNasional/PKMNasionalList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<ModulePanel />} />
        <Route path="/connect/:toApp" element={<ConectToApp />} />
        <Route element={<AdminPanel />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/penelitianInternal">
            <Route
              index
              element={
                <PenelitianInternal>
                  <PenelitianInternal.List />
                </PenelitianInternal>
              }
            />
            <Route
              path="/penelitianInternal/add"
              element={
                <PenelitianInternal>
                  <PenelitianInternal.Add />
                </PenelitianInternal>
              }
            />
            <Route
              path="/penelitianInternal/edit"
              element={
                <PenelitianInternal>
                  <PenelitianInternal.Edit />
                </PenelitianInternal>
              }
            />
          </Route>
          <Route path="/penelitianNasional">
            <Route index element={<PenelitianNasionalList />} />
          </Route>
          <Route path="/pkmInternal">
            <Route index element={<PKMInternalList />} />
          </Route>
          <Route path="/pkmNasional">
            <Route index element={<PKMNasionalList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
