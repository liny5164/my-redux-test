import { CHANGE_INPUT, ADD, DEL, GET_LIST } from '../store/actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: []
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === CHANGE_INPUT) {
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD) {
        newState.list.push(newState.inputValue)
        return newState
    }
    if (action.type === DEL) {
        newState.list.splice(action.index, 1)
        return newState
    }
    //axios
    if (action.type === GET_LIST) {
        newState.list = action.value
        return newState
    }
    return state
}