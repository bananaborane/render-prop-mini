import React from 'react'
import Form from './Form'

function RegistrationForm() {
    return (
        <div>
    <Form render={form => {
      return (
        <div>
          <h1>Registration Form</h1>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={form.handleChange}/>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={form.handleChange}/>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={form.handleChange}/>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm Password"
            onChange={form.handleChange}/>
          <button onClick={form.handleSubmit}>submit</button>
        </div>
      )
    }}/>
        </div>
    )
}

export default RegistrationForm
