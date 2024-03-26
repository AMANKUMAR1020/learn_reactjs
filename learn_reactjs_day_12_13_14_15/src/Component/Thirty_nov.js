// 30 oct
// import React from 'react'

// const data1={
//     id:1,
//     name:"1aman",
//     age:12
// };
// const data2={
//     id:2,
//     name:"2aman",
//     age:23
// };
// const data3={
//     id:3,
//     name:"3aman",
//     age:30
//   };
  
//   const Show = (props)=>{
//   const collage = "BITS Pilani";
//   const {id,name,age} = props;
//   return (<>
//         <h1>{id}</h1>
//         <h4>{name}</h4>
//         <p><b>{age}</b></p>
//         collage name = {collage}
//     </>)
// }

// export default function Thirty_nov() {
//   return (
//     <div>
//       <Show id={data1.id} name={data1.name} age={data1.age}></Show>
//       <Show id={data2.id} name={data2.name} age={data2.age}></Show>
//       <Show id={data3.id} name={data3.name} age={data3.age}></Show>
//     </div>
//   )
// }





import React from 'react'
import './Thirty_nov'

const data1=[{ id:1,
    name:"1aman",
    age:12},
  
  { id:2,
    name:"2aman",
    age:23},

  { id:3,
    name:"3aman",
    age:30}];
  
  // const Show = (props)=>{
  // const {id,name,age} = props;
  // return (<>
  //       <h1>{id}</h1>
  //       <h4>{name}</h4>
  //       <p><b>{age}</b></p>
  //   </>)}

  //   const Show = (props.information)=>{
  // const {id,name,age} = props;
  // return (<>
  //       <h1>{id}</h1>
  //       <h4>{name}</h4>
  //       <p><b>{age}</b></p>
  //   </>)}

//2 alone/ const data2 = ['aman','kumar','chouhan'];
// const data = data2.map((x)=>{
//  //   const {id,name,age} = data;
//     return (<>
//     <h3>{x}</h3>
//     {/* <h1>{id}</h1>
//     <h4>{name}</h4>
//     <p><b>{age}</b></p> */}
//         </>)})

//3 alone export default function Thirty_nov() {
//   return (
//   data1.map((x)=>{
//     return 'hey '
//     }))
// }

//4 export default function Thirty_nov() {
//   return (
//   data1.map((x)=>{
//     const {id,name,age} = x;
//     return (<>
//     <h1>{id}</h1>
//     <h2>{name}</h2>
//     <p>{age}</p></>)
//     }))
// }

// couldn't run
//   const Show = (props)=>{
//   const {a,b,c} = props.info;
//   return (<>
//         <h1>{a}</h1>
//         <h4>{b}</h4>
//         <p><b>{c}</b></p>
//     </>)}

//  export default function Thirty_nov() {
//   return (
//   data1.map((x)=>{
//     const {id,name,age} = x;
//     return (<>
//     <Show key={x.id} info={x}></Show>
//     </>)
//     }))
// }

//   const Show = ({id,name,age})=>{

//   // const Show = (props)=>{
//   // const {a,b,c} = props;
//   // return (<>
//   //       <h1>{a}</h1>
//   //       <h4>{b}</h4>
//   //       <p><b>{c}</b></p>
//   //   </>)}

//   return (<>
//         <h1>{id}</h1>
//         <h4>{name}</h4>
//         <p><b>{age}</b></p>
//     </>)}


//  export default function Thirty_nov() {
//   return (
//   data1.map((x)=>{
//   //  const {id,name,age} = x;
//     return (<>
//     <Show key={x.id} {...x}></Show>
//     </>)
//     }))
// }

  const Show = ({id,name,age})=>{
  return (<>
        <h1>{id}</h1>
        <h4>{name}</h4>
        <p><b>{age}</b></p>
        <button onClick={()=>{
          alert('hay aman')
        }}>hey aman</button>
    </>)}


 export default function Thirty_nov() {
  return (
  data1.map((x)=>{
    return (<>
    <Show key={x.id} {...x}></Show>
    </>)
    }))
}
