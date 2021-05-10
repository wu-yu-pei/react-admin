import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import memoryUntil from '../../untils/memoryUntil.js'
import './index.less'
import Header from '../../components/Header'
const { Footer, Sider, Content } = Layout;


const Admin = () => {
    // 如果用户没有登录就访问此页码 直接跳到登录模块
    console.log(memoryUntil.user);
    // 判断浏览器中是否用用户信息,以便于自动登录 如果没有重定向到登录界面
    if(Object.keys(memoryUntil.user).length === 0) {
        return <Redirect to="/login"></Redirect>
    }

    return (
        <div className='admin-box'>
            <Layout style={{width:"100%",height:"100%"}}>
                <Sider style={{color:'#fff'}}>Sider</Sider>
                <Layout>
                    <Header></Header>
                    <Content>Content</Content>
                    <Footer style={{textAlign:'center',backgroundColor:'#ccc',color:'#000'}}>推荐使用Goole浏览器,可以获得更佳的页面操作体验</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin