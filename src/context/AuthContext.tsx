// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'student' | 'jobPoster' | 'other';

interface AuthContextType {
  userRole: UserRole | null;
  isAuthenticated: boolean;
  isSubscribed: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
  toggleSubscription: () => void;
}

const AuthContext = createContext<AuthContextType>({
  userRole: null,
  isAuthenticated: false,
  isSubscribed: false,
  login: () => {},
  logout: () => {},
  toggleSubscription: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const login = (role: UserRole) => {
    setUserRole(role);
    setIsAuthenticated(true);
    setIsSubscribed(false); // Default to free tier on login
  };

  const logout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
    setIsSubscribed(false);
  };

  const toggleSubscription = () => {
    setIsSubscribed((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        userRole,
        isAuthenticated,
        isSubscribed,
        login,
        logout,
        toggleSubscription,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);