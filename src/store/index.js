import { createStore , applyMiddleware ,compose} from 'redux'
import reducer from './reducer'   // 引入createStore方法
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas' 
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())          // 创建数据存储仓库

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer) // 创建数据存储仓库

sagaMiddleware.run(mySagas)
export default store  