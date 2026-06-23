import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./screens/Home"
import Products from "./screens/Products"
import About from "./screens/About"
import Contact from "./screens/Contact"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}
