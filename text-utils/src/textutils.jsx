import React, {useEffect,useState} from "react"

const Textutils = () => {
    useEffect(()=>{
       setText(JSON.parse(localStorage.getItem("text")) ?? "");
    setCount(JSON.parse(localStorage.getItem("count")) ?? 0);
    setWords(JSON.parse(localStorage.getItem("word")) ?? 0);
    setSpeed(JSON.parse(localStorage.getItem("speed")) ?? 0);

    },[]);
    const [text,setText] = useState("");
    const [count,setCount] = useState(0);
    const [word,setWords] = useState(0)
    const [speed, setSpeed] = useState(0)

  return (
    <>
      {/* <h1>hello</h1>//just testing */}
      <div className="container mt-5 ">
        <h1>Text-Utils</h1>
        <div className="form-floating mt-3">
          <textarea
            className="form-control w-50"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
            // value = {text}
            onChange={(e)=>{
                setText(e.target.value);
                localStorage.setItem("text",JSON.stringify(e.target.value));
            }}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <div className="d-flex gap-2 mt-3">
          <>
            <button type="button" className="btn btn-primary"
                onClick={()=>{
                    setText(text.toUpperCase());
                    localStorage.setItem("text", JSON.stringify(text.toUpperCase()));
                }}
            >
                To Uppercase
            </button>
            <button type="button" className="btn btn-secondary"
                onClick={()=>{
                    setText(text.toLowerCase());
                    localStorage.setItem("text",JSON.stringify(text.toLowerCase()));
                }}
            >
              To Lowercase
            </button>
            <button type="button" className="btn btn-success"
                onClick={()=>{
                    setCount(text.length);
                    localStorage.setItem("count",JSON.stringify(text.length));
                }}
            >
              Count Letters
            </button>
            <button type="button" className="btn btn-danger"
                onClick={()=>{
                    setWords(text.split(" ").length)
                    localStorage.setItem("word",JSON.stringify(text.split(" ".length)));
                }}
            >
              Count Words
            </button>
            <button type="button" className="btn btn-warning"
                onClick={()=>{
                    setSpeed(((text.split(" ").length*60)/180).toFixed(2));//why we use 60 it is second and why we use 180 it means to use for normally man reading speed is it.
                    localStorage.setItem("speed",
                        JSON.stringify(((text.split(" ").length*60)/180).toFixed(2))
                    )
                }}
            >
              REading Speed
            </button>
            <button type="button" className="btn btn-info"
                onClick={()=>{
                    setText(" ");
                    setCount(0);
                    setWords(0);
                    setSpeed(0);
                    localStorage.clear();
                }}
            >
              Clear
            </button>
          </>
        </div>
        <div className="mt-5">
            <ul>
                <li>{text}</li>
                <li>Count: {count}</li>
                <li>total words:{word}</li>
                <li>reading speed: {speed}.s</li>
            </ul>
        </div>
      </div>
    </>
  );
};
export default Textutils;
