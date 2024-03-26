// import React from 'react'

// function Input({ colorValue, setColorValue }) {
//   return (
//     <form onSubmit={(e)=>e.preventDefault()}>
//         <lebel>Add Color Name:</lebel>
//         <input
//         autoFocus
//         type='text'
//         placeholder='Add color name'
//         required
//         value={colorValue}
//         onChange={(e)=> setColorValue(e.target.value)}></input>
//     </form>
//   )
// }

// export default Input





//9
import React from 'react'

function Input({ colorValue,setColorValue,isdark,setIsdark }) {
  return (<><form>

    <lebel>Add Color Name:</lebel>
        <input
        autoFocus
        type='text'
        placeholder='Enter color'
        required
        value={colorValue}
        onChange={(e)=> {setColorValue(e.target.value)
        isdark === colorValue ? setIsdark('#000') :setIsdark('#HHH')}}
     //  setIsdark(() =>  {isdark === colorValue ? '#000':'#FFF'})}}
       ></input>

        </form></>)
}

export default Input