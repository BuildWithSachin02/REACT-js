import { useState } from "react"
import { useNavigate, Link } from "react-router"
export default function Signup() {
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  
  const getUserEmail = (e)=>{
    setUser({...user, email:e.target.value})
  }
  const getUsername = (e)=>{
    setUser({...user, username:e.target.value})
  }
  const getPassword = (e)=>{
    setUser({...user,password:e.target.value})
  }
  const handleSignIn = ()=>{
    // console.log(user)
    localStorage.setItem("user",JSON.stringify(user));
    navigate("/");
  }

  return (
   <> 
      <div className="container d-flex justify-content-center">
      <div className="mt-5 border pt-5 pb-5 w-50 ps-5 pe-5">
        <h4 className="mb-3">Register User</h4>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
          onChange={getUserEmail}
          type="email"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          username
        </span>
        <input
          onChange={getUsername}
          type="email"
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
       type="button" className="btn btn-success w-100">Register Now</button>
      {/* <p>Not register yet click here <Link to="/SignUp">here!</Link></p> */}
      </div>
    </div>

   </>
  )
}
