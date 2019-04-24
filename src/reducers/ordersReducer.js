import { GET_ORDERS_TASKS} from "../actions/types";
const initialState = {
    unSendOrders:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS_TASKS:
            return {
                ...state,
                unSendOrders: action.payload
            };
        default:
            return state;

    }
}