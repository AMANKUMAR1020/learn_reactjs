import './Style.css';
import React, { useState } from 'react';


// useState is function
//use us used to call hooks
//return array([value,f])
//mandate to use hhoks inside function/component
//Componenet must be in UpperCase

 const useStateBasic=() => {

  //  let title = ' react is best ';
  const [message,setMessage]=useState(' react is best ');
  
  const changeRes=()=>{

    setMessage('React is easy PLay around code');
    
    //  return 'Hello';
    //title = 'react is easy';   
}
  return(
    <>
    <h2>{message}</h2>
    <button className='btn' onClick={changeRes}>Change</button>
    </>);
}

export default useStateBasic;
