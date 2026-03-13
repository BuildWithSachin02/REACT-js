import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-4 text-center align-content-center">
                <h4>
                    Sachin Yadav
                </h4>
                <p>sachinyadav.webdev404@gmail.com</p>
                <a href="+919054387845">+91 9054387845</a>
          </div>
          <div className="col-8">
            <form className="footerform p-3 mb-5">
              <div className="mb-3 mt-2">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone-Number
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="form-floating mt-4 ">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea">Comments</label>
                </div>

              </div>
              <button type="submit" className="btn btn-primary button-footer">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
