
import { useState } from "react"

function AddTodo({ onAddTodo }) {
  const [title,setTitle] = useState('');
    return(
    <>
    <input placeholder="enter here"
    value={title}
    onChange={
        e=>{setTitle(e.target.value)
        }}/>
    <button onClick={()=>{
        setTitle('');
        onAddTodo(title);
    }}>Add</button>
    </>
  )
}

export default AddTodo
