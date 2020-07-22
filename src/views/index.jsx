import React, { Component } from 'react';
import AddInput from '../components/addInput';
import ListItem from '../components/listItem';

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['躺式采耳','刮痧', '足浴']
    }
  }

  componentWillMount() {
    console.log("componentWillMount ----------------- 组件将要挂载到页面上的时刻");
  }
  componentDidMount() {
    console.log("componentDidMount ------------------ 组件挂载完成的时刻");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate---------------");
    return true
  }
  addBtn(val) {
    this.setState({
      list: [...this.state.list, val]
    }, () => {
      console.log(this.ul.querySelectorAll('li').length);
    })
  }
  delItem(index){
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    console.log('render---------组件挂载中');
    return ( 
      <div>
        <AddInput addHandle={this.addBtn.bind(this)}></AddInput>
        <div>
          <ul ref={ul => {this.ul = ul}}>
            {this.state.list.map((item,index) => {
              return <ListItem key={index} index={index} delItem={this.delItem.bind(this, index)} content={item}></ListItem>
            })}
          </ul>
        </div>
      </div>
     );
  }
}
 
export default todoList;