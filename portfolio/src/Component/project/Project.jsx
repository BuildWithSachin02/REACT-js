import "./Project.css";
import Weather from "./Pro-image/Weather.webp";

const Project = () => {
  return (
    <>
      <div className="container projects-container">
        <div className="row">
          <div className="text-center">
            <span className="recent">RECENT</span> 
            <span className="projects-title">PROJECTS</span>
          </div>
          <div className="col-3 mt-5">
            <img src={Weather} className="rounded" alt="" />
            <h5>Weather app</h5>
            <p>Weather report</p>
          </div>
          <div className="col-3 mt-5">
            <img src={Weather} className="rounded" alt="" />
            <h5>Weather app</h5>
            <p>Weather report</p>
          </div>
          <div className="col-3 mt-5">
            <img src={Weather} className="rounded" alt="" />
            <h5>Weather app</h5>
            <p>Weather report</p>
          </div>
          <div className="col-3 mt-5">
            <img src={Weather} className="rounded" alt="" />
            <h5>Weather app</h5>
            <p>Weather report</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
