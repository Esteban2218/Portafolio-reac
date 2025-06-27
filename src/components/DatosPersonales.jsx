import React from 'react';
import '../App.css';
function DatosPersonales() {

    const cedula = "1725896425";
    const edad = 23;
    const ciudad = "Quito";
    const nacionalidad = "Ecuatoriana";
    const genero = "MAsculino";

    return (
    <div className="datos-personales-container">
        <h2>Datos Personales</h2>
        <p><strong>Cédula:</strong> {cedula}</p>
        <p><strong>Edad:</strong> {edad} años</p>
        <p><strong>Ciudad:</strong> {ciudad}</p>
        <p><strong>Nacionalidad:</strong> {nacionalidad}</p>
        <p><strong>Género:</strong> {genero}</p>
    </div>
    );
}

export default DatosPersonales;