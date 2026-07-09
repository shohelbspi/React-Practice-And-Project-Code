import React, { useState } from 'react'

function Header(props) {
    console.log(props)

    const[test,setTest] = useState('This is Child data')

    function changeData(){
        
        props.func(test)
    }    
  return (
    <div>
      <h2 className='bg-[tomato] h-10 text-white m-auto m-2'  >Header Section</h2>

      <button onClick={changeData} className='bg-green-400'>Click Me</button>
    </div>
  )
}

export default Header
