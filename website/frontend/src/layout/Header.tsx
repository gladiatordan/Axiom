import React, { useMemo, useState } from "react";
import { Link, NavLink as RRNavLink, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { NAV_SECTIONS, type NavSection } from "../nav/navModel";
import { NavTray } from "../nav/NavTray";
import { MobileNav } from "../nav/MobileNav";

import "../styles/layout/header.css";
import "../styles/navigation/nav-bar.css";
import "../styles/navigation/nav-tray.css";
import "../styles/navigation/mobile-nav.css";
import "../styles/components/inputs.css";
import "../styles/components/buttons.css";
import "../styles/components/user-profile.css";

type TrayState = { open: boolean; sectionId: NavSection["id"] | null };

export function Header() {
  const { user, hasRole, login, logout } = useAuth();
  const loc = useLocation();

  const [tray, setTray] = useState<TrayState>({ open: false, sectionId: null });
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSection = useMemo(() => {
    if (!tray.sectionId) return null;
    return NAV_SECTIONS.find((s) => s.id === tray.sectionId) ?? null;
  }, [tray.sectionId]);

  // Close tray on route change
  React.useEffect(() => {
    setTray({ open: false, sectionId: null });
    setMobileOpen(false);
  }, [loc.pathname]);

  function toggleSection(id: NavSection["id"]) {
    setTray((prev) => {
      if (prev.open && prev.sectionId === id) return { open: false, sectionId: null };
      return { open: true, sectionId: id };
    });
  }

  async function onLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const username = String(fd.get("username") ?? "");
    const password = String(fd.get("password") ?? "");
    await login(username, password);
    e.currentTarget.reset();
  }

  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="mobile-nav__toggle"
          type="button"
          aria-label="Open navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>

        <Link className="header__logo" to="/">
          AXIOM
        </Link>

        <nav className="nav-bar" aria-label="Primary navigation">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`nav-bar__item ${tray.open && tray.sectionId === s.id ? "nav-bar__item--active" : ""}`}
              onClick={() => toggleSection(s.id)}
            >
              {s.label}
            </button>
          ))}

          <RRNavLink className="nav-bar__button" to="/support">
            Support
          </RRNavLink>

          {hasRole("STAFF") && (
            <RRNavLink className="nav-bar__button nav-bar__button--forge" to="/forge">
              Forge
            </RRNavLink>
          )}
        </nav>

        <div className="user-profile">
          {!user ? (
            <div className="user-profile__anon">
              <details className="user-profile__login">
                <summary className="btn btn--ghost">Login</summary>
                <form className="user-profile__login-form" onSubmit={onLoginSubmit}>
                  <label className="field">
                    <span className="field__label">Username</span>
                    <input className="input" name="username" autoComplete="username" />
                  </label>
                  <label className="field">
                    <span className="field__label">Password</span>
                    <input className="input" name="password" type="password" autoComplete="current-password" />
                  </label>
                  <button className="btn btn--primary" type="submit">
                    Sign in
                  </button>
                  <Link className="user-profile__register-link" to="/register">
                    Register
                  </Link>
                </form>
              </details>
            </div>
          ) : (
            <details className="user-profile__menu">
              <summary className="btn btn--ghost">{user.handle}</summary>
              <div className="user-profile__menu-panel">
                <div className="user-profile__meta">
                  <div className="user-profile__handle">{user.handle}</div>
                  <div className="user-profile__roles">{user.roles.join(", ")}</div>
                </div>
                <button className="btn btn--danger" type="button" onClick={() => void logout()}>
                  Logout
                </button>
              </div>
            </details>
          )}
        </div>
      </div>

      <NavTray open={tray.open} section={activeSection} onClose={() => setTray({ open: false, sectionId: null })} />
      <MobileNav open={mobileOpen} sections={NAV_SECTIONS} />
    </header>
  );
}
