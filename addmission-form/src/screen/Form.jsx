import React, {useEffect, useState} from "react";


// const student = {
//     first:"",
//         last:"",
//         medium:"",
//         dob:"",
//         father:"",
//         mother:"",
//         gender:"",
//         address:"",
//         email:"",
//         phone:""
// }

const Form = () => {
    const [student,setStudent] = useState({});

    const getFirstName = (e)=>{
        setStudent({
            ...student,
            first:e.target.value,
        })        
    }
    const getLastName = (e)=>{
        setStudent({
            ...student, 
            last:e.target.value
        })
    }
    const getClassName = (e)=>{
        setStudent({
            ...student,
            class:e.target.value
        })
    }
    const getMedium = (e)=>{
        setStudent({
            ...student,
            medium:e.target.value
        })
    }
    const getStdDob = (e)=>{
        setStudent({
            ...student,
            dob:e.target.value
        })
    }
    const getFatherName = (e)=>{
        setStudent({
            ...student,
            father:e.target.value
        })
    }
    const getMotherName = (e)=>{
        setStudent({
            ...student,
            mother:e.target.value
        })
    }
    const getGender = (e)=>{
        setStudent({
            ...student,
            gender:e.target.value
        })//to be continue this wrong way to code!
    }
    const getAddress = (e)=>{
        setStudent({
            ...student,
            address:e.target.value
        })
    }
    const getMobile = (e)=>{
        setStudent({
            ...student,
            mobile:e.target.value
        })
    }
    const getEmail = (e)=>{
        setStudent({
            ...student,
            email:e.target.value
        })
    }
    
    const handleSubmitForm = ()=>{
        // console.log(student)
        if(!student.name || !student.last || !student.email || !student.mobile || !student.address){
            alert("enter the input fields!")
        }
    }

  return (
    <>
      <div className="container w-75">
        <h3 className="text-center mt-5">School Addmission Form*</h3>
        <div className="std-fields d-flex justify-content-center border pb-5 mt-3">
          <div className="input-group mt-5 w-50">
            <span className="input-group-text">First and last name</span>
            <input //name-first
              onChange={getFirstName}
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input //name-last
            onChange={getLastName}
              type="text"
              aria-label="Last name"
              className="form-control"
            />
            <div className="input-group flex-nowrap mt-3">
              <span className="input-group-text" id="addon-wrapping">
                Class You want to apply*
              </span>
              <input //addmission-class
              onChange={getClassName}
                type="text"
                className="form-control"
                placeholder="12th"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap mt-3">
              <span className="input-group-text" id="addon-wrapping">
                Which medium you want to choose*
              </span>
              <select
                onChange={getMedium}
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue="">Open this select menu</option>
                <option value={"English(1-12(Science))"}>English(1-12(Science))</option>
                <option value={"Hindi(1-12(Commerce/Arts))"}>Hindi(1-12(Commerce/Arts))</option>
                <option value={"Gujarati(1-12(Commerce/Arts))"}>Gujarati(1-12(Commerce/Arts))</option>
              </select>
            </div>
            <div className="input-group flex-nowrap mt-3">
              <span className="input-group-text" id="addon-wrapping">
                Student DOB*
              </span>
              <input //Student-DOB
              onChange={getStdDob}
                type="Date"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text">Parent/Guardian Name</span>
              <input //Father-Mother Name
              onChange={getFatherName}
                type="text"
                aria-label="Father-Name"
                placeholder="Father-Name"
                className="form-control"
              />
              <input //Father-Mother Name
              onChange={getMotherName}
                type="text"
                aria-label="Mother-Name"
                placeholder="Mother-Name"
                className="form-control"
              />
            </div>
            {/* //radio-buttons for genders */}
            <div className="gender-radio-btn d-flex gap-3 mt-3">
              <div className="form-check">
                <input value={"male"}
                  onChange={getGender}   
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input value={"female"}
                onChange={getGender}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input value={"lgbtq"}
                onChange={getGender}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  defaultValue="option3"
                  disabled=""
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  LGBTQ
                </label>
              </div>
            </div>{" "}
            {/* //radio-buttons for genders */}
            <div className="input-group mt-3">
              <span className="input-group-text" id="visible-addon">
                Address
              </span>
              <input
              onChange={getAddress}
                type="text"
                className="form-control"
                placeholder="Address"
                aria-label="Username"
                aria-describedby="visible-addon"
              />
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="visible-addon">
                Phone +91
              </span>
              <input
              onChange={getMobile}
                type="phone"
                className="form-control"
                placeholder="9876543210"
                aria-label="Username"
                aria-describedby="visible-addon"
              />
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="visible-addon">
                Email
              </span>
              <input
              onChange={getEmail}
                type="email"
                className="form-control"
                placeholder="youremail@gmail.com"
                aria-label="Username"
                aria-describedby="visible-addon"
              />
            </div>
            <button onClick={handleSubmitForm}
             type="button" className="btn btn-success mt-3 w-100">Success</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
