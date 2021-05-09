import axios from 'axios'
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
            console.log('axios'+err)
        })
    })
}