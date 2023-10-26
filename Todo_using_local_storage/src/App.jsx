import { useEffect, useState } from 'react'
import './App.css'

//custom components
import { CustomForm } from './components/CustomForm'
import { TaskList } from './components/TaksList';
import EditForm from './components/EditForm';

function App() {

  const [tasksCurrent, setTask] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  
  const updateTask = (updatetask)=>{
    const deletedArrayValues = setTask(prev => prev.map(task=>(task.id!==updatetask.id)));
    localStorage.setItem("values",JSON.stringify(deletedArrayValues));
 
 };


  const  deleteTask =(id)=>{
   const deletedArrayValues = setTask(prev => prev.filter(task=>(task.id!==id)));
   localStorage.setItem("values",JSON.stringify(deletedArrayValues));

};
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
    if(tasksCurrent.length>0){
      let getlocalData = JSON.parse(localStorage.getItem("values"));
      setTask(getlocalData);

    }

 

    // console.log(typeof(getlocalData))   
},[])
// console.log(tasksCurrent)

// console.log(typeof(tasksCurrent),"==taskcurrent")

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm editedTask={editedTask} updateTask={updateTask}/>


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
