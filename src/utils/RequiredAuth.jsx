import React from "react";
import { Navigate } from "react-router";
import jwtDecode from "jwt-decode";

export function RequireUserAuth({ children }) {
  const tokens = localStorage.getItem('tokens');
  if (tokens) {
    const user = jwtDecode(tokens);
    var auth = user.exp > Date.now() / 1000;
    var userAccess = user.roles.some(e => e.code === "USER" || e.code === "ADMIN");
  }
  
  return auth && userAccess ? children : <Navigate to="/signin" replace />;
}

export function RequireAdminAuth({ children }) {
  const tokens = localStorage.getItem('tokens');
  if (tokens) {
    const user = jwtDecode(tokens);
    var auth = user.exp > Date.now() / 1000;
    var adminAccess = user.roles.some(e => e.code === "ADMIN");
  }
  
  return auth && adminAccess ? children : <Navigate to="/signin" replace />;
}
