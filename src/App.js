import React, { useState } from 'react'
import 'spectre.css/dist/spectre.min.css'
import './App.css'

import Form from './components/Form'

function App() {

  const [form, setForm] = useState({ firstName: "", surname: "", age: "", employmentStatus: "" })

  return (
    <div className="App">
      <div className="form-container">
        <Form form={form} setForm={setForm} />
      </div>
    </div>
  )
}

export default App
