import React from 'react'
import Form from './Form'

function LoginForm() {
    return (
        <div>
             <Form render={(form) => {
      return (
        <div>
          <h1>Login Form</h1>
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
          <button onClick={form.handleSubmit}>submit</button>
        </div>
      )
    }}/>
        </div>
    )
}

export default LoginForm
