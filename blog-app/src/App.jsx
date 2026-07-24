import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import Sidebar from "./componets/Sidebar";
import CreateBlogs from "./pages/CreateBlogs";
import AllBlogs from "./pages/AllBlogs";
import Category from "./pages/Category";
import ViewDetails from "./pages/ViewDetails"

export default function App() {
  const [sendBlogDetails,setSendBlogDetails] = useState(null);//this state role is when i click on view details button so that id blog store the whole details and after shift to the viewdetails.jsx and we can see the that blog we have details page
  return (
    <>
      <div>
        <Sidebar />
        <div className="main-content">
          <Routes>
              <Route path="/" element={<Home setSendBlogDetails={setSendBlogDetails}/>}/>
              <Route path="/createblogs" element={<CreateBlogs/>}/>
              <Route path="/allblogs" element={<AllBlogs setSendBlogDetails={setSendBlogDetails}/>}/>
              <Route path="/category" element={<Category/>}/>
              <Route path="/viewdetails" element={<ViewDetails sendBlogDetails= {sendBlogDetails}/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}
