import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Project from "./Component/Project/Project";
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />

      <div className="layout">

        {/* LEFT SIDEBAR */}
        <Hero />

        {/* RIGHT CONTENT */}
        <div className="right-section">
          <Project />
        </div>

      </div>
    </>
  );
};

export default App;