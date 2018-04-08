import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter,HashRouter,MemoryRouter, Route, Switch} from 'react-router-dom'
import {store} from './store'
import './config/config'
import './static/iconfont/iconfont.css'
import './index.css'

import {Register, Login, VerifCode, Home, SetPassword} from './container'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/verifcode" component={VerifCode}/>
                    <Route path="/set-password" component={SetPassword}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

