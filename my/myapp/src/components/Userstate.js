/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [name,setName]=useState('Name')
  
  const setname=(e)=>{
    setName(e.target.value);    
  }
  return (
    <>
    <h2>hey {name} how are you</h2>
    <input value={name} onChange={setname}/>
    </>
  )
}

export default Userstate
 */

/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [liked,setLiked]=useState(true)
  
  const setliked=(e)=>{
    setLiked(!liked);
    
  }
  return (
    <>
    <h2>you {liked ? 'liked' : 'not liked'} this</h2>
    <input type="checkbox" onChange={setliked} />
    </>
  )
}

export default Userstate

*/

/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [age,setAge]=useState(0)
  
  const setage=(e)=>{
    setAge(e.target.value);
    
  }
 
  return (
    <>
    <h2>you enter {age} this</h2>
    <input  className='e' value={age} ></input>
    <button onClick={(e)=>
    {setage(e.target.value)}}
    >setage</button>
    </>
  )
}

export default Userstate
*/

/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [age,setAge]=useState(2)
  
  const setage=()=>{
    setAge(age + 1);
    
  }
 
  return (
    <>
    <h2>you enter {age} this</h2>
    
    <button onClick={setage}>setage1</button>

    <button onClick={(e)=>{setAge(age + 5)}}
    >setage5</button>
    </>
  )
}

export default Userstate
*/


/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [form,setForm]=useState({
    name:'aman',
    class:'tech',
    age:23
  })
  
  
  return (
    <>
    <h2>you enter {form.name} this</h2>
    <h2>you enter {form.age} this</h2>
    <h2>you enter {form.class} this</h2>

    <input value={form.name} onChange={e=>{setForm({
      ...form,name:e.target.value})}}/>
    <input value={form.class} onChange={e=>{setForm({
      ...form,class:e.target.value})}}/>
    <input value={form.age} onChange={e=>{setForm({
      ...form,age:e.target.value})}}/>
    
   </>
  )
}

export default Userstate
*/


/*
import React from 'react'
import { useState } from 'react'

function Userstate() {

  const [form,setForm]=useState({
    name:'aman',
    class:'tech',
    marks:{c10:0,c12:1,c13:9},
    age:23
  })
  
  
  return (
    <>
    <h2>you enter {form.marks.c10} this</h2>
    <h2>you enter {form.marks.c12} this</h2>
    <h2>you enter {form.marks.c13} this</h2>
   
    <h2>you enter {form.age} this</h2>

    <input value={form.marks.c10} onChange={e=>{setForm({
      ...form,
      marks:{
        ...form.marks,c10:e.target.value}})}}/>
   
    <input value={form.marks.c12} onChange={e=>{setForm({
      ...form,marks:{
        ...form.marks,c12:e.target.value}})}}/>

    <input value={form.marks.c13} onChange={e=>{setForm({
      ...form,marks:{
        ...form.marks,c13:e.target.value}})}}/>
  
    <input value={form.age} onChange={e=>{setForm({
      ...form,age:e.target.value})}}/>
    
   </>
  )
}

export default Userstate
*/



/*
import { useState } from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 1;
const initialTodos = [{id:0, title:'youtube',done:false}];

function Userstate() {
  const [todos,setTodos]=useState(initialTodos)

  function handleAddTodo(title){
    setTodos([
      ...todos,{
        id:nextId++,
        title:title,
        done:false
      }
    ])
  }

  function handleChangeTodo(nextTodo){
    setTodos(todos.map(t=>{
      if(t.id === nextTodo.id) return nextTodo
      else return t;
    }))
  }

  function handleDeleteTodo(todoId){
    setTodos(todos.filter(t => t.id !== todoId))
  }
  return (
    <>
    <AddTodo onAddTodo={handleAddTodo}/>
    <TaskList todos={todos}
    onChangeTodo={handleChangeTodo}
    onDeleteTodo={handleDeleteTodo}/>
   </>
  )
}

export default Userstate
*/

/*
import { useState } from 'react'


const initialTodos = [{id:0, title:'youtube'}];

function Userstate() {
  const [todos,setTodos]=useState(initialTodos)
  const [text,setText]=useState('')
  
  return (
    <>
    <input value={text} onChange={e=>{setText(e.target.value)}}/>
    
    <h1>{todos.id}  {todos.title}</h1>
    
    <button onClick={()=>{
    console.log({...todos,title:text})
      setText('');
      setTodos([{id:todos.length, title:text
      }])}
      
    }>Add</button>

    <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
    </ul>
   </>
  )
}

export default Userstate
*/



import { useState } from 'react'
function Userstate() {
  
  const [count,setCount]= useState(0) 

  function handleClick() {
  console.log(count);  // 0

  //1 and 2 is same
  const setCountbyme = count + 1;
  setCount(setCountbyme); // Request a re-render with 1
  console.log(count);  // Still 0!

//2
  setCount(count + 1); // Request a re-render with 1
  console.log(count);  // Still 0!

  setTimeout(() => {
    console.log(count); // Also 0!
  }, 5000);}

  return (<>
    <button onClick={handleClick}>click</button>
   </>)
}

export default Userstate
