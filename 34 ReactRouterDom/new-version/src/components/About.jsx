import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

export default function About() {
    const data = useLoaderData()
    console.log(data);
    
  return (
    <div className='page'>
      About

      <Outlet/>

      {
        data.map(function(item){
            return(
                <div className='flex gap-3 border-2'>

                <p>{item.name}</p>
                <p>{item.email}</p>
                </div>
            )
        })
      }
    </div>
  )
}
