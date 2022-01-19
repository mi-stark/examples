import {call, put, takeEvery} from 'redux-saga/effects';

async function getValue(){
    return await new Promise(rs => setTimeout(()=> rs(Math.floor(Math.random() * 1000)), 1000));
}

function* fetchValue(action){
    const val = yield call(getValue);
    yield put({type: 'counter/setval', value: val});
}

function* indexSaga(){
    yield takeEvery('counter/fetchValue', fetchValue);
}

export default indexSaga




