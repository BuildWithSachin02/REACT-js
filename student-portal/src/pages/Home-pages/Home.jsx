import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchStudent,
  PostStudent,
  editStudent,
  deleteStudent
} from "../../App/features/studentSlice";

export default function Home() {
  const [updateBtn, setUpdatebtn] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  console.log(students);
  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  const emailRef = useRef();
  const nameRef = useRef();
  const mathRef = useRef();
  const englishRef = useRef();
  const scienceRef = useRef();
  const examRef = useRef();

  const handlePostStudents = () => {
    // e.preventDefault();

    if (
      emailRef.current.value == "" ||
      nameRef.current.value == "" ||
      mathRef.current.value == "" ||
      englishRef.current.value == "" ||
      scienceRef.current.value == "" ||
      examRef.current.value == ""
    ) {
      alert("please fill the all boxxes!");
      return;
    }
    dispatch(
      PostStudent({
        email: emailRef.current.value,
        name: nameRef.current.value,
        maths: mathRef.current.value,
        science: scienceRef.current.value,
        english: englishRef.current.value,
        exam: examRef.current.value,
      }),
    );
    alert("your data stored ✔️");
    emailRef.current.value = "";
    nameRef.current.value = "";
    mathRef.current.value = "";
    englishRef.current.value = "";
    scienceRef.current.value = "";
    examRef.current.value = "";
  };

  const handleEditStudentsInputs = (student) => {
    setEditIndex(student);
    emailRef.current.value = student.email;
    nameRef.current.value = student.name;
    mathRef.current.value = student.maths;
    englishRef.current.value = student.english;
    scienceRef.current.value = student.science;
    examRef.current.value = student.exam;
    setUpdatebtn(true);
  };
  const handleUpdateStudents = () => {
    dispatch(
      editStudent({
        id: editIndex.id,
        email: emailRef.current.value,
        name: nameRef.current.value,
        maths: mathRef.current.value,
        english: englishRef.current.value,
        science: scienceRef.current.value,
        exam: examRef.current.value,
      }),
    );
    emailRef.current.value = "";
    nameRef.current.value = "";
    mathRef.current.value = "";
    englishRef.current.value = "";
    scienceRef.current.value = "";
    examRef.current.value = "";
    setUpdatebtn(false);
  };
  
  const handleDeleteStudents = async(id)=>{
    await alert("are you sure this will deleted!")
    dispatch(deleteStudent(id))
  }

  return (
    <>
      <div className="container mt-5">
        <div className="p-3 border mt-5">
          <h5>Add Student Marksheet</h5>
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                ref={emailRef}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                maths
              </label>
              <input
                ref={mathRef}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                English
              </label>
              <input
                ref={englishRef}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Science
              </label>
              <input
                ref={scienceRef}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <select
                ref={examRef}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">Exam type</option>
                <option value="external">External</option>
                <option value="internal">internal</option>
              </select>
            </div>

            {updateBtn ? (
              <button
                onClick={() => handleUpdateStudents()}
                className="btn btn-warning w-100"
              >
                update
              </button>
            ) : (
              <button
                onClick={() => handlePostStudents()}
                className="btn btn-primary w-100"
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <hr />
        <div className="mt-5 mb-5 d-flex gap-3 flex-wrap">
          {students.map((student) => (
            <div key={student.id} className="card" style={{ width: "18rem" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">Name: {student.name}</h5>
                <p className="card-text">
                  Maths: {student.maths} ,English: {student.english}, Science:
                  {student.science}
                </p>
                <div className="d-flex gap-2">
                  <i
                    onClick={() => handleEditStudentsInputs(student)}
                    className="bi bi-pencil-square"
                  />
                  <i onClick={()=> handleDeleteStudents(student.id)} className="bi bi-trash3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
