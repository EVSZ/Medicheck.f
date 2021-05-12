import './GenerateAdvice.css';
import axios from 'axios';
import Medication from '../Medication/MedicationList';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function  AdviceGenerator()
{
    const [adviceResult, setAdviceResult] = useState<Boolean>();
    const [finalAdvice, setFinalAdvice] = useState<String>("");
    
    function GenerateAdvice(): void {
        axios.get(`http://localhost:8080/algorithm/getAdvice`)

        .then((response) => {
                console.log(response.data);

                setAdviceResult(response.data);

                if (adviceResult) setFinalAdvice("U hoeft geen contact op te nemen met een dokter.");
                else setFinalAdvice("Het is verstandig om contact op te nemen met een dokter.");
        })
        .catch((error) => {
            console.log(error);
            setFinalAdvice("Er lijkt is iets mis gegaan. We konden op dit moment geen advies genereren, onze excuses.");
        })
      }

    return (
        <body >
            <button className="GenerateAdvice" onClick={GenerateAdvice}><Link to="/Result"></Link>Genereer advies</button>
            <div>
                {finalAdvice}
            </div>
        </body>
    );
}

export default AdviceGenerator;