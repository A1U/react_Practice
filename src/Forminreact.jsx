import React, { useRef, useState } from 'react'

function Forminreact() {
const [name, setname]= useState("priya")
const [password, setpassword]= useState("priya")


const refObj = useRef();
console.log("hbhhgsvxg",refObj);

const handlesubmit = (e)=>{
    e.preventDefault();
    console.log((refObj.current.value).toUpperCase());


}

// const passwordhandle=()=>{
//     setpassword("");

// }

  return (
    <>

   
    <form>
  <label for="fname">First name:</label><br/>
  <input type="text" ref={refObj}/><br/>
  <label for="lname">password</label><br/>
  {/* <input type="text"/> */}
  <button onClick={handlesubmit}>submit</button>
</form>
<h1>hey this is controlled and uncontrolled component </h1>
 </>
  )
}

export default Forminreact
