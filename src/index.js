import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

// 引入工具工具 页面刚加载就读取localStore里面的值 并将值存放在 memoryUntil里
import memoryUntil from './untils/memoryUntil.js'
import storeUntil from './untils/storeUntil'
memoryUntil.user = storeUntil.getUser()

ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ,document.getElementById('root'))