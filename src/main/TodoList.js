import React, { Component } from 'react';
import { connect } from 'react-redux'  //引入连接器
import store from '../store'
import TodoListUI from './TodoListUI'
import { changeInputAction, addAction, delAction, getMyListAction } from '../store/actionCreatores'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        // store.subscribe(this.storeChange)//订阅redux状态
    }
    render () {
        let {inputValue ,changeInputValue,clickBtn,list,delItem} = this.props;
        return (
            <TodoListUI
                inputValue={inputValue}
                list={list}
                changeInputValue={changeInputValue}
                clickBtn={clickBtn}
                delItem={delItem}
            >
            </TodoListUI>
        );
    }
    // storeChange = () => {
    //     this.setState(store.getState())
    // }
    // changeInputValue = (e) => {
    //     const action = changeInputAction(e.target.value)
    //     store.dispatch(action)
    // }
    //添加
    // clickBtn = () => {
    //     const action = addAction(this.props.inputValue)
    //     store.dispatch(action)
    // }
    //删除
    // delItem = (index) => {
    //     const action = delAction(index)
    //     store.dispatch(action)

    // }
    componentDidMount () {
        // axios.get('https://easy-mock.bookset.io/mock/5efef6dfefc5334c6a8f0d3b/react_list/todo_list').then(value => {
        //     console.log(value, 'value');
        //     const action = getListAction(value.data.data)
        //     store.dispatch(action)
        // })
        const action = getMyListAction()
        store.dispatch(action)
    }

}
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeInputValue (e) {
            const action = changeInputAction(e.target.value)
            dispatch(action)
        },
        clickBtn () {
            const action = addAction()
            dispatch(action)
        },
        delItem (index) {
            const action = delAction(index)
            dispatch(action)

        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)