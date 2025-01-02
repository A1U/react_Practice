import React, { useState } from 'react'

function UseStatehooks() {
 const [datas, setdatas]= useState([])
    const [data, setdata]= useState({firstname: "anugya", lastname: "pandey"});
const addItem = ()=>{
    setdatas([...datas, {
        id: datas.length,
        value: Math.random()

    }])
}


    const update = ()=>{
    setdata({...data, firstname : "ravi", lastname: "katiyar"})

 

}

 

  return (
    <div>
      

      <h1>firstName is {data.firstname} and last name is {data.lastname}</h1>
   <button onClick={update}>update name</button>


<ul>
{
    datas.map(item =>(

        <li key={item.id}>{item.value}</li>
    ))
}

    <li>
XYZ
    </li>
</ul>
   <button onClick={addItem}>add item</button>
    </div>
  )
}

export default UseStatehooks
