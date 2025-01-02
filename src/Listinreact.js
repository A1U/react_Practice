import React from 'react'

function Listinreact() {
    const ipl = [2,3,4,5,6,7,8,9];

const result = ipl.map((x, index)=> <h1 key={index}>{index}-{x*2}</h1>)
  return (
    <div className='app'>
    <h1>   {result} </h1>
 
      
    </div>
  )
}

export default Listinreact
