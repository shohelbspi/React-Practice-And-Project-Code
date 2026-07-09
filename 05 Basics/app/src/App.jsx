import { useState } from 'react';
import  './App.css'
import Navbar from './Navbar';  



function App(){
  let [count,setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }

 function decrement() {
  if (count > 0) {
    setCount(count - 1);
  }
 }

  return (
   <div>
    <button onClick={increment}>Increment</button>
      <h4>{count}</h4>
    <button onClick={decrement}>Decrement</button>
   </div>
      
  )
}

export default App;