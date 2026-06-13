import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
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
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="Skill">
                    Skill
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/contact" aria-disabled="true">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
