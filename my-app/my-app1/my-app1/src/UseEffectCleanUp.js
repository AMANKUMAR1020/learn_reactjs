import { useState,useEffect } from "react";

const UseEffectCleanUp= ()=>{
    const[size,resize1]=useState(window.innerWidth);
    
    const reSize=()=>{
        resize1(window.innerWidth);
    }
    useEffect(()=>
    {
        console.log('event is trigered');
        window.addEventListener('resize',reSize)
        return (
            window.removeEventListener('resize',reSize)
        )
    })
    
    return (
        <>
        <h2>Screen Size</h2>
        <h2>{size} PX</h2>
        </>
    )
}
export default UseEffectCleanUp;