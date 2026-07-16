import React from "react";
import Navbar from "../components/Navbar";
import DashBoard  from "../components/DashBoard"
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <>
      <div className="d-flex">
        <Sidebar/>

        <div className="ps-5 container">
          <Navbar/>
          <div className="mt-5">
            {

            }
          </div>
        </div>
      </div>
    </>
  );
}
