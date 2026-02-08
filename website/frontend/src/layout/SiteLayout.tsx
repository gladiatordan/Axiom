import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import "../styles/layout/page-container.css";

export function SiteLayout() {
  return (
    <div className="app">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
