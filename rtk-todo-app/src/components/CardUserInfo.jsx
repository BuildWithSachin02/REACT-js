import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddUsersDetail,
  handleDelete,
  handleUpdateUser,
} from "../Redux/Slices/crud.js";

export default function CardUserInfo({ setEditIndex, setFormData }) {
  const allUsers = useSelector((state) => state.formCrud.allUsers);
  const dispatch = useDispatch();

  const color = [
    "#0EA5E9", // Sky Blue
    "#3B82F6", // Royal Blue
    "#6366F1", // Indigo
    "#8B5CF6", // Purple
    "#A855F7", // Violet
    "#EC4899", // Pink
    "#F43F5E", // Rose
    "#EF4444", // Red
    "#F97316", // Orange
    "#F59E0B", // Amber
    "#FFD700", // Gold
    "#84CC16", // Lime
    "#10B981", // Emerald
    "#14B8A6", // Teal
    "#06B6D4", // Cyan
    "#2DD4BF", // Mint
    "#22D3EE", // Turquoise
    "#4ADE80", // Light Green
    "#FB7185", // Coral
    "#C084FC", // Lavender
  ];
  const randomBgColor = color[Math.floor(Math.random() * color.length)];
  // console.log(randomBgColor);

  const handleUpdate = (user, i) => {
    console.log(i, user);
    setFormData(user); //this on is work for particullar user will go on input field
    setEditIndex(i); //this one is hold a index value for that user index when click a card
  };
  const handleDeleteUser = (user,i)=>{
    const isDelete = window.confirm(`${user.firstName} are you sure you want to delete this!`);
    if(isDelete){
      dispatch(handleDelete(i))
    }
  }

  return (
    <>
      <div className="mt-5 container">
        <h1>Registration Information of Users</h1>
        <hr className="mt-3 mb-3 " />
        <div className="card-parent-body d-flex justify-content-center gap-3">
          {allUsers.map((user, i) => (
            <div key={i} className="card-sections">
              <div className="card" style={{ width: "22rem" }}>
                <img
                  src={user.img}
                  className="card-img-top"
                  style={{ height: "15rem" }}
                  alt="..."
                />
                <div className="card-body pb-0 d-flex gap-3 justify-content-end pe-5">
                  <div>
                    <i
                      onClick={()=> handleDeleteUser(user,i)}
                      className="bi bi-trash fs-5"
                    ></i>
                  </div>
                  <div>
                    <i
                      onClick={() => {
                        handleUpdate(user, i);
                      }}
                      className="bi bi-pencil-square fs-5"
                    ></i>
                  </div>
                </div>
                <hr />
                <div className="card-body pt-0">
                  <h5 className="card-title">
                    {user.firstName} {user.lastName}
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {user.fatherName} and {user.motherName}
                  </li>
                  <li className="list-group-item">{user.phoneNumber},</li>
                  <li className="list-group-item">
                    email:{user.email}, password:{user.password}{" "}
                  </li>
                  <li className="list-group-item">
                    Add:{user.address}, city:{user.city}
                  </li>
                  <li className="list-group-item">
                    State:{user.state}, zip:{user.zip}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
