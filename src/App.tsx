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
library.add(fas);

export interface Patient{
  id: number;
  name: string;
  weight: number;
  height: number;
  pregnant: boolean;
  birhtDate: string;
  gender: number;
  healthInformation: healthInformation;
  userPrescriptions: userPrescriptions;
}

interface healthInformation{
  clcr: number;
  lastclcr: string;
}

interface userPrescriptions{
  medicines: medicine[];
}

interface medicine {
  id: number;
  name: string;
  discription: string;
  medicineType: number;
  GetCurrentMedicationList: () => medicine[];
}

function App({userPrescriptions, patient}: {userPrescriptions:userPrescriptions, patient:Patient}) {

  const [id, setId] = useState<number>(patient.id);
  const [name, setName] = useState<string>(patient.name);
  const [weight, setWeight] = useState<number>(patient.weight);
  const [height, setHeight] = useState<number>(patient.height);
  const [pregnant, setPregnant] = useState<boolean>(patient.pregnant);
  const [birhtDate, setBirthDate] = useState<string>(patient.birhtDate);
  const [gender, setGender] = useState<number>(patient.gender)

  const [clcr, setClcr] = useState<number>(patient.healthInformation.clcr);
  const [lastclcr, setLastclcr] = useState<string>(patient.healthInformation.lastclcr);

  const [meds, setMeds] = useState<medicine[]>(patient.userPrescriptions.medicines);

  function saveMedlist() {
    if (patient.userPrescriptions.medicines.length == 0){ alert("Vul eerst uw medicatielijst") }
    else{
        console.log(patient.userPrescriptions.medicines);
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
                height={{height:height, setHeight:setHeight}}
                name={{name: name, setName:setName}}
                prego={{prego:pregnant, setPrego:setPregnant}}
                weight={{weight:weight, setWeight:setWeight}}/>
                <HealthInfo 
                Clcr={{clcr: clcr, setClcr: setClcr}}
                Lastclcr={{lastclcr: lastclcr, setLastclcr: setLastclcr}} />
              </div>
              <div className="right">
                <DisplayMedication
                iMeds={{addedMedlist: meds, setAddedMedlist: setMeds}} />
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