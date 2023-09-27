export const Oncount = ({count,onIncrement,onDecrement})=>{


    return(
        <>
        <h1>count{count}</h1>
        <button onClick={onIncrement}>increment </button>
        <button onClick={onDecrement}>decrement</button>
        
        </>
      

    )
   
}