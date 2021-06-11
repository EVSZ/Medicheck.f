import React from 'react';
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

function getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  console.log(ca)
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      console.log(c)
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {

    const [cookie, setCookie] = React.useState<string>(getCookie("JSESSIONID"))  
    return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/">
            {cookie === "" ?
              <div>
                <Registration />
              </div> :
              <div>
                <div>
                  <GetAdvice />
                  <UserPForm properties={{ preg: false, gender: "", height: 155, name: "Matt", weight: 75, MedList: null }} />
                  <HealthInfo />
                </div>
                <div className="right">
                  <DisplayMedication />
                </div>
              </div>
            }
            {/* <MedicationList />
            <AdviceGenerator /> */}
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