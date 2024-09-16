import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userEmail = localStorage.getItem('userEmail');

  if (!userEmail) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  // If user is logged in, render the children (protected content)
  return children;
};

export default ProtectedRoute;
