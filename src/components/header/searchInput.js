import React from "react";
import { Input, Layout, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchInput.css'

const { Header } = Layout;
function SearchInput(props) {
  return (
    <Header>
      <div className="lm-search">
        <div>
          <Input placeholder="Basic usage" />
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </div>
      </div>
    </Header>
  )
}
export default SearchInput