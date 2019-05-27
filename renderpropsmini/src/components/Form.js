import React, { Component } from 'react'

export default class Form extends Component {
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
    if (name !== 'password') {
        if (name !== 'confirmPassword') console.log(this.state)
    }
  }

  handleSubmit = e => {
    console.log('form data:', this.state.email)
  }

  render() {
    let form = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    }
    return this.props.render(form)
  }
}