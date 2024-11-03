import React from 'react'

function Index({name,price,count}) {
  return (
    <div>
        <div>Malin Adi: {name}</div>
      <div>Mal Iqymeti: {price} AZN</div>
      <div> 
      Mal Miqdari: {count}</div>
    </div>
  )
}

export default Index
