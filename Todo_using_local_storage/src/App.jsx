import { useEffect, useState } from 'react'
import './App.css'

//custom components
import { CustomForm } from './components/CustomForm'
import { TaskList } from './components/TaksList';

function App() {

  const [tasksCurrent, setTask] = useState([]);



  const  deleteTask =(id)=>{
    // setTask(prev => prev.filter(task=>(task.id!==id)));

}
// const toggleTask = (id) =>{
//   setTask(prev=> prev.map(task =>(task.id===id ? {...task,checked:!task.checked} :{task})))
//   //if it false it make it true if it true it make it false vice versa
//   //if id not match it will return the orginal object

// }
 

//passing an object with some values from coustom form
  const addTask = (task) => {
  const updatedTodo = [...tasksCurrent,task]
  setTask(updatedTodo);
    let localStorageValue = localStorage.setItem("values", JSON.stringify(updatedTodo))
   

  }
 
 
 

  useEffect(()=>{
    let getlocalData = JSON.parse(localStorage.getItem("values"));
    setTask(getlocalData);

    // console.log(typeof(getlocalData))   
},[])
// console.log(tasksCurrent)

// console.log(typeof(tasksCurrent),"==taskcurrent")

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>

      <CustomForm addTask={addTask} />
      {tasksCurrent && (

      <TaskList 
      tasksCurrent={tasksCurrent}
      deleteTask={deleteTask}
      // toggleTask={toggleTask}
   

      />)}
    </div>



  )
}

export default App;
