import React from 'react'
// import 'input.css'

export default function Todoinput() {
  return (
    <div>
        <input className='todo-input' type='text' id='' placeholder='New todo'
        onChange={(event)=>console.log((event.target.value))}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </div>
  )
}
