import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostBooks, fetchBooks } from "../App/featuresSlicecs/booksSlices";
import Swal from "sweetalert2";

export default function AddBooks() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  //   console.log(books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookName = useRef("");
  const bookAuthor = useRef("");
  const bookCategory = useRef("");
  const bookImage = useRef("");
  const bookLanguage = useRef("");
  const bookPages = useRef("");
  const bookPrice = useRef("");
  const bookPublishYear = useRef("");
  const bookRating = useRef("");
  const bookStock = useRef("");
  const bookPublisher = useRef("");
  const bookIsbn = useRef("");
  const bookTextArea = useRef("");

  const fields = [
    { ref: bookName, label: "Book Name" },
    { ref: bookAuthor, label: "Author" },
    { ref: bookCategory, label: "Category" },
    { ref: bookPrice, label: "Price" },
    { ref: bookPublisher, label: "Publisher" },
    { ref: bookLanguage, label: "Language" },
    { ref: bookPages, label: "Pages" },
    { ref: bookIsbn, label: "ISBN" },
    { ref: bookStock, label: "Stock" },
    { ref: bookPublishYear, label: "Publish Year" },
    { ref: bookRating, label: "Rating" },
    { ref: bookImage, label: "Image" },
    { ref: bookTextArea, label: "Book Description" },
  ];
  const handlePostBooks = (e) => {
    e.preventDefault();
    const emptyFields = fields.find((field) => field.ref.current.value === "");
    if (emptyFields) {
      Swal.fire({
        title: "Missing fields",
        text: `${emptyFields.label} is required`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      emptyFields.ref.current.focus();
      return;
    }
    dispatch(
      PostBooks({
        name: bookName.current.value,
        author: bookAuthor.current.value,
        category: bookCategory.current.value,
        price: Number(bookPrice.current.value),
        publishYear: Number(bookPublishYear.current.value),
        publisher: bookPublisher.current.value,
        language: bookLanguage.current.value,
        isbn: bookIsbn.current.value,
        pages: Number(bookPages.current.value),
        stock: Number(bookStock.current.value),
        rating: Number(bookRating.current.value),
        image: bookImage.current.value,
      }),
    );
    Swal.fire({
      title: "sucess",
      text: "Books is added sycessfully",
      icon: "success",
      confirmButtonText: "OK",
    });
    handleRestfields()
  };
  const handleRestfields = () => {
    fields.forEach((field) => {
      field.ref.current.value = "";
    });
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-secondary text-white py-3">
              <h3 className="mb-0">📚 Add New Book</h3>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handlePostBooks} className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Book Name</label>
                  <input
                    ref={bookName}
                    type="text"
                    className="form-control"
                    placeholder="Atomic Habits"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Author</label>
                  <input
                    ref={bookAuthor}
                    type="text"
                    className="form-control"
                    placeholder="James Clear"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Category</label>
                  <select ref={bookCategory} className="form-select">
                    <option value="">Choose...</option>
                    <option value="programming">Programming</option>
                    <option value="self help">Self Help</option>
                    <option value="business">Business</option>
                    <option value="finance">Finance</option>
                    <option value="novel">Novel</option>
                    <option value="history">History</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Price (₹)</label>
                  <input
                    ref={bookPrice}
                    type="number"
                    className="form-control"
                    placeholder="499"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Publish Year</label>
                  <input
                    ref={bookPublishYear}
                    type="number"
                    className="form-control"
                    placeholder="2018"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Publisher</label>
                  <input
                    ref={bookPublisher}
                    type="text"
                    className="form-control"
                    placeholder="Avery"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Language</label>
                  <input
                    ref={bookLanguage}
                    type="text"
                    className="form-control"
                    placeholder="English"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">ISBN</label>
                  <input
                    ref={bookIsbn}
                    type="text"
                    className="form-control"
                    placeholder="9780735211292"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Pages</label>
                  <input
                    ref={bookPages}
                    type="number"
                    className="form-control"
                    placeholder="320"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Stock</label>
                  <input
                    ref={bookStock}
                    type="number"
                    className="form-control"
                    placeholder="15"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Rating</label>
                  <input
                    ref={bookRating}
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    className="form-control"
                    placeholder="4.9"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Image URL</label>
                  <input
                    ref={bookImage}
                    type="text"
                    className="form-control"
                    placeholder="/images/books/atomic-habits.jpg"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Books descriptions</label>
                  <textarea
                    ref={bookTextArea}
                    className="form-control"
                    aria-label="With textarea"
                    defaultValue={""}
                    placeholder="give me books information"
                  />
                </div>
                <div className="col-12 d-flex justify-content-end gap-3 mt-4">
                  <button
                    onClick={() => handleRestfields()}
                    type="reset"
                    className="btn btn-outline-secondary px-4"
                  >
                    Reset
                  </button>
                  <button className="btn btn-primary px-5">Add Book</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
