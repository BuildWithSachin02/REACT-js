export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light mt-5 py-4">
        <div className="container text-center">
          <h4>Sachin Yadav</h4>

          <p>
            WordPress Developer & Full Stack Web Developer
          </p>

          <div className="mb-3">
            <a
              href="https://github.com/BuildWithSachin02"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <i className="bi bi-github fs-4"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-yadav-92278b3a1/"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>

            <a
              href="https://sachinyadav.navyantravels.com/"
              target="_blank"
              rel="noreferrer"
              className="text-light"
            >
              <i className="bi bi-globe fs-4"></i>
            </a>
          </div>

          <p className="mb-0">
            © 2026 Sachin Yadav. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}