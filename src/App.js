import React from 'react';
import './App.css';
import './styles.css'

function App({name,note}) {
  return (
    <div className="App">
        <h1>{note} submitted by {name}</h1>
        <ul>
          <li>DAY : SUNDAY</li>
          <li>{"20" + 20}</li>
          <li>{new Date().toLocaleString()}</li>
        </ul>
    </div>
  );
}

export default App;
