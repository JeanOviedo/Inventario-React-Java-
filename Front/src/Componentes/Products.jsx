import React, { Fragment, useEffect, useState, useRef } from "react";
import { ActionTodos, Eliminar , ModalEdit, EditLocal} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import New from "./New";

import { Link } from "react-router-dom";
import Editar from "./Editar";
export default function Product() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const boton = useRef(null);

  useEffect(() => {
    if (!todos.length) {
      dispatch(ActionTodos());
    }
  }, [dispatch]);

  let modalnew = useSelector((state) => state.modalnew);
  let modaledit= useSelector((state) => state.modaledit);


  function handleClickEliminar(evento, ide) {
    evento.preventDefault();
    dispatch(Eliminar(ide));
  }

  

  function handleClickEditarLocal(evento, data) {
    evento.preventDefault();
    dispatch(EditLocal(data));
    dispatch(ModalEdit(true));
    console.log(data, "test de datos")
}


  function handleClickEditar() {
    dispatch(ModalEdit(true));
}


  return (
    <Fragment>
      <div className="container2" key={Math.random(5)}>
        <br></br> <br></br> <br></br>
        {console.log(todos, "TOFDOS FRONT")}
        {todos
          ? todos.map((todos) => (
              <div className="card" key={Math.random(5)}>
                <div key={Math.random(5)}>
                  <h3> {todos.nombre}</h3>
                  <p>Precio: $ {todos.precio}</p>
                  <p>Categoria: {todos.categoria}</p>
                  <p>
                    Peso: {todos.peso} - Ref: {todos.referencia}{" "}
                  </p>
                  <p>
                    Disponible: {todos.peso} - Ref: {todos.stock}{" "}
                  </p>
                  <button className="buscarboton" id={Math.random(5)}>
                    Comprar
                  </button>
                  <Link to={`/detalles/${todos.id}`}>
                    <button
                      onClick={(evento) => {
                        handleClickEliminar(evento, todos.id);
                      }}
                      className="buscarboton"
                    >
                      Eliminar
                    </button>
                  </Link>
                  
                    <button onClick={(evento) => {handleClickEditarLocal(evento, todos);
                      }}  className="buscarboton">
                      Editar
                    </button>
                 
                </div>
              </div>
            ))
          : !todos
          ? ""
          : ""}
        <br />
      </div>
      {modalnew == true ? <New></New> : ""}
      {modaledit == true ? <Editar></Editar> : ""}
    </Fragment>
  );
}
