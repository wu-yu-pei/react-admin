import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './index.less'
import {reqWeather} from '../../api/index'
import {formateDate} from '../../untils/dataUtils.js';
import memoryUntil from '../../untils/memoryUntil.js';
import storeUntil from '../../untils/storeUntil';
import mencConfig from '../../config/mencConfig.js';
 class Header extends Component {
    state = {
        date:formateDate(Date.now()),
        weather:''
    }
    getTime = () => {
        this.timer = setInterval(() => {
            this.setState({date:formateDate(Date.now())})
        }, 1000);
    }
    getWeather =async () => {
        let weather = await reqWeather()
        this.setState({weather:weather.lives[0]})
    }
    // 动态获取title
    getTitle = () => {
        let path = this.props.location.pathname
        let title
        mencConfig.forEach(item => {
            if(item.key === path) {
                title = item.title
            }else if(item.children) {
                const Citem = item.children.find(citem => citem.key === path)
                if(Citem) {
                    title = Citem.title
                }
            }
            
        })
        return title
    }
    // 退出
    out = () => {
        // 删除储存的用户信息
        storeUntil.removeUser()
        // 替换路由
        this.props.history.replace('/login')
    }
    // 初始化相关数据
    componentDidMount() {
        this.getTime()
        this.getWeather()
    }
    //清除定时器
    componentWillMount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎{memoryUntil.user.username}</span>
                    <a href="" onClick={this.out}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className='header-bottom-left'>
                        <h1>{this.getTitle()}</h1>
                    </div>
                    <div className='header-bottom-right'>
                        <span>{this.state.date}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>{this.state.weather.weather}&nbsp;&nbsp;{this.state.weather.temperature}°C&nbsp;&nbsp;&nbsp;&nbsp;{this.state.weather.winddirection}风</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
