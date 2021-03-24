import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import UserPForm from './UserPForm';
import MedicationList from './Medication/MedicationList';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <UserPForm properties={{gender:0, height:155, name:"Matt", weight:75}}/>      
      {/*<PharmaceuticalCatalogue properties={{name: "Gai", type: 5, description: "Really big gai"}} />*/}
      <MedicationList />
    </div>
  );
}

export default App;
