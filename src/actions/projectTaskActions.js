import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS } from "./types";

export const addMenu = (menu, history) => async dispatch => {
    try {
        await axios.post("http://localhost:9494/menu", menu);
        history.push("/");
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