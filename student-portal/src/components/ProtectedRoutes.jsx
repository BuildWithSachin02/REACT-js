import React from "react";
import { Navigate } from "react-router";
export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const isAuthenticate = JSON.parse(
    localStorage.getItem("isAuthenticated"),
  );
  if(!isAuthenticate){
    return <Navigate to="/"/>
  }
  return children;
}
