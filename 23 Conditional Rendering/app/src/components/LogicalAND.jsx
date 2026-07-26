import React from 'react'

function LogicalAND() {
    let isAdmin = false 

  return (
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
    </div>
  )
}

export default LogicalAND
