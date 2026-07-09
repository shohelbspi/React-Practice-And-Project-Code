import React from 'react'

function Test({data,isStudent}) {
    const {title,time} = data
  return (
    <div>
      <p>{title}</p>
      <p>{time}</p>
      <p>{isStudent}</p>
    </div>
  )
}

export default Test
