import { useDispatch } from "react-redux";
import { setSearch } from "../APP/features/blogSlices.js";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <nav className="navbar bg-body-bg-secondary border-secondary border border-bottom-1 border border-top-0 border border-start-0 border border-end-0">
          <div className="container">
            <h4 className="navbar-brand text-white">Blog Management</h4>
            <div className="d-flex" role="search">
              <input
                // value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                // ref={searchRef}
                className="form-control me-2 bg-dark text-white border border-secondary"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={() => setSearch("")}
                className="btn btn-outline-primary"
              >
                Reset
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
