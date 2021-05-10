import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Menu } from 'antd';

import logo from '../../assets/images/logo.png'
import './index.less'
// 引入配置导航文件 便利出来 操作方便
import menuList from '../../config/mencConfig.js';
const { SubMenu } = Menu;
 class LeftNav extends Component {
    getMenuList = (menuLists) => {
      return menuLists.map((item) => {
            if(!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }else {
                // 刷新自动打开当前项
                const {pathname} = this.props.location
                // 寻找需要打开的项
                const citem = item.children.filter(node => node.key === pathname)
                if(citem.length!==0) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {
                        this.getMenuList(item.children)
                    }
                    </SubMenu>
                )
            }
        })
    }
    componentWillMount() {
        // 这里只调用一次 先调的原因是 要用到此函数里面的变量    
        this.menuNodes = this.getMenuList(menuList)
    }
    render() {
        return (
            <div className='left-nav'>
                <Link to='/home' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>硅谷后台</h1>
                </Link>
                {/* 导航菜单 */}
                <Menu
                selectedKeys={this.props.location.pathname}
                defaultOpenKeys={[this.openKey]}
                mode="inline"
                theme="dark"
                >
                {this.menuNodes}
                </Menu>
            </div>
        )
    }
}
// 这里使用WithRouter的原因式 LeftNav不是路由组件 拿不到当前请求路径
export default withRouter(LeftNav)
