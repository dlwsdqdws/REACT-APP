import {put, takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axois from 'axios';
import {initListAction} from './actionCreators';

function* getInitList() {
    const res = yield axois.get('/todolist.json');
    const action = initListAction(res.data);
    yield put(action);
}

//generator function
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
export default mySaga;