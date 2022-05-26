import React from "react";
import { useAuth } from "../contexts/ContextProvider";
import { Navigate } from "react-router";

export function RequireAuth({ children }) {
  const auth = useAuth();

  if (auth.loading) return <div>Loading...</div>

  return auth.user ? children : <Navigate to="/signin" replace />;
}
