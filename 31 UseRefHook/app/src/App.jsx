import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [randomNumber,setRandomNumber] = useState(0)

  let randerCount = useRef(0)

  function handleChange(){
    setRandomNumber(Math.floor(Math.random()*100))
  }

  useEffect(function(){
    randerCount.current +=1
  })


  return (
    <>
     <h3>Random Number : {randomNumber}</h3>
     <h3>Re Rander Number : {randerCount.current}</h3>
     <button onClick={handleChange} className='bg-[lightseagreen] p-4 w-40px'>Generate Random Number</button>
    </>
  )
}

export default App
