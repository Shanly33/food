import axios from 'axios'

//配置axios访问的根路径
axios.defaults.baseURL = "http://localhost:8888"

//请求数据的方法
export const getFoods = (params)=>{
    return axios.get('/food',params)
}

