import './GenerateAdvice.css';
import axios from 'axios';
import Medication from '../Medication/MedicationList';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function  AdviceGenerator()
{
    let AdviceResult:Boolean; 

    function GenerateAdvice() {
        axios.post(`http://localhost:8080/algorithm/getAdvice/` + localStorage.getItem('userId'))

        .then((response) => {
            alert(response.data);
        })
        .catch((error) => {
            
        })
    }

    return (
        <body >
            <button className="GenerateAdvice" onClick={GenerateAdvice}><Link to="/Result"></Link></button>
        </body>
    );
}

export default AdviceGenerator;