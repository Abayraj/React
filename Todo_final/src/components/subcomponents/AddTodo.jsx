import React from 'react'

const  AddTodo = ({addTodo, handelInputChange, value, error}) => {
  return (
    <div className='add-todo-container'>
      <div className='input-add'>
        <input type="text" 
        name='todo'
        placeholder='New todo...'
        value={value}
        onChange={handelInputChange}
        />
        <button className='all-btn' onClick={addTodo}>Add Todo</button>
      </div>
      {error && <p className='error'>*please enter your todo</p>}

    </div>
  )
}


export default AddTodo;