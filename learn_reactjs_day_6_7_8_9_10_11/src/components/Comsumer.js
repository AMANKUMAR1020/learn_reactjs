import  Provider  from "./Provider";
//import Context from "./Context";

import React from 'react'

function Comsumer() {
  return (<>
    <h2>Context api</h2>
    <Provider.Consumer >
        {
            (context)=>{
                <>
                <h4>Actually we are consuming</h4>
                <p>mission Name:{context.data.mname}</p>
                </>
            }
        }
    </Provider.Consumer>
  </>)
}

const Child1=()=>{return(<Child2/>)}

const Child2=()=>{return(<Child3/>)}

const Child3=()=>{return(<Comsumer/>)}




export default Comsumer