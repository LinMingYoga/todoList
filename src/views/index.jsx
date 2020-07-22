import React, { Component } from 'react';
import logo from "../logo.svg";
import 'antd/dist/antd.css';
import "../App.css";
import { List } from 'antd';
import AddInput from '../components/addInput';
import store from '../store'
import {addItemAction, delItemAction } from "../store/actionCrearors";

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  storeChange() {
    this.setState(store.getState());
  }
  componentWillMount() {
    console.log(
      "componentWillMount ----------------- 组件将要挂载到页面上的时刻"
    );
  }
  componentDidMount() {
    console.log("componentDidMount ------------------ 组件挂载完成的时刻");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate---------------");
    return true;
  }
  addBtn(val) {
    // this.setState({
    //   list: [...this.state.list, val]
    // }, () => {
    //   console.log(this.ul.querySelectorAll('li').length);
    // })
    console.log("val", val);
    const action = addItemAction(val);
    store.dispatch(action);
  }

  delItem(index) {
    // console.log(index);
    // let list = this.state.list;
    // list.splice(index, 1);
    // this.setState({
    //   list: list,
    // });
    // const action = {
    //   type: DEL_ITEM,
    //   value: index,
    // };
    const action = delItemAction(index);
    store.dispatch(action)
    console.log('store', store.getState());
  }
  render() {
    return (
      <div className="App">
        {/* App-header */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AddInput addHandle={this.addBtn.bind(this)}></AddInput>
          <div style={{ width: "500px", marginTop: "10px" }}>
            {/* <ul ref={ul => {this.ul = ul}}>
            {this.state.list.map((item,index) => {
              return <ListItem key={index} index={item.id} delItem={this.delItem.bind(this, index)} content={item.type}></ListItem>
            })}
          </ul> */}
            <List
              className="lm-list"
              bordered
              dataSource={this.state.list}
              renderItem={(item, index) => (
                <List.Item onClick={this.delItem.bind(this, index)}>
                  {item.type}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default todoList;