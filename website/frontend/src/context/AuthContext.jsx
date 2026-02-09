import { createContext, useContext } from "react";

const AuthContext = createContext({
  user: {
    role: "ADMIN", // stubbed for now
    username: "OPERATOR_01",
    authenticated: true,
  },
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          role: "ADMIN",
          username: "OPERATOR_01",
          authenticated: true,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
