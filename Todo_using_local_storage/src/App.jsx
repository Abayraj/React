import { useEffect, useState } from 'react'
import './App.css'

//custom components
import { CustomForm } from './components/CustomForm'
import { TaskList } from './components/TaksList';
import EditForm from './components/EditForm';

function App() {

  const [tasksCurrent, setTask] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing,setIsEditing] = useState(false)

  
//   const updateTask = (updatetask)=>{
//     const deletedArrayValues = setTask(prev => prev.map(task=>(task.id!==updatetask.id)));
//     localStorage.setItem("values",JSON.stringify(deletedArrayValues));
 
//  };


  const  deleteTask =(id)=>{
   const deletedArrayValues = setTask(prev => prev.filter(task=>(task.id!==id)));
   localStorage.setItem("values",JSON.stringify(deletedArrayValues));

};


// const toggleTask = (task) =>{
//   setTask(prev=> prev.map(t =>(t.id===task.id ? {...t,name:!task.name} :{task})))
//   //if it false it make it true if it true it make it false vice versa
//   //if id not match it will return the orginal object

//   // close the edit mode

// }

// const enterEditMode = (task) =>{
//   setEditedTask(task);
//   setEditing(true);
// }



//Task update logic

const updateTask =(value)=>{

  // setTask(prevState => prevState.map(t =>(
  //   // t.id===task.id ?{...t,name:task.name}:t
  //    editedTask.id===task.id ?{...t,name:task.name}:t
  // )))
  // setTask(prev=>prev.map(t=>{
  //   console.log(task.name,task.id,"hello")

  //   console.log(prev.id===task.id,task.name)
    
  // }))

  //close the edit mode


closeEditMode();

}

const closeEditMode = () =>{

  setIsEditing(false);

}
const  enterEditMode = (task) => {
  setEditedTask(task);
  setIsEditing(true);

}


 

//passing an object with some values from coustom form
  const addTask = (task) => {
  const updatedTodo = [...tasksCurrent,task]
  setTask(updatedTodo);
    let localStorageValue = localStorage.setItem("values", JSON.stringify(updatedTodo))
   

  }

  // const handelEdit = ()=>{

  // }
 
 
 

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
      {
        isEditing && (
          <EditForm 
          setIsEditing={setIsEditing} 
          updateTask={updateTask}
          editedTask={editedTask}/>
          
          
        )
      }
      <CustomForm addTask={addTask} />
      {tasksCurrent && (

      <TaskList 
      tasksCurrent={tasksCurrent}
      deleteTask={deleteTask}
      enterEditMode={enterEditMode}
      // toggleTask={toggleTask}

      />)}
    </div>



  )
}

export default App;
