import axios from "axios";
import Cookies from 'universal-cookie'

import {
    GET_ERRORS,
    GET_PROJECT_TASKS,
    GET_CHOOSE,
    DELETE_ONE_TASK,
    DELETE_MENU_TASK,
    SUCCESS_BUY_PRODUCT
} from "./types";


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

export const getAllProducts = () => async dispatch => {
    const res = await axios.get("http://localhost:9494/menu");

    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data

    });
};

function foHeaders() {

    const cookies = new Cookies();
    var access_token = cookies.get('token');
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${access_token}`
    };
    return headers;
}

export const getChoose = (auth) => async dispatch => {


    const res = await axios.get("http://localhost:9494/choose", {"headers": foHeaders()});


    dispatch({
        type: GET_CHOOSE,
        payload: res.data

    });

};


export const addItem = (item, history) => async dispatch => {


    try {
        await axios.post("http://localhost:9494/choose", item, {"headers": foHeaders()});

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

export const deleteOneTask = (id, auth) => async dispatch => {


    await axios.delete(`http://localhost:9494/choose/${id}`, {"headers": foHeaders()});
    dispatch({
        type: DELETE_ONE_TASK,
        payload: id
    });

};


export const deleteTask = (id, auth) => async dispatch => {


    await axios.delete(`http://localhost:9494/menu/${id}`, {"headers": foHeaders()});
    dispatch({
        type: DELETE_MENU_TASK,
        payload: id
    });

};

export const buyProduct = (auth) => async dispatch => {

    try {
        await axios.get("http://localhost:9494/buy", {"headers": foHeaders()});

        dispatch({
            type: SUCCESS_BUY_PRODUCT,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};