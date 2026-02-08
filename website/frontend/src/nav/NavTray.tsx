
import { Link } from "react-router-dom";
import type { NavSection } from "./navModel";

export function NavTray({
  open,
  section,
  onClose,
}: {
  open: boolean;
  section: NavSection | null;
  onClose: () => void;
}) {
  return (
    <div className={`nav-tray ${open ? "nav-tray--open" : ""}`} role="region" aria-label="Navigation tray">
      <div className="nav-tray__inner">
        <div className="nav-tray__header">
          <div className="nav-tray__title">{section?.label ?? ""}</div>
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="nav-tray__grid">
          {section?.links.map((l) => (
            <Link key={l.to} className="nav-tray__link" to={l.to}>
              {l.label}
            </Link>
          )) ?? null}
        </div>
      </div>
    </div>
  );
}
