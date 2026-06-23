import React from "react";
import {Routes, Route} from "react-router"
import Home from "./screens/Home";
import About from "./screens/About";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin"
import ProtectedRoute from "./component/ProtectedRoute";
const App = ()=>{
  return <> 
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/home" element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute>
        <About/>
      </ProtectedRoute>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </>
}
export default App