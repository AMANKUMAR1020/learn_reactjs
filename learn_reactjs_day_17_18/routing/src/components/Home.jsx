import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const move_to_os = useNavigate()
  return (
    <div>Home
      <div>
        <button onClick={()=>{
          move_to_os('/osd')
        }}>order</button>
      </div>
    </div>
  )
}

export default Home