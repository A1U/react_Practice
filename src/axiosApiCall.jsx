import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosApiCall() {
    const [userdata, setdata]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log("--------------------->.",res)
            setdata(res.data)
        })
        

    }, [])




  return (
    <>


    <div>
         


            <table>
            <thead>
               <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
               </tr>
            </thead>
            <tbody>
            {userdata.map((data, index)=>{
    return (
    <tr key={index}>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>{data.email}</td>
    </tr>)
   })}            </tbody>
          </table>
          


         
        
    </div>
    </>
  )
}

export default AxiosApiCall;
