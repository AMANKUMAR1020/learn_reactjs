/*
import { useState,useEffect } from "react";
const UseEffectBasic=()=>{

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
    // })

    
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
//         document.title=`New Message(${value})`;
//     },[value])
// }

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
