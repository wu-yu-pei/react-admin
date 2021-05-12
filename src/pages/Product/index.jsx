import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import ProductHome from './ProductHome'
import ProductDetial from './ProductDetial'
import ProductAddUpdate from './ProductAddUpdate'
export default class Product extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* 这里需要 路由精准匹配  用到exact */}
                    <Route path='/product' component={ProductHome} exact />
                    <Route path='/product/detial' component={ProductDetial}/>
                    <Route path='/product/addupdate' component={ProductAddUpdate}/>
                    <Redirect to='/product'/>
                </Switch>
            </div>
        )
    }
}
