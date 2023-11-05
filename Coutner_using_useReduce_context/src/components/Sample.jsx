import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export const Sample = () => {
    const {state,dispatch} = useContext(CounterContext)  
  return (
    <div>
        <h2> this is from sample file {state.count}</h2>
    </div>
  )
}
