// import {React,useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import {useAuth} from './Auth'
// function Profile() {
//   const [user,setUser] = useState('');
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const handleLogin = ()=>{
//     auth.login(user)
//     navigate('/');
//   }
//   return (
//     <div>Profile
//         <label>
//             usename:{' '}<input type='text'
//             onChange={(e)=>setUser(e.target.value)}/>
            
//             <button onClick={handleLogin}>login</button>
//         </label>
//     </div>
//   )
// }

// export default Profile





// import {useNavigate} from 'react-router-dom'
// import {useAuth} from './Auth'
// import React from 'react'

// function Profile() {
//  const auth = useAuth()
//  const navigate = useNavigate()

//  const handleLogout = ()=>{
//   auth.logout()
//   navigate('/')
//  }
//   return (
//     <div>
//       Welcome {auth.user}
//       <button onClick={handleLogout}>logout</button>
//     </div>
//   )
// }

// export default Profile





import {useNavigate} from 'react-router-dom'
import {useAuth} from './Auth'
import React from 'react'

function Profile() {
 const auth = useAuth()
 const navigate = useNavigate()

 const handleLogout = ()=>{
  auth.logout()
  navigate('/')
 }
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile