import React from 'react';
import '../App.css'; 

function NombreApellido() {

    const imageUrl = '/profile.png';

    return (
        <div className="nombre-apellido-container">
        <h1>Esteban Alejandro Catagña Andrango</h1> 
        <img src={imageUrl} alt="Perfil" className="perfil-imagen" />
        <h2>Acerca de mi</h2>
        <p>¡Hola! Soy un desarrollador junior con experiencia en C++, Python, JavaScript y React. Actualmente estoy trabajando en el desarrollo de una aplicación web para un emprendimiento de una floristería.</p>
        <p>Con una actitud basada en la escucha activa, la asertividad, la honestidad y el compromiso, me destaco por ser una persona capaz, comedida y cumplida. Estas cualidades me han permitido resolver con éxito cualquier adversidad o problema que se presente. Aprendo con rapidez y mantengo siempre una comunicación efectiva y asertiva, lo que me permite estar preparado para asumir cualquier reto, brindando y adquiriendo conocimientos en el proceso.</p>
        
        </div>
    );
}

export default NombreApellido;