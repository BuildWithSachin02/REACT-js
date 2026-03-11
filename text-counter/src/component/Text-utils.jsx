import { useState } from "react"; //agr hmen koi bhi state use krna h toh hmre compusolory usestate import krna hoga 
export const TextUtils = () => {    
    const [text, settext] = useState("");
    const [count,setcount] = useState(0);
    const [word,setword] = useState(0);
    const [read,setreading] = useState(0);

    return<>
        <div className="container">
            <h2 className="m-4 text-center">Text-Utils Example</h2>
            <div className="form-floating">
              <textarea value={text} onChange={(e)=>{settext(e.target.value)}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:70}}></textarea>
              <label for="floatingTextarea2">enter your thought...</label>
            </div>
            <div className="mx-3">
                <button type="button" class="btn btn-outline-primary m-3">Submit</button>
                <button onClick={()=>{settext(text.toUpperCase())}} type="button" className="btn btn-outline-secondary me-2">Uppercase</button>
                <button onClick={()=>{settext(text.toLowerCase())}} type="button" className="btn btn-outline-secondary me-2">Lowercase</button>
                <button onClick={()=>{setcount(text.length)}} type= "button" className="btn btn-outline-secondary me-2">Count Text</button>
                <button onClick={()=>{setword(text.split(" ").length)}} type= "button" className="btn btn-outline-secondary me-2">Count word</button>
                <button onClick={()=>{setreading(text.split(" ").length * 60/180)}} type= "button" className="btn btn-outline-secondary me-2">Reading time</button>
            </div>
            <hr />
            <div>
                <h2>{text}</h2>
                <h2>{count}</h2>
                <h2>{word}</h2>
                <h2>{read}</h2>
            </div>
        </div>
    </>
}
