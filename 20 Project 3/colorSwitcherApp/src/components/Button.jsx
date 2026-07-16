import React from 'react'

function Button({ color, children }) {
  return (
  <div className="flex items-center gap-2 ">
    <button
      style={{ backgroundColor: color }}
      className="px-4 py-2 rounded"
    >
      {children}
    </button>
  </div>
);
}

export default Button
