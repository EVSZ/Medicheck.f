import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import UserPForm from './UserPForm';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <UserPForm properties={{gender:"male", height:155, name:"Matt", weight:75}}
      />
    </div>
  );
}

export default App;
