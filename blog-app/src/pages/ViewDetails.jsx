import React from "react";

export default function ViewDetails({ sendBlogDetails }) {
  if (!sendBlogDetails) {
    return (
      <div className="container mt-5 text-center">
        <h3>No Blog Selected</h3>
        <p>Please go back and select a blog.</p>
      </div>
    );
  }
  return (
    <>
      <div>
        <div>
          <div className="container py-5">
            <div className="card shadow-lg border-0">
              <img
                src={sendBlogDetails.image}
                className="card-img-top"
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
                alt={sendBlogDetails.title}
              />

              <div className="card-body">
                <div className="d-flex gap-5">
                  <span className="badge bg-success mb-3">
                    {sendBlogDetails.category}
                  </span>
                </div>
                <h2 className="fw-bold">{sendBlogDetails.title}</h2>

                <div className="d-flex justify-content-between text-muted my-3">
                  <span className="d-flex gap-3">
                    <i className="bi bi-person-circle fs-5 text-primary" />
                    {sendBlogDetails.author}
                  </span>

                  <span className="d-flex gap-3">
                    <i className="bi bi-calendar-day fs-5 text-danger" />
                    {sendBlogDetails.publishDate}
                  </span>
                </div>

                <hr />

                <p
                  className="fs-5"
                  style={{
                    lineHeight: "1.8",
                  }}
                >
                  {sendBlogDetails.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
