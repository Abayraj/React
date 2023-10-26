import React, { useState } from 'react'
import './TaskItem.css'; // Import the CSS file

export default function TaskItem({task,deleteTask}) {
    const [isChecked,setIsChecked] = useState(task.checked);


    const handelCheckboxChange=()=>{
        setIsChecked(!isChecked);
        toggleTask(task.id)
    }
    const textDecoration = isChecked ? 'underline-text' : 'no-decoration-text';


  return (
    <li className='list-items' >
        <div>
            <input 
            type='checkbox'
            checked={isChecked}
            name={task.name}
            id={task.id}
            onChange={handelCheckboxChange}
            
            />
            <label 
            htmlFor={task.id}
            className='lable'
            >
           <p className={textDecoration}>
            {task.name}
           </p>
            </label>
        </div>
        <div className='task-btn'>
            <button 
             className='btn-task'
             aria-label={`Update${task.name} Task`}
             >
                ✏
            </button>
            <button 
             className='btn-task-dlt'
             aria-label={`Update${task.name} Task`}
             onClick={()=>deleteTask(task.id)}
             >
                dlt
            </button>
        </div>
        
    </li>
  )
}
