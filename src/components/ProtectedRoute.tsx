// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
  requireSubscription?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireSubscription }) => {
  const { isAuthenticated, isSubscribed } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireSubscription && !isSubscribed) {
    return <Navigate to="/pricing" replace />;
  }

  return children;
};

export default ProtectedRoute;