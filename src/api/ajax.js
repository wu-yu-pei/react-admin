import axios from 'axios'
import {message} from 'antd'
export default function ajax(url,data,type="GET") {
    return new Promise((resolve,reject) => {
        let promise
        if(type === 'GET') {
            promise = axios.get(url,{params:data})
        }
        if(type === "POST") {
            promise = axios.post(url,data)
        }
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            message.error({
                content:"请求出错!",
            })
            console.log('axios'+err)
        })
    })
}