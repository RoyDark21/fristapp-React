import React from "react";
import "../hojas de estilos/Tripulacion.css";


function Tripulacion (prosp){
  return (
    <div className="contenedor-tripulante">
      <img className="imagen-tripulante"
      src={require(`../imagenes/${prosp.imagen}.jpg`)}
      alt="img luffy" />
      <div className="contenedor-tripulante-mugy">
        <p className="nombre-tripulante"><b><u>{prosp.nombre}</u></b></p><br/>
        <p className="rol-tripulante"><b><u>Rol:</u></b>{prosp.rol}</p><br/>
        <p className="fruta-tripulante"><b><u>Fruta del diablo: </u></b>{prosp.fruta}</p><br/>
        <p className="historia-tripulante">{prosp.historia}</p><br/>
        <p className="poderes-titulo">Poderes o Habilidad</p>
          <ul className="poderes-tripulante">
            <li>{prosp.habilidad1}<br/><br/></li>
            <li>{prosp.habilidad2}<br/><br/></li>
            <li>{prosp.habilidad3}<br/><br/></li>
            <li>{prosp.habilidad4}</li>
          </ul>
      </div>
    </div>
  );
}

export default Tripulacion;
