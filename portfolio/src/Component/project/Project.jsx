import "./Project.css";
import Weather from "./Pro-image/Weather.webp";


const Project = () => {
  return (
    <>
      <div id="Project" className="container projects-container">
        <div className="row">
          <div className="text-center">
            <span className="recent">RECENT</span> 
            <span className="projects-title">PROJECTS</span>
          </div>
          <div className="col-3 mt-5 text-center">
            <a href="https://buildwithsachin02.github.io/weatherApp/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIJ3e6rYMkhW3-C5jSocmsld13g4ujw0EtQ&s" className="rounded" alt="" /></a>
            <h5 className="mt-3">Weather app</h5>
            <p>Weather report</p>
          </div>
          <div className="col-3 mt-5 text-center">
            <a href="https://buildwithsachin02.github.io/notes-app/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB2wGMLFCXbLZHIDXTS9mE-WZr1C3tWBlOw&s" className="rounded" alt="" />
            </a>
            <h5 className="mt-3">Notes App</h5>
            <p>Add your thoughts and tasks</p>
          </div>
          <div className="col-3 mt-5 text-center">
            <a href="https://buildwithsachin02.github.io/showEasestore/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2n90sG3uFr6PSNqKOwF14Ye9GEXK1ceg_g&s" className="rounded" alt="" />
            </a>
            <h5 className="mt-3">E-commerce site</h5>
            <p>Shop Now</p>
          </div>
          <div className="col-3 mt-5 text-center">
            <a href="https://navyantravels.com/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCXuLPsilceOw8Y3eRAb73IKN5jf7QD9i-Q&s" className="rounded" alt="" />
            </a>
            <h5 className="mt-3">Travels Sites</h5>
            <p>Full-stack web app and booking tours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
