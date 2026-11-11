import { useState } from "react";
import "./App.css";

function App() {

  const[count,setCount]=useState(2)

  
function addNum(){
  console.log("num")
  setCount(count+2)
}

function subNum(){
  setCount(count-2)
}
  return (
    <div>
      <button onClick={addNum}>+</button>
      <div>{count}</div>

      <button onClick={subNum} > - </button>
    </div>
  );
}

export default App;
