import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreatores'
import axios from 'axios'

//generator函数
function* mySaga () {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList () {
    let { data } = yield axios.get('https://easy-mock.bookset.io/mock/5efef6dfefc5334c6a8f0d3b/react_list/todo_list')
    const action = getListAction(data.data)
    yield put(action)
}

export default mySaga;