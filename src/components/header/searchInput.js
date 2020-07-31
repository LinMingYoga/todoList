import React, {useEffect,useState} from "react";
import { Input, Layout, Button, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import $http from '../../api'
import './searchInput.css'


const { Header } = Layout;

function SearchInput(props) {
  const [poetry, setPoetry] = useState('')
  const [poetryTitle, setPoetryTitle] = useState('')
  const [poet, setPoet] = useState('')

  function getPoetry() {
    $http.getShichi().then(res => {
      console.log('res', res)
      if (res.code === 200) {
        setPoet(res.data.author)
        setPoetry(res.data.content)
        setPoetryTitle(res.data.origin)
      }
    })
  }

  useEffect(()=>{
    getPoetry()
  }, [])
  return (
    <Header>
      <div className="lm-search">
        <Row gutter={24} style={{width: '100%'}}>
          <Col className="gutter-row" span={8}>
            <div className="lm-shichi">
              <div><span>{poetry}</span>——《{poetryTitle}》 · {poet}</div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="lm-input">
              <Input placeholder="百度一下，你就知道！" />
              <Button style={{marginLeft: '10px'}} type="primary" icon={<SearchOutlined />}>
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