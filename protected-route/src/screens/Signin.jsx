import React, { useState } from "react";
import {Link, useNavigate} from "react-router"
import Signup from "./Signup";
import Home from "./Home";
export default function Signin() {
  const navigate = useNavigate();

    const [user,setUser] = useState({
      username:"",
      password:""
    })

    const getUsername = (e)=>{
        setUser({...user, username:e.target.value})
    }

    const getPassword = (e)=>{
        setUser({...user,password:e.target.value})
    }

    const handleSignIn = ()=>{
      const credential = JSON.parse(localStorage.getItem("user")) || {};
      // console.log(credential);
      if(!credential){
        alert("please register new user!")
      }else if(user.username == "" || user.password == ""){
        alert("enter the required fields!")
      }else if(user.username == credential.username && user.password == credential.password){
        localStorage.setItem("isLoggedIn","True");//its means user success full login.
        navigate("/home")
      }else{
        alert("invalid username and password!")
      }
    }

  return (
    <div className="container d-flex justify-content-center">
      <div className="mt-5 border pt-5 pb-5 w-50 ps-5 pe-5">
        <h4 className="mb-3">SignIn Form</h4>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          username
        </span>
        <input
          onChange={getUsername}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          password
        </span>
        <input
          onChange={getPassword}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button
      onClick={handleSignIn}
       type="button" className="btn btn-success w-100">Sign In</button>
      <p>Not register yet click here <Link to="/SignUp">here!</Link></p>
      </div>
    </div>
  );
}
