import React from 'react';
import "./SearchList.css";
export const SearchList = ({SearchLists}) => {
  return (
    <div className='search-list-container' >
        {SearchLists.map(data=>(
            <div className="search-items" key={data.id}>
            <img src={`/fwXeTKmJvlv7kbH8QDmbykGfMeK.jpg${data.poster_path}`} alt=""height='50' width='100' style={{objectFit:'contain'}}  />
            <p className='title'>{data.title}</p>
        </div>


        ))}

      
    </div>
  )
}


 