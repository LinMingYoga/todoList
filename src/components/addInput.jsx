import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
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
      <div>
        <input placeholder="请输入服务名称" ref={(input) => {this.input = input}}  type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
        <button onClick={this.addItem.bind(this)}>点击添加</button>
      </div>
     );
  }
}
 
export default SearchInput;