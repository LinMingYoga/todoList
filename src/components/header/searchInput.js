import React, { useState } from "react";
import { AutoComplete, Layout, Button, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import $http from '../../api'
import './searchInput.css'


const { Header } = Layout;

function SearchInput(props) {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const Tosearch = () => {
    window.open(`https://www.baidu.com/s?wd=${value}`)
  }
  const onSelect = data => {
    window.open(`https://www.baidu.com/s?wd=${data}`)
  }
  function getOptions(str) {
    return new Promise((resolve, reject) => {
      $http.getOptions(str).then(res => {
        resolve(res)
      })
    })
  }
  var timeout = null
  function myoptions(str){
    if (str === '') {
      return
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      getOptions(str).then(res => {
        let data = res.map(item => { return { value: item.q } })
        setOptions(!str ? [] : data);
      })
    }, 1000)
    
  }
  const inputChange = (data) => {
    setValue(data)
    console.log('data', value)
  }
  return (
    <Header>
      <div className="lm-search">
        <Row gutter={24} style={{width: '100%'}}>
          <Col className="gutter-row" span={8}>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="lm-input">
              <AutoComplete
                onSelect={onSelect}
                onSearch={myoptions}
                options={options}
                allowClear
                onChange={inputChange}
                value={value}
                placeholder="百度一下，你就知道！"
              />
              <Button style={{ marginLeft: '10px' }} onClick={Tosearch} type="primary" icon={<SearchOutlined />}>
                搜索
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            {/* <div className="lm-shichi">
              <div><span>蓟庭萧瑟故人稀， 何处登高且送归。</span><span>——《冬日归旧山》 · 李白</span></div>
            </div> */}
          </Col>
        </Row>
      </div>
    </Header>
  )
}
export default SearchInput