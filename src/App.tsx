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
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  function parentFunction(Username:any, Email:any){
    setUsername(Username);
    setEmail(Email);
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
            <Profile Username={username} Email={email}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
