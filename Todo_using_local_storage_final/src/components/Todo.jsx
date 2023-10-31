import React, { useEffect, useState } from 'react'
import Addinput from './Building blocks/Addinput'
import TasklistItems from './Building blocks/TasklistItems';






const Todo = ()=>{
    const [inputData,setInputData] = useState('');
    const [todos, setTodos] = useState([]);
    console.log(todos,"todos data first")


    useEffect(()=>{
      const localstorageGetItem = JSON.parse(localStorage.getItem('userData'))
      setTodos(localstorageGetItem);
   
   },[])
 
   
    
   



   const  handelSubmit = (event) =>{
    event.preventDefault();
    const UserdataInfo = {
        name:inputData,
        checked:false,
        id:Date.now()
    
    }
    const  updatedTodos = [...todos,UserdataInfo]
    setTodos(updatedTodos);
    localStorage.setItem('userData', JSON.stringify(updatedTodos));

    setInputData(''); // Clear the input box value
   }







console.log(todos,"todos data second")

  return (
    <div>
        <Addinput 
        setInputData={setInputData}
        inputData={inputData}
        handelSubmit={handelSubmit}
         />
         {/* <InputList todos={todos}
         /> */}
         <TasklistItems  todos={todos}/>


      
    </div>
  )
}

export default Todo;