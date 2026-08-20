import React from "react";
import { Navigate } from "react-router";
export default function ProtectedRoutes({ children }) {
  const isAuthenticate = JSON.parse(
    localStorage.getItem("isAuthenticated"),
  );
  if(!isAuthenticate){
    return <Navigate to="/" replace/>
  }
  return children;
}
