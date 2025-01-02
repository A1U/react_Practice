import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import PropsLearn from './PropsLearn';
import StateLearn from './StateLearn';
import ClassC from './ClassC';
import ClassB from './ClassB';
import Forminreact from './Forminreact';
import LiftingState from './LiftingState';
import Listinreact from './Listinreact';
import UseStatehooks from './UseStatehooks';
import Counter from './Counter';
import useCounter from './useCounter';
import AxiosApiCall from './axiosApiCall';
import AxiosPost from './AxiosPost';


// context API 
// create, provider, consumer
  const  data= createContext();
function App() {

  const [count, increament, Decrement]= useCounter();
  const name = "kanpur"


  const getdata = (data)=>{
    console.log(data)
  
  }
  return (
    <>
   <PropsLearn/>
       <StateLearn/>
       <data.Provider value={name}>
<ClassB/>

       </data.Provider>
       <Forminreact/>
       <LiftingState getdata={getdata}/>
       <Listinreact/>
       <UseStatehooks/>
       <Counter/>

{/* <h1  style={{marginLeft: "600px",}}>Custom hooks: {count}</h1> */}
<button  onClick= {increament}   style={{marginLeft: "400px", backgroundColor: "green"}}>increament</button>
<h1  style={{marginLeft: "100px",}}>Custom hooks: {count}</h1>

<button  onClick={Decrement} style={{marginLeft: "400px", backgroundColor: "green"}}>Decreament</button>


<h1>
  Axios api get method  call
</h1>
<AxiosApiCall/>
<h1>
  Axios api Post data in server   -----Post api-----
</h1>
<AxiosPost/>

    </>
  );
}

export default App;
export {data}

