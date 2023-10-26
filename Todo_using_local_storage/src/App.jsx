import { useState } from 'react'
import './App.css'

//custom components
import { CustomForm } from './components/CustomForm'
import { TaskList } from './components/TaksList';

function App() {

  const [tasks, setTask] = useState([]);



  const  deleteTask =(id)=>{
    setTask(prev => prev.filter(task=>(task.id!==id)));

}
// const toggleTask = (id) =>{
//   setTask(prev=> prev.map(task =>(task.id===id ? {...task,checked:!task.checked} :{task})))
//   //if it false it make it true if it true it make it false vice versa
//   //if id not match it will return the orginal object

// }


//passing an object with some values from coustom form
  const addTask = (task) => {
    setTask(prevValue => [...prevValue, task])



  }

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>

      <CustomForm addTask={addTask} />
      {tasks && (

      <TaskList 
      tasks={tasks}
      deleteTask={deleteTask}
      // toggleTask={toggleTask}
   

      />)}
    </div>



  )
}

export default App
