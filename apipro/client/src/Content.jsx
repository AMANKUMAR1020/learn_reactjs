//1,4,5
// import React from 'react'

// function Content() {
//     const handleNameChange =()=>{
//         const name = ['Bob','Kevin','dave'];
//         const int = Math.floor(Math.random() * 3);
//         handleClick2(name);
//         return name[int];
//     }
//     const handleClick = ()=>{
//       console.log('you clicked it');
//     }
//     const handleClick2 = (Name)=>{
//       console.log(`${Name}`);
//     }
//     const handleClick3 = (e)=>{
//       console.log(e);
//     }
//     const handleClick4 = (e)=>{
//       console.log(e.target.innerText);
//     }
//     const handleClick5 = (e)=>{
//       console.log(e.target);
//     }
//     return (
//     <div>
//         Your name is {handleNameChange()}!
//         <br/><button onClick={handleClick}>Click me1</button>
        
//         <br/><button onClick={()=>{
//         handleClick2("Aman")}}>Click me2</button>
        
//         <br/><button onClick={(e)=>{
//         handleClick3(e)}}>Click me3</button>
        
//         <br/><button onClick={(e)=>{
//         handleClick4(e)}}>Click me4</button>
        
//         <br/><button onClick={(e)=>{
//         handleClick5(e)}}>Click me5</button>
//     </div>
//   )
// }

// export default Content





//6
// import React, { useState } from 'react'

// function Content() {
//   const [name,setName]= useState('')
//   const handleNameChange =()=>{
//        const Name = ['Bob','Kevin','dave'];
//         const int = Math.floor(Math.random() * 3);
//         setName(Name[int]);
//     }
//     return (
//     <div>
//         <p >Your name is {name}!</p>
//         <br/><button onClick={handleNameChange}>Click Change name</button>
//    </div>
//   )
// }

// export default Content


//7
// import React, { useState } from 'react'

// function Content() {
//   const [name,setName]= useState([
//    {
//       id:1,
//       flag:false,
//       name:"aman"
//     },
//     {
//       id:2,
//       flag:true,
//       name:"kumar"
//     },
//     {
//       id:3,
//       flag:false,
//       name:"chouhan"
//     }
//   ]);

//   console.log(name);
//   // console.log(name.id);//it give undifined

//   // const handleCheck = (id)=>{
//   //   console.log(`key: ${id}`)
//   // }
//   const handleCheck = (id)=>{
//   //  const flagChange =  name.map((e)=>(e.id === id ? {...name, flag: !e.flag} : name));
//   //const flagChange = name;
// const flagChange = name.map((e)=>e.id === id ? {...name, flag : !e.flag} : name);
//   setName(flagChange);
//   localStorage.setNam('list', JSON.stringify(setName));
//   console.log(flagChange);
//   }

//     return (
//     <main>
//       <ul>
//         {name.map((n)=>(
//           <li key={n.id}>
//             <input
//              type="checkbox"
//              onChange={()=> handleCheck(n.id)}
//              checked={n.flag}
//              />
//              <label>{n.name }</label>
//              <button>Delete</button>
//           </li>
//         ))}
//       </ul>
//    </main>
//   )
// }

// export default Content
