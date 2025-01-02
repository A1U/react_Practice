import React,{useReducer} from 'react'



const initialState = 0
const  reducer = (state, action) =>{
    switch(action){
      case "increament":
        
        return state+1;
        case   "decreament":
      
        return state-1;
    }
  


}
function Counter() {



const [count, dispatch] = useReducer(reducer, initialState);





  return (
    <>
    <h1>Reducer</h1>
    <div className='' style={{display: "flex", marginLeft:"60px"}}>

    <br/>
        <h1>
     {count}

        </h1>
      <br/>
      <button className=''  onClick={()=>dispatch("increament")} style={{backgroundColor: "red", height: "100px", width: "100px"}}>
        Increament
      </button>
      <br/>
    
      
 
      <button className='' style={{backgroundColor: "red",  height: "100px", width: "100px"}}  onClick={()=>dispatch("decreament")}>Decreament</button>
    </div>
</>
  )
}

export default Counter
