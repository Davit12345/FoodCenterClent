import { GET_CHOOSE} from "../actions/types";

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

        default:
            return state;

    }
}