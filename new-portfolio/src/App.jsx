import React from "react";
import "./App.css"
import { Routes, Route, Link } from "react-router";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Skill from "./screens/Skill";
import Login from "./screens/Login";
import ProtectedRoute from "./componet/ProtectedRoute";

//first we have make a object and the object is dummy user and then we login 
    export const dummyUser = {
      email: "admin123",//why we create a object in app.jsx ?? bcz this is parent 
      password: 123,//component and then we sending to login.jsx with props.
    };
const App = () => {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Login dummyUser={dummyUser} />} /> //we are doing sending obejct to the login page to use them and we call this process Props.
          <Route path="/home" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute>
            <About />
          </ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute>
            <Contact />
          </ProtectedRoute>} />
          <Route path="/skill" element={<ProtectedRoute>
            <Skill />
          </ProtectedRoute>} />
        </Routes>
    </>
  );
};
export default App;
