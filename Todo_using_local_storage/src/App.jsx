import { useState } from 'react'
import './App.css'

//custom components
import { CustomForm } from './components/CustomForm'

function App() {

  const [tasks,setTask] = useState([]);


  const addTask = (task) =>{
    setTask(prevValue => [...prevValue,task])
   

  }

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask}/>
    </div>



  )
}

export default App
