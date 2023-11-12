import React from 'react';
import "./SearchList.css";
export const  SearchList = ({SearchLists}) => {
  console.log(SearchLists,"search")
  return (
    <div className='search-list-container' >
        {SearchLists?.map(data=>(
            <div className="search-items" key={data.id}>
            <p className='title'>{data.title}</p>
        </div>


        ))}

      
    </div>
  )
}


 