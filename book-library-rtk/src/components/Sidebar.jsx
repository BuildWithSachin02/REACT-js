import React, { useState } from "react";
import { Link } from "react-router";
import AddBooks from "../pages/AddBooks";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div
      className="d-flex flex-column position-fixed flex-shrink-0 p-3 text-bg-dark"
      style={{ width: 280, height: "100vh" }}
    >
      <div className="d-flex justify-content-start gap-3 ">
        <div>
          <i className="bi bi-book-half fs-3 text-primary"></i>
        </div>
        <div className="mt-2 ">
          <p>Book Library</p>
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            onClick={() => setActiveMenu("dashboard")}
            to={"/home"}
            className={`nav-link text-white ${
              activeMenu === "dashboard" ? "active" : ""
            }`}
            aria-current="page"
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="/home" />
            </svg>
            Home
          </Link>
        </li>
        {/* <li>
          <Link 
          onClick={()=> setActiveMenu("all books")}
          to={"/allbooks"}
           className={`nav-link text-white ${activeMenu === "all books" ? "active" : ""}`}>
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            All Books
          </Link>
        </li> */}
        <li>
          <Link
            onClick={() => {
              setActiveMenu("add books");
            }}
            to={"/addbooks"}
            className={`nav-link text-white ${activeMenu === "add books" ? "active" : ""}`}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#table" />
            </svg>
            ➕ Add Book
          </Link>
        </li>
        <li>
          <Link
          to={"/editbooks"}
            onClick={() => setActiveMenu("edit books")}
            className={`nav-link text-white ${activeMenu === "edit books" ? "active" : ""}`}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#grid" />
            </svg>
            ✏️ Edit Books
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActiveMenu("members")}
            className={`nav-link text-white ${activeMenu === "members" ? "active" : ""}`}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#people-circle" />
            </svg>
            👤 Members
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActiveMenu("setting")}
            className={`nav-link text-white ${activeMenu === "setting" ? "active" : ""}`}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#people-circle" />
            </svg>
            ⚙️ Settings
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" href="#">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
