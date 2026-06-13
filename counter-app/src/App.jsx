import { useState } from "react" //if we use useState and first step is import react
export default function App(){
  const [count,setCount] = useState(0)//we have give 0 bcz default value have give 
  const [hide,setHide] = useState(false)//why in parameter have false value bcz we have to display the count and when click count will hide.
  return<>
    <h1 className="text-center mt-5">Counter app</h1>
    <div className="text-center">
      <h1 style={{visibility: hide ?"hidden" : "" }}>{count}</h1>
    <div>
      <button className="btn btn-primary mt-2"
        onClick={()=>{
          setCount(count+1) //this function is call-back action and working of when user click and this will be count++ 
        }}
      >
        click me
      </button>
      <button className="btn btn-danger ms-2 mt-2"
        onClick={()=>{
          setHide(!hide)
        }}
      >Hide</button>
    </div>
    </div>
  </>
}
