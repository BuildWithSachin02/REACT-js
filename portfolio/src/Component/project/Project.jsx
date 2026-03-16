import "./Project.css";
import Weather from "./Pro-image/Weather.webp";

const Project = () => {
  return (
    <>
      <div className="container projects-container">
        <div className="row text-center">
          <div className="text-center">
            <span className="recent">RECENT</span> 
            <span className="projects-title">PROJECTS</span>
          </div>
          <div className="col-3 mt-5">
            <a href="https://buildwithsachin02.github.io/weatherApp/"><img src={Weather} className="rounded" alt="" /></a>
            <h5 className="mt-2">Weather app</h5>
            <p>Weather report</p>
          </div>
          <div className="col-3 mt-5">
            <a href="https://buildwithsachin02.github.io/notes-app/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa61nGCtZMfj2oUL6HwOO5AE5JX7LolYPig&s" className="rounded" alt="" /></a>
            <h5>Notes App</h5>
            <p>Add your daily tasks</p>
          </div>
          <div className="col-3 mt-5">
            <a href="https://buildwithsachin02.github.io/showEasestore/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofGI77Cz3tXbKTReFuM-Gqlp88zXT4Rgm6A&s" className="rounded" alt="" /></a>
            <h5>E-commerce Web App</h5>
            <p>Simply Goods</p>
          </div>
          <div className="col-3 mt-5">
            <a href="https://navyantravels.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWT-7DycWq2GLmonKXV2v4VAvdpomwMKiXZA&s" className="rounded" alt="" /></a>
            <h5>Weather app</h5>
            <p>Weather report</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
