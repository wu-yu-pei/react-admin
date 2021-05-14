import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';
import memoryUntil from '../../untils/memoryUntil.js'
import './index.less'
import Header from '../../components/Header'
import LeftNav from '../../components/LeftNav/indexpro'
// 二级路由组件
import Home from '../Home';
import Category from '../Category';
import Rule from '../Rule';
import Users from '../Users';
import Product from '../Product';
import Bar from '../Charts/Bar';
import Line from '../Charts/Line';
import Pie from '../Charts/Pie';

const { Footer, Sider, Content } = Layout;


const Admin = () => {
    // 如果用户没有登录就访问此页码 直接跳到登录模块
    // 判断浏览器中是否用用户信息,以便于自动登录 如果没有重定向到登录界面
    if(Object.keys(memoryUntil.user).length === 0) {
        return <Redirect to="/login"></Redirect>
    }
    return (
        
        <div className='admin-box'>
            <Layout style={{width:"100%",minHeight:"100vh"}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{margin:'20px',backgroundColor:"#fff",minWidth:1277}}>
                        <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/product' component={Product}/>
                        <Route path='/rule' component={Rule}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/charts/bar' component={Bar}/>
                        <Route path='/charts/line' component={Line}/>
                        <Route path='/charts/pie' component={Pie}/>
                        <Redirect to='/home'/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',backgroundColor:'#ccc',color:'#000'}}>推荐使用Goole浏览器,可以获得更佳的页面操作体验</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin