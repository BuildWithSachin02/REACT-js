import React from "react";
import Navbar from "../components/Navbar";
import AboutBannerImg from "../assets/about-banner.jpg";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="card">
        <img
          style={{ height: "700px" }}
          src={AboutBannerImg}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay text-center text-text-black  mt-5 pt-5">
          <h5 className="card-title mt-5 fs-1">
            Your Trusted Online Shopping Destination
          </h5>
          <p className="card-text text-light">
            Quality Products • Fast Delivery • Best Prices
          </p>
        </div>
      </div>

      <div className="container">
        <div
          className="card mb-3 mt-5"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img style={{height:"350px"}}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbrDLE0pD2EVEO6ackY2d3WUh5JHHXjuaRc06mnmEivpvwy9cZ5Tqqmg&s=10"
                className=" rounded-start img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-5">
                <h5 className="card-title fs-1">Who We Are</h5>
                <p className="card-text fs-6">
                  Welcome to DevShop, your trusted online shopping destination
                  for high-quality products at affordable prices. Our mission is
                  to provide a seamless shopping experience with carefully
                  selected products, secure transactions, and fast delivery. We
                  believe that every customer deserves premium quality and
                  exceptional service.
                </p>
                <p className="card-text">
                  {/* <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
