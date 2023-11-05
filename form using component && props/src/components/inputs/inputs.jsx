import React from "react";
import '../inputs/input.css'

//Reuseable component
export const Textinputs = ({handelchange,errorFileds,lable,id,name,type,value,email}) => {
    console.log(errorFileds,"error.fileds")
    return (
        <>
            <div>
                <label htmlFor={id}>{lable}</label>
                <input id={id} name={name} type={type} onChange={(event)=>handelchange(event)} placeholder="name"/>
                <input type={type} name={email} onChange={(event)=>handelchange(event)} placeholder="email"  />
                {errorFileds.firstName && <span> is required</span>}
            </div>
        </>
    );
};
