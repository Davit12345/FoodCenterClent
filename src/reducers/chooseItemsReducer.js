import { GET_CHOOSE,DELETE_ONE_TASK,SUCCESS_BUY_PRODUCT} from "../actions/types";

const initialState = {

    choose:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CHOOSE:
            return {
                ...state,
                choose: action.payload
            };
        case DELETE_ONE_TASK:
            return {
                ...state,
                choose: state.choose.filter(
                    choose => choose.id !== action.payload
                )
            };
        case SUCCESS_BUY_PRODUCT:
            return {
                ...state,
                choose:[]

            };
        default:
            return state;

    }
}