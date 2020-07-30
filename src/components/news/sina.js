import React from 'react';
import { List } from 'antd';
import './news.css';
import { ZhihuOutlined } from '@ant-design/icons';


function SinaNews(props) {
  console.log('props', props.data)
  return (
    <div className="sina">
      <List
        header={<div><ZhihuOutlined />乎热榜</div>}
        bordered
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href={item.link}>{item.title}</a>
          </List.Item>
        )}
      />
    </div>
  )
}

export default SinaNews