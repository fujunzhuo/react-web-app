import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import reducers from './reducer'
import './config'
import './iconfont/iconfont.css'
import './index.css'



import { Register,Login,VerifCode,Home,SetPassword } from './container'


const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>null)
)


ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/verifcode" component={VerifCode}/>
                        <Route path="/set-password" component={SetPassword}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
