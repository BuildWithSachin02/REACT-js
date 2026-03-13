import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Project from "./Component/Project/Project";
import Tool from "./Component/Tool/Tool";
import "./App.css"
import Skill from "./Component/Skill/Skill";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Project/>
      <Tool/>
      <Skill/>
      <Footer/>
    </>
  );
};

export default App;