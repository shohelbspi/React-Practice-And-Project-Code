import React, { useState } from 'react'

function State() {
  const [toggle, setToggle] = useState(false)

  if(!toggle) return null

  return (
    <>
       {toggle ? (<h1>Toggle is True</h1>) :(<h1>Toggle is  False</h1>)}
       <button onClick={()=>{
        setToggle(!toggle)
       }}>Toggle</button>
    </>
  )
}

export default State
