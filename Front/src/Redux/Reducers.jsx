import {
    LOADING,
    TODOS,
  
    MODAL,
    MODALNEW,
   
    ERROR,
    MODALEDIT,
    LOCALEDIT
   
} from "./Actions";
const initialState = {
    todos: [],
    one: [],
    modalnew: false,
    modaledit: false,
    error: "",
    localedit: [],
    modal: {
        visible: false,
        msg: "",
        img: "",
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

           

        case MODAL:
            return {
                ... state,
                modal: {
                    visible: action.payload,
                    msg: action.msg,
                    img : action.img, 
                }
            };

            case MODALNEW:
                return {
                    ... state,
                    modalnew: action.payload,
                };
    

                case MODALEDIT:
                    return {
                        ... state,
                        modaledit: action.payload,
                    };
        
                    case LOCALEDIT:
                        return {
                            ... state,
                            localedit: action.payload,
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
