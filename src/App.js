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
      <div className="form-container">
        <Form handleChange={handleChange} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App
