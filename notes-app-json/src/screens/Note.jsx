import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]); //is whole array of json-data
  const [tasks, setTasks] = useState({}); //is the notes of object
  const [isUpdate, setIsUpdate] = useState(false); //this for update and add button visibility
  const colors = [
    "#FFCDD2",
    "#F8BBD0",
    "#E1BEE7",
    "#D1C4E9",
    "#C5CAE9",
    "#BBDEFB",
    "#B2EBF2",
    "#C8E6C9",
    "#DCEDC8",
    "#FFF9C4",
    "#FFE0B2",
    "#FFCCBC",
  ];
  //   const [taskData, setTaskData] = useState({})//he holds all input data
  //   const [inputData, setinput]
  //   const [textColor, setTextColor] = useState(); //holds text color
  //   const [bgColor, setBgColor] = useState(); //bg color

  //fetching the
  const handleFetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    setNotes(res.data);
    // console.log(notes)
  };

  useEffect(() => {
    //every time this will run this is use for of useEffects
    handleFetchNotes();
  }, []);

  //all inputs data store in tasks objects and we get this key on to ui-card
  const getTasks = (e) => {
    setTasks({ ...tasks, task: e.target.value });
  };
  const getDescription = (e) => {
    setTasks({ ...tasks, description: e.target.value });
  };
  const getUrl = (e) => {
    setTasks({ ...tasks, url: e.target.value });
  };
  const getColor = (e) => {
    setTasks({ ...tasks, textColor: e.target.value });
  };
  const getBgColor = (e) => {
    setTasks({ ...tasks, backGroundColor: e.target.value });
  }; //all inputs data store in tasks objects and we get this key on to ui-card

  const handleTasks = () => {
    //add to do button when this button clicked this run a function
    handlePostTasks();
    // console.log(setBgColor(tasks.backGroundColor));
    // console.log(tasks);
  };

  //this method works on sending task in notes array and then add in objects.
  const handlePostTasks = async () => {
    //addTodo Buttons
    //todo validations
    if (
      !tasks.task ||
      !tasks.description ||
      !tasks.url
    ) {
      return alert("Enter the required fields");
    }
    const randomColor = colors[Math.floor(Math.random() * colors.length)] //this all of we are finding in colors index

    const newTasks = {
      //why we create a new object ?? => we are adding key and value of date and time and this will updating in tasks object like refrence
      ...tasks,
      createDate: new Date().toLocaleDateString(),
      createTime: new Date().toLocaleTimeString(),
      backGroundColor: randomColor,
      textColor: tasks.textColor || "#000000",
    };
    const res = await axios.post("http://localhost:3000/notes", newTasks);
    handleFetchNotes();
    alert("added your tasks in json data");
    setTasks({});
    // console.log(res.data);
  }; //this method works on sending task in notes array and then add in objects.

  //delete action by axios delete methods
  const handleDeleteTasks = async (id) => {
    // delete icons
    // alert("are you sure delete tasks!");
    const confirmDelete = window.confirm(
      "Are you sure, you want a delete this note ?",
    );
    if (!confirmDelete) {
      //when user cancel to delete so this will return and not delete
      return;
    }
    await axios.delete(`http://localhost:3000/notes/${id}`);
    handleFetchNotes();
  };

  //   handle edit tasks to do from axios put method this is edit icons
  const handleEditTasks = (note) => {
    //edit icons
    setTasks(note);
    setIsUpdate(true);
  };

  const handleUpdateTasks = async (id) => {
    //update button
    await axios.put(`http://localhost:3000/notes/${id}`, tasks);
    await handleFetchNotes();
    setIsUpdate(false); //now when update will done so now this is we see default add button
    setTasks({});
  };

  return (
    <>
      <div className="container p-0">
        <div className="mt-5">
          <div className="text-center">
            <h1 className="">Notes-App</h1>

            <div className="d-flex justify-content-center">
              <div className="input-group mb-3 w-50 mt-4">
                <span className="input-group-text" id="basic-addon1">
                  Enter Your Tasks
                </span>
                <input
                  onChange={getTasks}
                  value={tasks.task || ""}
                  type="text"
                  className="form-control"
                  placeholder="RUNNING-5'O'CLOCK"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="input-group w-50">
                <span className="input-group-text">
                  Enter Your Motivate Lines
                </span>
                <textarea
                  value={tasks.description || ""}
                  onChange={getDescription}
                  className="form-control"
                  aria-label="With textarea"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="input-group w-50 mt-3">
                <span className="input-group-text">Enter Your Images URL</span>
                <input
                  value={tasks.url || ""}
                  onChange={getUrl}
                  type="url"
                  className="form-control h-100"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="input-group w-50 mt-3">
                <span className="input-group-text">Pick Your Text Color</span>
                <input
                  //   value={tasks.textColor || ""}
                  onChange={getColor}
                  type="color"
                  className="form-control h-100"
                  //   placeholder="RUNNING-5'O'CLOCK"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="input-group w-50 mt-3">
                <span className="input-group-text">Pick Your Bg Color</span>
                <input
                  //   value={tasks.backGroundColor || ""}
                  onChange={getBgColor}
                  type="color"
                  className="form-control h-100"
                  //   placeholder="RUNNING-5'O'CLOCK"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {isUpdate == true ? (
                <button
                  onClick={() => handleUpdateTasks(tasks.id)}
                  type="button"
                  className="btn btn-success w-50 mt-3"
                >
                  Update Your Todo
                </button>
              ) : (
                <button
                  onClick={handleTasks}
                  type="button"
                  className="btn btn-success w-50 mt-3"
                >
                  Add Your Todo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 container">
        <div className="row flex-wrap gap-3 mb-5 pb-5 justify-content-center">
          {notes.length == 0 ? (
            <h1>not added notes yet!</h1>
          ) : (
            notes.map((note, i) => (
              <div
                key={note.id}
                className="card pb-5"
                style={{
                  backgroundColor: note.backGroundColor,
                  color: note.textColor,
                  width: "18rem",
                }}
              >
                <img
                  src={note.url}
                  className="card-img-top rounded pt-3"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{note.task}</h5>
                  <p className="card-text">{note.description}</p>
                </div>
                <ul className="list-group list-group-flush rounded">
                  <li className="list-group-item text-black">
                    Created: {note.createDate}
                  </li>
                  <li className="list-group-item">Time: {note.createTime}</li>
                  <li className="list-group-item d-flex gap-3 justify-content-end">
                    <i
                      onClick={() => handleEditTasks(note)}
                      className="bi bi-pencil-square ms-3"
                    ></i>
                    <i
                      onClick={() => handleDeleteTasks(note.id)}
                      className="bi bi-trash3-fill"
                    ></i>
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
