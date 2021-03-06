import React, { useEffect } from 'react'

export default function Form({form, setForm}) {

// BUTTON BEHAVIOUR
useEffect(() => {
  const button = document.querySelector('.btn')
  !Object.values(form).includes("") && form.age >= 18 && form.age < 65 ? button.removeAttribute('disabled') : button.setAttribute('disabled', '') 
})

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

  return (
    <div className="form form-group">
      <h1>About you</h1>
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
  )

}