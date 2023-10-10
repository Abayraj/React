import React,{useEffect, useState} from "react";

export const Title =({ name }) =>{
    useEffect(()=>{
    let intreval =   setInterval(()=>{
        console.log("fetching data")
        
       },1000)

        return()=>{
            let intreval = clearInterval(intreval)
        }

    },[]);//dependancy array if not put this array it will again try to trigger this useEffect


    return(
        <div>
            <h1>Welcome back </h1>
        </div>
    )



}