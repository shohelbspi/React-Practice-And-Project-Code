import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [count,setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decriment(){
    if(count>0){
      setCount(count - 1)
    }
  }

  function reset(){
    setCount(0)
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Current Count : {count}</p>

      <div className='buttons'>

        {/* <button onClick={increment}>INCREMENT</button>
        <button onClick={decriment}>DECREMENT</button>
        <button onClick={reset}>RESET</button> */}

        <Button text='INCREMENT' func={increment}/>
        <Button text='DECREMENT' func={decriment}/>
        <Button text='RESET' func={reset}/>

      </div>
    </>
  )
}



export default App
