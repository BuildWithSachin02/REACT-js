import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchAdmin } from "../App/features/SignInAuthFeatures";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticated"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("fill the boxxes!");
      return;
    }
    try {
      await dispatch(
        fetchAdmin({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      ).unwrap();
      alert("Login SuccessFull");
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };
  /*
    .unwrap() fixes that
When you do:
await dispatch(fetchAdmin()).unwrap();
Redux Toolkit essentially says:
"Give me the actual successful result, and if the thunk failed, throw the error."
So now:
Success
dispatch()
   ↓
Thunk succeeds
   ↓
.unwrap()
   ↓
returns payload
   ↓
continue
Failure
dispatch()
   ↓
Thunk fails
   ↓
.unwrap()
   ↓
throws error
   ↓
catch()
That's why .unwrap() is extremely useful with try/catch.
  */
  return (
    <>
      <div className="container-fluid vh-100  d-flex justify-content-center align-items-center">
        <div
          className="border border-secondary rounded p-4"
          style={{ width: "500px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>

              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
                ref={passwordRef}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
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

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
