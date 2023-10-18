import React from "react";
import '../inputs/input.css'

//Reuseable component
export const Textinputs = ({handelchange,errorFileds,lable,id,name,type,value}) => {
    console.log(errorFileds,"error.fileds")
    return (
        <>
            <div>
                <label htmlFor={id}>{lable}</label>
                <input id={id} name={name} type={type} onChange={handelchange} />
                {errorFileds.firstName && <span> is required</span>}
            </div>
        </>
    );
};
