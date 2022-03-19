import React, {Fragment, useRef, useState} from "react";
import Logo from "../Icos/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ModalNew} from "../Redux/Actions";


export default function Navbar() {

    const dispatch = useDispatch();


    function handleClick() {
      
        dispatch(ModalNew(true));
    }


    return (
        <header className="navbar">
            <div className="logodiv">
                {" "}
                <Link to="/">
                    {" "}
                    <img id="logo"
                        src={Logo}
                        className="logo"
                        alt=""/></Link>
            </div>
            <br></br>
            <nav className="logoder">
                <ul className="menu">
                    <li>
                        <Link to="/">Productos</Link>
                    </li>

                    <li>
                        <Link to="#"
                            onClick={ handleClick
                        }>Nuevo</Link>
                    </li>

                    <li>
                        <Link to="/ventas">Ventas</Link>
                    </li>

                   


                    
                   
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>


                </ul>


            </nav>
        </header>
    );
}
