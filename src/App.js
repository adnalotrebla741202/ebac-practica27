import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";
import './css/styles.css';

class App extends Component 
{
  state = 
  {
    formData: 
    {
      name: "",
      email: "",
      message: "",
    },
  };

  updateFormData = (newData) => 
  {
    this.setState({ formData: newData });
  };

  render() 
  {
    return (
      <div>
        <Header />
        <Form updateFormData={this.updateFormData} />
        <DisplayData formData={this.state.formData} />
      </div>
    );
  }
}

export default App;