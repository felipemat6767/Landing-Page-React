import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Card}from './card';
import {Jumbo}from './jumbotron';
import {Footer}from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <Jumbo />
    <Card />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
