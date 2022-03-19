import axios from "axios";
export const LOADING = "LOADING";
export const TODOS = "TODOS";
export const ADD_MENU = "ADD_MENU";
export const MODAL = "MODAL";
export const MODALNEW = "MODALNEW";
export const MODALEDIT= "MODALEDIT";
export const QUITA_MENU = "QUITA_MENU";
export const ERROR = "ERROR";
export const LOCALEDIT = "LOCALEDIT";

export function ActionTodos() {
    return async function (dispatch) {
        try {
            let response = await axios({url: "http://localhost:8080/products/", method: "get"});


            let data = response;
            console.log(data.data, "data");
            dispatch({type: "TODOS", payload: data.data});
            dispatch({type: "LOADING", payload: false});
        } catch (error) {
            console.log("ERROR API ", error);
        }
    };
}


// ----------------- crear producto -----------------//8
export function Guardar(producto) {
    return async function (dispatch) {
        try {

            const dato = await axios.post("http://localhost:8080/products", producto);
            dispatch(ActionTodos())
            dispatch(ModalNew(false))

            console.log(producto, "producto")

        } catch (error) {
            console.log(error, "error.message");

        }
    };
}



// ----------------- Comprar -----------------//8
export function Comprar(producto) {
    return async function (dispatch) {
        try {

            const dato = await axios.put("http://localhost:8080/products/7/", producto);
            dispatch(ActionTodos())
            dispatch(ModalEdit(false))

            console.log(producto, "producto")

        } catch (error) {
            console.log(error, "error.message");

        }
    };
}


// ----------------- Actualizar -----------------//8
export function Actualizar(producto) {
    return async function (dispatch) {
        try {

            const dato = await axios.put("http://localhost:8080/products/7/", producto);
            dispatch(ActionTodos())
            dispatch(ModalEdit(false))

            console.log(producto, "producto")

        } catch (error) {
            console.log(error, "error.message");

        }
    };
}


// ----------------- Eliminar producto -----------------//8
export function Eliminar(id) {
    return async function (dispatch) {
        try {
            const dato = await axios.delete("http://localhost:8080/products/" + id);
            dispatch(ActionTodos())

        } catch (error) {
            console.log(error, "error.message no se pudo eliminar");

        }
    };
}

export const QuitarDeMenu = (data) => {
    return {type: QUITA_MENU, payload: data};
};

export const ActionError = (data) => {
    return {type: ERROR, payload: data};
};

export const ElAddMenu = (data) => {
    return {type: ADD_MENU, payload: data};
};

export const EditLocal = (data) => {
    return {type: LOCALEDIT, payload: data};
};

export const ModalNo = (modal, msg) => {
    return {type: MODAL, payload: false, msg: msg, img: "https://freesvg.org/img/1538154274.png"};
};


export const ModalNew = (ok) => {
    return {type: MODALNEW, payload: ok};
};



export const ModalEdit = (ok) => {
    return {type: MODALEDIT, payload: ok};
};
