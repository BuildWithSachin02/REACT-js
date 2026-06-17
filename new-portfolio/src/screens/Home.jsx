import Navbar from "../componet/Navbar";
import Bio from "../assets/photo.png";
import Footer from "./Footer"
import { CountUp } from "react-countup";
export default function Home() {
  // console.log(CountUp);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className=" card mb-3" style={{ maxWidth: 1220 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Bio} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Hello World</h3>
                <h5 className="card-title">Sachin Yadav</h5>
                <p className="card-text">
                  Hi, I'm Sachin Yadav, a WordPress Developer and Full Stack Web
                  Developer from Gujarat, India. I have experience building
                  responsive websites using WordPress, Elementor, WooCommerce,
                  HTML, CSS, JavaScript, React, and Bootstrap. I enjoy creating
                  user-friendly websites and continuously improving my web
                  development skills through real-world projects and client
                  work.
                </p>
                <a href="https://github.com/BuildWithSachin02">
                  <i class="bi bi-github fs-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/sachin-yadav-92278b3a1/">
                  <i class="bi bi-linkedin fs-2 ms-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/sachin-yadav-92278b3a1/">
                  <i class="bi bi-instagram fs-2 ms-2"></i>
                </a>
                <a href="https://sachinyadav.navyantravels.com/">
                  <i class="bi bi-code-slash fs-2 ms-2"></i>
                </a>
              </div>
              <div className="row p-5">
                <div className="col-4">
                  <div id="list-example" className="list-group">
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-1"
                    >
                      Projects Completed
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-2"
                    >
                      Happy Clients
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-3"
                    >
                      Years of Experience
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#list-item-4"
                    >
                      Website Visitors
                    </a>
                  </div>
                </div>

                <div className="col-8">
                  {/* Inline styles lagayi hain taaki scroll active ho */}
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-smooth-scroll="true"
                    tabIndex={0}
                    style={{
                      height: "300px",
                      overflowY: "scroll",
                      position: "relative",
                    }}
                  >
                    <h4 id="list-item-1" className="pt-2">
                      Projects Completed
                    </h4>
                    <p style={{ paddingBottom: "150px" }}>
                      I have successfully worked on a variety of web development
                      projects, including portfolio websites, business websites,
                      travel websites, and WordPress-based solutions. Each
                      project has helped me improve my skills in design,
                      development, responsiveness, and user experience. I focus
                      on creating websites that are visually appealing, easy to
                      use, and optimized for performance. Through these
                      projects, I have gained valuable hands-on experience in
                      solving real-world challenges and delivering quality
                      results.
                    </p>
                    <h4 id="list-item-2" className="pt-2">
                      Happy Clients
                    </h4>
                    <p style={{ paddingBottom: "150px" }}>
                      Client satisfaction is one of my top priorities in every
                      project I undertake. I take the time to understand
                      business requirements and transform ideas into functional
                      websites that meet client expectations. By maintaining
                      clear communication and providing reliable support, I aim
                      to build long-term professional relationships. Positive
                      feedback from clients motivates me to continue improving
                      my skills and delivering high-quality work.
                    </p>

                    <h4 id="list-item-3" className="pt-2">
                      Years of Experience
                    </h4>
                    <p style={{ paddingBottom: "150px" }}>
                      Over the years, I have dedicated myself to learning and
                      practicing modern web development technologies. My
                      experience includes working with WordPress, Elementor,
                      WooCommerce, HTML, CSS, JavaScript, React, Bootstrap, and
                      various development tools. Every project and learning
                      opportunity has contributed to my growth as a developer. I
                      continuously explore new technologies and best practices
                      to stay updated in the ever-evolving web development
                      industry.
                    </p>

                    <h4 id="list-item-4" className="pt-2">
                      Website Visitors
                    </h4>
                    <p style={{ paddingBottom: "150px" }}>
                      The websites I create are designed with user engagement,
                      responsiveness, and search engine optimization in mind. By
                      focusing on performance and accessibility, I help
                      businesses provide a better experience for their visitors.
                      A well-structured website can attract more users, increase
                      engagement, and strengthen an online presence. My goal is
                      to develop websites that not only look professional but
                      also deliver meaningful results for businesses and their
                      audiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-stack mt-5">
          <h1 className="text-center mb-4">Tech Stack</h1>

          <div className="row text-center g-3">
            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-filetype-html fs-1"></i>
                <h5>HTML5</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-filetype-css fs-1"></i>
                <h5>CSS3</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-filetype-js fs-1"></i>
                <h5>JavaScript</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-bootstrap fs-1"></i>
                <h5>Bootstrap</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-code-square fs-1"></i>
                <h5>React JS</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-wordpress fs-1"></i>
                <h5>WordPress</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-git fs-1"></i>
                <h5>Git & GitHub</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3">
                <i className="bi bi-cart fs-1"></i>
                <h5>WooCommerce</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="education mt-5">
  <h1 className="text-center mb-4">Education</h1>

  <div className="card p-4">
    <h4>Bachelor of Commerce (B.Com)</h4>
    <p>2021 - 2024</p>

    <hr />

    <h4>Full Stack Web Development</h4>
    <p>
      Learning HTML, CSS, JavaScript, React JS, WordPress,
      Bootstrap, Git & GitHub and modern web development tools.
    </p>
  </div>
</div>
<div className="experience mt-5">
  <h1 className="text-center mb-4">Experience</h1>

  <div className="card p-4">
    <h4>WordPress Developer</h4>
    <p>
      Built responsive websites using WordPress, Elementor and
      WooCommerce. Worked on portfolio, travel and business websites.
    </p>

    <hr />

    <h4>Full Stack Developer Trainee</h4>
    <p>
      Developing web applications using React JS, JavaScript,
      Bootstrap and APIs while improving frontend and backend skills.
    </p>
  </div>
</div>
<div className="projects mt-5">
  <h1 className="text-center mb-4">Projects</h1>

  <div className="row g-4">

    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <h4>Navya Travels</h4>
          <p>
            Travel booking website developed using WordPress and Elementor.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <h4>Portfolio Website</h4>
          <p>
            Personal portfolio built using React JS and Bootstrap.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <h4>ShopEase</h4>
          <p>
            E-commerce website using JavaScript, API integration and LocalStorage.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
      </div>
        <Footer/>

    </>
  );
}
