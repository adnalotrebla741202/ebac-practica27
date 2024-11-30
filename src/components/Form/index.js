import React, { Component } from "react";

class Form extends Component 
{
  state = 
  {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (event) => 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => 
  {
    event.preventDefault();
    this.props.updateFormData(this.state);
  };

  render() 
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
        <center><button type="submit">Enviar</button></center>
      </form>
    );
  }
}

export default Form;