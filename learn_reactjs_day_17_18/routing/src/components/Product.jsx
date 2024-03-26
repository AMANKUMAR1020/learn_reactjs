import React from 'react'
import New from './New';
import Featured from './Featured';
import {Route, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Product() {
  const featured = useNavigate();
  const new1 = useNavigate();

   return (
    <>
    {/* Product */}
    <Routes>
      <Route path={'fecher'} element={<Featured/>} />
      <Route path={'new1'} element={<New/>}/>
    </Routes>
    <div>
      <button onClick={()=>{featured('fecter')}}>featured</button>
      <button onClick={()=>{new1('new1')}}>New</button>
    </div>
    </>
  )
}

export default Product








// import React from 'react'
// import {Link,Outlet} from 'react-router-dom';
// function Product() {
//   return (<>
//     <nav>
//       <Link to='new'>New</Link>
//       <Link to='feature'>Feature</Link>
//     </nav>
//     <Outlet/>
//     </>)
// }

// export default Product