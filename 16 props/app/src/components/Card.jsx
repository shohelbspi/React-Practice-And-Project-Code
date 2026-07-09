import React from 'react'

// function Card(obj) {
//   return (
//     <div className='card'>
//         <h2>{obj.name}</h2>
//         <p>{obj.profesion}</p>
      
//     </div>
//   )
// }
// function Card({name,profesion}) {
//   return (
//     <div className='card'>
//         <h2>{name}</h2>
//         <p>{profesion}</p>
      
//     </div>
//   )
// }
function Card({name,profesion,content}) {
  return (
    <div className='card'>
        <h2>{name}</h2>
        <p>{profesion}</p>
        <p>{content}</p>
      
    </div>
  )
}

export default Card
