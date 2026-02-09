import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./app/Router";
import { AuthProvider } from "./context/AuthContext";

// Global styles (organized by purpose)
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/overlay.css";
import "./styles/pages.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
