import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import UserPForm from './UserPForm';
import PharmaceuticalCatalogue from './Medication/PharmaceuticalCatalogue';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <PharmaceuticalCatalogue properties={{name: "Gai", type: 5, description: "Really big gai"}} />
      <UserPForm properties={{gender:"male", height:155, name:"Matt", weight:75}}/>
    </div>
  );
}

export default App;
