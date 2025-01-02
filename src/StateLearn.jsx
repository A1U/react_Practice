import React, { useEffect, useState , useRef } from 'react'

function StateLearn() {
    // const val =[2,34,5,4,5]
    const [data, setdata] = useState(0);
    const [ count, setcount] = useState("ritika");
    const [name, setname]= useState("anugya");

    const ref = useRef("")
    useEffect (()=>{
      console.log("this is useEffect");

    }, [data])
    const updateref = ()=>{
        setname("poonam")
        ref.current.focus()
    ref.current.style.color= "blue";
    }

  const reset = ()=>{
    setname("")
    
  }

     const updatecount =()=>{
        setcount("ANUGYA")
     }
 
      var updatestate = ()=>{
       
        if(data>2000){
        
            setdata(800)
        }
        else{
    setdata( data+1);

        } 
      }

  return (
    <div>
      <h1>
        hey this is state   {data}
        <button onClick={updatestate}>click me</button>
        <h1>{count}</h1>
        <button onClick={updatecount}>click me</button>

<h1>Learning useref</h1>
        <input type='text' ref={ref} value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={reset}>reset</button>
        <button onClick={updateref}>update</button>


        
      </h1>
    </div>
  )
}

export default StateLearn
