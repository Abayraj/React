import React from 'react';
import TaskItem from './TaskItem';

export const TaskList =({tasksCurrent,deleteTask ,enterEditMode}) =>{
    // console.log(typeof(tasksCurrent) )
    return (
       <ul className='ul-list'>
        {
            tasksCurrent.sort((a,b)=> b.id - a.id).map(task=>(
                <TaskItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                enterEditMode={enterEditMode}
               
                />
            ))
        }

       </ul>
    )

}
