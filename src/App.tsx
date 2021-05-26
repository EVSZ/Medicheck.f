import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavBar/NavigationBar';
import UserPForm from './UserPForm';
import MedicationList from './Medication/MedicationList';
import AdviceGenerator from './Advice/GenerateAdvice'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from './Advice/GetResultAdvice';
import Registration from './User/Registration/Registration'
import Profile from './User/Profile/Profile';

function App(this: any) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [length, setLength] = useState<string>("");

  function parentFunction(Name:string, Email:string, BirthDate:string, Gender:string, Weight:string, Length:string){
    setName(Name);
    setEmail(Email);
    setBirthDate(BirthDate);
    setGender(Gender);
    setWeight(Weight);
    setLength(Length);
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
            <Registration functionCallFromParent={parentFunction.bind(this)} />
          </Route>
          <Route path="/Advice">
            <UserPForm properties={{ preg: false, gender: "", height: 155, name: "Matt", weight: 75, MedList: null }} />
            <MedicationList />
            <AdviceGenerator />
          </Route>
          <Route path="/Personal">
            <Profile Name={name} Email={email} BirthDate={birthDate} Gender={gender} Weight={weight} Length={length}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
