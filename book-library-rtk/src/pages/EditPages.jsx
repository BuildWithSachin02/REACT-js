import { fetchBooks, EditBooks } from "../App/featuresSlicecs/booksSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function EditPages() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleEdit = (id) => {};
  return (
    <>
      <div className="container py-4">
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card-container d-flex flex-wrap gap-3 justify-content-center">
          {books.map((book) => (
            <div key={book.id} className="card" style={{ width: "17rem" }}>
              <img
                src={book.image}
                className="card-img-top"
                style={{ height: "210px" }}
                alt={book.name}
              />
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.author}</p>
                <button
                  onClick={() => handleEdit(book.id)}
                  className="btn btn-success"
                >
                  Edit books
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
