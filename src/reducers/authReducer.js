import {GET_AUTH,SIGNED_OUT} from "../actions/types";

const initialState = {
   auth:null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case SIGNED_OUT:
            return {
                ...state,
                auth: null
            };

        default:
            return state;

    }
}