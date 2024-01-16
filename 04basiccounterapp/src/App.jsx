

import React ,{useState} from "react"

function App() {

  const [count,setCount] = useState(5)

  function increment () {
    setCount(count + 1)
  }
  function decrement () {
    setCount(count - 1)
  }
  
  return (
    <>
     <div className="box">
         <div>
          <h1>Count is : {count}</h1>
         </div>
        <div>
          <button className="increment" onClick={increment}>Increment</button>
        </div>
        <div>
          <button className="decrement" onClick={decrement}>Decrement</button>
        </div>
     </div>
    </>
  )
}

export default App
