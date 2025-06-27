import React from 'react';
import '../App.css';

function CursosRealizados() {
    const listaCursos = [
    {
        nombre: "Desarrollador de sitios responsivos",
        plataforma: "Capacitate empleo",
        duracion: "62 horas",
        fecha: "Junio 2025"
    },
    {
        nombre: "Administrador de bases de datos",
        plataforma: "Capacitate empleo",
        duracion: "83 horas",
        fecha: "Junio 2025"
    },

    {
        nombre: "Inducción de seguridad y salud ocupacional",
        plataforma: "Arca Continental", 
        duracion: "20 horas", 
        fecha: "Periodo 2022" 
    },
    ];

    return (
    <div className="cursos-realizados-container">
        <h2>Cursos Realizados</h2>
        {listaCursos.map((curso, index) => (
        <div key={index} className="curso-item">
            <h3>{curso.nombre}</h3>
            <p><strong>Plataforma:</strong> {curso.plataforma}</p>
            <p><strong>Duración:</strong> {curso.duracion}</p>
            <p><strong>Fecha de finalización:</strong> {curso.fecha}</p>
        </div>
        ))}
    </div>
    );
}

export default CursosRealizados;