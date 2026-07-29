import { useEffect, useState } from "react";
import { fetchBlogs, DeleteBlogs } from "../APP/features/blogSlices";
import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function AllBlogs({ setSendBlogDetails }) {
  const dispatch = useDispatch();
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDeletBlogs = async (id) => {
    // alert("are you sure to delete this!")
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
      console.log(id);
      dispatch(DeleteBlogs(id));
      Swal.fire({
        title: "Deleted!",
        text: "The book has been deleted successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };
  const handleToSendBlogDetails = (blog)=>{
    setSendBlogDetails(blog);
    navigate("/viewdetails");
    // console.log(blog) 
  }

  return (
    <>
      <div>
        <div className="row g-4  h-100 mt-1">
          <div className="d-flex justify-content-end">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-dark text-white border border-secondary"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
          {blogs.map((blog) => (
            <div className="col-md-6 col-lg-4" key={blog.id}>
              <div className="card shadow-sm border-0 rounded-3">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="d-flex justify-content-end mt-2 me-2">
                  <small className="text-muted">
                    {blog.publishDate
                      ? formatDistanceToNow(new Date(blog.publishDate), {
                          addSuffix: true,
                        })
                      : "no Date"}
                  </small>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="w-25">
                    <span className="badge bg-success mb-2 w-auto">
                      {blog.category}
                    </span>
                  </div>

                  <h5 className="card-title">{blog.title}</h5>

                  <button
                    onClick={() =>
                      setOpenId(openId === blog.id ? null : blog.id)
                    }
                    className="btn btn-sm btn-outline-secondary mb-3"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${blog.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${blog.id}`}
                  >
                    {openId === blog.id ? "Hide Details" : "See Details"}
                  </button>
                  {openId === blog.id && (
                    <div className="card card-body mt-2">
                      {blog.description}
                    </div>
                  )}
                  <div className="mt-auto d-flex justify-content-between align-items-center gap-5">
                    <button onClick={()=> handleToSendBlogDetails(blog)} className="btn btn-outline-primary w-50">
                      View Details
                    </button>
                    <button
                      onClick={() => handleDeletBlogs(blog.id)}
                      className="btn btn-outline-danger w-50"
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
