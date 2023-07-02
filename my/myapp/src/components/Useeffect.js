/*
import { useEffect,useState } from "react"

function Useeffect() {
  
        const[value,setvalue]=useState(0);

        useEffect(()=>{
        console.log('use effect called rendering');
        document.title=`New Message(${value})`;
    },[value])

    //     useEffect(()=>{
    //     console.log('use effect called rendering');
    //     document.title=`New Message(${value})`;
    // },[])//great New Message(value) is not change

    // useEffect(()=>{
    //     console.log('use effect called rendering');
    //     document.title=`New Message(${value})`;
    // })//ducuent.title will not change
  
    return (
    <>
    <h2>Hey aman</h2>
    <h2>{value}</h2>
    <button onClick={()=>{setvalue(value+1)}}>Increse</button>
    <button onClick={()=>{setvalue(value-1)}}>decrese</button>
    </>
  )
}

export default Useeffect
*/

/*
import { useState,useEffect } from "react";
const UseEffectBasic=()=>{

    const[value,setvalue]=useState(0);

    useEffect(()=>{
        if(value >=3){// it does not give error
            console.log('use effect called rendering');
            document.title=`New Message(${value})`;
            }
        else{console.log(" try ")}}
    ,[value])



    // great it give error because 
    //we cannot use 'useEffect()'
    //inside if condition
//     if(value>=2){
//         useEffect(()=>{
//         console.log('use effect called rendering');
//         document.title=`New Message(${value})`
//     },[value])
//  }

    return (
    <>
    <h2>Hey aman</h2>
    <h2>{value}</h2>
    <button onClick={()=>{setvalue(value+1)}}>Increse</button>
    <button onClick={()=>{setvalue(value-1)}}>decrese</button>
    </>
)
}
export default UseEffectBasic;
*/

/*
import {useState,useEffect} from 'react'
function Useeffect(){
    const [size,setSize] = useState(window.innerWidth)
    
    const setSize1=()=>{setSize(window.innerWidth)}
    
    useEffect(()=>{
    window.addEventListener('resize',setSize1)
    return (window.addEventListener('resize',setSize1)
    )},[])

    return(<>
    <h1>{size} px</h1>
    </>)
}
export default Useeffect
*/




import React,{useState,useEffect,useRef} from "react";

const Useeffect=()=>{
    const[text,setText]=useState('React');
    const ref= useRef(false);
     
    useEffect(()=>{return (text === 'inueron.ai') ? setText('React') :  setText('inuron.com')},[text])

    return(
            <>
        <h2>{text}</h2>
        <button ref={ref} onChange={setText('ineuron.ai')}>click</button>
        </>

        //1/ <>
        // <h2>{text}</h2>
        // <h2>{FirstValue}</h2>
        // <h2>value:{SceondValue}</h2>
        // </>


    )
}
export default Useeffect
