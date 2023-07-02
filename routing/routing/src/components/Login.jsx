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
//             usename:{' '}
//             <input type='text'
//             onChange={(e)=>setUser(e.target.value)}/>
            
//             <button onClick={handleLogin}>login</button>
//         </label>
//     </div>
//   )
// }

// export default Profile








import {React,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useAuth} from './Auth'

function Profile() {
  const [user,setUser] = useState('');
  const auth = useAuth();
  const location = useLocation();
  
  const redirectPath = location.state?.path || '/'

  const navigate = useNavigate();
  const handleLogin = ()=>{
    auth.login(user);
    navigate(redirectPath,{replace:true})
  }

  return (
    <div>Profile
        <label>
            usename:{' '}
            <input type='text'
            onChange={(e)=>setUser(e.target.value)}/>
            
            <button onClick={handleLogin}>login</button>
        </label>
    </div>
  )
}

export default Profile