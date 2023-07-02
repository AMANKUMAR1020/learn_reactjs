import { useState } from "react";
import Context from "./Context";

const Provider = (props)=>{

    const [mission,setMission] = useState({name:"learn react",  id:1245,   accept:"not accepted"});
    
    return(<><Context.Provider value={{data:mission,isMissionAccepted:()=>{setMission({...mission,accept:"accepted"})}}}>
           {props.children}
        </Context.Provider>
        </>)

}
export default Provider