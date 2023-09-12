import { useState } from "react"

export default function Products2() {
  let [count, setCount] = useState(0); 
  
  function changeCount() {
    setCount(Math.random())
  }
  return <>

    <h2>Products Component</h2>
    <h1>{count}</h1>
    <button onClick={changeCount} className="btn btn-danger my-2">change count</button>
  </>
}