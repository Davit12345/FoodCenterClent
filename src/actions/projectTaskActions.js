import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS ,GET_CHOOSE} from "./types";



export const addMenu = (menu, history) => async dispatch => {
    try {
        await axios.post("http://localhost:9494/menu", menu);

        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:9494/menu");

    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data

    });
};


export const getChoose = (auth) => async dispatch => {

    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${auth.auth.access_token}`
    };

    const res = await axios.get("http://localhost:9494/choose",{"headers" : headers});


    dispatch({
        type: GET_CHOOSE,
        payload: res.data

    });
};




export const addItem = (item, history,auth) => async dispatch => {

    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+auth.auth.access_token
    }
    try {
        await axios.post("http://localhost:9494/choose", item,{"headers" : headers});

        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

