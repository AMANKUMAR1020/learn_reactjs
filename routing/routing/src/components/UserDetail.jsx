// import React from 'react'

// function UserDetail() {
//   return (
//     <div>UserDetail</div>
//   )
// }

// export default UserDetail


import React from 'react'
import { Outlet,useParams } from 'react-router-dom'
function UserDetail() {
  const params = useParams();
  const userId = params.userId
  return (
    <div>UserDetail {userId}
    <Outlet/></div>
  )
}

export default UserDetail
