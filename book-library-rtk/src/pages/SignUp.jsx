import { Link } from "react-router";
import { userPost, userFetch } from "../App/featuresSlicecs/authSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { current } from "@reduxjs/toolkit";

export default function SignUp() {
  const [isHide, setHide] = useState(false);
  const [isUserEnterPasswordFields, setIsUserEnterPasswordFields] =
    useState(false);
  const [isInvalidEmailAdd, setInvalidEmailAdd] = useState(false);
  const [ispasswordWeak, setPasswordWeak] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  // console.log(users)
  const userEmail = useRef("");
  const userPassword = useRef("");
  const userName = useRef("");
  const userSetpassword = useRef("");

  useEffect(()=>{
    dispatch(userFetch());//why i need to call userfetch bcz i want to check user is exits or not that why i need this one
  },[dispatch])

  const handlePostUsers = (users) => {
    let userNameRef = userName.current.value;
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    let setPassword = userSetpassword.current.value;

    if (!userNameRef || !email || !setPassword || !password) {
      alert("enter the required fields");
      return;
    }
    /////////////////////////////////////////1.check a email validation ////////////////////////////////
    //1.check email have regex or not ??
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      //so .test using for to check a if email have write format then we accept and email then we add in our json and test is giving a boolean value and if email have @.com then he return a true value so this good and what if he give false value then he give a alert
      setInvalidEmailAdd(!isInvalidEmailAdd); //true
      // alert("invalid email address!");
      return;
    }
    /////////////////////////////////////////1.check a email validation-END ////////////////////////////////

    /////////////////////////////////////////2.check both password validation //////////////////////////
    //2.check what user is typeing in password fields
    //a.first have to check a both of password are matched and if both password are not matched for give a alert
    //a.must password have a length of 8-16 and unique password and have a special charcters
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;
    if (!passwordRegex.test(setPassword) || !passwordRegex.test(password)) {
      // console.log(password, setPassword)
      setPasswordWeak(!ispasswordWeak);
      alert("your password is weak make a strong password!");
      return; //as you can see test function only return boolean value
    }
    //2.check both password is match or not ?? i want to both password have to same
    if (password !== setPassword) {
      alert("both passwords are not matched!");
      return;
    }
    /////////////////////////////////////////2.check both password validation-END //////////////////////////

    if(email !== users.email){
      alert("email is already register!")
      return;
    }
    // console.log(userEmail, userName, userPassword, userSetpassword);
    if (
      !userName.current.value ||
      !userEmail.current.value ||
      !userPassword.current.value ||
      !userSetpassword.current.value
    ) {
      alert("enter the required fields!");
    } else {
      dispatch(
        userPost({
          name: userName.current.value,
          email: userEmail.current.value,
          password: userPassword.current.value,
        }),
      );
      alert("Go to Sign In page!");
      userName.current.value = "";
      userEmail.current.value = "";
      userSetpassword.current.value = "";
      userPassword.current.value = "";
      setHide(false);
      setInvalidEmailAdd(false);
      setIsUserEnterPasswordFields(false);
      setPasswordWeak(false);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="border p-5 w-50 text-white mt-5">
        <h3 className="mb-3">Sign Up Page</h3>
        <div className="form-floating mb-3">
          <input
            ref={userName}
            type="text"
            className="form-control bg-dark text-white"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label className="text-white " htmlFor="floatingInput">
            Name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            ref={userEmail}
            type="email"
            className={`form-control bg-dark text-white ${isInvalidEmailAdd ? "is-invalid" : ""}`}
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label className="text-white" htmlFor="floatingInput">
            Email address
          </label>
        </div>
        <div className="form-floating mb-3">
          <div className="form-floating">
            <input
              ref={userSetpassword}
              type="text"
              className={`form-control bg-dark text-white ${ispasswordWeak ? "is-invalid" : ""}`}
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="text-white" htmlFor="floatingPassword text-white">
              Set Password
            </label>
          </div>
        </div>
        <div className="form-floating has-validation">
          <div className="form-floating">
            <input
              ref={userPassword}
              type={`${isHide ? "text" : "password"}`}
              className={`form-control bg-dark text-white ${ispasswordWeak ? "is-invalid" : ""}`}
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) =>
                setIsUserEnterPasswordFields(e.target.value.length > 0)
              }
            />
            <label className="text-white" htmlFor="floatingPassword text-white">
              Confirm Password
            </label>
          </div>
          <div className="invalid-feedback">Please choose a username.</div>
          <div>
            {isUserEnterPasswordFields ? (
              <i
                style={{
                  position: "absolute",
                  right: "40px",
                  top: "32px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "white",
                  zIndex: 5,
                }}
                onClick={() => setHide(!isHide)}
                className={`${isHide ? "bi bi-eye-slash" : "bi bi-eye"}`}
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <button
            onClick={() => handlePostUsers(users)}
            className="btn btn-success mt-3 w-100"
          >
            SIGN UP
          </button>
        </div>
        <div className="mt-3">
          <p>
            Go to{" "}
            <Link
              to="/"
              className="link-primary ms-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Sing In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
