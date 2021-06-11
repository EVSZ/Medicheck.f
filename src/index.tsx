import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App 
    userPrescriptions={{medicines: []}} 
    patient={{birhtDate:"22/10/2018", gender:0, healthInformation:{clcr:0, lastclcr:"22/12/2010"}, userPrescriptions:{medicines: []}, height: 120, id: 2, name:"MotherCucker", pregnant:false, weight:2000}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
