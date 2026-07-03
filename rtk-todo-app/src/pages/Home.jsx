import React, { useState } from "react";
import CardUserInfo from "../components/CardUserInfo";
import { useDispatch, useSelector } from "react-redux";
import { handleAddUsersDetail } from "../Redux/Slices/crud";
export default function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.formCrud);
  // console.log(allUsers);
  //1. make local state to use handle all input fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    img: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const handleChange = (e) => {
    //whats this means of line this is very easy to understand suppose we have formdata in multiple keys and values
    //so we creating a shorter methods all fields add on key = value
    //suppose i am in lastName input fiels so then e.target object they automatic
    //add on the lastName key : value(e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData, //spread all coping
      [name]: value, //e.target.name = e.target.value
    });
  };
  //handle submit form how we call in this when user press buttons
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(handleAddUsersDetail(formData));
    // console.log(formData)
  };

  return (
    <>
      <div className="mt-5 container d-flex justify-content-center">
        <div className="p-5 bg-light w-50 rounded text-black ">
          <h1 className="mb-4">Form Registration</h1>
          <div className="input-group mb-3">
            <span className="input-group-text">First and last name</span>
            <input
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Father and Mother Name</span>
            <input
              onChange={handleChange}
              name="fatherName"
              value={formData.fatherName}
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              onChange={handleChange}
              value={formData.motherName}
              name="motherName"
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Phone Number</span>
            <input
              onChange={handleChange}
              value={formData.phoneNumber}
              name="phoneNumber"
              type="phone"
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]*"
              required
              placeholder=""
              aria-label="First name"
              className="form-control"
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              value={formData.img}
              name="img"
              type="file"
              className="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
          </div>
          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                onChange={handleChange}
                value={formData.address}
                name="address"
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                onChange={handleChange}
                value={formData.city}
                type="text"
                name="city"
                className="form-control"
                id="inputCity"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select
                onChange={handleChange}
                value={formData.state}
                name="state"
                id="inputState"
                className="form-select"
              >
                <option value={"not selected"}>Choose...</option>
                <option value={"gujarat"}>Gujarat</option>
                <option value={"maharastra"}>Maharastra</option>
                <option value={"rajesthan"}>Rajesthan</option>
                <option value={"punjab"}>Punjab</option>
                <option value={"hariyana"}>Hariyana</option>
                <option value={"madhyapradesh"}>Madhyapradesh</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input
                onChange={handleChange}
                value={formData.zip}
                name="zip"
                type="text"
                className="form-control"
                id="inputZip"
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <hr className="mt-3 mb-0" />
            <div className="col-12">
              <button
                onClick={handleSubmitForm}
                type="submit"
                className="btn btn-primary w-100"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      {allUsers.length == 0 ? (
        <h3>Our Data is Empty Fill The Form!</h3>
      ) : (
        <CardUserInfo />
      )}
    </>
  );
}
