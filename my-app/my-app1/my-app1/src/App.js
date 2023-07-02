/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/


/*
import './index.css';
//import Setup from './/UseStateArray';
//import Setup from './/UseStateObject';
//import Setup from './/UseEffectBasic';
//import Setup from './/CondRendering';//CondRendering --> this is conditional reding actually
//import Setup from './/UseEffectCleanUp';
import Setup from './/ShortCircuit';


function App(){
  return(
    <div className='App-header'>
      <Setup></Setup>
    </div>
  )
}
export default App;
*/


/*
import './index.css';
//import Setup from './/ShowHide';
//import Setup from './/ControlledInput';
//import Setup from './/UseRefBasic';
//import Setup from './/PropsDrilling';// this gonna fail
import Setup from './/ContextAPI';

function App(){
  return(
    <div className='App-header'>
      <Setup/>
    </div>
  )
}
export default App;
*/


/*
import './index.css';
//import Setup from './/ContextAPI';
import Setup from './/provider';
import ContextAPI from './ContextAPI';

const C1=()=>{
  return <GC1/>
}
const GC1=()=>{
  return <GGC1/>
}

const GGC1=()=>{
  return (
    <Setup.Consumer>{
 
     (setup)=>{   
      <>
        <h4>Actual Consuming</h4>
        <p>Mission Name: {ContextAPI.data.M_name}</p>
        <p>Agent : {ContextAPI.data.agent}</p>
        <p>Mission accepted: {ContextAPI.isMissionaccepted}</p>
      </>
    }} 
    </Setup.Consumer>
  )
}

function App(){
  return(
    <div className='App-header'>
      <h2>Hey Aman</h2>
      <Setup/>
    </div>
  )
}
export default App;

*/




import './index.css';
//import Setup from './/ContextAPI';
import Setup from './/provider';
import ContextAPI from './ContextAPI';

const C1=()=>{
  return <GC1/>
}
const GC1=()=>{
  return <GGC1/>
}

const GGC1=()=>{
  return (
    <Setup.Consumer>{
 
     (setup)=>{   
      <>
        <h4>Actual Consuming</h4>
        <p>Mission Name: {ContextAPI.data.M_name}</p>
        <p>Agent : {ContextAPI.data.agent}</p>
        <p>Mission accepted: {ContextAPI.isMissionaccepted}</p>
      </>
    }} 
    </Setup.Consumer>
  )
}

function App(){
  return(
    <div className='App-header'>
      <h2>Hey Aman</h2>
      <Setup/>
    </div>
  )
}
export default App;
