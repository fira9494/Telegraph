import { combineReducers } from 'redux';
import logReducer from "./logReducer";

export const rootReducer = combineReducers({
    logs : logReducer
});
