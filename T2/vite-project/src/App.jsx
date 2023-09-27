import { useState } from 'react'
import './App.css'
import {Oncount} from '../components/counter';


function App() {
  const [count, setCount] = useState(0)

  const onIncrement =()=>{
    (count<10)?setCount(curr=>curr+1):alert("Increment is limited upto 10");
  }
  const onDecrement =()=>{
    (count>0)?setCount(curr=>curr-1):alert('Negative vlaue is not possible')
  }
  // const onIncrement = ()=>setCount((currentvalue)=>currentvalue+1)
  // const onDecrement = ()=>setCount((currentvalue)=>currentvalue-1)
 

  return (
    <>
    
      <Oncount count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </>
  )
}
export default App;
