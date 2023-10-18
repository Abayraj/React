import React from 'react'
import { SearchInput } from './SearchInput/SearchInput'

export const Search = () => {
  return (
    <div className='search-container'>
        <div className="heading-section">
            <img src='"assets/Images/Icons/8666693_search_icon.png"' alt="" />
            <h1>Looking for a movie?</h1>
        </div>

        <SearchInput />
        {/* <SearchList/> */}

    </div>
  )
}


