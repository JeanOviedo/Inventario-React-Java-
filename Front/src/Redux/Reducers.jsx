import {
    LOADING,
    TODOS,
    ADD_MENU,
    MODAL,
    MODALNEW,
    QUITA_MENU,
    ERROR,
    ONE,
} from "./Actions";
const initialState = {
    todos: [],
    one: [],
    modalnew: false,
    error: "",
    
    modal: {
        visible: false,
        msg: "",
        img: ""
    },
    
    
};

export default function rooReducer(state = initialState, action) {
    switch (action.type) {


        case TODOS:
            return {
                ... state,
                todos: action.payload


            };

        case LOADING:
            return {
                ... state,
                loading: action.payload
            };

            case ONE:
            return {
                ... state,
                one: action.payload
            };


        case MODAL:
            return {
                ... state,
                modal: {
                    visible: action.payload,
                    msg: action.msg
                }
            };

            case MODALNEW:
                return {
                    ... state,
                    modalnew: action.payload,
                };
    



        

            case ERROR:
            return {
                ... state,
                error: action.payload
            };




        default:
            return state;
    }
}
