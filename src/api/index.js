import Axios from 'axios'

const axios = Axios.create()
// const baseURL = window.location.origin // 自适应地址
let baseURL = 'https://www.fastmock.site/mock/80066cac845e08479e98cdcaea201d56/lm-axios'
axios.defaults.baseURL = baseURL

axios.defaults.headers.post['Content-Type'] = 'application/json'

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
function getType() {
  return axios.get('/getType').then((res) => {
    return res
  })
}

export default {
  getType
}