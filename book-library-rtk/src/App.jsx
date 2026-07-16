import { Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import DashBoard from "./components/DashBoard";

export default function App() {
  return (
    <>
      <div className="">
        <Routes element={<DashBoard/>}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </div>
    </>
  );
}
