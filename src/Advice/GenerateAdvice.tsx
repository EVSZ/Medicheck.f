import './GenerateAdvice.css';
import axios from 'axios';
import Medication from '../Medication/MedicationList';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function  AdviceGenerator()
{
    let AdviceResult:Boolean; 

    
    function GenerateAdvice(): void {
        axios.get(`http://localhost:8080/algorithm/getAdvice`)

        .then((response) => {
                alert(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
          
      }

    return (
        <body >
            <button className="GenerateAdvice" onClick={GenerateAdvice}><Link to="/Result"></Link></button>
        </body>
    );
}

export default AdviceGenerator;