import Navbar from "../componet/Navbar";
import Bio from "../assets/photo.png";
import Footer  from "./Footer";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row align-items-center">

          <div className="col-md-4 text-center">
            <img
              src={Bio}
              alt="Sachin Yadav"
              className="img-fluid rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <h1>About Me</h1>

            <p>
              Hello! I'm <strong>Sachin Yadav</strong>, a passionate
              WordPress Developer and Full Stack Web Developer from Gujarat,
              India. I enjoy creating responsive, user-friendly, and
              SEO-friendly websites that help businesses establish a strong
              online presence.
            </p>

            <p>
              I have experience working with WordPress, Elementor,
              WooCommerce, HTML, CSS, JavaScript, React, Bootstrap,
              Git, and GitHub. I continuously learn new technologies
              and improve my development skills through real-world projects.
            </p>

            <p>
              My goal is to build modern web applications and provide
              high-quality digital solutions that deliver value to clients
              and users.
            </p>

            <button className="btn btn-primary">
              Download Resume
            </button>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}