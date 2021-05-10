import {Redirect} from 'react-router-dom'
import memoryUntil from '../../untils/memoryUntil.js'
import storeUntil from '../../untils/storeUntil'
const Admin = () => {
    // 如果用户没有登录就访问此页码 直接跳到登录模块
    console.log(memoryUntil.user);
    // 判断浏览器中是否用用户信息,以便于自动登录 如果没有重定向到登录界面
    if(Object.keys(memoryUntil.user).length === 0) {
        return <Redirect to="/login"></Redirect>
    }
    return (
        <div>
            Admin.....
            Hello {memoryUntil.user.username || storeUntil.getUser()}
        </div>
    )
}

export default Admin