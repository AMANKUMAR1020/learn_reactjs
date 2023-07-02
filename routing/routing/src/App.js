// import './App.css';
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import OrderSummary from './components/OrderSummary';
// //import Os from './components/OrderSummary'
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'about'} element={<About/>}/>
//           <Route path={'os'} element={<OrderSummary/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// //import OrderSummary from './components/OrderSummary';
// import Os from './components/OrderSummary'
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'about'} element={<About/>}/>
//           <Route path={'osd'} element={<Os/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;





// import './App.css';
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import NoMatch from './components/NoMatch'
// import Os from './components/OrderSummary'
// import Product from './components/Product';
// import New from './components/New';
// import Featured from './components/Featured';
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'about'} element={<About/>}/>
//           <Route path={'osd'} element={<Os/>}/>
//           <Route path={'product'} element={<Product/>}>
//               <Route path={'feature'} element={<Featured/>}/>
//               <Route path={'new'} element={<New/>}/>
//           </Route>
//           <Route path={'*'} element={<NoMatch/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App







// import './App.css';
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import NoMatch from './components/NoMatch'
// import Os from './components/OrderSummary'
// import Product from './components/Product';
// import New from './components/New';
// import Featured from './components/Featured';
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar/>
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'about'} element={<About/>}/>
//           <Route path={'osd'} element={<Os/>}/>
//           <Route path={'product'} element={<Product/>}>
//               <Route index element={<About/>}/>
//               <Route path={'feature'} element={<Featured/>}/>
//               <Route path={'new'} element={<New/>}/>
//           </Route>
//           <Route path={'*'} element={<NoMatch/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App








// import './App.css';
// import Home from './components/Home'
// import NoMatch from './components/NoMatch'
// import User from './components/User'
// import UserDetail from './components/UserDetail';
// import Admin from './components/Admin'
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//            {/* <Route path={'user'} element={<User/>}/>
//            <Route path={'user/:userId'} element={<UserDetail/>}/>
//            <Route path={'user/:admin'} element={<Admin/>}/>         */}

//           <Route path={'user'} element={<User/>}>
//            <Route path={':userId'} element={<UserDetail/>}/>
//            <Route path={'admin'} element={<Admin/>}/>        
//           </Route>
//           <Route path={'*'} element={<NoMatch/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App



// import './App.css';
// import Home from './components/Home'
// import NoMatch from './components/NoMatch'
// import User from './components/User'
// import UserDetail from './components/UserDetail';
// import Admin from './components/Admin'
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'user'} element={<User/>}>
//            <Route path={':userId'} element={<UserDetail/>}/>
//            <Route path={'admin'} element={<Admin/>}/>        
//           </Route>
//           <Route path={'*'} element={<NoMatch/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App





// import './App.css';
// import Home from './components/Home'
// import NoMatch from './components/NoMatch'
// import User from './components/User'
// import UserDetail from './components/UserDetail';
// import Admin from './components/Admin'
// import {Router,Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Routes>
//           <Route path={'/'} element={<Home/>}/>
//           <Route path={'user'} element={<User/>}>
//              <Route path={':userId'} element={<UserDetail/>}/>
//              <Route path={'admin'} element={<Admin/>}/>        
//           </Route>
//           <Route path={'*'} element={<NoMatch/>}/>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App




import './App.css';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import {Router,Routes,Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import {AuthProvider} from './components/Auth';
import Login from './components/Login';
const Lazypara = React.lazy(()=>import('./components/Para'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          
          <Route path={'para'} element={<React.Suspense fallback='Loading...'>
          <Lazypara/>
          </React.Suspense>} />

          <Route path={'profile'} element={<Profile/>}/>
          <Route path={'login'} element={<Login/>}/>
          <Route path={'*'} element={<NoMatch/>}/>
        </Routes>
      </AuthProvider>
      </header>
    </div>
  );
}

export default App
