import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {
  PieChartOutlined,
  InsertRowBelowOutlined,
  AppstoreAddOutlined,
  BarsOutlined,
  TagOutlined,
  LineChartOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  SlidersOutlined,
  HomeOutlined
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import './index.less'
const { SubMenu } = Menu;
export default class LeftNav extends Component {
    render() {
        return (
            <div className='left-nav'>
                <Link to='/home' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>React后台</h1>
                </Link>
                {/* 导航菜单 */}
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to='/home'>首页</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="商品">
                    <Menu.Item key="2" icon={<BarsOutlined />}>
                    <Link to='/category'>品类管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TagOutlined />}>
                        <Link to="/product">商品管理</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to='/users'>用户管理 </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
                   <Link to="/rule">
                   角色管理
                   </Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<InsertRowBelowOutlined />} title="图形图标">
                    <Menu.Item key="6" icon={<SlidersOutlined />}>
                    <Link to='/charts/bar' >柱形图 </Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<LineChartOutlined />}>
                    <Link to='/charts/line'>折线图 </Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<PieChartOutlined />}>
                    <Link to='/charts/pie' >饼图 </Link>
                    </Menu.Item>
                </SubMenu>
                </Menu>
            </div>
        )
    }
}
