import React,{useState, useEffect, useRef} from "react";
//similar to useState as it will preserve value between
//renders however userf doesn't triger re render
//mostly to target dom element

const UseRefBacics=()=>{

    const refContainer = useRef(null);
    const divContainer = useRef(null);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(' ref container current value');
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }
    
    console.log(refContainer);
    return(<>
    <form onClick={handleSubmit}>
      <div>
        <input type='text' ref={refContainer}/>
        <button type='button'>Submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hello ineuron</div>
    </>)
}
export default UseRefBacics;