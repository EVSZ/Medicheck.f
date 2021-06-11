import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App patient={{id:41, name: 'Matteus', weight: 69, length: 169, pregnant: true, birthDate: '18-06-2002', gender: 0, healthInformation: {clcr: 69, lastclcr: '04-055-2015'}, userPrescriptions: []}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
