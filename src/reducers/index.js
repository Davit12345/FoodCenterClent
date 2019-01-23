import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import  authReducer from './authReducer'
import  chooseReducer from './chooseItemsReducer'
export default combineReducers({
    //
    errors: errorsReducer,
    project_task: projectTaskReducer,
    auth:authReducer,
    choose:chooseReducer
});