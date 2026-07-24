import React, { useState } from "react";
import { Link } from "react-router";
import "./sidebar.css";

export default function Sidebar() {
  const [isClick, setClick] = useState("home");
  return (
    <div>
      <>
        <h1 className="visually-hidden">Sidebars examples</h1>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
          //   style={{ width: "280px" , height:"100vh"}}
        >
          <Link
            to={"/"}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <i className="bi bi-substack fs-5"></i>
            <span className="fs-4 ms-2">Blog App</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to={"/"}
                className={`nav-link text-white ${isClick === "home" ? "active" : ""}`}
                aria-current="page"
                onClick={() => setClick("home")}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#home" />
                </svg>
                Home
              </Link>
            </li>
            {/* <li>
              <Link to={"/createblogs"} className="nav-link text-white">
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#speedometer2" />
                </svg>
                Dashboard
              </Link>
            </li> */}
            <li>
              <Link
                onClick={() => setClick("create blog")}
                to={"/createblogs"}
                className={`nav-link text-white ${isClick === "create blog" ? "active" : ""}`}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#table" />
                </svg>
                Create Blogs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setClick("all blogs")}
                to={"/allblogs"}
                className={`nav-link text-white ${isClick === "all blogs" ? "active" : ""}`}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#grid" />
                </svg>
                All Blogs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setClick("catogories")}
                to={"/category"}
                className={`nav-link text-white ${isClick === "catogories" ? "active" : ""}`}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#people-circle" />
                </svg>
                Catogories
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              to={""}
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://avatars.githubusercontent.com/u/220406407?s=400&u=e14fae35a1e63a0c8cb82bab9783f56e7a4fbb3e&v=4"
                alt=""
                width={32}
                height={32}
                className="rounded-circle me-2"
              />
              <strong>Sachin</strong>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <Link className="dropdown-item" to={""}>
                  New project...
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={""}>
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={""}>
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to={""}>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}
