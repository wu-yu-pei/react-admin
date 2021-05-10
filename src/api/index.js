// 接口请求模块
import ajax from './ajax'
import jsonp from 'jsonp'
// 登录接口
export const reqLogin = (username,password) => ajax('/login',{username,password},'POST')
// 天气接口
export const reqWeather = () => {
    return new Promise((resolve,reject) => {
        const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=810017&key=aa6e9c082560a8ce062062039400e365'
        jsonp(url,{},(err,data) => {
            if(err) {
                console.log(err);
            }else {
                resolve(data)
            }
        })
    })
}