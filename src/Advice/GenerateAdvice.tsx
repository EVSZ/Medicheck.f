import './PharmaceuticalCatalogue.css';
import React, { useState } from "react";
import axios from 'axios';
import Medication from '../Medication/MedicationList';
import { Console } from 'node:console';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdviceGenerator() 
{
    let AdviceResult:Boolean; 

    function GenerateAdvice(): void {
        axios.post(`http://localhost:8080/api/Algorithme/post`, localStorage.getItem('MedicationList'))
        .then((response) => {
                AdviceResult = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
          
      }

    return (
        <body >
            <div className="AdviceButton">
                <button onClick={GenerateAdvice}><Link to="/Result"></Link></button>
            </div>
        </body>

    );
}

export default AdviceGenerator;