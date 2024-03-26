/*
import React,{ useState,useContext } from "react";
import {data} from './data';

//more components
//propsDrilling--conntext api -- redux


const PersonContext = React.createContext();
//two--Provider,Consumer

const ContextAPI=()=>{
    const [people,setpeople]=useState(data);

    const removePerson=(id)=>{
        setpeople(()=>
        {return people.filter((person)=>person.id!==id)})
    }
    return (<PersonContext value={{removePerson}}>

        <section>
            <h3> Context API</h3>
                       <List people={people} />
 {/*<List people={people} removePerson={{removePerson}}/>*//*}
        </section></PersonContext>)
}


const List=({people, removePerson})=>{//const List=({people, removePerson})=>{
    return <>
    {
        people.map((person)=>{
            return (
                <SinglePerson key={person.id}
                {...person}/>//{...person} removePerson={removePerson}/>
            )
        })
    }
    </>
}


const SinglePerson = ({id,name})=>{//const SinglePerson = ({id,name,removePerson})=>{

        const {removePerson}=useContext(PersonContext)  
              console.log(data);
             return(<div>
            <h4>
             {name}
            </h4>
        <button onClick={()=>removePerson(id)}>Remove person</button>
    </div>)
}

export default ContextAPI;
*/


import React,{ useState,useContext } from "react";

const ContextAPI=()=>{
const [courseName,setCourseName]=useState('React.js');

return(
    <div>
        <h1>iNeuron.ai</h1>
        <GrandChild course={courseName}/>
    </div>
)
}


const GrandChild=props=>{
return(
    <div>
        <h3>GrandChild :</h3>
        <Child course1={props.course}/>        
    </div>
)
}


const Child=props=>{
return(
    <div>
        <h1>Child: {props.course1}</h1>
    </div>
    )}



export default ContextAPI;