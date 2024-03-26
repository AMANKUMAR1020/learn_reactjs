// import React from 'react'

// function Square({ colorValue }) {
//   return (
//     <section className='square'
//     style={{ backgroundColor:colorValue }}>
//         <p>{colorValue ? colorValue : "Empty value"}</p>
//     </section>
//   )
// }

// export default Square




import React from 'react'

function Square({colorValue,isdark}) {
  return (
    <section className='square'
    style={{ backgroundColor:colorValue,
    color: isdark}}>
        {colorValue}
    </section>
  )
}

export default Square