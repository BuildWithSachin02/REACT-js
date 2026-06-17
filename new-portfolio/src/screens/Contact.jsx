import Navbar from "../componet/Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center mb-4">Contact Me</h1>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-5">
          <h4>Connect With Me</h4>

          <a
            href="https://github.com/BuildWithSachin02"
            target="_blank"
            rel="noreferrer"
            className="me-3"
          >
            <i className="bi bi-github fs-2"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sachin-yadav-92278b3a1/"
            target="_blank"
            rel="noreferrer"
            className="me-3"
          >
            <i className="bi bi-linkedin fs-2"></i>
          </a>

          <a
            href="https://sachinyadav.navyantravels.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-globe fs-2"></i>
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
}