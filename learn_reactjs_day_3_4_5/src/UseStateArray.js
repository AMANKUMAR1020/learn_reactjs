import {data} from './data'
import React, {useState, UseState} from 'react';

const UseStateArray = () =>{
    const[people, setpeople]=useState(data);
    return(<>
        <h2>Hey aman</h2>
        {
            people.map((person)=>{
                const{id,name}=person;
                return(
                    <div key={id} >
                        <h3>{name}</h3>
                        <button onClick={()=>{alert(name)}}>Write</button>
                    </div>
                )
            }
            )               
        }
        <button onClick={()=>setpeople([])}>Remove</button>
        </>
    )
}

export default UseStateArray;