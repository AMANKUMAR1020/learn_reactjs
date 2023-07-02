import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (<nav>
  <Link to={'/'}>Home</Link>
  <Link to={'/about'}>About</Link>
  </nav>
  )
}

export default Navbar




// import React from 'react'
// import {NavLink} from 'react-router-dom';
// //import Profile from './Profile'

// import {useAuth} from './Auth'

// function Navbar() {
//   const auth = useAuth();
//   return (<nav>
//   <NavLink to={'/'}>Home</NavLink>
//   <NavLink to={'about'}>About</NavLink>
//   <NavLink to={'osd'}>Os</NavLink>
//   <NavLink to={'profile'}>Profile</NavLink>
//   {
//     !auth.user && (
//       <NavLink to='/'>Login</NavLink>
//     )
//   }
//   </nav>
//   )
// }

// export default Navbar