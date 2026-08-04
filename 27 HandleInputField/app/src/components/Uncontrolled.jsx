import React, { useRef } from 'react'

function App() {

  const inputRef = useRef(null)

  function submit(){
    console.log(inputRef.current.value);
    
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter Name' />

      <button onClick={submit}>Submit</button>

      <h1>{inputRef?.current?.value}</h1>
    </div>
  )
}

export default App
