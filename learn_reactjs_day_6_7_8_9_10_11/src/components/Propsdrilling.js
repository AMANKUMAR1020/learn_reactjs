/*
import {useState} from 'react'

let data=[{
    id:1,
    name:'Aman'
},
{
    id:2,
    name:'Kumar'
},
{
    id:3,
    name:'Chouhan'
}];


function Propsdrilling() {
  
    const [people,setpeople]=useState(data);

    const removePerson=(id)=>{
        setpeople(()=>
        {return people.filter((person)=>person.id !==id)})
    }
    return( 
      
        <section>
            <h3> Props PropDrilling</h3>
            <List people={people} removePerson={removePerson}/>
        </section>
    )
}


const List=({people, removePerson})=>{
    return <>
    {
        people.map((person)=>{
            return (
                <SinglePerson key={person.id}
                {...person} removePerson={removePerson}/>
            )
        })
    }
    </>
}


const SinglePerson = ({id,name,removePerson})=>{
    return(<div>
        <h4>
            {name}
        </h4>
        <button onClick={()=>removePerson(id)}>Remove person</button>
    </div>)
}


export default Propsdrilling
*/





/*
import React,{useState,useEffect} from "react";

const Propsdrilling=()=>{
const [ft_name,set_name]=useState('aman');
    const [ft_email,set_email]=useState('amasnkumar@yahoo.com');
    const [ft_people,set_people]=useState([]);
   
   let e;
   e.preventDefault();
    if(ft_name && ft_email){
        const person = {ft_name,ft_email}
        console.log(person);
        set_people((ft_people)=>{return [...ft_people,person];})
     set_name='';
     set_email='';
    }else{
        console.log('invailed plse check');
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Hello lets check");
    } 
    return (<>
    <article>
                 <h2>Form</h2>
                 <form onClick={handleSubmit}>
                <div>
                    <label htmlform='firstName'>Name:</label>
                    <input type='text' id="firstName" name="FirstName"
                    value={ft_name}
                //    onChange={(e)=>set_name(e.target.value)}
                />
                </div>
                <div>
                    <lebel htmlFor='email'>Email:</lebel>
                    <input type='text' id='email' name='email'
                    value={ft_email}
                //    onChange={(e)=>set_email(e.target.value)}
                />
                </div>
                <button type='submit' onClick={handleSubmit}>Add person</button>
            </form>
    </article>    
        </>)
        
}

export default Propsdrilling;
*/



import React,{useState,useEffect} from "react";

const Propsdrilling=()=>{

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
export default Propsdrilling;
