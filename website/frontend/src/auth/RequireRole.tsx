
import { Navigate, useLocation } from "react-router-dom";
import { type Role, useAuth } from "./AuthContext";

export function RequireRole({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const { status, hasRole } = useAuth();
  const loc = useLocation();

  if (status === "loading") {
    return <div className="page page--center">Loading…</div>;
  }

  if (!hasRole(role)) {
    return <Navigate to="/" replace state={{ from: loc.pathname }} />;
  }

  return <>{children}</>;
}
