import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
export default class App extends Component {
    render() {
        return (
            <div>
               <Switch>
                   <Route path='/login' component={Login}></Route>
                   <Route path='/' component={Admin}></Route>
               </Switch>
            </div>
        )
    }
}
