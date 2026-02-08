import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FORGE_MODULES } from "./forgeModules";
import { EmbedContainer } from "./EmbedContainer";
import { ForgeLanding } from "../pages/Forge/ForgeLanding";

import "../styles/layout/forge-layout.css";
import "../styles/pages/forge.css";
import "../styles/components/embed-container.css";
import "../styles/components/buttons.css";

export function ForgeLayout() {
  return (
    <div className="forge">
      <aside className="forge__sidebar">
        <div className="forge__sidebar-title">Forge</div>
        <nav className="forge__nav" aria-label="Forge modules">
          {FORGE_MODULES.map((m) => (
            <NavLink
              key={m.id}
              to={m.route}
              className={({ isActive }) => `forge__nav-link ${isActive ? "forge__nav-link--active" : ""}`}
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="forge__content">
        <Routes>
          <Route path="/" element={<ForgeLanding />} />
          {FORGE_MODULES.map((m) => (
            <Route
              key={m.id}
              path={m.id}
              element={<EmbedContainer title={m.label} url={m.embedUrl} />}
            />
          ))}
        </Routes>
      </section>
    </div>
  );
}
