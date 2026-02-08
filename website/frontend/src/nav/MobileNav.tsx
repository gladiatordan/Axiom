import React from "react";
import { Link } from "react-router-dom";
import type { NavSection } from "./navModel";

export function MobileNav({ open, sections }: { open: boolean; sections: NavSection[] }) {
  return (
    <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
      <div className="mobile-nav__panel">
        {sections.map((s) => (
          <div key={s.id} className="mobile-nav__section">
            <div className="mobile-nav__section-title">{s.label}</div>
            <div className="mobile-nav__links">
              {s.links.map((l) => (
                <Link key={l.to} className="mobile-nav__link" to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="mobile-nav__section">
          <Link className="mobile-nav__link mobile-nav__link--button" to="/support">
            Support
          </Link>
          <Link className="mobile-nav__link mobile-nav__link--button" to="/forge">
            Forge
          </Link>
        </div>
      </div>
    </div>
  );
}
