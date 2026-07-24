import { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import { fetchBlogs } from "../APP/features/blogSlices";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router";

export default function Home({ setSendBlogDetails }) {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, search } = useSelector((state) => state.blogs);
  // console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleToSendViewDetails = (blog) => {
    setSendBlogDetails(blog);
    navigate("/viewdetails");
  };
  const filtredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-5 d-flex justify-content-center flex-wrap gap-3">
          <div className="row g-4 mb-5 h-100">
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
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <button
                        onClick={() => handleToSendViewDetails(blog)}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>

                      <small className="text-muted">
                        {blog.publishDate
                          ? formatDistanceToNow(new Date(blog.publishDate), {
                              addSuffix: true,
                            })
                          : "no Date"}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
