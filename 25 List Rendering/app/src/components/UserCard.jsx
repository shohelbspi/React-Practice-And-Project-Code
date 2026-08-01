import React from 'react'

function UserCard({user}) {
  return (
    <div className='bg-lime-200 mt-5'>
      <h3> Name : {user.age > 18 ?user.name : "To Young"}</h3>
      <h3>{user.email}</h3>
      <h3>{user.age}</h3>
    </div>
  )
}

export default UserCard
