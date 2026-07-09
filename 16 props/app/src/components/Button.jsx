import React from 'react'

function Button({title,func}) {
  return (
    <div>
        <button onClick={func}>{title}</button>
    </div>
  )
}

export default Button
