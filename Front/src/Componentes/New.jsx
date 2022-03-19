import React, {Fragment, useEffect, useState, useRef} from "react";
import {ModalNew, Guardar} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";
import Img from "../Icos/new.png";


export default function New() {

    const [nombre, setnombre] = useState("");
    const [referencia, setreferencia] = useState("");
    const [precio, setprecio] = useState("");
    const [peso, setpeso] = useState("");
    const [categoria, setcategoria] = useState("");
    const [stock, setstock] = useState("");


    const dispatch = useDispatch();
    function handleClick(evento) {
        evento.preventDefault();
        dispatch(ModalNew(false));
    }

    function handleClickGuardar(evento) {
        evento.preventDefault();
        dispatch(ModalNew(false));
    }
    

    function handleSubmit(evento) {
        evento.preventDefault();
        dispatch(Guardar({
        
            nombre: nombre,
            referencia: referencia,
            precio: precio,
            peso: peso,
            categoria: categoria,
            stock: stock,
            ventas: 0,
            date: new Date().toISOString().slice(0, 19).replace('T', ' '),

        }));

        setnombre("");
        setcategoria("");
        setpeso("");
        setreferencia("");
        setstock("");
        setprecio("");

    }


    function handleName(evento) {
        evento.preventDefault();
        setnombre(evento.target.value);

    }

    function handleReferencia(evento) {
        evento.preventDefault();
        setreferencia(evento.target.value);

    }

    function handlePrecio(evento) {
        evento.preventDefault();
        setprecio(evento.target.value);
    }


    function handlePeso(evento) {
        evento.preventDefault();
        setpeso(evento.target.value);

    }

    function handleCategoria(evento) {
        evento.preventDefault();
        setcategoria(evento.target.value);

    }

    function handleStock(evento) {
        evento.preventDefault();
        setstock(evento.target.value);

    }

    return (
        <Fragment>
            <div className="modal">
                <br></br>
                <br></br>
                <img src={Img}
                    className="ico2"></img>
                <form onSubmit={
                    (event) => handleClickGuardar(event,)
                }>
                    <input placeholder="Nombre"
                        onChange={
                            (evento) => {
                                handleName(evento);
                            }
                        }
                        type="text"
                        required></input>
                <br></br>
                <input placeholder="Stock"
                    onChange={
                        (evento) => {
                            handleStock(evento);
                        }
                    }
                    type="number"
                    required></input>
            <br></br>


            <input placeholder="Precio"
                onChange={
                    (evento) => {
                        handlePrecio(evento);
                    }
                }
                type="number"
                required></input>
        <br></br>


        <input placeholder="Categoría"
            onChange={
                (evento) => {
                    handleCategoria(evento);
                }
            }
            type="text"
            required></input>
    <br></br>


    <input placeholder="Peso"
        onChange={
            (evento) => {
                handlePeso(evento);
            }
        }
        type="number"
        required></input>
<br></br>


<input placeholder="Referencia"
    onChange={
        (evento) => {
            handleReferencia(evento);
        }
    }
    type="text"
    required></input></form><button onClick={handleClick}
    className="buscarboton">Cerrar</button><button onClick={handleSubmit}
    className="buscarboton">Guardar</button></div></Fragment>
    );
}
