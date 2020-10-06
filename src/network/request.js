import axios from 'axios'
axios.defaults.withCredentials = true;

function request(config){
    const instance = axios.create({
        baseURL:'http://47.97.214.211/mislab',
        timeout:10000,
        headers:{
            'Content-Type':'application/json'
        }
    })
    return instance(config)
}

//请求工作室项目成果
export function projects() {
    return request({
        method: "get",
        url: "/projects"
    })
}

//请求历届学长学姐就业信息
export function personnel() {
    return request({
        method: "get",
        url: "/personnel"
    })
}

export function counts() {
    return request({
        method: "get",
        url: "/counts"
    })
}