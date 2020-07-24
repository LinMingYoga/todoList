// import React, { Component } from 'react';
// import store from '../store'
// import {addItemAction, delItemAction } from "../store/actionCrearors";
// import ToDoListUI from '../components/todoListUI'

// class todoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//     this.storeChange = this.storeChange.bind(this);
//     store.subscribe(this.storeChange);
//   }

//   storeChange() {
//     this.setState(store.getState());
//   }
//   // componentWillMount() {
//   //   console.log(
//   //     "componentWillMount ----------------- 组件将要挂载到页面上的时刻"
//   //   );
//   // }
//   // componentDidMount() {
//   //   console.log("componentDidMount ------------------ 组件挂载完成的时刻");
//   // }
//   // shouldComponentUpdate() {
//   //   console.log("shouldComponentUpdate---------------");
//   //   return true;
//   // }
//   addBtn(val) {
//     // this.setState({
//     //   list: [...this.state.list, val]
//     // }, () => {
//     //   console.log(this.ul.querySelectorAll('li').length);
//     // })
//     console.log("val", val);
//     const action = addItemAction(val);
//     store.dispatch(action);
//   }

//   delItem(index) {
//     // console.log(index);
//     // let list = this.state.list;
//     // list.splice(index, 1);
//     // this.setState({
//     //   list: list,
//     // });
//     // const action = {
//     //   type: DEL_ITEM,
//     //   value: index,
//     // };
//     const action = delItemAction(index);
//     store.dispatch(action)
//     console.log('store', store.getState());
//   }
//   render() {
//     return (
//       <ToDoListUI
//         list={this.state.list}
//         inputVal={this.state.inputVal}
//         addBtn={this.addBtn.bind(this)}
//         delItem={this.delItem.bind(this)}
//       ></ToDoListUI>
//     );
//   }
// }
 
// export default todoList;

import React, {useState, useEffect} from 'react';
function Demo() {
  const [count, setCount] = useState(0);
  function handleClick() {
    return setCount(count + 1);
  }
  useEffect(() => {
    console.log('count', count);
  })
  return (
    <div>
      <span>YOU CLICK {count} TIMES</span>
      <br />
      <button onClick={handleClick}>click me! please!</button>
    </div>
  );
}

export default Demo