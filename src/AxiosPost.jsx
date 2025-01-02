import axios from 'axios';
import React, { useState } from 'react'

function AxiosPost() {
    const data =  {fname: "", lname : ""}

    const [inputdata , setdata] = useState(data);

 const handledata = (e)=>{
    setdata({...inputdata, [e.target.name]:e.target.value})
 }
const handlesubmit = (e)=>{
e.preventDefault();
axios.post('https://jsonplaceholder.typicode.com/users', inputdata)
.then((res)=>{
    console.log("----------------->>>>>>>>>>>>>>",res)
    setdata(res.data);



})
}



const handleupdate = (e)=>{
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/users/1', inputdata)
    .then((res)=>{
        console.log("----------------->>>>>>>>>>>>>>",res)
    })}
   const  handledelete= (e)=>{
    e.preventDefault();
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>{
        console.log("----------------->>>>>>>>>>>>>>",res)
    })

   }
    
  return (




    <div>
   <label >First Name: </label>
   <input type='text' name = "fname" onChange={handledata}  value={inputdata.fname}/>
   
   <br/>
   <label>Last Name: </label>
   <input type='text' name ="lname" onChange={handledata} value={inputdata.lname} /> 
   
   <br/>

   <button onClick={handlesubmit}>submit</button>

   <button  onClick={handleupdate}> update </button>
   <button  onClick={handledelete}> delete </button>

   
      
    </div>
  )
}

export default AxiosPost
