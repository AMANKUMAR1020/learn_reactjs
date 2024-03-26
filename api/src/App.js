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


import './App.css';
import React, {useState, useEffect} from 'react';
import Axios, { axios } from 'axios';
import Profile from './profile';


function App() {
  
  const [details, setdetails]=useState({})
  const fetch_details= async()=>{
    const {data} = await Axios.get('https://randomuser.me/api/');
  
    const details = data.results[0]//learn it results[0] 'supose it like a method' 
    setdetails(details);
  }
  useEffect(()=>{
    fetch_details();
  },[])

  return (
    <div className="App">
      <header className="App-header">
       <Profile details={details}></Profile>
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
