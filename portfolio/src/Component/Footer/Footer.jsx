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
                <p>
                    Full Stack Web Developer
                </p>
                <p>
                    I build modern, fast and SEO-friendly websites for businesses.
                </p>
                <div className="text-center gap-3 d-flex justify-content-center">
                    <a href="tel:+919054387845"><i class="bi bi-telephone icons"></i></a>
                    <a href="https://wa.me/919054387845?text=Hello%20Sachin%20I%20want%20to%20discuss%20a%20project"><i class="bi bi-whatsapp icons"></i></a>
                    <a href="https://www.instagram.com/sachinndev333/"><i class="bi bi-instagram icons"></i></a>
                    <a href="https://www.linkedin.com/in/sachin-yadav-92278b3a1/"><i class="bi bi-linkedin icons"></i></a>

                </div>
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
              <button type="submit" className="btn  button-footer">
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
