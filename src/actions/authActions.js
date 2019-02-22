import axios from "axios";
import {GET_ERRORS, GET_AUTH, SIGNED_OUT} from "./types";
import Querystring from 'query-string'
import Cookies from 'universal-cookie'

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

        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic d2ViOnNlY3JldA=='
        }

        let body = Querystring.stringify({
            "grant_type": "password",
            "username": login.email,
            "password": login.password
        });


        const resToken = await axios.post("http://localhost:8080/oauth/token", body, {"headers": headers});


        const cookies = new Cookies();
        cookies.set('token', resToken.data.access_token);

        var headersForRole = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${resToken.data.access_token}`
        };

        const role = await axios.get("http://localhost:9494/role", {"headers": headersForRole});

        var user_role = null;
        if (role.data.length === 3) {
            user_role = 'ROLE_ADMIN';
        } else if (role.data.length === 2) {
            if (role.data[1].name === "ROLE_ADMIN")
                user_role = 'ROLE_ADMIN';
            else
                user_role = 'MANAGER';

        } else {
            user_role = 'ROLE_USER';
        }
        cookies.set('role', user_role);
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

export const signOut = () => async dispatch => {

    const cookies = new Cookies();
    cookies.remove('token');
    cookies.remove('role');
    dispatch({
        type: SIGNED_OUT,
        payload: {}

    });


};
