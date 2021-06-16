import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavBar/NavigationBar';
import UserPForm from '../src/User/UserPForm';
import MedicationList from './Medication/MedicationList';
import AdviceGenerator from './Advice/GenerateAdvice'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from './Advice/GetResultAdvice';
import Registration from './User/Registration'
import Styleguidetest from './Styleguidetest';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styleguide.css';
import HealthInfo from './User/Health'
import GetAdvice from './Advice/GetAdvice'
import DisplayMedication from './Medication/DisplayMedication'
import axios from 'axios';
library.add(fas);

export interface patient {
  id: number;
  name: string;
  weight: number;
  length: number;
  pregnant: boolean;
  birthDate: string;
  gender: number;
  healthInformation: healthInformation;
  userPrescriptions: userPrescriptions[];
}

interface healthInformation {
  clcr: number;
  lastclcr: string;
}

interface userPrescriptions {
  medicine: medicine;
}

interface medicine {
  id: number;
  name: string;
  discription: string;
  medicineType: number;
  GetCurrentMedicationList: () => medicine[];
}
function App() {
  const [patient, setPatient] = useState<patient>({ id: 0, name: '', weight: 0, length: 0, pregnant: false, birthDate: '0000-00-00', gender: 0, healthInformation: { clcr: 0, lastclcr: '0000-00-00' }, userPrescriptions: [] });

  const [id, setId] = useState<number>(patient.id);
  const [name, setName] = useState<string>(patient.name);
  const [weight, setWeight] = useState<number>(patient.weight);
  const [length, setLength] = useState<number>(patient.length);
  const [pregnant, setPregnant] = useState<boolean>(patient.pregnant);
  const [birthDate, setBirthDate] = useState<string>(patient.birthDate);
  const [gender, setGender] = useState<number>(patient.gender)

  const [clcr, setClcr] = useState<number>(patient.healthInformation.clcr);
  const [lastclcr, setLastclcr] = useState<string>(patient.healthInformation.lastclcr);
  const [userPrescriptions, setUp] = useState<userPrescriptions[]>(patient.userPrescriptions);

  const [showAdvice, setShowAdvice] = useState<boolean>(false);
  const [result, setResult] = useState<boolean | null>(null)
  // function ChangeColor() {
  //   for(let i=0; i<item.length; i++) {
  //     item[i].
  //   }
  // }

  function DisplayMessage(amidead: boolean | null) {
    if (showAdvice) {
      return (
        <div>
          {amidead ?
            <div className="infoElement">
              <div className="infoBox">
                <div className="infoTop">
                  <h3>het advies is <strong>negatief</strong></h3>
                  <FontAwesomeIcon style={{ width: '30px', height: '30px', color: '#d00030', marginLeft: '10px' }} icon={["fas", "frown"]} />
                </div>
                <div className="infoMid">
                  <h5>Na het genereren van het advies blijkt uit de
                    resultaten dat het handig is om zo snel mogelijk
                    een afspraak te maken met uw huisarts/dokter.</h5>
                </div>
                <div className="infoBottom">
                  <button className="btnMedium btnDanger" onClick={() => { setShowAdvice(false); setResult(null) }}>OK</button>
                </div>
              </div>
            </div> :
            <div className="infoElement">
              <div className="infoBox">
                <div className="infoTop">
                  <h3>het advies is <strong>positief</strong></h3>
                  <FontAwesomeIcon style={{ width: '30px', height: '30px', color: '#00d050', marginLeft: '10px' }} icon={["fas", "smile-beam"]} />
                </div>
                <div className="infoMid">
                  <h5>Uit de informatie die wij hebben ontvangen
                    blijkt er op dit moment geen enkele reden is
                    om een afspraak te maken met uw huisarts/dokter.
                    Indien u klachten ervaart is het toch verstandig
                    contact op te nemen.</h5>
                </div>
                <div className="infoBottom">
                  <button className="btnMedium btnNormal" onClick={() => { setShowAdvice(false); setResult(null) }}>OK</button>
                </div>
              </div>
            </div>}
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  function saveMedlist() {
    if (patient.userPrescriptions.length === 0) { alert("Vul eerst uw medicatielijst") }
    else {
      let healthInformation: healthInformation = { clcr: clcr, lastclcr: lastclcr }
      const userid = localStorage.getItem('userId');
      const payload = { userid, name, weight, length, pregnant, birthDate, gender, healthInformation, userPrescriptions };
      console.log(payload);
      axios.put('http://localhost:8080/api/patienten/update', payload)
        .then(res => {
          alert('Uw gegevens zijn opgeslagen!');
        })
        .catch(error => {
          alert('We konden op dit moment uw gegevens niet opslaan...');
        })
    }
  }

  function load() {
    const payload = localStorage.getItem('id');
    axios.post('http://localhost:8080/api/patienten/patient/' + payload)
      .then(res => {
        setPatient(res.data);
      })
  }

  function SetAdvice(Advice: boolean) {
    setResult(Advice);
    setShowAdvice(true);
    DisplayMessage(result);
  }

  return (
    <Router>
      {result !== null ?
        <>
          <div className="Center">
            {DisplayMessage(result)}
          </div>
          <div style={{ width: '100%', height: '100%', top: 0, left: 0, position: 'fixed', backgroundColor: 'grey', opacity: '75%', zIndex: 8 }}>
          </div>
        </> : null}
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/Result">
            <Result />
          </Route>
          <Route path="/Registration">
            <Registration
              props={load} />
          </Route>
          <Route path="/Advice">

            <div>
              <GetAdvice Advice={SetAdvice} />
              <UserPForm
                age={{ age: birthDate, setAge: setBirthDate }}
                gender={{ gender: gender, setGender: setGender }}
                length={{ length: length, setLength: setLength }}
                name={{ name: name, setName: setName }}
                prego={{ prego: pregnant, setPrego: setPregnant }}
                weight={{ weight: weight, setWeight: setWeight }} />
              <HealthInfo
                healthinformation={{ clcr: clcr, setClcr: setClcr, lastclcr: lastclcr, setLastclcr: setLastclcr }}
              />


            </div>
            <div className="right">
              <DisplayMedication
                iMeds={{ ups: userPrescriptions, setUps: setUp }} />
              <div className="element">
                <button className="btnSmall btnNormal" type="submit" onClick={saveMedlist}>Sla gegevens op</button>
              </div>
            </div>
            {/* <MedicationList />
            <AdviceGenerator /> */}
            {/* properties={{ preg: false, gender: "", height: 155, name: "Matt", weight: 75, MedList: null }} */}
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Styleguidetest />
    // </div>
  );
}

export default App;