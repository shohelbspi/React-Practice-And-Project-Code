import React from 'react'

function LogicalOR() {
    let userName = ''
  return (
    <div>
      {userName || <h1>Guest User</h1>}
    </div>
  )
}

export default LogicalOR
