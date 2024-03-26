// import React,{useState} from 'react'

// function useArray() {
//     const [state,setState] = useState([])
//     const [arr,setArr] = useState([])
  
//   return (<><div>useArray</div>

//     <input type="text" onChange={(e)=> setState(e.target.value,)}/>   
//     <button onSubmit={setArr(prev =>[...prev,state])}>Submit</button>
    
//         {/* console.log(setState); */}
//        <div>
//         <ul>
//             {arr.map(data =>
//             <li>{data}</li>)}
//         </ul>
//         </div> 
//     </>
//   )
// }

// export default useArray








import React,{useState} from 'react'

function useArray() {
    const [state,setState] = useState([])
    const [arrArray,setAddarray] = useState([])
  
    const onChangeValue =(e)=>{
        console.log("onchange",e.target.value)
        setState(e.target.value);
    }
    const submit = (e)=>{
        e.preventDefault();
        setAddarray(prev => [...prev,state])
    }

  return (<><div>useArray</div>
  <form onSubmit={submit}>
    {
        console.log("arrArray",arrArray)
    }
    <input type="text" onChange={onChangeValue}/>   
    <button type='submit'>Submit</button>

  </form>
    
       <div>
        <ul>
            {arrArray.map(data =>
            <li>{data}</li>)}
        </ul>
        </div> 
    </>
  )
}

export default useArray