import { createContext } from 'react';
import React,{useState, useEffect} from 'react';

const providerContext = createContext();

const Provider=(props)=>{
    const[mission,setMission]=useState({
        M_name:"learn react",
        agent:7,
        accept:'non accepted'
    });
    return(
        <providerContext.Provider 
            value={{
                data:mission,
                isMissionAccepted:()=>{
                    setMission({...mission, accept:"accepted"})
                }
            }}
        >{props.children}</providerContext.Provider>

    )
}
export default Provider;