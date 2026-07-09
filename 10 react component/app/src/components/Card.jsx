import React from 'react'

const Card = ({title,desc,img}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>

      
    </div>
  )
}

export default Card
