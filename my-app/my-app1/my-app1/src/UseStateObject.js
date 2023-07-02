/*
import { useState } from "react";

const UseStateObject=()=>{
    const [person, setperson]=useState({
    age:18,
    name:'Sahid',
    message:'Blockchain is hero'});


    const changeMessage=()=>{
        setperson({...person, message:'superman is only hero'});//here we cannot use '=' sign
    }


    // const changeMessage=()=>{
    //     setperson({message:'superman is only hero'});
    // }
    // return (<><h2>Hey Amana </h2>
    // <h3>{person.age}</h3>
    // <h3>{person.name}</h3>
    // <h3>{person.message}</h3>
    // <button onClick={changeMessage}>Change</button>    
    // </>)

    return (<><h2>Hey Amana </h2>
    <h3>{person.age}</h3>
    <h3>{person.name}</h3>
    <h3>{person.message}</h3>
    <button onClick={changeMessage}>Change</button>    
    </>)

}
export default UseStateObject;

*/

/*
import { useState } from "react";

const UseStateObject=()=>{
    const [name, change_name]=useState('Amna');//for single statement we can't use ({"Aman"})
    const [age, change_age]=useState(20);//in integer we not use {} sign
    const [message, change_message]=useState('I like youtube');

    const changeMessage=()=>{
        change_message('i like line');
        change_age(19);
        change_name("Dhruv Sigh Negi");
    }

    return (<><h2>Hey Amana </h2>
    <h3>{age}</h3>
    <h3>{name}</h3>
    <h3>{message}</h3>
    <button onClick={changeMessage}>Change</button>    
    </>)

}
export default UseStateObject;
*/
