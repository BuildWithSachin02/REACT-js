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

  useEffect(() => {
    if (!isAuthenticate) {
      return navigate("/");
    }
    return navigate("/home");
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("fill the boxxes!");
      return;
    }
    dispatch(
      fetchAdmin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    );
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="border w-75 p-4 align-content-center align-items-center">
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
