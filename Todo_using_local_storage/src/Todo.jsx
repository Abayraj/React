import React from 'react'
import Todoinput from './components/input/input'
import { useState, useEffect } from 'react'

export default function TodoForm() {
    const [inputItems, setinputItems] = useState("");
    const [todos, setTodo] = useState([])
    console.log(todos);

    localStorage.setItem("items", JSON.stringify(inputItems))

    useEffect(() => {
        let allTodos = JSON.parse(localStorage.getItem('items'));
        console.log(allTodos)
    }, [])




    function handelChange(event) {
        setinputItems(event.target.value);
        localStorage.setItem("items", JSON.stringify(inputItems));
    }

    // function pushData(event){
    //     event.preventDefault();

    // // }
    // console.log(inputData)
    // console.log(SearchInputValue,"search input value")



    return (
        <div>
            <Todoinput handelChange={handelChange} inputItems={inputItems}
                setinputItems={setinputItems} />
        </div>
    )
}
