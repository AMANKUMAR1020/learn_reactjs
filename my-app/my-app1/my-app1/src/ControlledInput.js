/*
import React,{useState,useEffect} from "react";

const ControlledInput=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Hello lets check");
    }
    return (<>
    <article>
                 <h2>Form</h2>
                 <form>
                <div>
                    <label htmlform='firstName'>Name:</label>
                    <input type='text' id="firstName" name="FirstName"/>
                </div>
                <div>
                    <lebel htmlFor='email'>Email:</lebel>
                    <input type='text' id='email' name='email'/>
                </div>
                <button type='submit' onClick={handleSubmit}>Add person</button>
            </form>
    </article>    
        </>)
        
}

export default ControlledInput;

*/



import React,{useState,useEffect} from "react";

const ControlledInput=()=>{

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

export default ControlledInput;
