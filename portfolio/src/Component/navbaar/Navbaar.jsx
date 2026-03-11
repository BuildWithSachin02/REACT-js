import "./Navbar.css";

function Navbaar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-n1">
      <div className="container">
        <a className="navbar-brand" href="#">
          SachinDev
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5 d-flex gap-4">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">
                Education
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbaar;