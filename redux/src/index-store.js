import {createStore} from "redux";
import {createSlice} from '@reduxjs/toolkit';

const {reducer} = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        add(state){
            return {...state, value: state.value + 1};
        }
    }
})

const indexStore = createStore(reducer);

export default indexStore;