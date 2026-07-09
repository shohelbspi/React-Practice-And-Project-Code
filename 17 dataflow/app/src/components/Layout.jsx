import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'

function Layout(props) {
    console.log(props);

    const [count,setCount] = useState(5)
    
  return (
    <div className='p-20 bg-green-300 gap-3'>
        <h1>Layout</h1>
      <Hero data={props.data} count={count}/>
      <About data={props.data} count={count}/>
    </div>
  )
}

export default Layout
