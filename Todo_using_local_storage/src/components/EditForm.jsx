import React, { useState } from 'react'

//libary import icons
import { PlusIcon } from '@heroicons/react/24/solid'
import "./CustomForm.css"


 const EditForm = ({editedTask,updateTask}) => {
    



  
    console.log(editedTask.name,"edited task")

    
    // console.log(TaskValues,"task values")

    const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name);
    const [NewupdatedTask,setUpdatedTask] = useState(editedTask);
    

    const handelFormSubmit = (event) => {
        event.preventDefault();
        setUpdatedTask(prev=>({...prev,name:updatedTaskName}))
        updateTask(NewupdatedTask);
        // setUpdatedTaskName("")
      
    }
    return (
        <form className='todo'
            onSubmit={handelFormSubmit}
        >
            <div className="wrapper">
                <input
                    type="text"
                    id="editTask"
                    className="input"
                    value={updatedTaskName}
                    onChange={(event) => setUpdatedTaskName((event.target.value))}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Update Task"
                />
                <label
                    htmlFor="editTask"
                    className="lable"
                ></label>
            </div>
            <button className='btn'
                aria-label="Add Task"
                type="submit"
            >Update Task
             </button>


        </form>
    )
}

export default EditForm;

