import React from 'react'
import "./SearchInput.css"

export const SearchInput = ({SearchInputValue,handelChange,clearSearch}) => {
  return (
    <div className='search-input-container'>
        <input type="text" placeholder='Search here....' onChange={handelChange} value={SearchInputValue}/>

        {/**if the string is empty it will not show the button*/}
        {SearchInputValue &&(
           <button onClick={clearSearch}>
           <img src="" alt="" />X
       </button>
        )}
       
    </div>
  )
}


