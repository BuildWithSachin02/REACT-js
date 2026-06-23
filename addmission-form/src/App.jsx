import React from "react"
import Form from "./screen/Form"
import Home from "./screen/Home"
import {Routes,Route} from "react-router"
const App = ()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}
export default App