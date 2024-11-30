import React from "react";

const DisplayData = ({ formData }) => 
{
  return (
    <div className="display-container">
      <h2>Datos ingresados:</h2>
      <p><strong>Nombre:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mensaje:</strong> {formData.message}</p>
    </div>
  );
};

export default DisplayData;