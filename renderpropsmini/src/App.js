import React, { Component } from 'react';
import './App.css';

// import SuperSecret from './components/SuperSecret'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
