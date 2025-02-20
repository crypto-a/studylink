// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
  // For demonstration, either check subscription or check certain roles, etc.
  requireSubscription?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireSubscription }) => {
  const { isSubscribed } = useAuth();

  // If a subscription is required and the user is not subscribed, redirect to login or somewhere else
  if (requireSubscription && !isSubscribed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
