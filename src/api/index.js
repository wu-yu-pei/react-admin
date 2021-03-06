// 接口请求模块
import ajax from './ajax'
import jsonp from 'jsonp'
// import axios from 'axios'
const BASE =  "http://120.55.193.14:5000"

// 登录接口
export const reqLogin = (username,password) => ajax(BASE+'/login',{username,password},'POST')

// 查询一级,二级分类列表
export const reqCategory = (parentId) => ajax(BASE+'/manage/category/list',{parentId},"GET")

// 添加分类接口
export const reqAddCategory = (parentId,categoryName) => ajax(BASE+'/manage/category/add',{parentId,categoryName},"POST")

// 修改分类接口
export const reqUpdate = (categoryId,categoryName) => ajax(BASE+'/manage/category/update',{categoryId,categoryName},"POST")

// 商品管理接口
export const reqProduct = (pageNum,pageSize) => ajax(BASE+'/manage/product/list',{pageNum,pageSize},"GET")

// 搜索商品接口
export const reqSearchProduct = (pageNum,pageSize,Type,Value) => ajax(BASE+'/manage/product/search',{pageNum,pageSize,[Type]:Value},'GET')

//根据分类id获取分类
export const reqInfo = (categoryId) => ajax(BASE+'/manage/category/info',{categoryId})
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