import React, { useState } from 'react'

function LiftingState(props) {
const [name, setname] = useState();
const handlesubmit = (e)=>{
    e.preventDefault();
    props.getdata(name);
    
    


}




  return (
    <div>
    <form>
    <h1>Lifting State</h1>
       <label for="lname">name</label><br/>
  <input type="text" onChange={(e)=> setname(e.target.value)}/>
  <button onClick={handlesubmit}>submit</button>
</form>
    </div>
  )
}

export default LiftingState
