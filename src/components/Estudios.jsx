import React from 'react';
import '../App.css';
function Estudios() {

    const estudiosRealizados = [
    {
        tipo: "Educación Superior",
        institucion: "Escuela Politécnica Nacional", 
        titulo: "Tecnología en Agua y Saneamiento", 
        periodo: "Periodo 2023" 
    },
    {
        tipo: "Educación Secundaria",
        institucion: "Colegio Nacional Juan de Salinas", 
        titulo: "Bachiller en Ciencias BGU", 
        periodo: "Periodo 2019" 
    },
    ];

    return (
    <div className="estudios-container">
        <h2>Estudios Realizados</h2>
        {estudiosRealizados.map((estudio, index) => (
            <div key={index} className="estudio-item">
            <h3>{estudio.titulo}</h3>
            <p><strong>Tipo:</strong> {estudio.tipo}</p>
            <p><strong>Institución:</strong> {estudio.institucion}</p>
            <p><strong>Período:</strong> {estudio.periodo}</p>
            </div>
        ))}
    </div>
  );
}

export default Estudios;