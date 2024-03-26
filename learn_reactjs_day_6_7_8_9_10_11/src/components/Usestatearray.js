// import React from 'react'

// export const arr = [{id:1,name:'an'},{id:2,name:'oajsdn'},{id:3,name:'ma'}];

// function Usestatearray() {
//   return (
//     <div>console.log({arr.id});
//     console.log({arr.name});</div>
//   )
// }

// export default Usestatearray


/*
const Book= [{//this is array of object
  id:1,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290404-eurasian-spoonbill/?context=widget",
   str1:"i-phone",
   str2:"stepin houking"
},

{
  id:2,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290414-a80312b0-d8d5-4246-8f8a-a64a50b7b51djpeg/?context=widget",
   str1:"tuch-pad",
   str2:"stepin houking"
},

{
  id:3,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290472-winter/?context=widget",
  str1:"screen-touch",
  str2:"stepin houking"
},

{
  id:4,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290425-untitled/?context=widget",
  str1:"book name is abc",
  str2:"stepin houking"
}];


function Usestatearray({x,imgs,str1,str2}){

  const clickEvent = () =>{
    alert('hey aman !');
  }

  return(
  <div className='Book'>
    <p>{x}</p>
    <img src={imgs} alt=" this was photo"/>
    <p onClick={()=>console.log(str1)}>{str1}</p>
    <p>{str2}</p>
    <button type='button' onClick={clickEvent}>Example</button>
  </div>
);
}
export default Usestatearray
*/

/*
import {useRef} from 'react'

function Usestatearray({x,imgs,str1,str2}){
  
    let ref = useRef(0); 
    const clickEvent = () =>{
        ref.current = ref.current + 1;
    alert(`hey aman ! ${ref.current}`);
  }

  return(<>
  <button onClick={clickEvent}>click</button>
  </>);
}
export default Usestatearray
*/

/*
import {useRef,useState} from 'react'

function Usestatearray(){  
    const [start,setStart] = useState('0');
    const [now,setNow] = useState(null);
    let st = useRef(null);
    
    function click1(){
        setStart(Date.now());
        setNow(Date.now())
        
        clearInterval(st.current);

        st.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
    }
    function click2(){
        clearInterval(st.current);       
    }

  let secondsPassed = 0;
  
  if (start != null && now != null) {
    secondsPassed = (now - setStart) / 1000;
  }

  return(<>
  <h1>time passed: {secondsPassed.toFixed(3)}</h1>
  <button onClick={click1}>click1</button>
  <button onClick={click2}>click2</button>
  </>);
}
export default Usestatearray
*/


/*
import { useRef } from 'react';

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>
        </div>
        </>
        );
      }
*/
     
     
import React, {useState} from 'react';

let data=[{
    id:1,
    name:'Aman'
},
{
    id:2,
    name:'Kumar'
},
{
    id:3,
    name:'Chouhan'
}];


const Usestatearray = () =>{
    const[people, setpeople]=useState(data);
    return(<>
        <h2>Hey aman</h2>
        {
            people.map((person)=>{
                const{id,name}=person; //we can also map id and name 
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

export default Usestatearray;