import React, {useState,useEffect} from 'react';
import { List } from 'antd';
import $http from '../../api/index'
import './news.css';

function Toutiao(props) {
  const [data, setData] = useState([])
  function getWangyi() {
    $http.getNews().then(res => {
      console.log('res', res)
      setData(res.data.list)
    })
  }

  useEffect(() => {
    getWangyi()
  }, [])

  return (
    <div className="sina">
      <List
        header={<div style={{ paddingLeft: '10px' }}>CCTV-新闻</div>}
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<div>{item.focus_date}</div>]} extra={<img width={200} alt={item.title} src={item.image} />}>
            <List.Item.Meta
              // img={<img width={272} alt="logo" src={item.imgSrc} />}
              title={<a href={item.url}>{item.title}</a>}
              description={item.brief}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Toutiao