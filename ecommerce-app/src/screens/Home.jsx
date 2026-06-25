import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import axios from "axios";

// 1.API-CALLING-CHALLANGE->we using axios package
// 2.SEARCH-PRODUCT-CHALLANGE
export default function Home() {
  const [allProducts, setShowAllProducts] = useState([]); //we also honding all products in that varibale
  const [products, setProduct] = useState([]); //all product
  const [search, setSeacrch] = useState(""); //search upadation
  const [sort, setSort] = useState(); //sort buttons acending and descending
  const [range, setRange] = useState();

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProduct(res.data.products); //bcz res have -> data have -> products all info when i want in products arrays on api-products.
    setShowAllProducts(res.data.products); //store as same data
    // console.log(products[0])
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  //1.when user want to search product name and catogories so we have to show them.
  const getSearchProductInput = (e) => {
    const value = e.target.value;
    setSeacrch(value);
    if (value === "") {
      fetchProducts();
    }
  };

  const handleSearchProduct = () => {
    // console.log(search)//search variable holds the value we using to compaire to and check api data have the products.
    setProduct(
      products.filter(
        (product, i) =>
          product.title.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search),
      ),
    );
  };

  const handleSortProducts = (e) => {
    const value = e.target.value;
    // console.log(value)//yes we getting values
    if (value === "") {
      return setProduct(allProducts);
    }

    const sortedProducts = [...products]; //we are spreading all products we need new data when user click sort
    if (value === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProduct(sortedProducts);
  };


  const handleRangeProducts = (e) => {
    let range = Number(e.target.value);
    setProduct(allProducts.filter((product, i) => product.price >= range));
    console.log("called")
  };

  // ====================================================================================//==============================================///=================
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

        <div className="d-flex gap-3 mt-5 mb-3 justify-content-around">
          {/* range buttons who control by pricing with items  */}
          <div className="w-25 h-75 border-end pe-5">
            <label htmlFor="range4" className="form-label">
              Product Price range : { }
            </label>
            <input
              onChange={handleRangeProducts}
              type="range"
              className="form-range "
              min={0}
              max={2500}
              defaultValue={50}
              id="range4"
            />
            <output htmlFor="range4" id="rangeValue" aria-hidden="true" />
          </div>
          {/* range buttons who control by pricing with items  */}

          {/* dropdown buttons */}
          <div className="input-group flex-nowrap w-25">
            <span className="input-group-text h-75" id="addon-wrapping">
              Sort Products
            </span>
            <select
              onChange={handleSortProducts}
              className="form-select h-75"
              aria-label="Default select example"
            >
              <option value="">Open this select menu</option>
              <option value={"high-to-low"}>Highest to Low</option>
              <option value={"low-to-high"}>Lowest to High</option>
              {/* <option value={"Gujarati(1-12(Commerce/Arts))"}>
                Gujarati(1-12(Commerce/Arts))
              </option> */}
            </select>
          </div>
          {/* dropdown buttons */}

          {/* input box of Product searches */}
          <div className="input-group w-25">
            <input
              onChange={getSearchProductInput}
              className="form-control me-2 h-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={handleSearchProduct}
              className="btn btn-outline-success h-75"
            >
              Search
            </button>
          </div>
          {/*input-search-products  */}
        </div>

        {/* //product-card-section */}
        <div className="row d-flex justify-content-evenly gap-2">
          {products.map((product, i) => {
            return (
              <div
                key={i}
                className="card mt-4 pb-2 border-outline-success"
                style={{ width: "20rem" }}
              >
                <i className="bi bi-heart pt-3 pe-3 ms-auto"></i>
                <img
                  src={product.images[0]}
                  className="card-img-top "
                  alt={product.title}
                />
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
                  <p className="card-text">Price: ${product.price}</p>
                  <button className="btn btn-success rounded-3 ">
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
