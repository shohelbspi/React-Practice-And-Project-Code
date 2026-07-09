import React from 'react'
import style from './Card.module.css'

function Card() {
  return (
    <div className=''>
        <h1 className='btn'>Card</h1>
        <p className={style.faltu}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime recusandae ratione voluptatum natus pariatur blanditiis nemo, provident est fugit voluptas.</p>

        <h3 style={{fontSize:'30px',color:'yellow',fontFamily:"sans-serif"}}>Hello How Are You</h3>
    </div>
  )
}

export default Card
