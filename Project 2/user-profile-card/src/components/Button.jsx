import React from 'react'

export default function Button(props) {
  return (
    <div>
      <div className='text-white bg-blue-400 py-2 px-2 rounded-full' >{props.text}</div>
    </div>
  )
}
