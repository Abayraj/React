import React, { useState } from 'react'
const EditForm = ({editedTask,updateTask}) => {

    const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name);


    const handelFormSubmit = (event) => {
        event.preventDefault();
        // updateTask()

        setTask("")
      
    }
    return (

        <>
        <div 
        role='dialoge' 
         aria-labelledby='editTask'
        //  onClick={}
         >
        <form className='todo'
            onSubmit={handelFormSubmit}
        >
            <div className="wrapper">
                <input
                    type="text"
                    id="editTask"
                    className="input"
                    value={updatedTaskName}
                    onInput={(event) => setUpdatedTaskName(event.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Update Task"
                />
                <label
                    htmlFor="editTask"
                    className="lable"
                >Update Task</label>
            </div>
            <button className='btn'
                aria-label={`confirm edit task to now read ${updatedTaskName}`}
                type="submit"
            >✔
             </button>

        </form>

        </div>
        </>
        
       
    )
}


export default EditForm;
