import axios from "axios";
import {GET_ERRORS,GET_AUTH,SIGNED_OUT} from "./types";
import Querystring from 'query-string'


export const addUser = (user, history) => async dispatch => {
    try {
        await axios.post("http://localhost:9494/users", user);

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
export const VerifyWhitEmailCode = (CodeAndEmail, history) => async dispatch => {
    try {
        await axios.post("http://localhost:9494/users/verify", CodeAndEmail);

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
export const LoginIn = (login, history) => async dispatch => {
    try {

        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic d2ViOnNlY3JldA=='
        }
        var body = Querystring.stringify({
            "grant_type": "password",
            "username": login.email,
            "password": login.password
        });

      const resToken=await  axios.post("http://localhost:8080/oauth/token",body,{"headers" : headers});

        dispatch({
            type: GET_AUTH,
            payload: resToken.data

        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const signOut = (dispatch) => {
    try {

        dispatch({
            type: SIGNED_OUT,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }


    };
