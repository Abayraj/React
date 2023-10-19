import React from 'react'
import "./SearchInput.css"

export const SearchInput = ({handelChange}) => {
  return (
    <div className='search-input-container'>
        <input type="text" placeholder='Search here....' onChange={handelChange}/>
        <button>
            <img src="" alt="" />X
        </button>
      
    </div>
  )
}


