import React from 'react'

function Parent({children}) {
  return (
    <div>
      <div>Parent Element isdiyir</div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Parent
