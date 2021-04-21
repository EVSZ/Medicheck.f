import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import UserPForm from './UserPForm';
import MedicationList from './Medication/MedicationList';
import AdviceGenerator from './Advice/GenerateAdvice'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Result from './Advice/GetResultAdvice'
import interface from './UserPForm';

function App() 
{
  const 
  const parentfunction = 
  return (
    <Router>
      <div className="App">
        
        <NavigationBar/>
        <UserPForm properties={{ preg: false, gender:"", height:155, name:"Matt", weight:75, MedList: null}} functionCallFromParent= />      
        <MedicationList />
        <AdviceGenerator/>
        
        <Switch>
            <Route path="/Result">
              <Result/>
            </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
