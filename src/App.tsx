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

export interface patient{
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

interface healthInformation{
  clcr: number;
  lastclcr: string;
}

interface userPrescriptions{
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
  let [patient, setPatient] = useState<patient>({id:41, name: 'Matteus', weight: 69, length: 169, pregnant: true, birthDate: '2020-12-10', gender: 0, healthInformation: {clcr: 69, lastclcr: '2020-05-10'}, userPrescriptions: []});

  let [id, setId] = useState<number>(patient.id);
  let [name, setName] = useState<string>(patient.name);
  let [weight, setWeight] = useState<number>(patient.weight);
  let [length, setLength] = useState<number>(patient.length);
  let [pregnant, setPregnant] = useState<boolean>(patient.pregnant);
  let [birthDate, setBirthDate] = useState<string>(patient.birthDate);
  let [gender, setGender] = useState<number>(patient.gender)

  let [clcr, setClcr] = useState<number>(patient.healthInformation.clcr);
  let [lastclcr, setLastclcr] = useState<string>(patient.healthInformation.lastclcr);
  let [userPrescriptions, setUp] = useState<userPrescriptions[]>(patient.userPrescriptions);

  function saveMedlist() {
    if (patient.userPrescriptions.length === 0){ alert("Vul eerst uw medicatielijst") }
    else{
      let healthInformation:healthInformation = {clcr:clcr, lastclcr:lastclcr}
      let userid = localStorage.getItem("userId")
        const payload = {userid, name, weight, length, pregnant, birthDate,gender,healthInformation,userPrescriptions};
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
  const payload = localStorage.getItem('userId');
  axios.post('http://localhost:8080/api/patienten/patient/'+ payload)
  .then(res => {
    setPatient(res.data);
    console.log(res.data);
  })
}

  return (
    
    <Router>
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
                <GetAdvice />
                <UserPForm
                age={{age: birthDate, setAge:setBirthDate}} 
                gender={{gender:gender, setGender:setGender}} 
                length={{length:length, setLength:setLength}}
                name={{name: name, setName:setName}}
                prego={{prego:pregnant, setPrego:setPregnant}}
                weight={{weight:weight, setWeight:setWeight}}/>
                <HealthInfo 
                healthinformation ={{clcr: clcr, setClcr: setClcr, lastclcr: lastclcr, setLastclcr: setLastclcr}}
             />
              </div>
              <div className="right">
                <DisplayMedication
                iMeds={{ups: userPrescriptions, setUps: setUp}} />
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