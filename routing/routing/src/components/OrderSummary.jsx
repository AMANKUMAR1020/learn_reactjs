import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummary() {
    const back = useNavigate();
  return (
    <div>OrderSummary
        <button onClick={()=>{back(-1)}}>back</button>
    </div>
  )
}

export default OrderSummary