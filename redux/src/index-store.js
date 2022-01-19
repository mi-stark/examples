import {createStore, applyMiddleware} from "redux";
import {createSlice} from '@reduxjs/toolkit';
import createSaga from 'redux-saga';
import indexReduxSaga from "./index-redux-saga";

const {reducer} = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        setval(state, action){
            return {...state, value: action.value};
        }
    }
})

const reduxSaga = createSaga();
const indexStore = createStore(
    reducer,
    applyMiddleware(reduxSaga)
);

reduxSaga.run(indexReduxSaga);

export default indexStore;