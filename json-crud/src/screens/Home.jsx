import { React, useState, useEffect } from "react";
import axios from "axios";

//1.we want to get api call to aour json-server this locally how to we do dynamic

export default function Home() {
  const [users, setUsers] = useState([]); //we add all data in this variable
  const [data, setdata] = useState({}); //all input fields info we add this variable
  const [displayBtn, setDisplayBtn] = useState(false); //so when i click on edit this will holds

  //so this calling we are api with json-server.
  const handlefetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  }; //json-server

  //useeffect
  useEffect(() => {
    handlefetchUsers();
    // console.log(users)
  }, []); //useEffect

  const getFirstName = (e) => setdata({ ...data, first: e.target.value });
  const getLastName = (e) => setdata({ ...data, last: e.target.value });
  const getEmail = (e) => setdata({ ...data, email: e.target.value });
  const getPhone = (e) => setdata({ ...data, phone: Number(e.target.value) });
  const getState = (e) => setdata({ ...data, state: e.target.value });
  const getCity = (e) => setdata({ ...data, city: e.target.value });
  const getAge = (e) => setdata({ ...data, age: Number(e.target.value) });
  const getDate = (e) => setdata({ ...data, date: e.target.value });

  const handleSendUsers = async () => {
    if (
      !data.first ||
      !data.last ||
      !data.email ||
      !data.phone ||
      !data.state ||
      !data.city ||
      !data.age ||
      !data.date
    ) {
      alert("Please enter all required fields!");
    } else {
      const res = await axios.post("http://localhost:3000/users", data);
      handlefetchUsers();
      alert("user is added in our json-data!");
      setDisplayBtn(false);
      setdata({});
      //   alert(res.status);//when you see the status code is 201 it means when api calls successfully thats the code of 201
    }
  };

  //DELETE DATA FROM TO JSON-SERVER:-
  const handleDeleteUser = async (id) => {
    const res = await axios.delete("http://localhost:3000/users/" + id);
    handlefetchUsers();
  }; //DELETE DATA FROM TO JSON-SERVER:-

  //UPDATE ON INPUT-FIELDS WHEN USER CLICK ON EDIT ICONS SO ALL DATA WILL GO ON INPUT FIELDS
  const handleEditFeilds = (user) => {
    // console.log(user)
    setdata(user);
    setDisplayBtn(true); //this will be display btn of update
  };
  //UPDATE ON INPUT-FIELDS WHEN USER CLICK ON EDIT ICONS SO ALL DATA WILL GO ON INPUT FIELDS

  //UPDATE DATA FROM JSON-SERVER:-
  const handleUpdateUser = async (id) => {
    if (
      !data.first ||
      !data.last ||
      !data.email ||
      !data.phone ||
      !data.state ||
      !data.city ||
      !data.age ||
      !data.date
    ) {
      return alert("please enter all fields!");
    }
    await axios.put(`http://localhost:3000/users/${id}`, data);
    await handlefetchUsers();
    alert("Updated Successfully");
    setDisplayBtn(false);
    setdata({});
  }; //UPDATE DATA FROM JSON-SERVER:-

  return (
    <>
      <div className="container d-flex align-items-center flex-column">
        <div className="w-50 align-content-center mt-5 border p-5 bg-white">
          <h1 className="mb-4">Registration Form</h1>
          <div className="input-group">
            <span className="input-group-text" id="visible-addon">
              Enter Your Name
            </span>
            <input
              value={data.first || ""}
              onChange={getFirstName}
              type="text"
              className="form-control"
              placeholder="first"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
            <input
              value={data.last || ""}
              onChange={getLastName}
              type="text"
              className="form-control"
              placeholder="last"
              aria-label="Hidden input"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="visible-addon">
              Enter Your Email Address
            </span>
            <input
              value={data.email || ""}
              onChange={getEmail}
              type="text"
              className="form-control"
              placeholder="emailaddress@gmail.com"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="visible-addon">
              Enter Your Phone Number
            </span>
            <input
              value={data.phone || ""}
              onChange={getPhone}
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              maxLength={10}
              required
              className="form-control"
              placeholder="1234567890"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="visible-addon">
              Enter Your State
            </span>
            <input
              value={data.state || ""}
              onChange={getState}
              type="text"
              name="state"
              //   pattern="[0-9]{10}"
              //   maxLength={10} required
              className="form-control"
              placeholder="Gujarat"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
            <input
              value={data.city || ""}
              onChange={getCity}
              type="text"
              name="city"
              //   pattern="[0-9]{10}"
              //   maxLength={10} required
              className="form-control"
              placeholder="surat"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="visible-addon">
              Enter Your Age
            </span>
            <input
              value={data.age || ""}
              onChange={getAge}
              type="tel"
              name="phone"
              pattern="[0-9]{2}"
              maxLength={10}
              required
              className="form-control"
              placeholder="19"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="visible-addon">
              Enter Your Date of Birth
            </span>
            <input
              value={data.date || ""}
              onChange={getDate}
              type="date"
              name="phone"
              //   pattern="[0-9]{2}"
              //   maxLength={10} required
              className="form-control"
              //   placeholder="19"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
          </div>
          <div className="mt-4">
            {displayBtn ? (
              <button
                onClick={() => handleUpdateUser(data.id)}
                className="w-100 btn btn-outline-warning mt-2"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSendUsers();
                }}
                className="w-100 btn btn-outline-success"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 container d-flex gap-3 justify-content-center flex-wrap">
        {
          //if we dont have any users data so this will be so no user
          // and if yes we have a users data so we display of good ui
          users.length == 0 ? (
            <p>no users</p>
          ) : (
            users.map((user, i) => (
              <div
                key={i}
                className="card text-white mb-5"
                style={{ width: "18rem" }}
              >
                <div className="bg-primary list-group-item p-2">
                  <div className="d-flex justify-content-between gap-3">
                    <div>
                      <p className="fs-5">Users Details</p>
                    </div>
                    <div className="d-flex gap-3">
                      <i
                        onClick={() => handleEditFeilds(user)}
                        className="bi bi-pencil-square fs-5"
                      ></i>
                      <i
                        onClick={() => handleDeleteUser(user.id)}
                        className="bi bi-trash3-fill fs-5"
                      ></i>
                    </div>
                  </div>
                </div>
                <ul className="list-group list-group-flush text-white">
                  <li className="list-group-item text-black">
                    {user.first} {user.last}
                  </li>
                  <li className="list-group-item">{user.email}</li>
                  <li className="list-group-item">{user.phone}</li>
                  <li className="list-group-item">{user.state}</li>
                  <li className="list-group-item">{user.city}</li>
                  <li className="list-group-item">{user.age}</li>
                  <li className="list-group-item">{user.date}</li>
                </ul>
              </div>
            ))
          )
        }
      </div>
    </>
  );
}
