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

export interface Patient{
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

function App({patient}: {patient:Patient}) {

  const [id, setId] = useState<number>(patient.id);
  const [name, setName] = useState<string>(patient.name);
  const [weight, setWeight] = useState<number>(patient.weight);
  const [length, setLength] = useState<number>(patient.length);
  const [pregnant, setPregnant] = useState<boolean>(patient.pregnant);
  const [birhtDate, setBirthDate] = useState<string>(patient.birthDate);
  const [gender, setGender] = useState<number>(patient.gender)

  const [clcr, setClcr] = useState<number>(patient.healthInformation.clcr);
  const [lastclcr, setLastclcr] = useState<string>(patient.healthInformation.lastclcr);

  const [up, setUp] = useState<userPrescriptions[]>(patient.userPrescriptions);

  function saveMedlist() {
    if (patient.userPrescriptions.length == 0){ alert("Vul eerst uw medicatielijst") }
    else{
        const payload = {patient};
        console.log(payload);
        axios.put('http://localhost:8080/api/patienten/update', payload)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
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
            <Registration />
          </Route>
          <Route path="/Advice">
              <div>
                <GetAdvice />
                <UserPForm 
                age={{age: birhtDate, setAge:setBirthDate}} 
                gender={{gender:gender, setGender:setGender}} 
                length={{length:length, setLength:setLength}}
                name={{name: name, setName:setName}}
                prego={{prego:pregnant, setPrego:setPregnant}}
                weight={{weight:weight, setWeight:setWeight}}/>
                <HealthInfo 
                Clcr={{clcr: clcr, setClcr: setClcr}}
                Lastclcr={{lastclcr: lastclcr, setLastclcr: setLastclcr}} />
              </div>
              <div className="right">
                <DisplayMedication
                iMeds={{ups: up, setUps: setUp}} />
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