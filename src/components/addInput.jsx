import React, { Component } from 'react';
import { Input, Button, message } from "antd";
import '../assets/search.css';
import store from '../store'
import { changeInputAction } from "../store/actionCrearors";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  inputChange(e) {
    const action = changeInputAction(e.target.value);
    // const action = {
    //   type: INPUT_CHANGE,
    //   value: e.target.value,
    // };
    store.dispatch(action)
  }
  
  // ref绑定
  // inputChange() {
  //   this.setState({
  //     inputVal: this.input.value
  //   })
  // }
  addItem() {
    if (this.state.inputVal === '') {
      message.error("请输入服务名称");
      return
    }
    this.props.addHandle(this.state.inputVal)
    this.setState({
      inputVal: ''
    })
  }

  storeChange () {
    this.setState(store.getState())
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