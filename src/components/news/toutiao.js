import React, {useState,useEffect} from 'react';
import { List, Radio  } from 'antd';
import $http from '../../api/index'
import './news.css';

function Toutiao(props) {
  // state
  const [data, setData] = useState([])
  function getWangyi(keyword) {
    $http.getNews(keyword).then(res => {
      setData(res.data.list)
    })
  }
  // 生命周期
  useEffect(() => {
    getWangyi('news')
  }, [])
  const items = [
    {
      label:'新闻',
      value: 'news'
    },
    {
      label:'国内',
      value: 'china'
    },
    {
      label:'国际',
      value: 'world'
    },
    {
      label:'社会',
      value: 'society'
    },
    {
      label:'法治',
      value: 'law'
    },
    {
      label:'文娱',
      value: 'ent'
    },
    {
      label:'科技',
      value: 'tech'
    },
    {
      label:'生活',
      value: 'life'
    },
  ];
  // methods
  /* start 函数防抖 */
  var timeout = null
  function selcetNews(e) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      console.log('radio3 checked', e.target.value)
      getWangyi(e.target.value)
    }, 1000);
  }
  /* end 函数防抖 */
  
  const tabs = items.map((item, index) => {
    return <Radio.Button value={item.value} key={index}>{item.label}</Radio.Button>
  })
  return (
    <div className="sina">
      <div className="lm-tabs">
        <Radio.Group onChange={selcetNews} buttonStyle = "solid"
        defaultValue = "news"
        size = "large" >
          {tabs}
        </Radio.Group>
      </div>
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