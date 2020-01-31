import React, { useState, useEffect } from 'react'
import 'spectre.css/dist/spectre.min.css'
import './App.css'

import Form from './components/Form'

function App() {
  const [form, setForm] = useState({ firstName: "", surname: "", age: "", employmentStatus: "" })

  // HANDLES ALL INPUT FIELD CHANGES & STATE
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value })
  }
  // DISABLES INPUTS ON SUBMIT
  function handleClick(e) {
    const inputs = document.querySelectorAll('.disable-on-submit')
    inputs.forEach(elem => elem.setAttribute('disabled', ''))
    e.target.setAttribute('disabled', '')
  }

  // BUTTON BEHAVIOUR
  useEffect(() => {
    const button = document.querySelector('.btn')
    !Object.values(form).includes("") && form.age >= 18 && form.age < 65 ? button.removeAttribute('disabled') : button.setAttribute('disabled', '') 
  })

  return (
    <div className="App">
    {console.log(form)}
      <div className="form-container">
        <div className="form form-group">
          {/* <Form /> */}
          <h1>Who are you?</h1>
          <label className="form-label">First Name</label>
          <input className="form-input disable-on-submit" type="text" name="firstName" onChange={handleChange} placeholder="First Name" />
          <label className="form-label">Surname</label>
          <input className="form-input disable-on-submit" type="text" name="surname" onChange={handleChange} placeholder="Surname" />
          <label className="form-label">Age</label>
          <input className="form-input disable-on-submit" type="number" name="age" onChange={handleChange} placeholder="Age" min="18" max="64" />
          <label className="form-label">Employment Status</label>
          <select className="form-select disable-on-submit" name="employmentStatus" onChange={handleChange} defaultValue="Choose an option">
            <option disabled>Choose an option</option>
            <option>Employed</option>
            <option>Self-Employed</option>
            <option>Unemployed</option>
          </select>
          <button className="btn" onClick={handleClick} onFocus={e => e.target.blur()}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
