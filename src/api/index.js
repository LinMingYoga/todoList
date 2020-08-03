import Axios from 'axios'

const axios = Axios.create()
// const baseURL = window.location.origin // 自适应地址
let baseURL = 'https://v1.alapi.cn/api'
axios.defaults.baseURL = baseURL

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加一个拦截器
// config:可以进行请求头的位置，通过headers属性
// 自动调用

axios.interceptors.request.use(
  function (config) {
    // 1获取token
    var token = sessionStorage.getItem('token')
    // console.log('token', token)
    if (token) {
      // 写入请求头
      config.headers['token'] = token
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

// 获取列表
function getZhihu() {
  return axios.post(`tophub/get`, { type: 'zhihu'}).then((res) => {
    return res.data
  })
}
function getWangyi() {
  return axios.get(`/new/toutiao?start=1&num=50`).then((res) => {
    return res.data
  })
}
function getShichi() {
  return axios.post(`/shici`, { type: 'all' }).then((res) => {
    return res.data
  })
}
function getHotWord() {
  return axios.get(`/tophub/wiki`).then((res) => {
    return res.data
  })
}
function getBg() {
  return axios.post(`/bing`, { format: 'json' }).then((res) => {
    return res.data
  })
}

export default {
  getZhihu,
  getWangyi,
  getShichi,
  getHotWord,
  getBg
}