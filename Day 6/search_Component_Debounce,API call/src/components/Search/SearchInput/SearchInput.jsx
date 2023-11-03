import React from 'react'
import "./SearchInput.css"
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'


export const SearchInput = ({SearchInputValue,
  handelChange,
  clearSearch,
  auth,
  Welcomebtn,
}) => {
  //context api example
  const {userName,ToggleuserName} = useContext(AuthContext);



  // console.log(typeof((auth)))
  return (
    <>
    {userName &&(<h1 style={{color:"white" ,marginBottom:"10px"}}>Hello ABAY</h1>) }
    <button onClick={ToggleuserName}>User show context</button>
     {auth && ( <h1 style={{color:"white" ,marginBottom:"10px"}}>hello welcome user</h1>)}
    <button onClick={Welcomebtn}>click props driling</button>
      <div className='search-input-container'>
        <input type="text" placeholder='Search here....' onChange={handelChange} value={SearchInputValue} />

        {/**if the string is empty it will not show the button*/}
        {SearchInputValue &&(
           <button onClick={clearSearch}>
           <img src="" alt="" />X
       </button>
        )}
       
    </div>
    </>
  
  )
}


