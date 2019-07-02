import React from 'react'
import {Switch,Route } from 'react-router-dom'
import Todos from '../../containers/todo';
import Users from '../../containers/users'
import About from '../../containers/about';
import App from '../../containers/App';

export default function Body() {
    return (
        <main className="body-container">
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/todos" component={Todos}></Route>
                <Route path="/users" component={Users}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </main>
    )
}
