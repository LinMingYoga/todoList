import React, {useState,useEffect} from 'react';
import { List } from 'antd';
import $http from '../../api/index'
import './news.css';

function Toutiao(props) {
  const [data, setData] = useState([])
  function getWangyi() {
    $http.getWangyi().then(res => {
      console.log('res', res)
      if (res.code === 200) {
        setData(res.data)
      }
    })
  }

  useEffect(() => {
    getWangyi()
  }, [])

  return (
    <div className = "sina" >
      < List
      header = {<div>网易新闻头条</div>}
        bordered
        dataSource = {data}
        renderItem = {
          item => (
          <div>
            <List.Item> 
              {/* eslint-disable-next-line react/jsx-no-target-blank */} 
              <a target = "_blank" href = {item.m_url}>
                {item.title}
              </a>
            </List.Item >
            </div>
          )
        }
        />
    </div>
  )
}

export default Toutiao