import React, { useEffect, useState } from 'react'
import { SearchInput } from './SearchInput/SearchInput'
import "./Search.css"
import { SearchList } from './SearchList/SearchList'
import axios from 'axios';

//Steps
// 1. Fetch API => Filter locally
// 2. Fetch API => Filter through API

const API_URL ="https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = () => {
  const [SearchInputValue, setSearchInputValue] = useState("");
  const [SearchLists,setSearchList] = useState([]); //Defalut API DATA
  const [filterdList,setFilteredList] = useState([]);


  const handelChange = (event) =>{
    setSearchInputValue(event.target.value);
    const newFilteredItems = SearchLists.filter(data=>{
      return data.title.toLowerCase().includes(event.target.value.toLowerCase())
    });
    setFilteredList(newFilteredItems);

  };

  const fetchMovieList = async () =>{
    // const  response = axios(`${API_URL}&query=${setSearchInputValue}`);
    const  response = await axios(API_URL,{
      params:{
        query:"movie",
      },
      
    });

    setSearchList(response.data.results)
    setFilteredList(response.data.results)
  };


  useEffect(()=>{

    fetchMovieList()



  },[])




  return (
    <div className='search-container'>
        <div className="heading-section">
            <img src="src/assets/Images/Icons/pngtree-search-icon-image_1344447.jpg" alt="" width='20' height='20px'  />  
            <h1>Looking for a movie?</h1>
        </div>

        <SearchInput   handelChange={handelChange}/>
        <SearchList SearchLists={filterdList} />

    </div>
  )
}


