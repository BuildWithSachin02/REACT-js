import React from "react";
import { useNavigate } from "react-router";
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // return isLoggedIn ? children : <Navigate to="/" />;
  if(isLoggedIn){
    return navigate("/home");
  }else{
    return navigate("/");
  }
}