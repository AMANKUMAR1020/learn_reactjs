// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'

// export default function UseEffect() {
//     const [value,setValue] = useState('IIT')
    
//     let first = value || 'collage';
//     let second  = value && 'company'; 
//   return (
//     <div className='show'>
//         <h1>{first}</h1>
//         <h1>{second}</h1>
//         <h2>by me:{value || 'collage'}</h2>
//         <h2> by me: {value && 'company'}</h2>
//     </div>
//   )
// }




// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'

// export default function UseEffect() {
//     const [value,setValue] = useState('')
    
//     let first = value || 'collage';
//     let second  = value && 'company'; 
//   return (
//     <div className='show'>
//         <h1>{first}</h1>
//         <h1>{second}</h1>
//         <h2>by me:{value || 'collage'}</h2>
//         <h2> by me: {value && 'company'}</h2>
//         <h2> by me: {!value && 'polygon'}</h2>
//     </div>
//   )
// }




// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'

// export default function UseEffect() {
//     const [value,setValue] = useState(false)
     
//   return (
//     <div className='show'>
//         <button onClick={() => {setValue(!value)}}>click</button>
//         { value ? <p> youtube </p>:<p> subcribe </p>}
//     </div>
//   )
// }



// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'
// import Usestate from './Usestate'

// export default function UseEffect() {
//     const [value,setValue] = useState(false)
     
//   return (
//     <div className='show'>
//         <button onClick={() => {setValue(!value)}}>click</button>
//         { value ? <p> youtube </p>:<p> subcribe </p>}
//         {value && <Usestate/>}
//     </div>
//   )
// }



// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'

// export default function UseEffect() {
//      const [name,setName] = useState('')
//      const [email,setEmail] = useState('')
//      const [people,setPeople] = useState([])

//      const onSubmit = (e)=>{
//              e.preventDefault()
             
//              if(name && email){

//                 const person = {name,email}
//                 setPeople((people)=>{
//                 return[...people,person]})
//              }
//              console.log(`${name}  ${email}`);
//               setName('');
//               setEmail('');
//      }
//   return (
//     <div className='show'>
//         <form >
//             <div>
//                 <lable htmlfor='name'>name</lable>
//                 <input type='text' value={name} onChange={(e)=>{
//                     setName(e.target.value)
//                 }} id='name' name='name'/>
//             </div>
//             <div>
//                 <lable htmlfor='age'>age</lable>
//                 <input type='text' value={email} onChange={(e)=>{
//                     setEmail(e.target.value)}} id='age' name='age'/>
//             </div>
//             <button onClick={onSubmit}>click</button>
//         </form>
//     </div>
//   )
// }





// import React,{useState,useEffect} from 'react'
// import './Thirty_nov.css'

// export default function UseEffect() {
//      const [name,setName] = useState('')
//      const [email,setEmail] = useState('')
//      const [people,setPeople] = useState([])

//      const onSubmit = (e)=>{
//              e.preventDefault()
             
//              if(name && email){

//                 const person = {name,email}
//                 setPeople((people)=>{
//                 return[...people,person]})
//              }
//              console.log(`${name}  ${email}`);
//               setName('');
//               setEmail('');
//      }
//   return (
//     <div className='show'>
//         <form >
//             <div>
//                 <lable htmlfor='name'>name</lable>
//                 <input type='text' value={name} onChange={(e)=>{
//                     setName(e.target.value)
//                 }} id='name' name='name'/>
//             </div>
//             <div>
//                 <lable htmlfor='age'>age</lable>
//                 <input type='text' value={email} onChange={(e)=>{
//                     setEmail(e.target.value)}} id='age' name='age'/>
//             </div>
//             <button onClick={onSubmit}>click</button>
//         </form>
//     </div>
//   )
// }
