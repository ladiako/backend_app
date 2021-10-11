import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './histore'
import Login from './pages/LoginPage/Login'

export default () => (
    <Router history={history}>
        <Switch>
            <Route path='/login' component={Login} />
        </Switch>
    </Router>
)
