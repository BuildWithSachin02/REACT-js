import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AllBooks from "./AllBooks";
import "./Home.css";

export default function Home({ setSendBookDetails }) {
  return (
    <>
      <div className="d-flex layout">
        <Sidebar className="sidebar" />
        <div className="ps-5 container content">
          <Navbar />
          <div className="mt-4 page-content">
            <AllBooks setSendBookDetails={setSendBookDetails} />
          </div>
        </div>
      </div>
    </>
  );
}
