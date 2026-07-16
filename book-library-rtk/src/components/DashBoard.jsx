import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function DashBoard() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
