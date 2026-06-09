import React, { useState } from "react";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [hide,setHide] = useState(true); // ist look like complecated but we actually doing in JS like:
  // let hide = true; thats it (true means = visible and false measns = not visible)
  const [index,setindex] = useState(0);
  return (
    <>
      <div className="container mt-5 ">
        <h3>Todo App - Add Your daily-tasks</h3>
        <input className="border-1 mt-2 border border-primary w-50 border border-primary-subtle"
        value = {title}
        onChange={(e) => {
          // console.log(e.target.value);
          setTitle(e.target.value);//abb yeh setitle naam ka function abb yhe title naam ke variable ko data dedega
        }}
        
      />
      <button className={"btn btn-primary ms-3 " + (title === "" ? "disabled" : "")} // in that case we using ternery operator in css + js technique simple logic.
       onClick={()=>{
        // console.log("not called")
        setTodos([...todos, {title}]);
       }}
      >
        Add</button>
        <button className={"btn btn-success ms-2 " + (hide ? "d-none" : "")}//whats the meaning of this ternary condion when hides value is true => hide update button and when hide value is false so hide button will be display that it.
        // and most important things is when you giving contions like this you have to priorities to (round braces) when i didt give round brace react didt understand and react giving me errors so this is syntax and make sure you have to remeber.
        onClick={()=>{
          const temp = [...todos];//in this line we write spred the todos array and storing todos array in temp variable this variable have all title data.
          temp[index].title = title; // in this line we have that index when user clicked what he want to update and that index and temp of index.title(this title have that clicked data you will see in input box when user clicked edit button so that index value going on input box so that is temp of index.title) = title(this title hold new title value like updations that is or any changes)
          setTodos(temp);//and after user write his tasks and when he hit update button and that index title element will be update and in settodo function we giving temp variable this variable holds new title.
          setHide(true);//this function called after when uppdate button called and after clicked sethide value is = false and the result you will see the update button will display.
          
        }}
        >Uppdate</button>
      </div>
      <div className="container mt-4">
        {todos.map((todo,i)=>(
          <div key={i} className="container">
            <p className="d-flex gap-2"> 
            {todo.title}
            <button className="btn btn-warning" onClick={()=>{
              // console.log("not-called");
              setindex(i);// we have send i why we have to send index becouse updation want to which index you have update? and in simple words understand when button clicked so i want to that clicked element i want to update so thats why we have to send index number.
              setHide(false);
            }}>edit</button>
            <button className="btn btn-danger" onClick={()=>{
              // console.log("not-called")
              setTodos(todos.filter((td,ti)=> i != ti))//this function doing a skip actions when i clicked on delete button and then that tasks index will skipped thats it and what a actualy doing when condions will false loop is break and that index will delete and that the perpose of filter function
            }}>
              del</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
