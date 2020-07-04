import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './main/TodoList'
import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css'
import './index.css'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App,document.getElementById('root'))




