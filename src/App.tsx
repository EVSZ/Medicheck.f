import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import UserPForm from './UserPForm';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <UserPForm properties={{gender:"", height:155, name:"Matt", weight:75}}
      />
    </div>
=======
import MedicationList from './Medication/MedicationList';
import AdviceGenerator from './Advice/GenerateAdvice'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Result from './Advice/GetResultAdvice'

function App() {
  return (
    <Router>
      <div className="App">
        
        <NavigationBar/>
        <UserPForm properties={{gender:0, height:155, name:"Matt", weight:75, MedList: null}}/>      
        <MedicationList />
        <AdviceGenerator/>
        
        <Switch>
            <Route path="/Result">
              <Result/>
            </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
