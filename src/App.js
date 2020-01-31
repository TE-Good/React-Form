import React from 'react';
import 'spectre.css/dist/spectre.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <div className="form form-group">
          <h1>Who are you?</h1>
          <label className="form-label">First Name</label>
          <input className="form-input" type="text" placeholder="First Name" />
          <label className="form-label">Surname</label>
          <input className="form-input" type="text" placeholder="Surname" />
          <label className="form-label">Age</label>
          <input className="form-input" type="number" placeholder="Age" />
          <label className="form-label">Employment Status</label>
          <select className="form-select">
            <option>Choose an option</option>
            <option>Employed</option>
            <option>Self-Employed</option>
            <option>Unemployed</option>
          </select>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
