import React, { useEffect, useState } from 'react';
import './TaskItem.css';

const TasklistItems = ({ todos }) => {

    
  

  return (
    <>
      {todos.sort((a, b) => b.id - a.id).map(data => {
        const [checked, setChecked] = useState(data.checked);
    

       
        const textDecoration = checked ? 'underline-text' : 'no-decoration-text';

        const handelCheckbox = () => {
          setChecked(!checked);
          
        };

        return (
          <div key={data.id}>
            <div>
              <input
                type='checkbox'
                value={data.checked}
                name={data.name}
                id={data.id}
                onChange={handelCheckbox}
              />
            </div>
            <label htmlFor={data.id} className='label'>
              <p className={textDecoration}>{data.name}</p>
            </label>
            <div className='task-btn'>
              <button
                className='btn-task'
                aria-label={`Update ${data.name} Task`}
              >
                ✏
              </button>
              <button
                className='btn-task-dlt'
                aria-label={`Delete ${data.name} Task`}
              >
                dlt
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TasklistItems;
