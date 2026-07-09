import React from 'react'

function Button(props) {
  return (
    <div>
         <button className='bg-[tomato] rounded-lg py-2 px-2'>{props.title}</button>
    </div>
  )
}

export default Button
