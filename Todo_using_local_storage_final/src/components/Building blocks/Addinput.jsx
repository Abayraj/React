import React from 'react'
import './Addinput.css'

const  Addinput = ({setInputData,inputData,handelSubmit}) => {

  return (
    <div>
        <h1>Add todo </h1>
        <form onSubmit={handelSubmit} className='Add-form'>
        <input 
        value={inputData}
        type='text'
        onChange={(event)=>(setInputData(event.target.value))}
        placeholder='please type your task'
        />
        <button type='submit'>insert</button>
        </form>
       
        
      
    </div>
  )
}

export default Addinput;