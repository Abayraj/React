import { useEffect,useState } from "react";
import AddTodo from "./subcomponents/AddTodo";



const Todo = () => {
    const[todos,setTodos] = useState([]);
    const [editTodo,setEditTodo] = useState("");
    const [inputValue,setInputValue] = useState("");
    const [inputError,setInputError] = useState(false);


    //data fetches on data mounting
    useEffect(()=>{
        let allTodos =  JSON.parse(localStorage.getItem("todos")) ||[];
        setTodos(allTodos);
    });

    const  addTodo = (event) =>{
        if(inputValue ===""){
            return setInputError(true);
        }
        const newTodo = {
            id:Date.now(),
            title:inputValue,
            completed:false,
        };
        const updatedTodos = [...todos,newTodo];
        setTodos(updatedTodos);
        
    };

    return(
        <div className="todo-container">
            <h1 className="heading">Todo List</h1>
            <AddTodo 
            addTodo={addTodo}
            value={inputValue}
            error={inputError}
             />

        </div>
    )
};