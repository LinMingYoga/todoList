import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout } from 'antd';
import $http from '../api/index'
// --------------
import SearchInput from '../components/header/searchInput';
import SinaNews from '../components/news/sina';

const { Footer, Content } = Layout;


function ToDoList () {
  const [sinaNews, setSinaNews] = useState([])

  useEffect(() => {
    $http.getType().then(res => {
      console.log(res);
      if(res.code === 200) {
        setSinaNews(res.data.list.slice(0, 10))
      }
    })
  }, [])

  return (
    <div className="lm-page">
      <Layout>
        <SearchInput></SearchInput>
        <Content>
          <div className="w">
            <SinaNews data={sinaNews}></SinaNews>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default ToDoList;