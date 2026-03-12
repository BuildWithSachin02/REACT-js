import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="projects-section">
              <h1 className="recent">RECENT</h1>
              <h1 className="projects-title">PROJECTS</h1>

              <div className="project-card">
                <img src="#" alt="" />

                <div className="project-info">
                  <h2>Damas</h2>
                  <p>Free Framer Template</p>
                </div>

                <div className="arrow">↗</div>
              </div>

              <div className="project-card">
                <img src="#" alt="" />

                <div className="project-info">
                  <h2>NajmAI</h2>
                  <p>SaaS Framer Template</p>
                </div>

                <div className="arrow">↗</div>
              </div>

              <div className="project-card">
                <img src="#" alt="" />

                <div className="project-info">
                  <h2>Faseelh</h2>
                  <p>Free Framer Template</p>
                </div>

                <div className="arrow">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
