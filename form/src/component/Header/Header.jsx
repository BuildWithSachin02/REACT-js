import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
              <a className="nav-link" href="#">
                Users
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link " aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
