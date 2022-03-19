import React from 'react'
import {useSelector, useDispatch} from "react-redux";



import { Modale } from "../Redux/Actions";

export default function Modal() {

  const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);

    function handleClick(evento) {
      evento.preventDefault();
      dispatch(Modale(false));
  }


    return (
        <div className="modal">

            <img src={
                modal.visible.img
            }></img>

            <br></br>

<p> {modal.visible.msg}</p>
<br></br>
<button onClick={handleClick}
className="buscarboton">Cerrar</button>
        </div>


    )
}
