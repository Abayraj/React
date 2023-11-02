
import React, { useState } from 'react'

const  EditTodo = ({editTodo:{title,id},setEditTodo,handelEdit}) => {
    const [todo,setTodo] = useState(title)
  return (
    <div className='edit-todo-wrapper'>
        <h3>Edit Todo</h3>
        <div className='edit-todo-items'>
            <input type="text" 
            name="todo"
            value={todo}
            onChange={(event)=>setTodo(event.target.value)}
            />
            <div className='btns'>
                <button className='all-btn' onClick={()=>setEditTodo("")} >Cancel</button>
                <button className='all-btn' onClick={()=> handelEdit(id,todo)}>save</button>
            </div>

        </div>

    </div>
  )
}

export default EditTodo;
