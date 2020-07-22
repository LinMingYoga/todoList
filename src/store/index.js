import { createStore } from 'redux' // 引入createStore方法
import reducer from './reducer'
const store = createStore(reducer) // 创建数据存储仓库
export default store // 把store仓库暴露出去