import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../App/featuresSlicecs/authSlices"; //i want to check user is exits or not if yes then he can enter to home page other wise he can noot and he have to signUp then he can go there.
import { Navigate } from "react-router";
import { useEffect } from "react";

export default function SignIn() {
  const [isHide, setHide] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  // console.log(users );
  //first of all we have to use a why ? useEffect bcz i want to check if user is signup means is user is exits or not ? if yes then he can accses the home if not so he have to signup first
  //so reason is we have to call API why in our data store the whole users details ?? that the
  // reason we have call this userfetch
  //////////////////////////////////////////////USE-EFFECT FUNCTION-CALL////////////////////////////////
  useEffect(() => {
    dispatch(userFetch()); //this call every time when screen is render.if any changes so virtual dom looks what element are change and then update then this useeffect run this immediately
  }, [dispatch]);
  //////////////////////////////////////////////USE-EFFECT FUNCTION-CALL////////////////////////////////

  const userEmail = useRef("");
  const userPassword = useRef("");

  const handleExitsUserOrNot = () => {
    const email = userEmail.current.value;
    const password = userPassword.current.value;
    const exitsUsers = users.some((user) => {
      //when user is exits and he add his email and password right and he can go on home.
      return email === user.email && password === user.password;
    });
    if (exitsUsers) {
      alert("login Successfully");
      localStorage.setItem("isLoggedIn", "true"); //now when user is logged in then i want to check them
      Navigate("/home");
    } else if (email == "" || password == "") {
      alert("enter the reqiured fields!");
      return;
    } else {
      alert(
        "email and password is invalid make sure you already register or not!",
      );
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 container">
        <div className="signIn-container mt-5 border p-5 w-50 rounded">
          <h3 className="mb-4">Sign in to your account</h3>
          <div className="form-floating mb-3">
            <input
              ref={userEmail}
              type="email"
              className="form-control  bg-dark text-white"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label className="text-white" htmlFor="floatingInput">
              Email address
            </label>
          </div>
          <div className="form-floating">
            <div className="form-floating">
              <input
                ref={userPassword}
                type={isHide ? "text" : "password"}
                className="form-control bg-dark text-white"
                id="floatingPassword"
                placeholder="Password"
              />
              <label className="text-white" htmlFor="floatingPassword">
                Password
              </label>
            </div>
            <div className="d-flex justify-content-end form-floating">
              <i
                onClick={() => setHide(!isHide)}
                className={`${
                  isHide ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
                }`}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "-25px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "white",
                  zIndex: 5,
                }}
              />
            </div>
          </div>
          <div className="singInButton">
            <button
              onClick={() => handleExitsUserOrNot()}
              className="btn btn-success mt-3 w-100"
            >
              SIGN IN
            </button>
          </div>
          <div className="mt-3">
            <p className="">
              No Account?{" "}
              <Link
                to="/signup"
                className="link-primary ms-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
