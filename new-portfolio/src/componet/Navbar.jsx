import { Link, useNavigate } from "react-router";


export default function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
          <div className="container">
            <Link to="/home" className="navbar-brand" href="#">
              SachinDev
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/skill" className="nav-link" href="#">
                    Skill
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" aria-disabled="true">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
