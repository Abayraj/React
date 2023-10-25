import React, { useState } from 'react'

//libary import icons
import { PlusIcon } from '@heroicons/react/24/solid'
import "./CustomForm.css"


export const CustomForm = ({addTask}) => {

    const [task,setTask] = useState("");


    const handelFormSubmit = (event) => {
        event.preventDefault();
        addTask({
            name:task,
            checked:false,
            id:Date.now()
        })
        setTask("")
      
    }
    return (
        <form className='todo'
            onSubmit={handelFormSubmit}
        >
            <div className="wrapper">
                <input
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(event) => setTask(event.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task"
                />
                <label
                    htmlFor="task"
                    className="lable"
                >Enter Task</label>
            </div>
            <button className='btn'
                aria-label="Add Task"
                type="submit"
            >+   
             </button>


        </form>
    )
}

