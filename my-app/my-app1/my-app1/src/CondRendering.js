import { useState,useEffect } from "react";

const Rendering= ()=>{
    const[value,setvalue]=useState(false);
    if(value){
        return<h3>Returning..1</h3>
    }
    else {
        return <h3> Returning Multiple</h3>
    }
}
export default Rendering;