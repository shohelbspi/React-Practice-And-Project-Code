import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    let params = useParams()

  return (
    <div className='page'>
      Details in {params.name}
    </div>
  )
}

export default Details
