import { fetchBooks, DeleteBooks } from "../App/featuresSlicecs/booksSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";

export default function AllBooks({ setSendBookDetails }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  // console.log(books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (result.isConfirmed) {
      //so isConfirmed where he come from and swal fire return a object like when user click on delete so he return a objects like this const result = {isConfirmed:true,.....} so there is come from
      dispatch(DeleteBooks(id));

      Swal.fire({
        title: "Deleted!",
        text: "The book has been deleted successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };
  const handleToSendBookDetails = (book) => {
    setSendBookDetails(book);
    console.log(book);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row g-4">
          {books.map((book) => (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card h-100 shadow border-0 rounded-4 overflow-hidden book-card">
                <img
                  src={book.image}
                  alt={book.name}
                  className="card-img-top"
                  style={{
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <span className="badge bg-primary mb-2">{book.category}</span>

                  <h5 className="fw-bold">{book.name}</h5>

                  <p className="text-secondary mb-2">✍️ {book.author}</p>

                  <div className="d-flex justify-content-between mb-2">
                    <span>⭐ {book.rating}</span>
                    <span>{book.publishYear}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="fw-bold text-success">₹{book.price}</span>

                    <span className="text-muted">Stock : {book.stock}</span>
                  </div>

                  <div className="d-grid gap-2">
                    <Link className="" to={"/viewdetails"}>
                      <button
                        onClick={() => handleToSendBookDetails(book)}
                        className="btn btn-primary w-100"
                      >
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
