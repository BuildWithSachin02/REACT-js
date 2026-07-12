import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DelBooks,
  fetchBooks,
  PostBooks,
  EditDataBooks,
} from "../App/slices/BooksSlices";
import Swal from "sweetalert2";

export default function Home() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books); //this how we useing useselector and this updation work most of use
  const [displayUpdateBtn, setdisplayUpdateBtn] = useState(false); //for edit index to update books
  const [editIndex,setEditIndex] = useState(null);//store book and index(id)

  useEffect(() => {
    // console.log("sachinascsscsc")
    dispatch(fetchBooks());
    // dispatch(PostBooks());
    // console.log(books.length)
  }, [dispatch]); //why we write in array like this bcz react-lint rules are satisfying and this called dependesies so see the code in useeffect what we using to call the api its dispatch so the reason is dispatch is dependency to call the API.

  const bookName = useRef("");
  const booksAuthor = useRef("");

  const handlePostData = () => {
    // console.log("is called")
    if (
      bookName.current.value.trim() == "" &&
      booksAuthor.current.value.trim() == ""
    ) {
      alert("Enter the required fields");
      return;
    }
    dispatch(
      PostBooks({
        name: bookName.current.value,
        author: booksAuthor.current.value,
      }),
    );
    alert("Books is stored our data");
    bookName.current.value = "";
    booksAuthor.current.value = "";
    setdisplayUpdateBtn(false)
  };

  const handleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure delete this Book!",
      text: "You won't be able to recover this book!",
      icon: "warning",
      showCancelButton: "true",
      confirmButtonText: "Yes Delete it!",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DelBooks(id));
        return;
      }
    });
    // const isConfirm = confirm("are you sure you want to delete this book!");
    // if (isConfirm) {
    //   dispatch(DelBooks(id));
    // }
  };
  const handleEditBooks = (book) => {
    setEditIndex(book)//now editbook have a that id data in state then we use it for update
    bookName.current.value = book.name;
    booksAuthor.current.value = book.author;
    setdisplayUpdateBtn(true);
  };
  const handleUpdateBooks = () => {
    console.log(editIndex)
    dispatch(EditDataBooks({
        id:editIndex.id,
        name:bookName.current.value,
        author:booksAuthor.current.value
    }))
    setdisplayUpdateBtn(false)
    bookName.current.value = ""
    booksAuthor.current.value = ""
  };

  return (
    <>
      <div>
        <div>
          <h1>Books Library</h1>
        </div>
        <div className="mt-5 mb-5 border p-5 w-50">
          <div>
            <div className="input-group mb-3 d-flex justify-content-center">
              <input
                ref={bookName}
                type="text"
                className="form-control"
                placeholder="Enter books name"
                aria-label="Username"
              />
              <span className="input-group-text">📚</span>
              <input
                ref={booksAuthor}
                type="text"
                className="form-control"
                placeholder="Enter author name"
                aria-label="Server"
              />
            </div>
          </div>
          <div>
            {displayUpdateBtn ? (
              <button className="btn btn-warning w-100"//now we have book data that index when i click on edit icon
               onClick={()=> handleUpdateBooks(editIndex)}>Update Your Book</button>
            ) : (
              <button
                onClick={() => {
                  handlePostData();
                }}
                className="btn btn-primary w-100"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        {loading ? ( //when data is coming to how much time to he spend on server to screen so that time i want to display a loader and when he is coming to screen then .addcase become a fulfield so loader is become to false.
          <>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : books.length > 0 ? (
          books.map((book, i) => (
            <div key={book.id} className="d-flex gap-3">
              <>
                <table className="table table-dark w-50">
                  <thead />
                  <tbody>
                    <tr className="table-active" />
                    <tr />
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td className="table-active">
                        <div className="d-flex gap-3 justify-content-end w-10 me-2">
                          <i
                            onClick={() => {
                              handleEditBooks(book);
                            }}
                            className="bi bi-pencil-square"
                          ></i>
                          <i
                            onClick={() => handleDeleteBook(book.id)}
                            className="bi bi-trash"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
          ))
        ) : (
          <p> our data is empty!</p>
        )}
      </div>
    </>
  );
}
