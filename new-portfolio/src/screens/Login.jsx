import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({dummyUser}) {
    const navigate = useNavigate();//this navigation one disply to another display.
 
  const [user, setUser] = useState({ email: "", password: "" }); // why we use object because object is easy to use and mutiple data we can strore and diffrent type of data

  const getEmail = (e) => {
    setUser({ ...user, email: e.target.value })//this overwriteing and store what user typed
    // console.log(user);
  }
  const getPassword = (e)=>{
    setUser({...user, password:e.target.value})//this overwriteing and store what user typed
  }
  //and we create two function and one is holds email and another one is holding password this using in 1 state
  //and now we are doing comparison with (what actual user === what user typed)
  //and we are comarison and when user entering wrong email and password and we not going there
  //another page and user have to typed correct email and password

  const handleLogin = ()=>{
    //we are using if-else
    //what we have 1. is we have a user obj and dummyuser(this is actual user)
        if(user.email == dummyUser.email && user.password == dummyUser.password){
            navigate("/home");
        }else{
            alert("enter the valid email and password");
        }
  }

  return (
    <>
      <div className="container w-25 mt-5 border p-5 pt-0">
        <h1 className="mt-5">Login</h1>
        {/* <form> */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={getEmail}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={getPassword}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            login
          </button>
        {/* </form> */}
      </div>
    </>
  );
}
