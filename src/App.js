import React from 'react';
import './App.css';

const employee = {
  name:"Jack",
  salary:"60$",
  addres:{
      street:"Lincon Bridge 65",
      salary:"80$"
  }
};

function App() {
    const {name,salary:workerSalary,addres} = employee;
    const {street,salary:addresSalary} = addres
  return (
    <div className="App">
     <h4>Name: {name} Work Salary: {workerSalary}</h4>
     <h4>Addres:{street} Addres Salary:{addresSalary}</h4>
    </div>
  );
}

export default App;