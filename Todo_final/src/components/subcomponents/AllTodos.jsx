
import React from 'react'
import "./Alltodo.css"

const AllTodos = ({setEditTodo,todos,handleDelete,handleComplete}) => {
  return (
    <div className='all-todo-wrappper'>
      {/* todo loop starts here*/}
      {todos.length !==0 ? (
        todos.map((todo,index)=>{
          return  (
            <div>
                  <div className='todo-items' key={todo.id}> 
            <span>{index +1}.</span>
            {console.log(todo.completed,"todo completed")}
            <span className={`${todo.completed && "line-through"} title`}
            onClick={()=> handleComplete(todo.id)}>
              {todo.title}
            </span>
            <div> 

              <button className='all-btn' 
              onClick={()=> setEditTodo({id:todo.id, title:todo.title})}
              >Edit</button>

              <button className='all-btn' 
              onClick={()=> handleDelete(todo.id)}
              >Delete</button>
            </div>
           
            </div>
            <hr className='hr-dotted'/>
            </div>
        
          )
        })
      ):("nothing")}

    </div>
  )
}


export default AllTodos;