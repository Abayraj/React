import React from 'react'
import { useReducer } from 'react';
import { counterReducer } from './counterReducer';

export const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer,{
        count:0,
    });
  return (
    <div className='counter-wrapper'>
        <h1>count{state.count}</h1>
        <button className='btn' onClick={()=> dispatch({type:"increment"})}>Increment</button>
        <button className='btn' onClick={()=> dispatch({type:"decrement"})} >decrement</button>
        <button className='btn' onClick={()=> dispatch({type:"decrement_by",payload:{count:5,},}) }>decrement by{state.count}</button>
        <button className='btn' onClick={()=> dispatch({type:"increment_by",payload:10})}>on increment by</button>
        <button className='btn' onClick={()=> dispatch({type:"reset_by"})}>reset by to 0 {state.count}</button>
    </div>
  )
};
