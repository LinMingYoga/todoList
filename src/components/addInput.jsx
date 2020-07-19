import React, { Component } from 'react';
import { Input, Button } from 'antd';
import store from '../store'
import '../assets/search.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(this.state);
  }

  /* inputChange(e) {
    console.log(e.target.value)
    this.setState({
      inputVal: e.target.value
    })
  } */
  
  // ref绑定
  inputChange() {
    this.setState({
      inputVal: this.input.value
    })
  }
  addItem() {
    if (this.state.inputVal === '') {
      alert('请输入服务名称');
      return
    }
    this.props.addHandle(this.state.inputVal)
    this.setState({
      inputVal: ''
    })
  }

  render() { 
    return (
      <div className="lm-search">
        <Input
          placeholder={this.state.placeholder}
          ref={(input) => {
            this.input = input
          }}
          type="text"
          value={this.state.inputVal}
          onChange={this.inputChange.bind(this)}
        />
        <Button type="primary" onClick={this.addItem.bind(this)}>
          点击添加
        </Button>
      </div>
    )
  }
}
 
export default SearchInput;