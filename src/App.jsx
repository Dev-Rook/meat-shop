import React, {useState, useEffect} from 'react'
import './App.css';

import Sidebar from './Components/_Sidebar/Sidebar';
import Nav from './Components/_Nav/Nav';

import Landing from './Views/_Landing/Landing';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Nav />

      
      <Landing />
    </div>
  );
}

export default App;
 