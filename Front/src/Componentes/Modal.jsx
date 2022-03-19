import React from 'react'
import {useSelector, useDispatch} from "react-redux";

export default function Modal() {


    const modal = useSelector((state) => state.modal);

    return (
        <div className="modal">

            <img src={
                modal.visible.img
            }></img>

            <br></br>

<p> {modal.visible.msg}</p>
        </div>
    )
}
