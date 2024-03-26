// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import './App.css';

export default function App() {
  return (<>
   <div className='App-header'>
    <Header/>
   <Content/>
   <Footer/>
   </div>
  </>
  )
}





// import './App.css';
// import Square from './components/Square';
// import Input from './components/Input';
// import { useState } from 'react';

// export default function App() {
//   const [colorValue,setColorValue] = useState(' ')
//   return (<>
//    <div className='App-header'>
  
//     <Square colorValue={colorValue}/>
   
//     <Input
//     colorValue={colorValue}
//     setColorValue={setColorValue}/>
  
//    </div>
//   </>
//   )
// }




// import './App.css';
// import Square from './components/Square';
// import Input from './components/Input';
// import { useState } from 'react';

// export default function App() {
//   const [colorValue,setColorValue] = useState(' ');
//   const [isdark,setIsdark] = useState(' ');

//   return (<>
//    <div className='App-header'>
  
//     <Square colorValue={colorValue}
//     isdark={isdark}/>
   
//     <Input 
//     colorValue={colorValue}
//     setColorValue={setColorValue}
//     isdark={isdark}
//     setIsdark={setIsdark}/> 
//    </div>
//   </>
//   )
// }