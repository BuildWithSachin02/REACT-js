import React from "react";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home-pages/Home";
import { Route, Routes } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}
