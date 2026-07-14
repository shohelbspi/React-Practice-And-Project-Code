import { useState } from 'react';
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  // const [userData,setUserData] = useState({
  //   'name':'Shohel Hossain',
  //   'age':21
  // })

  // console.log(userData);

  function increment(){
    setCount(function(prev){
      return prev+1
    })
  }
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default App
