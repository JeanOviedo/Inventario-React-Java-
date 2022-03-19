import React from "react";

import Git from "../../src/Icos/git.png";
import Li from "../../src/Icos/linked.png";
import Insta from "../../src/Icos/insta.png";
import Web from "../../src/Icos/web.png";
export default function Footer() {
    return (<div className="footer"><div className="footer2">
        <h2>Proyecto Inventory</h2>
        <p>Realizado por <a href="https://www.jeanoviedo.com" target="_blank"><br></br><br></br>
                Jean Oviedo
            </a>
            , es una app aplicación para mostrar un simple inventario y de la misma manera vender, se utiliza una
API creada con Java que mostrará diferentes atributos de cada producto.Proyecto realizado con
                    JavaScript, CSS, React, Redux con la API Creada en Java.
            <br></br>
        </p>
        <br/>

        <a href="https://github.com/JeanOviedo" target="_blank">
            <img src={Git}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.linkedin.com/in/jean-oviedo/" target="_blank">
            <img src={Li}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.instagram.com/jeanoviedolopez/" target="_blank">
            <img src={Insta}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.jeanoviedo.com" target="_blank">
            <img src={Web}
                className="ico"
                alt="..."/>
        </a>
        </div></div>);
}
