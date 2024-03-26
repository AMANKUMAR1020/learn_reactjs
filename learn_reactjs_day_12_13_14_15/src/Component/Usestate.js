import React from 'react'
import './Thirty_nov.css'
import { useState } from 'react'

export default function Usestate() {
    const [value,setValue] = useState(0);
  return (<>
    <div className='show'>
        <h2>{value}</h2>
        <button className='btn' onClick={()=>{setValue(value => value+1)}}>click+</button>
        <button className='btn' onClick={()=>{setValue(0)}}>click</button>
        <button className='btn' onClick={()=>{setValue(value-1)}}>click-</button>
    </div>
    </>
  )
}
