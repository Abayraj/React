import { useEffect,useState } from "react";
import AddTodo from "./subcomponents/AddTodo";
import AllTodos from "./subcomponents/AllTodos";
import EditTodo from "./subcomponents/EditTodo";




const Todo = () => {
    const[todos,setTodos] = useState([]);
    const [editTodo,setEditTodo] = useState("");
    const [inputValue,setInputValue] = useState("");
    const [inputError,setInputError] = useState(false);


    //data fetches on data mounting from 
    useEffect(()=>{
        let allTodos =  JSON.parse(localStorage.getItem("dataTodos")) ||[];
        setTodos(allTodos);
    },[]);

    const handelInputChange =(event) =>{
        const { value } = event.target;
        setInputValue(value);
        console.log(inputValue)
        if(value ===""){
            return setInputError(true);
        }
    };




    //For adding data to local storage 
    const  addTodo = () =>{
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

        localStorage.setItem("dataTodos",JSON.stringify(updatedTodos))
        setInputValue("");
    };

    // console.log( todos,"type")
    //handel delete todo
    const handelEdit = (id ,value) =>{
        const  updatedTodos =  todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,title:value};
            }
            else {
                return todo;
            }
        });

        setTodos(updatedTodos);
        localStorage.setItem("dataTodos",JSON.stringify(updatedTodos));

        setEditTodo("");
    }
    //handel delete
    const handleDelete = (id) =>{
        const updatedTodos = todos.filter((todo)=> todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("dataTodos",JSON.stringify(updatedTodos));

    };
    const handleComplete =(id)=>{
        const updatedTodos =  todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,completed: !todo.completed};
            }
            else{
                return todo;
            }
        });
        setTodos(updatedTodos);
        localStorage.setItem("dataTodos",JSON.stringify(updatedTodos));

    }
    return(
        <div className="todo-container">
            <h1 className="heading">Todo List</h1>
            <AddTodo 
            addTodo={addTodo}
            value={inputValue}
            error={inputError}
            handelInputChange={handelInputChange}
             />

             <AllTodos
             setEditTodo={setEditTodo}
             todos={todos} 
             handleDelete={handleDelete}
             handleComplete={handleComplete}
             />
             {editTodo &&(
                 <EditTodo 
                 editTodo={editTodo}
                 setEditTodo={setEditTodo}
                 handelEdit={handelEdit}
                 />

             )}
            
        </div>
    )
};

export default Todo;