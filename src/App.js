import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App() {
  return (
    <nav className="navbar dark bg-dark d-flex justify-content-between">
      <div className ="container" style ={{width: "70%"}}>
        <a className="navbar-brand" href="4">Start Bootstrap</a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="3">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="2">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="1">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="1">Contact</a>
            </li>
          </ul>
      </div>
  </nav>
   
    
  );
}

export default App;
