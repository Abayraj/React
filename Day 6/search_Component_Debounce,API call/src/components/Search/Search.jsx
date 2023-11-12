import React, { useContext, useEffect, useState } from 'react'
import { SearchInput } from './SearchInput/SearchInput'
import "./Search.css"
import { SearchList } from './SearchList/SearchList'
import axios from 'axios';
import { NamePass } from '../../context/NamePass';
import { TestContext } from '../../context/TestContext';
import { AnotherMessage } from '../../context/anotherMessage';

//Steps
// 1. Fetch API => Filter locally
// 2. Fetch API => Filter through API

// const API_URL ="https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";
const API_URL = "http://localhost:5500/api/movies";

export const Search = ({ auth, Welcomebtn }) => {
  const [SearchInputValue, setSearchInputValue] = useState("");
  const [SearchLists, setSearchList] = useState([]); //Defalut API DATA
  // const [filterdList,setFilteredList] = useState([]);
  const { name } = useContext(NamePass);
  const { message } = useContext(TestContext);
  const { OtherMessage } = useContext(AnotherMessage);

  const handelChange = (event) => {
    setSearchInputValue(event.target.value);
    // const newFilteredItems = SearchLists.filter(data=>{
    //   return data.title.toLowerCase().includes(event.target.value.toLowerCase())
    // });
    //query passing
    // fetchMovieList(event.target.value);
    // setFilteredList(newFilteredItems);

  };

  const clearSearch = () => {
    setSearchInputValue("");
    // setFilteredList([]);
    setSearchList([]);
  }
  //also we can pass query here to query but using useEffect logic is also best
  const fetchMovieList = async () => {
    // const  response = axios(`${API_URL}&query=${setSearchInputValue}`);
    try {
      const response = await axios(API_URL, {
        params: {
          movieName: SearchInputValue,
        },

      });

      console.log(response.data, "results")
      setSearchList(response.data);

    }
    catch (error) {
      console.log(error)

    }
  }

  //   // setFilteredList(response.data.results)
  // };
  // //  console.log(filterdList,"===filtered list")

  const submitMovie = async () => {
    // const  response = axios(`${API_URL}&query=${setSearchInputValue}`);
    try {
      const response = await axios(API_URL, {
        method: "POST",
        data: {
          movieName: SearchInputValue,
        },
      });
      setSearchList(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  //passing data in the body
  const deleteMovie = async ()=>{
    try{
      const response = await axios.delete(API_URL,{
        method:"DELETE",
        data:{
          movieName:SearchInputValue,
        },
      });
      setSearchList(response.data);
    }
    catch(error){
      console.log(error);
    }
  }




  useEffect(() => {
    // fetchMovieList()
    const timeout = setTimeout(() => {
      if (setSearchInputValue) {
        fetchMovieList();
      }
    }, 500);
    console.log("Mount");
    return () => {
      clearTimeout(timeout);
      console.log("unMount");
    }
  }, [SearchInputValue])



  return (
    <div className='search-container'>
      <div className="heading-section">
        <img src="src/assets/Images/Icons/pngtree-search-icon-image_1344447.jpg" alt="" width='20' height='20px' />
        <h1>Looking for a movie?</h1>
        <h2 style={{ color: "white" }}>{message}</h2>
        <h1 style={{ marginLeft: "20px" }}>{name}</h1>
      </div>

      <SearchInput SearchInputValue={SearchInputValue} handelChange={handelChange} clearSearch={clearSearch} auth={auth} Welcomebtn={Welcomebtn} />
      <button onClick={submitMovie}>Submit</button>
      <button onClick={deleteMovie}>Delete</button>
      {/* <SearchList SearchLists={filterdList} /> */}
      <SearchList SearchLists={SearchLists} />
      <h3 style={{ color: "white" }}>{OtherMessage}</h3>


    </div>

  )


}


