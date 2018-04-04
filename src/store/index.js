import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { login } from './login/reducer'

const reducers = combineReducers({login})

export const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>null
))

