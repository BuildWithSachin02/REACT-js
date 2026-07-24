import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostBlogs, fetchBlogs, EditBlogs } from "../APP/features/blogSlices";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";

export default function CreateBlogs() {
  const [isCreate, setCreateCategory] = useState(false);
  const [isUpdate, setupdate] = useState(false);
  const [isEditIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const { blogs } = useSelector((state) => state.blogs);
  const categoryRef = useRef("");
  const titleRef = useRef("");
  const descritionRef = useRef("");
  const imgLinkRef = useRef("");

  const fields = [
    { ref: categoryRef, lable: "category" },
    { ref: titleRef, lable: "title" },
    { ref: descritionRef, lable: "description" },
    { ref: imgLinkRef, lable: "link" },
  ];
  const handlePostBlog = () => {
    console.log("called");
    const emptyFields = fields.find((field) => field.ref.current.value === "");
    if (emptyFields) {
      Swal.fire({
        title: "Missing Fields",
        text: `${emptyFields.lable} is required!`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      emptyFields.ref.current.focus();
      return;
    }

    dispatch(
      PostBlogs({
        title: titleRef.current.value,
        description: descritionRef.current.value,
        image: imgLinkRef.current.value,
        category: categoryRef.current.value,
        author: "sachin yadav",
        publishDate: new Date().toISOString(), //this import this line giving a time so 2026-07-23T18:35:27.845Z
      }),
    );
    Swal.fire({
      title: "Done",
      text: "sucessfully added",
      icon: "success",
      confirmButtonText: "OK",
    });
    handleRestFields();
    // console.log(blogs);
    // alert("added in json ✅");
  };
  const handleRestFields = () => {
    fields.forEach((field) => {
      field.ref.current.value = "";
      return;
    });
  };
  const handleEdit = (blog) => {
    setEditIndex(blog);
    // console.log(blog);
    titleRef.current.value = blog.title;
    categoryRef.current.value = blog.category;
    descritionRef.current.value = blog.description;
    imgLinkRef.current.value = blog.image;
    setupdate(true);
  };
  const handleUpdateBlog = () => {
    dispatch(
      EditBlogs({
        id: isEditIndex.id,
        title: titleRef.current.value,
        description: descritionRef.current.value,
        image: imgLinkRef.current.value,
        category: categoryRef.current.value,
        author: "Sachin Yadav",
        publishDate: new Date().toISOString(),
      }),
    );
    Swal.fire({
      title: "Done",
      text: "sucessfully Updated",
      icon: "success",
      confirmButtonText: "OK",
    });
    handleRestFields();
    setupdate(false);
  };

  return (
    <>
      <div>
        <div className="mt-5">
          <h4>Create Blog</h4>
          <div className="d-flex justify-content-center mt-5">
            <div className="border border-secondary rounded p-5 w-75">
              <>
                <div className="mb-3">
                  <select
                    ref={categoryRef}
                    className="form-select bg-dark text-white border border-secondary d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                    aria-label="Default select example"
                  >
                    <option value="">Open this select menu</option>
                    <option onClick={() => setCreateCategory(true)}>
                      + create category
                    </option>
                    <option value="travel">Travel</option>
                    <option value="adventure">Adventure</option>
                    <option value="trip">Trip</option>
                    <option value="Core Banking">Core Banking</option>
                  </select>
                </div>
                {isCreate && (
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter new category"
                  />
                )}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    ref={titleRef}
                    type="text"
                    className="form-control bg-dark text-white border border-secondary d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Set default images-link
                  </label>
                  <input
                    ref={imgLinkRef}
                    type="link"
                    className="form-control bg-dark text-white border border-secondary d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Blog Descrition
                  </label>
                  <textarea
                    ref={descritionRef}
                    className="form-control bg-dark text-white border border-secondary d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                    id="exampleFormControlTextarea1"
                    rows={2}
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3 d-flex gap-3">
                  {isUpdate ? (
                    <button
                      onClick={() => handleUpdateBlog()}
                      className="btn btn-outline-warning w-100"
                    >
                      Update Blog
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePostBlog()}
                      className="btn btn-outline-primary w-100"
                    >
                      Add Blogs
                    </button>
                  )}
                  <button
                    onClick={() => handleRestFields()}
                    className="btn btn-outline-secondary w-25"
                  >
                    Reset
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex gap-3 flex-wrap mb-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
                src={blog.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex justify-content-end">
                  <p className="card-text text-secondary">
                    {blog.publishDate
                      ? formatDistanceToNow(new Date(blog.publishDate), {
                          addSuffix: true,
                        })
                      : "no Date"}
                  </p>
                </div>
                <p className="card-text">{blog.title}</p>
                <i
                  onClick={() => handleEdit(blog)}
                  className="bi bi-pencil-square text-primary fs-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
