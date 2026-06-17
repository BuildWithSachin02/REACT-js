import Navbar from "../componet/Navbar";
import Footer from "./Footer";

export default function Skill() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "React JS",
    "WordPress",
    "Elementor",
    "WooCommerce",
    "Git & GitHub",
    "REST API",
  ];

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center mb-4">My Skills</h1>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h5>{skill}</h5>
                  <p className="text-muted">
                    Experience working with {skill} in real-world projects and
                    continuous learning.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h3>Technical Summary</h3>
          <p>
            I specialize in WordPress development and modern frontend
            technologies. My experience includes building responsive websites,
            integrating APIs, creating dynamic user interfaces with React, and
            developing business websites using WordPress, Elementor, and
            WooCommerce.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}