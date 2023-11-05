import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";

export const Counter = () =>{

    //using context
    const {state,dispatch} = useContext(CounterContext);
  

    



    return(
        <>
        <div className="counter-wrapper">
        <span>Counter</span>
        <h2>{state.count}</h2>
        <button className="btn" onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button className="btn" onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </div>
      
        </>
    )

}