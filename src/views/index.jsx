import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "../App.css";
import "../assets/rest.css";
import { Layout } from 'antd'
import { Tabs } from "antd";
// 引入API
import $http from '../api/index'
// 引入组件
import SearchInput from '../components/header/searchInput';
// import SinaNews from '../components/news/sina';
import Toutiao from '../components/news/toutiao';
import NavLink from '../components/navigation/index';
// import Hotword from "../components/news/hotword";

const { Content } = Layout;
const { TabPane } = Tabs;


function ToDoList () {

  const [backgroundImg, setBackgroundImg] = useState('')
  const [bgStyle, setBgStyle] = useState({})
  // const [poetry, setPoetry] = useState('')
  // const [poetryTitle, setPoetryTitle] = useState('')
  // const [poet, setPoet] = useState('')

  function getPoetry() {
    $http.getShichi().then((res) => {
      console.log('res', res)
      if (res.code === 200) {
        // setPoet(res.data.author)
        // setPoetry(res.data.content)
        // setPoetryTitle(res.data.origin)
      }
    })
  }
  function getBg() {
    return new Promise((resolve, reject) => {
      $http.getBg().then((res) => {
        resolve(res.data.url)
      });
    })
  }
  useEffect(() => {
    getPoetry();
    getBg().then(res => {
      setBackgroundImg(res);
      setBgStyle({
        backgroundImage: `url('${backgroundImg}')`,
      })
  })
  }, [backgroundImg])
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="lm-page">
      <Layout>
        <SearchInput></SearchInput>
        <Content style={bgStyle}>
          <div className="w">
            <div className="lm-main spczCenter">
              <Tabs className="lm-tabs" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="实时热门" key="1">
                  <div className="lm-news">
                    {/* <SinaNews></SinaNews> */}
                    <Toutiao></Toutiao>
                    {/* <Hotword></Hotword> */}
                  </div>
                </TabPane>
                <TabPane tab="常用" key="2">
                  <NavLink></NavLink>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Content>
        {/* <Footer>@LinMing</Footer> */}
      </Layout>
    </div>
  )
}

export default ToDoList;