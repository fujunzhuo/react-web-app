import axios from 'axios'
import {Toast} from 'antd-mobile'
import {api} from './api'
import qs from 'qs'

//"proxy": "http://www.jiaoyukou.com"

axios.defaults.baseURL = api.paths.host;
axios.defaults.headers.post['Content-Type']= api.realHeader.headers['Content-Type'];


//拦截请求
axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 0)
    config.data = qs.stringify(config.data)
    console.log("开始请求 config:",config)
    return config
},function (error) {
    Toast.hide()
    console.log("请求错误 error:",error)
    return error
})


//拦截响应
axios.interceptors.response.use(function (config) {
    Toast.hide()
    console.log("响应成功 config:",config)
    return config
}, function (error) {
    Toast.hide()
    console.log("响应错误 error:",error)
    return error;
})




