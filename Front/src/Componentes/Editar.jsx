import React, {Fragment, useEffect, useState, useRef} from "react";
import {ModalEdit, Guardar, Actualizar} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";
import Img from "../Icos/edit.png";


export default function Editar() {

    const [nombre, setnombre] = useState("");
    const [referencia, setreferencia] = useState("");
    const [precio, setprecio] = useState("");
    const [peso, setpeso] = useState("");
    const [categoria, setcategoria] = useState("");
  
    const [stock, setstock] = useState("");
  
    const edit = useSelector((state) => state.localedit);

   
    
    const dispatch = useDispatch();
    function handleClick(evento) {
        evento.preventDefault();
        dispatch(ModalEdit(false));
    }


    



    function handleSubmit(evento) {
        evento.preventDefault();
        
        dispatch(Actualizar({
            id: edit.id,
            nombre: nombre,
            referencia: referencia,
            precio: precio,
            peso: peso,
            categoria: categoria,
            stock: stock,
            ventas: edit.ventas,
            date: new Date().toISOString().slice(0, 19).replace('T', ' '),

        }));

        

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
                    (event) => handleSubmit(event, edit.id)
                }>
                    <input placeholder={"Nombre: " + edit.nombre}
                 
                        onChange={
                            (evento) => {
                                handleName(evento);
                            }
                        }
                        type="text"
                        required></input>
                <br></br>
                <input placeholder={"Stock: " + edit.stock}
               
                    onChange={event => setstock(event.target.value)} 
                    
                    type="number"
                    required></input>
            <br></br>


            <input placeholder={"Precio: " + edit.precio}
           
                onChange={
                    (evento) => {
                        handlePrecio(evento);
                    }
                }
                type="number"
                required></input>
        <br></br>


        <input placeholder={"Categoría: " + edit.categoria}
   
            onChange={
                (evento) => {
                    handleCategoria(evento);
                }
            }
            type="text"
            required></input>
    <br></br>


    <input placeholder={"Peso: " + edit.peso}
   
        onChange={
            (evento) => {
                handlePeso(evento);
            }
        }
        type="number"
        required></input>
<br></br>


<input placeholder={"Referencia: " + edit.referencia}
 
    onChange={
        (evento) => {
            handleReferencia(evento);
        }
    }
    type="text"
    required></input></form><button onClick={handleClick}
    className="buscarboton">Cerrar</button><button onClick={handleSubmit}
    className="buscarboton">Actualizar</button></div></Fragment>
    );
}
