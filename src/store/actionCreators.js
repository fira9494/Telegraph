import {ADD_LOG, GET_LOG, DELETE_LOG, UPDATE_LOG } from '../utils/actionTypes';

export const addLogAC = (payload) => ({
    type: ADD_LOG,
    payload,
});

export const getLogAC = (payload) => ({
    type: GET_LOG,
    payload,
});

export const updateLogAC = (payload) => ({
    type: UPDATE_LOG,
    payload,
});

export const deleteLogAC = (payload) => ({
    type: DELETE_LOG,
    payload,
});

