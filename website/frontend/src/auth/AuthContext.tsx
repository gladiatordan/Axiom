import React, { createContext, useContext, useMemo, useState } from "react";

export type Role = "PUBLIC" | "PLAYER" | "STAFF" | "ADMIN";

export type User = {
  id: string;
  handle: string;
  roles: Role[];
};

type AuthStatus = "anonymous" | "loading" | "authenticated";

type AuthContextValue = {
  status: AuthStatus;
  user: User | null;
  highestRole: Role;
  hasRole: (role: Role) => boolean;

  // Stubs for later SSO/Flask wiring
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const roleRank: Record<Role, number> = {
  PUBLIC: 0,
  PLAYER: 1,
  STAFF: 2,
  ADMIN: 3,
};

function computeHighestRole(roles: Role[]): Role {
  return roles.reduce<Role>((best, r) => (roleRank[r] > roleRank[best] ? r : best), "PUBLIC");
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // DEV DEFAULT: authenticated ADMIN
  const [status, setStatus] = useState<AuthStatus>("authenticated");
  const [user, setUser] = useState<User | null>({
    id: "dev-admin",
    handle: "DevAdmin",
    roles: ["ADMIN"],
  });

  const highestRole = useMemo(() => computeHighestRole(user?.roles ?? ["PUBLIC"]), [user]);

  const hasRole = (role: Role) => roleRank[highestRole] >= roleRank[role];

  const login = async (username: string, _password: string) => {
    // TODO: replace with POST /api/auth/login
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 250));
    setUser({ id: "stub-user", handle: username, roles: ["ADMIN"] });
    setStatus("authenticated");
  };

  const logout = async () => {
    // TODO: replace with POST /api/auth/logout
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 150));
    setUser(null);
    setStatus("anonymous");
  };

  const value: AuthContextValue = {
    status,
    user,
    highestRole,
    hasRole,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
