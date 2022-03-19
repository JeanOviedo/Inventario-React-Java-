import React, { Fragment, useEffect, useState, useRef } from "react";
import { ActionTodos, Eliminar , ModalEdit, EditLocal , Comprar , Modale} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import New from "./New";
import Modal from "./Modal";
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
  let modal= useSelector((state) => state.modal);

  function handleClickEliminar(evento, ide) {
    evento.preventDefault();
    dispatch(Eliminar(ide));
  }

  


  function handleSubmitComprar(evento, ok) {
    evento.preventDefault();
    

    
    if (ok.stock <= 0 ) {
      dispatch(Modale({
        visible: true,
        msg: "ERROR No hay STOCK de este producto",
        img : "https://icon-library.com/images/unhappy-icon/unhappy-icon-3.jpg"

    }));
    }
    else 
    {
    dispatch(Comprar({
        id: ok.id,
        nombre: ok.nombre,
        referencia: ok.referencia,
        precio: ok.precio,
        peso: ok.peso,
        categoria: ok.categoria,
        stock: ok.stock - 1,
        ventas :ok.ventas + 1,
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
    }));

    dispatch(Modale({
      visible: false,
     

  }));

  }
    

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
                     Ref: {todos.referencia}{" "}
                  </p>
                  <p>
                    Peso: {todos.peso} - Stock: {todos.stock}{" "}
                  </p>
                  <button className="buscarboton" onClick={(evento) => {
                        handleSubmitComprar(evento, todos);
                      }} id={Math.random(5)}>
                    Comprar
                  </button>
                
                    <button
                      onClick={(evento) => {
                        handleClickEliminar(evento, todos.id);
                      }}
                      className="buscarboton"
                    >
                      Eliminar
                    </button>
               
                  
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
      {modal.visible.visible == true ? <Modal></Modal> : ""}
      {modaledit == true ? <Editar></Editar> : ""}
    </Fragment>
  );
}
