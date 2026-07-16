import { userFetch } from "../App/featuresSlicecs/authSlices";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useEffect } from "react";
export default function ProtectedRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
