import axios from 'axios';
// export const fetchData = async()=>{
//     const data = await fetch("http://jsonplaceholder.typicode.com/todos")
//     const json = await data.json()
//     return json

// };


//example of axios
// in this case axios handel and make it json so we don't need to await two times
export const fetchData = async()=>{
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
};

