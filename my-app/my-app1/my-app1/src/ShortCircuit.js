/*
import React,{useState, useEffect} from "react";

const ShortCircuit=()=>{
 //1/   const[text,setText]=useState('');
    const[text,setText]=useState('React');
    const FirstValue = text || 'inueron.ai';
    const SceondValue = text && 'inueron.ai';

    return(
            <>
        <h2>{text}</h2>
        <h2>{FirstValue}</h2>
        <h2>value:{SceondValue}</h2>
        </>

        //1/ <>
        // <h2>{text}</h2>
        // <h2>{FirstValue}</h2>
        // <h2>value:{SceondValue}</h2>
        // </>


    )
}
export default ShortCircuit;
*/


/*
import React,{useState, useEffect} from "react";

const ShortCircuit=()=>{
 
    const[text,setText]=useState('react');
    const[isError,SetError]=useState(false);

    return(
            <>
        <h2>{text || 'inueron.ai'}</h2>
         {isError && <h2>Yse Error</h2>}
        <button onClick={()=>SetError(!isError)}>get_error</button>{/*here we cannot use '=' on SetError(!isError)}-->>"SetError=(!isError)}"*//*}
        </>
    )
}
export default ShortCircuit;
*/


import React,{useState, useEffect} from "react";

const ShortCircuit=()=>{
 
    const[text,setText]=useState('react');
    const[isError,SetError]=useState(false);

    return(
        <>
        <h2>{text || 'inueron.ai'}</h2>
         {isError && <h2>Yse Error</h2>}
        <button onClick={()=>SetError(!isError)}>get_error</button>{/*here we cannot use '=' on SetError(!isError)}-->>"SetError=(!isError)}"*/}
        
        {isError ?
        (<p>Error is hapening</p>):
        (<h2>NO error is hapening and work it fine </h2>)}

        </>
    )
}
export default ShortCircuit;
