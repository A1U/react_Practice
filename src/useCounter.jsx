import React, {useState} from 'react'

function useCounter() {
    const  [count, setcount]= useState(0);
     const increament= ()=>{
        setcount(count+1);

     }
     const Decrement= ()=>{
        setcount(count-1);

     }

  return [count, increament, Decrement]
    



  
}

export default useCounter
