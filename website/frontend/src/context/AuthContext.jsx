import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Defaulting to ADMIN for dev as requested
  const [user, setUser] = useState({
    username: "DevAdmin",
    role: "ADMIN", 
    token: "mock-jwt-token"
  });

  const login = (username, password) => {
    // Stub for future Flask integration
    console.log(`Logging in ${username}...`);
    setUser({ username, role: "USER", token: "mock-token" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);