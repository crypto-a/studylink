// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'student' | 'jobPoster' | 'other';

interface AuthContextType {
  userRole: UserRole | null;
  isSubscribed: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
  toggleSubscription: () => void;
}

// Default values - note that isSubscribed would normally come from a real server or token
const AuthContext = createContext<AuthContextType>({
  userRole: null,
  isSubscribed: false,
  login: () => {},
  logout: () => {},
  toggleSubscription: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Mock state for demonstration
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const login = (role: UserRole) => {
    setUserRole(role);
    // In a real app, you'd set subscription state based on server response
    setIsSubscribed(false);
  };

  const logout = () => {
    setUserRole(null);
    setIsSubscribed(false);
  };

  const toggleSubscription = () => {
    // This simulates subscribing/unsubscribing
    setIsSubscribed((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        userRole,
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

// Helper Hook
export const useAuth = () => useContext(AuthContext);
