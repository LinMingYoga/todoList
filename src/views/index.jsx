import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout } from 'antd';
import { Tabs } from "antd";

// import $http from '../api/index'
// --------------
import SearchInput from '../components/header/searchInput';
import SinaNews from '../components/news/sina';
import Toutiao from '../components/news/toutiao';
import Hotword from "../components/news/hotword";

const { Footer, Content } = Layout;
const { TabPane } = Tabs;

function ToDoList () {
  // const [sinaNews, setSinaNews] = useState([])

  useEffect(() => {
    // $http.getZhihu().then((res) => {
    //   console.log(res);
    //   if (res.code === 200) {
    //     setSinaNews(res.data.list);
    //   }
    // });
    // $http.getWangyi().then(res => {
    //   console.log('res', res);
    // })
  }, [])
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="lm-page">
      <Layout>
        <SearchInput></SearchInput>
        <Content>
          <div className="w">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="实时热门" key="1">
                <div className="lm-news">
                  <SinaNews></SinaNews>
                  <Toutiao></Toutiao>
                  <Hotword></Hotword>
                </div>
              </TabPane>
              <TabPane tab="网易新闻" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <Footer>@LinMing</Footer>
      </Layout>
    </div>
  );
}

export default ToDoList;