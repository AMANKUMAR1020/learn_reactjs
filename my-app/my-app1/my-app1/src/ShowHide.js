import React, {useState, useEffect} from "react";

const ShowHide=()=>{
    const[show,setShow]=useState(true); 
    return(
        <>
        <button onClick={()=>setShow(!show)}>Show/hide</button>
        {show && <Item></Item>}
        </>
    )

const Item = ()=>{
        
    const[sizeMe,size1]=useState(window.innerWidth);
        
        function resizFunction(){
            size1(window.innerWidth);
        }

        useEffect(()=>{
            window.addEventListener('resize', resizeFunction)
        return ()=>{window.removeEventListener('resize', resizeFunction);};
        },[])

        return(
            <>
            <div style={{marginTop:'2rem'}}>
                <h2>window</h2>
                <h2>size: {sizeMe} px</h2>
            </div>
            </>
        )
    }
}
export default ShowHide