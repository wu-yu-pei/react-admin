// 接口请求模块
import ajax from './ajax'

// 登录接口
export const reqLogin = (username,password) => ajax('/login',{username,password},'POST')