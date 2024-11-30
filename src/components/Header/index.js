import React, { Component } from "react";

class Header extends Component 
{
  componentDidMount() 
  {
    console.log("Header mounted!");
  }

  render() 
  {
    return <h1>Formulario React Básico</h1>;
  }
}

export default Header;