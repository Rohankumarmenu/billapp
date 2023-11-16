
import React, { useState } from 'react';
import './App.css';
import ClerkDashboard from './components/ClerkDashboard';
import SupervisorDashboard from './components/SupervisorDashboard/SupervisorDashboard';

const App = () => {
  const [userRole, setUserRole] = useState(''); 
  const login = (role) => {
    setUserRole(role);
  };

  return (
    <div className="App">
      <h1>Bill Desk Application</h1>

      <button onClick={() => login('Clerk')}> Clerk</button>
      <button onClick={() => login('Supervisor')}> Supervisor</button>

      {userRole === 'Clerk' && <ClerkDashboard />}
      {userRole === 'Supervisor' && <SupervisorDashboard />}
    </div>
  );
};

export default App;
