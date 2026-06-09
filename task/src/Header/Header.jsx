import "./Header.css";

const HeroSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="input-group mt-5 w-75 d-flex-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add title.."
            aria-label="Username"
            aria-describedby="visible-addon"
          />
          <input
            type="text"
            className="form-control d-none"
            placeholder="Hidden input"
            aria-label="Hidden input"
            aria-describedby="visible-addon"
          />
        </div>
        <div className="form-floating mt-3 w-75">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="d-grid gap-2 mt-5 w-75">
          <button className="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <div className="box d-flex gap-3">
              <button type="button" class="btn btn-outline-warning">
                Edit
              </button>
              <button type="button" class="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;