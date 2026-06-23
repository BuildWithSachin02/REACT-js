import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import axios from "axios";


// 1.API-CALLING-CHALLANGE->we using axios package
// 2.SEARCH-PRODUCT-CHALLANGE
export default function Home() {
  const [products, setProduct] = useState([]);
  const [search,setSeacrch] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProduct(res.data.products); //bcz res have -> data have -> products all info when i want in products arrays on api-products.
    // console.log(products[0])
  };
  useEffect(()=>{
    fetchProducts();
  },[]);

  //1.when user want to search product name and catogories so we have to show them.
  const getSearchProductInput = (e)=>{
    setSeacrch(e.target.value.toLowerCase())
    // console.log(search)
  }
  
  const handleSearchProduct = ()=>{
    // console.log(search)//search variable holds the value we using to compaire to and check api data have the products.
   setProduct(
    products.filter((product,i)=> product.title.toLowerCase().includes(search))
   ) 
  }
  

  return (
    <>
      <Navbar />
      <Herosection />
      <div className="container mt-5">
        {/* heding-section of product */}
        <div className="border-bottom">
          <div className="card-header text-center fs-3 text-primary">
            Discover premium products, unbeatable prices, and fast delivery—all
            in one place.
          </div>
          <div className="card-body text-center">
            <figure>
              <blockquote className="blockquote">
                <p className="fs-5"></p>
              </blockquote>
              <figcaption className="blockquote-footer text-shadow-blue-400">
                See Our Products{" "}
                <cite title="Source Title">
                  Shop the latest trends, top-quality essentials, and exclusive
                  deals—all delivered to your doorstep.
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* heding-section of product- END HERE */}

        {/* input box of Product searches */}
        <div className="input-group mb-3 mt-4 w-25 d-flex ms-auto">
          <input onChange={getSearchProductInput}
            type="text"
            className="form-control"
            placeholder="Search your products"
            aria-label="Recipient’s username"
            aria-describedby="button-addon2"
          />
          <button onClick={handleSearchProduct} className="btn btn-success" type="button" id="button-addon2">
            Search
          </button>
        </div>
        {/*input-search-products  */}

        {/* //product-card-section */}
        <div className="row d-flex justify-content-evenly gap-2">
          {products.map((product, i) => {
          return (
              <div key={i} className="card mt-4 pb-2 border-outline-success" style={{ width: "20rem" }}>
                <i className="bi bi-heart pt-3 pe-3 ms-auto"></i>
                <img src={product.images} className="card-img-top " alt={product.title} />
                <div className="d-flex gap-2">
                  <i className="bi bi-star-fill text-success"></i>
                  <i className="bi bi-star-fill text-success"></i>
                  <i className="bi bi-star-fill text-success"></i>
                  <i className="bi bi-star-fill text-success"></i>
                  <i className="fw-bold">4.5</i>
                </div>
                <div className="card-body p-0 pt-2 pb-3">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="m-0 pb-1">{product.category}</p>
                  <p className="card-text">
                   Price: ${product.price}
                  </p>
                  <button 
                   className="btn btn-success rounded-3 ">
                    Add to cart
                  </button>
                </div>
              </div>
          );
        })}
        </div>
        {/* //product-card-section */}
      </div>
    </>
  );
}
