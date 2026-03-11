import React from "react"
import Navbaar from "./Component/navbaar/Navbaar"
import Hero from "./Component/Hero/Hero.jsx"
import Education from "./Component/Education/Education.jsx"
import Skill from "./Component/Skill/Skill.jsx"
import Contactform from "./Component/Contact form/Contact.jsx";
const App = ()=> {
  return <>
  <div>
    <Navbaar />
     <Hero />
    <Education />
    <Skill />
    <Contactform/>
  </div>
  </>
}
export default App