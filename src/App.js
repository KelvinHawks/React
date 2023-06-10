import React from 'react';

import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';
//import "./style.css"
function App(){
  return(
    <div className='container'>
      <div className='content'>
        <Navbar/>
        <Main/>
      </div>
      
    </div>
     
  );
}

export default App;
