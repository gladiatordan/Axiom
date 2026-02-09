import { useNavigate } from "react-router-dom";
import logoBanner from "../assets/logo_banner.png";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Track which dropdown is open (desktop hover OR mobile click later)
  const [openMenu, setOpenMenu] = useState(null);

  const go = (path) => {
    setOpenMenu(null);
    navigate(path);
  };

  return (
    <header className="axiom-header">
      <div className="header-grid">
        {/* LEFT NAV */}
        <nav className="nav-wing-left" aria-label="Primary left">
          <NavButton
            label="News"
            onEnter={() => setOpenMenu("news")}
            onLeave={() => setOpenMenu(null)}
            onClick={() => go("/news")}
          >
            <Dropdown active={openMenu === "news"}>
              <DropItem onClick={() => go("/news/patch-notes")}>Patch Notes</DropItem>
              <DropItem onClick={() => go("/news/community")}>Community</DropItem>
              <DropItem onClick={() => go("/news/development")}>Development</DropItem>
            </Dropdown>
          </NavButton>

          <NavButton
            label="Policies"
            onEnter={() => setOpenMenu("policies")}
            onLeave={() => setOpenMenu(null)}
          >
            <Dropdown active={openMenu === "policies"}>
              <DropItem onClick={() => go("/policies/privacy")}>Privacy Policy</DropItem>
              <DropItem onClick={() => go("/policies/terms")}>Terms of Service</DropItem>
              <DropItem onClick={() => go("/policies/legal")}>Legal Notice</DropItem>
              <DropItem onClick={() => go("/policies/data")}>Data Policies</DropItem>
              <DropItem onClick={() => go("/policies/account")}>Account Policies</DropItem>
              <DropItem onClick={() => go("/policies/conduct")}>Code of Conduct</DropItem>
              <DropItem onClick={() => go("/policies/rehab")}>Rehabilitation System</DropItem>
            </Dropdown>
          </NavButton>

          <NavButton
            label="About"
            onEnter={() => setOpenMenu("about")}
            onLeave={() => setOpenMenu(null)}
          >
            <Dropdown active={openMenu === "about"}>
              <DropItem onClick={() => go("/about/overview")}>Axiom Overview</DropItem>
              <DropItem onClick={() => go("/about/roadmap")}>Roadmap</DropItem>
              <DropItem onClick={() => go("/about/staff")}>Staff</DropItem>
              <DropItem onClick={() => go("/about/senate")}>Senate</DropItem>
              <DropItem onClick={() => go("/about/volunteering")}>Volunteering</DropItem>
            </Dropdown>
          </NavButton>
        </nav>

        {/* CENTER LOGO */}
        <div className="logo-anchor">
          <button
            className="logo-link"
            aria-label="Axiom Home"
            onClick={() => go("/")}
          >
            <img src={logoBanner} alt="AXIOM" className="center-logo" />
          </button>
        </div>

        {/* RIGHT CLUSTER */}
        <div className="right-cluster">
          <nav className="nav-wing-right" aria-label="Primary right">
            <NavButton
              label="Game"
              onEnter={() => setOpenMenu("game")}
              onLeave={() => setOpenMenu(null)}
            >
              <Dropdown active={openMenu === "game"}>
                <DropItem onClick={() => go("/game/play")}>Play</DropItem>
                <DropItem onClick={() => go("/game/wiki")}>Wiki</DropItem>

                <DropLabel>Metrics</DropLabel>
                <DropItem disabled>Placeholder</DropItem>

                <DropDivider />

                <DropLabel>Tools</DropLabel>
                <DropItem onClick={() => go("/game/tools/skills")}>
                  Skill Calculator
                </DropItem>
                <DropItem onClick={() => go("/game/tools/crafting")}>
                  Crafters Corner
                </DropItem>
                <DropItem onClick={() => go("/game/tools/spacers")}>
                  Spacers Den
                </DropItem>
              </Dropdown>
            </NavButton>

            <NavButton
              label="Community"
              onEnter={() => setOpenMenu("community")}
              onLeave={() => setOpenMenu(null)}
            >
              <Dropdown active={openMenu === "community"}>
                <DropLabel>Senate</DropLabel>
                <DropItem onClick={() => go("/community/senate/proposals")}>
                  Proposals
                </DropItem>
                <DropItem onClick={() => go("/community/senate/discussion")}>
                  Discussion
                </DropItem>
                <DropDivider />
                <DropItem onClick={() => window.open("https://discord.gg/", "_blank")}>
                  Discord
                </DropItem>
              </Dropdown>
            </NavButton>

            <button className="nav-item" onClick={() => go("/support")}>
              Support
            </button>

            {user.role === "ADMIN" && (
              <button
                className="nav-item forge-btn"
                onClick={() => go("/forge")}
              >
                Forge
              </button>
            )}
          </nav>

          {/* USER PROFILE */}
          <section className="user-profile-section" aria-label="User profile">
            <div className="user-identity">
              <span className="auth-tag">{user.role}_ACCESS</span>
              <span className="operator-name">{user.username}</span>
            </div>

            <button className="user-avatar-circle" aria-label="User menu">
              <div className="avatar-inner" />
            </button>
          </section>
        </div>
      </div>
    </header>
  );
}

/* ---------- Small local helpers (no styling here) ---------- */

function NavButton({ label, children, onEnter, onLeave, onClick }) {
  return (
    <div
      className="nav-wrapper"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button className="nav-item" onClick={onClick}>
        {label}
      </button>
      {children}
    </div>
  );
}

function Dropdown({ active, children }) {
  return (
    <div className={`nav-dropdown ${active ? "is-open" : ""}`} aria-hidden={!active}>
      {children}
    </div>
  );
}

function DropItem({ children, onClick, disabled }) {
  return (
    <button
      className="dropdown-item"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

function DropLabel({ children }) {
  return <div className="dropdown-label">{children}</div>;
}

function DropDivider() {
  return <div className="dropdown-divider" />;
}
